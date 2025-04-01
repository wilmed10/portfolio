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
                        <a href="./documents/IntershipCertificate.pdf" target="_blank" rel="noopener noreferrer"><h3>Service Engineer</h3></a>
                        <p>Controling S.A.S ~ <span>4 Months</span></p>
                        <div className="skills">
                            <div className='skill'>
                                <p>Fault diagnosis</p>
                            </div>

                            <div className='skill'>
                                <p>Network configuration</p>
                            </div>

                            <div className='skill'>
                                <p>Equipment integration</p>
                            </div>
                        </div>
                    </div>

                    <div className="job-description">
                        <ul>
                            <li>Implementation and optimization of communication networks.</li>
                            <li>Configuration of devices such as switches, GPS, and meters.</li>
                            <li>Modernization of infrastructure through adjustments in controllers and engineering plans.</li>
                            <li>Ensuring system stability and proper operation.</li>
                        </ul>
                    </div>

                </div>

                <div className="job">

                    <div className='generals'>
                        <a href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002091447" target="_blank" rel="noopener noreferrer"><h3>Researcher and Developer</h3></a>
                        <p>University ~ <span>2 Years</span></p>
                        <div className="skills">
                            <div className='skill'>
                                <p>Software Development</p>
                            </div>

                            <div className='skill'>
                                <p>Computer Vision & AI</p>
                            </div>

                            <div className='skill'>
                                <p>Embedded Systems Integration</p>
                            </div>
                        </div>
                    </div>

                    <div className="job-description">
                        <ul>
                            <li>Designed and implemented solutions for robotics, automation, and agricultural monitoring with real-time data processing.</li>
                            <li>Applied machine learning models to enhance detection and decision-making.</li>
                            <li>Developed systems for seamless communication between software and embedded devices.</li>
                            <li>Built and integrated user interfaces for real-time data visualization and control.</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}
