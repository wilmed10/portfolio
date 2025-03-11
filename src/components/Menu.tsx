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
      root.style.setProperty('--dark-gradient', '#06090e');
      root.style.setProperty('--text-color', 'white');
    } else if (theme === 'light') {
      /* por asignar... */
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--primary', '#000000');
      root.style.setProperty('--secondary', '#f0f0f0');
      root.style.setProperty('--tertiary', '#d0d0d0');
      root.style.setProperty('--quaternary', '#a0a0a0');
      root.style.setProperty('--dark-gradient', '#0a0a0a');
      root.style.setProperty('--text-color', '#000000');
    }
  };

  console.log(scrolled);
  console.log(activeSection);

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
              <li><a href="#projects" onClick={(e) => handleMenuClick(e, 'projects')} className={activeSection === 'projects' ? 'active' : ''}>Proyectos</a></li>
              <li><a href="#experience" onClick={(e) => handleMenuClick(e, 'experience')} className={activeSection === 'experience' ? 'active' : ''}>Experiencia</a></li>
              <li><a href="#aboutMe" onClick={(e) => handleMenuClick(e, 'aboutMe')} className={activeSection === 'aboutMe' ? 'active' : ''}>Sobre mí</a></li>
              <li><a href="#contact" onClick={(e) => handleMenuClick(e, 'contact')} className={activeSection === 'contact' ? 'active' : ''}>Contacto</a></li>
            </ul>
          </nav>
          <div className="theme">
            <button onClick={() => changeTheme('dark')}>
              <img src="../img/luna.png" alt="theme icon" />
            </button>
            <button onClick={() => changeTheme('light')}>
              <img src="../img/sol.png" alt="theme icon" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}