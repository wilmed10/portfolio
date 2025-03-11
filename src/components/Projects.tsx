import './Projects.css';

export default function Projects() {
  return (
    <section className='project-container'>
        <div className="title">
            <div className='photo'>
                <img src="../img/dev2-white.png" alt="Projects" />
            </div>
            <h2>Proyectos</h2>
        </div>

        <div className='projects'>

            <div className="project">
                <div className='photo'>
                    <img src="../img/project-1.png" alt="project 1" />
                </div>

                <div className="description">
                    <div>
                        <h3>Cotizador de criptomonedas</h3>

                        <div className="techs">
                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/react-logo.png" alt="react logo" /></div>
                                <p>React</p>
                            </div>

                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/typescrypt-logo.png" alt="typescript logo" /></div>
                                <p>Typescrypt</p>
                            </div>

                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/tailwindcss-logo.png" alt="tailwindcss logo" /></div>
                                <p>Tailwind CSS</p>
                            </div>
                        </div>
                    </div>

                    <p>Este cotizador obtiene precios de criptomonedas en distintas monedas mediante una API. Utiliza Zustand para la gestión de estado y Zod para validar las respuestas, garantizando datos precisos y consistentes.</p>

                    <div className="pj-buttons">
                        <a href="#" className="pj-btn">
                            <img src="../img/linkedin-white.png" alt="linkedin logo" />
                            <span>Visualizar</span>
                        </a>
                        <a href="#" className="pj-btn">
                            <img src="../img/github-white.png" alt="github logo" />
                            <span>Repositorio</span>
                        </a>
                    </div>

                </div>
            </div>

            <div className="project midle">
                <div className='photo'>
                    <img src="../img/project-1.png" alt="project 1" />
                </div>

                <div className="description">
                    <div>
                        <h3>Cotizador de criptomonedas</h3>

                        <div className="techs">
                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/react-logo.png" alt="react logo" /></div>
                                <p>React</p>
                            </div>

                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/typescrypt-logo.png" alt="typescript logo" /></div>
                                <p>Typescrypt</p>
                            </div>

                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/tailwindcss-logo.png" alt="tailwindcss logo" /></div>
                                <p>Tailwind CSS</p>
                            </div>
                        </div>
                    </div>

                    <p>Este cotizador obtiene precios de criptomonedas en distintas monedas mediante una API. Utiliza Zustand para la gestión de estado y Zod para validar las respuestas, garantizando datos precisos y consistentes.</p>

                    <div className="pj-buttons">
                        <a href="#" className="pj-btn">
                            <img src="../img/linkedin-white.png" alt="linkedin logo" />
                            <span>Visualizar</span>
                        </a>
                        <a href="#" className="pj-btn">
                            <img src="../img/github-white.png" alt="github logo" />
                            <span>Repositorio</span>
                        </a>
                    </div>

                </div>
            </div>

            <div className="project">
                <div className='photo'>
                    <img src="../img/project-1.png" alt="project 1" />
                </div>

                <div className="description">
                    <div>
                        <h3>Cotizador de criptomonedas</h3>

                        <div className="techs">
                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/react-logo.png" alt="react logo" /></div>
                                <p>React</p>
                            </div>

                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/typescrypt-logo.png" alt="typescript logo" /></div>
                                <p>Typescrypt</p>
                            </div>

                            <div className='tech'>
                                <div className="photo-tech"><img src="../img/tailwindcss-logo.png" alt="tailwindcss logo" /></div>
                                <p>Tailwind CSS</p>
                            </div>
                        </div>
                    </div>

                    <p>Este cotizador obtiene precios de criptomonedas en distintas monedas mediante una API. Utiliza Zustand para la gestión de estado y Zod para validar las respuestas, garantizando datos precisos y consistentes.</p>

                    <div className="pj-buttons">
                        <a href="#" className="pj-btn">
                            <img src="../img/linkedin-white.png" alt="linkedin logo" />
                            <span>Visualizar</span>
                        </a>
                        <a href="#" className="pj-btn">
                            <img src="../img/github-white.png" alt="github logo" />
                            <span>Repositorio</span>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}
