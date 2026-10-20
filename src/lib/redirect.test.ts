import { describe, expect, it } from "vitest";
import nextConfig from "../../next.config";
import { links } from "./site";

describe("next.config redirects", () => {
  it("sends the previously published CV URL to the current web CV", async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects).toContainEqual({
      source: "/documents/CV%20Software%20Engineer%20OCT2027.pdf",
      destination: links.resume,
      permanent: true,
    });
  });

  it("redirects / to /en without making it permanent", async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects).toContainEqual({
      source: "/",
      destination: "/en",
      permanent: false,
    });
  });
});
