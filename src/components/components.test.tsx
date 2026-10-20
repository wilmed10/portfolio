import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Header } from "./Header";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Reveal } from "./Reveal";
import { ScreenshotFrame } from "./ScreenshotFrame";
import { Section } from "./Section";

afterEach(cleanup);

// jsdom has no PointerEvent, so `pointerType` would never reach the handlers.
class TestPointerEvent extends MouseEvent {
  pointerType: string;

  constructor(type: string, init: PointerEventInit = {}) {
    super(type, init);
    this.pointerType = init.pointerType ?? "";
  }
}
beforeEach(() => {
  vi.stubGlobal("PointerEvent", TestPointerEvent);
});

describe("LanguageSwitcher", () => {
  it("links to the same path in the other language", () => {
    render(<LanguageSwitcher current="en" path="/work/bed" />);

    expect(screen.getByRole("link", { name: "ES" }).getAttribute("href")).toBe("/es/work/bed");
  });

  it("marks the current language", () => {
    render(<LanguageSwitcher current="en" path="" />);

    expect(screen.getByRole("link", { name: "EN" }).getAttribute("aria-current")).toBe("true");
    expect(screen.getByRole("link", { name: "ES" }).getAttribute("aria-current")).toBeNull();
  });
});

describe("Reveal", () => {
  it("renders its children in the server HTML without hiding them", () => {
    const html = renderToString(
      <Reveal>
        <p>visible without JS</p>
      </Reveal>,
    );

    expect(html).toContain("visible without JS");
    expect(html).not.toMatch(/opacity|hidden|data-reveal/);
  });
});

describe("Reveal near the fold", () => {
  function mountAt(top: number) {
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe() {}
        disconnect() {}
      },
    );
    vi.stubGlobal("innerHeight", 800);
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({ top } as DOMRect);

    const { container } = render(
      <Reveal>
        <p>content</p>
      </Reveal>,
    );
    return container.firstElementChild as HTMLElement;
  }

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("does not hide content within one and a half screens of the top", () => {
    expect(mountAt(1000).dataset.reveal).toBeUndefined();
  });

  it("hides content far below the fold until it scrolls into view", () => {
    expect(mountAt(2500).dataset.reveal).toBe("hidden");
  });
});

describe("ScreenshotFrame", () => {
  it("renders the image with its alt text", () => {
    render(<ScreenshotFrame src="/img/work/bed.webp" alt="bed admin panel" />);

    expect(screen.getByAltText("bed admin panel")).toBeTruthy();
  });
});

describe("ScreenshotFrame scroll preview", () => {
  const props = {
    src: "/img/work/bed.webp",
    alt: "bed",
    fullSrc: "/img/work/bed-full.webp",
    fullRatio: 4.2,
  };

  it("does not download the full-length image until the pointer enters", () => {
    const { container } = render(<ScreenshotFrame {...props} />);

    expect(container.querySelector('img[src*="bed-full"]')).toBeNull();
  });

  it("mounts the full-length image on pointer enter, with a duration that grows with its length", () => {
    const { container } = render(<ScreenshotFrame {...props} />);
    const preview = container.querySelector(".scroll-preview") as HTMLElement;

    fireEvent.pointerEnter(preview, { pointerType: "mouse" });

    expect(container.querySelector('img[src*="bed-full"]')).not.toBeNull();
    expect(preview.style.getPropertyValue("--scroll-duration")).toBe("6.3s");
  });

  it("ignores touch pointers so taps do not download a 300 KB image for nothing", () => {
    const { container } = render(<ScreenshotFrame {...props} />);

    fireEvent.pointerEnter(container.querySelector(".scroll-preview") as HTMLElement, {
      pointerType: "touch",
    });

    expect(container.querySelector('img[src*="bed-full"]')).toBeNull();
  });

  it("has no preview layer without a full-length image", () => {
    const { container } = render(<ScreenshotFrame src={props.src} alt={props.alt} />);

    expect(container.querySelector(".scroll-preview")).toBeNull();
  });
});

describe("Section", () => {
  it("renders its label and content", () => {
    render(
      <Section id="work" label="Work">
        <p>content</p>
      </Section>,
    );

    expect(screen.getByText("Work")).toBeTruthy();
    expect(screen.getByText("content")).toBeTruthy();
  });
});

describe("Header brand", () => {
  it("drops the surname on small screens so the sticky header stays one line", () => {
    render(<Header lang="es" path="" />);

    const surname = screen.getByText("Arrieta");
    expect(surname.className).toContain("hidden");
    expect(surname.className).toContain("sm:inline");
    expect(screen.getByRole("link", { name: /Wilson Medina/ }).className).toContain("whitespace-nowrap");
  });
});

describe("Header", () => {
  it("links the nav to home anchors in the current language", () => {
    render(<Header lang="es" path="/work/bed" />);

    expect(screen.getByRole("link", { name: "Trabajo" }).getAttribute("href")).toBe("/es#work");
    expect(screen.getByRole("link", { name: "Contacto" }).getAttribute("href")).toBe("/es#contact");
  });
});
