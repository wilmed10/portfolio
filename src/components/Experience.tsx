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
                        <h3>Service Engineer</h3>
                        <p>Controling S.A.S ~ 4 Months</p>
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

            </div>
        </section>
    )
}
