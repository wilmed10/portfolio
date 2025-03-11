import './Experience.css'

export default function Experience() {
  return (
    <section>
        <div className="title">
            <div className='photo'>
                <img src="../img/jobs-white.png" alt="Projects" />
            </div>
            <h2>Experiencia</h2>
        </div>

        <div className='jobs'>

            <div className="job">

                <div className='generals'>
                    <h3>Ingeniero de servicios</h3>
                    <p>Controling S.A.S ~ 4 Meses</p>
                    <div className="skills">
                        <div className='skill'>
                            <p>Diagnostico de fallos</p>
                        </div>

                        <div className='skill'>
                            <p>Configuración de redes</p>
                        </div>

                        <div className='skill'>
                            <p>Integración de equipos</p>
                        </div>
                    </div>
                </div>

                <div className="job-description">
                    <p>Responsable de la implementación y optimización de redes de comunicación. Encargado de la puesta en servicio y configuración de equipos como switches, GPS y medidores. Participé en la modernización de infraestructuras de red mediante la modificación de controladores y ajustes en planos de ingeniería, garantizando el correcto funcionamiento y estabilidad del sistema.</p>
                </div>

            </div>

        </div>
    </section>
  )
}
