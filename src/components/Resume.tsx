import './Resume.css';

export default function Resume() {
  return (
    <section>
        <div className="resume">
            <div className="photo up">
                <img src="./img/foto.jpg" alt="profile photo" />
            </div>

            <div className="intro">
                
                <div className="title">
                    <p>Hi ! I'm</p>
                    <h1>Wilson Medina Arrieta</h1>
                </div>

                <p><span>Mechatronics Engineer</span> focused on software development. Passionate about creating interactive, optimized, and scalable interfaces, with efficient state management, data consumption, and an enhanced user experience.</p>

                <div className="buttons">
                    <a href="https://linkedin.com/in/wilson-medina-arrieta-492792287" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src="./img/linkedin-white.png" alt="linkedin logo" />
                        <span>Linkedin</span>
                    </a>
                    <a href="https://github.com/wilmed10" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src="./img/github-white.png" alt="github logo" />
                        <span>Github</span>
                    </a>
                    <a href="./documents/CV Wilson Medina WebDev ENG.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src="./img/descargar-white.png" alt="download icon" />
                        <span>Resume</span>
                    </a>
                </div>
            </div>

            <div className="photo right">
                <img src="./img/foto.jpg" alt="profile photo" />
            </div>
        </div>
    </section>
  )
}
