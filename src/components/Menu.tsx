import { useEffect, useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez para establecer el estado inicial
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const changeTheme = (theme: string) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--background', '#182339');
      root.style.setProperty('--primary', '#f1b24a');
      root.style.setProperty('--secondary', '#232741');
      root.style.setProperty('--tertiary', '#0C0D16');
      root.style.setProperty('--quaternary', '#ec9a12');
      root.style.setProperty('--gradient', '#06090e');
      root.style.setProperty('--text-color', '#ffffff');
    } else if (theme === 'light') {
      /* to asign... */
      root.style.setProperty('--background', '#fff');/* #f8f9fa */
      root.style.setProperty('--primary', '#f1b24a');
      root.style.setProperty('--secondary', '#e3e6ea');
      root.style.setProperty('--tertiary', '#c0c7d1');
      root.style.setProperty('--quaternary', '#ffcc00');
      root.style.setProperty('--gradient', '#fff');/* #e6f2ff, #0056b3 */
      root.style.setProperty('--text-color', '#000000');
    }
  };

  console.log(scrolled);
  console.log(activeSection);

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    changeTheme(theme);
  }, [theme]);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
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
              <li><a href="#projects" onClick={(e) => handleMenuClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
              <li><a href="#experience" onClick={(e) => handleMenuClick(e, 'experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
              <li><a href="#aboutMe" onClick={(e) => handleMenuClick(e, 'aboutMe')} className={activeSection === 'aboutMe' ? 'active' : ''}>About me</a></li>
              <li><a href="#contact" onClick={(e) => handleMenuClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </nav>
          <div className="theme-switcher">

            <label className="switch">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
              <span className="slider">
                <div /* src="./img/sol.png" alt="Sun Icon"  */className="theme-icon sun" />
                <div /* src="./img/luna.png" alt="Moon Icon" */ className="theme-icon moon" />
              </span>
            </label>

          </div>
        </div>
      </div>
    </header>
  );
}