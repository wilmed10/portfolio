import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";
import "./Menu.css";

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme, activeSection, setActiveSection } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    if (e.currentTarget.href.startsWith("mailto:")) {
      return;
    }
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "experience", "aboutMe", "contact"];
      let currentSection = "";
  
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
          }
        }
      });
  
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveSection]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  console.log(activeSection)

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="logo">
          <svg width="120" height="50" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
            <text
              x="50%"
              y="50%"
              fontSize="24"
              fontFamily="Courier New, monospace"
              fill="#ffb347"
              textAnchor="middle"
              alignmentBaseline="middle"
              className="svg-logo"
            >
              &lt;WMA/&gt;
            </text>
          </svg>
        </div>
        <div className="menu-theme">
          <nav className="menu">
            <ul>
              <li>
                <a href="#projects"
                  onClick={(e) => handleMenuClick(e, "projects")}
                  className={activeSection === "projects" ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience"
                  onClick={(e) => handleMenuClick(e, "experience")}
                  className={activeSection === "experience" ? "active" : ""}
                >
                  Experience
                </a>
              </li>
              <li>
                <a href="#aboutMe"
                  onClick={(e) => handleMenuClick(e, "aboutMe")}
                  className={activeSection === "aboutMe" ? "active" : ""}
                >
                  About me
                </a>
              </li>
              <li>
                <a href="mailto:wilsonmedina8d@gmail.com"
                  onClick={(e) => handleMenuClick(e, "contact")}
                  className={activeSection === "contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="theme-switcher">
            <label className="switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <span className="slider">
                <div className="theme-icon sun" />
                <div className="theme-icon moon" />
              </span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
  