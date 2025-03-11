import './Resume.css';

export default function Resume() {
  return (
    <section>
        <div className="resume">
            <div className="intro">
                
                <div className="title">
                    <p>Hola ! Soy</p>
                    <h1>Wilson Medina Arrieta</h1>
                </div>

                <p><span>Ingeniero Mecatrónico</span> enfocado en desarrollo de software. Apasionado por crear interfaces interactivas, optimizadas y escalables, con manejo eficiente del estado, consumo de datos y una experiencia de usuario mejorada.</p>

                <div className="buttons">
                    <a href="https://linkedin.com/in/wilson-medina-arrieta-492792287" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src="../img/linkedin-white.png" alt="linkedin logo" />
                        <span>Linkedin</span>
                    </a>
                    <a href="https://github.com/wilmed10" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src="../img/github-white.png" alt="github logo" />
                        <span>Github</span>
                    </a>
                    <a href="/public/documents/CV Wilson Medina WebDev ENG.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src="../img/descargar-white.png" alt="download icon" />
                        <span>Descargar CV</span>
                    </a>
                </div>
            </div>

            <div className="photo">
                <img src="../img/foto.jpg" alt="profile photo" />
            </div>
        </div>
    </section>
  )
}
