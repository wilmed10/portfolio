import { useStore } from '../store/useStore';
import './Experience.css'

export default function Experience() {

    const { theme } = useStore();

    return (
        <section>
            <div className="title">
                <div className='photo'>
                    <img src={theme === 'dark' ?'./img/jobs-white.png':'./img/jobs-black.png'} alt="Projects" />
                </div>
                <h2>EXPERIENCE</h2>
            </div>

            <div className='jobs'>

                <div className="job">
                    <div className='generals'>
                        <a href="https://mooba.co" target="_blank" rel="noopener noreferrer">
                            <h3>Full Stack Developer</h3>
                        </a>
                        <p>Mooba Agencia ~ <span>Since May 2025 (Ongoing)</span></p>
                    </div>

                    <div className="job-description">
                        <ul>
                            <li>Full stack development with Next.js, Node.js, and PostgreSQL, delivering and consuming REST APIs.</li>
                            <li>Backend implementation including database modeling, PL/pgSQL logic, and authentication flows using Supabase (PostgreSQL).</li>
                            <li>Frontend development with Next.js, focused on SSR, SEO, and performance, plus CMS integration (Strapi, WordPress).</li>
                            <li>Participation in Docker-based deployments, production bug fixing, and basic CI/CD workflows.</li>
                        </ul>
                    </div>

                </div>

                <div className="job">

                    <div className='generals'>
                        <a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002091447" target="_blank" rel="noopener noreferrer"><h3>Researcher and Developer</h3></a>
                        <p>Universidad Autónoma del Caribe ~ <span>2 Years</span></p>
                    </div>

                    <div className="job-description">
                        <ul>
                            <li>Developed software tools for robotics and monitoring systems, integrating hardware with custom applications.</li>
                            <li>Applied computer vision and machine learning techniques for object detection and analysis.</li>
                            <li>Built frontend interfaces enabling seamless communication between hardware and software components.</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}
