import './AboutMe.css'

export default function AboutMe() {
  return (
    <section>
        <div className="title">
            <div className='photo'>
                <img src="../img/perfil-white.png" alt="Projects" />
            </div>
            <h2>Sobre mí</h2>
        </div>

        <div className="aboutMe-description">
            <p>Soy <span>ingeniero mecatrónico</span> con enfoque en desarrollo web, especializado en la creación de aplicaciones interactivas, optimización de interfaces y consumo de API’s.</p>

            <p>Apasionado por la programación, con <span>más de 5 años</span> de aprendizaje en lógica de programación a través de Arduino, Java, Python y JavaScript.</p>

            <p>Siempre busco mejorar mis habilidades, aplicar buenas prácticas y desarrollar soluciones eficientes y escalables. <span>Estoy abierto a nuevas oportunidades y colaboraciones</span>, así que no dudes en contactarme para futuros proyectos.</p>
        </div>

    </section>
  )
}
