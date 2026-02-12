import { useStore } from '../store/useStore';
import './Resume.css';

export default function Resume() {

    const { theme } = useStore();

    return (
        <section>
            <div className="resume">
                <div className="photo up">
                    <img src="./img/photo-compressed.jpg" alt="profile photo" />
                </div>

                <div className="intro">
                    <div className="title">
                        <p>Hi! I'm</p>
                        <h1>Wilson Medina Arrieta</h1>
                    </div>

                    <p>
                        <span>Full Stack Developer | Backend-oriented </span><br/>
                        Building production-ready web systems with Go, PostgreSQL, and Next.js.
                    </p>

                    <div className="buttons">
                        <a href="./documents/CV FullStack Wilson Medina FEB2026v3.pdf" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src={theme === 'dark' ?'./img/descargar-white.png':'./img/descargar-black.png'} alt="download icon" />
                        <span>Resume</span>
                        </a>
                        <a href="https://linkedin.com/in/wilson-medina-arrieta-492792287" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src={theme === 'dark' ?'./img/linkedin-white.png':'./img/linkedin-black.png'} alt="linkedin logo"/>
                        <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/wilmed10" target="_blank" rel="noopener noreferrer" className="btn">
                        <img src={theme === 'dark' ?'./img/github-white.png':'./img/github-black.png'} alt="github logo" />
                        <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <div className="photo right">
                    <img src="./img/photo-compressed.jpg" alt="profile photo" />
                </div>
            </div>
        </section>
    )
}