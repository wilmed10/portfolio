import { useStore } from '../store/useStore';
import './Projects.css';

export default function Projects() {

    const { theme } = useStore();

    return (
        <section className='project-container'>
            <div className="title">
                <div className='photo'>
                    <img src={theme === 'dark' ?'./img/dev2-white.png':'./img/dev2-black.png'} alt="Projects" />
                </div>
                <h2>PROJECTS</h2>
            </div>

            <div className='projects'>

                <div className="project">
                    <div className={theme === 'dark' ?'photo':'photo light'}>
                        <img src="./img/project-drinks.png" alt="project 1" />
                    </div>

                    <div className="description">
                        
                            <h3>Drink Recipe Finder</h3>

                            <div className="techs">
                                <div className='tech'>
                                    <p>React</p>
                                </div>
                                <div className='tech'>
                                    <p>Typescrypt</p>
                                </div>
                                <div className='tech'>
                                    <p>Zustand</p>
                                </div>
                                <div className='tech'>
                                    <p>API</p>
                                </div>
                                <div className='tech'>
                                    <p>AI</p>
                                </div>
                            </div>
                        

                        <p>Built with React, Zustand, and React Router DOM. Integrated external APIs for dynamic recipe searches and implemented an LLM with openrouter/ai-sdkprovider for recipe queries.</p>

                        <div className="pj-buttons">
                            <a href="https://drinks-coral-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/eye-white.png" alt="eye icon" />
                                <span>Preview</span>
                            </a>
                            <a href="https://github.com/wilmed10/drinks/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/github-white.png" alt="github logo" />
                                <span>Github</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="project midle">
                    <div className={theme === 'dark' ?'photo':'photo light'}>
                        <img src="./img/project-pern.png" alt="project 2" />
                    </div>

                    <div className="description">
                            <h3>Product Manager (PERN Stack)</h3>

                            <div className="techs">
                                <div className='tech'>
                                    <p>PostgreSQL</p>
                                </div>
                                <div className='tech'>
                                    <p>Node.js</p>
                                </div>
                                <div className='tech'>
                                    <p>React</p>
                                </div>
                                <div className='tech'>
                                    <p>REST API</p>
                                </div>
                            </div>

                        <p>Developed a full stack application with PostgreSQL, Express, React, and Node.js. Built a REST API with testing and documentation, and connected it to a React frontend.</p>

                        <div className="pj-buttons">
                            <a href="https://product-manager-apirest-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/eye-white.png" alt="eye icon" />
                                <span>Preview</span>
                            </a>
                            <a href="https://github.com/wilmed10/product-manager-apirest" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/github-white.png" alt="github logo" />
                                <span>Github</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="project">
                    <div className={theme === 'dark' ?'photo':'photo light'}>
                        <img src="./img/project-drugstore.png" alt="project 3" />
                    </div>

                    <div className="description">
                            <h3>Pharmacy Webstore Clone</h3>

                            <div className="techs">
                                <div className='tech'>
                                    <p>React</p>
                                </div>
                                <div className='tech'>
                                    <p>Typescrypt</p>
                                </div>
                                <div className='tech'>
                                    <p>Tailwind CSS</p>
                                </div>
                                <div className='tech'>
                                    <p>Vite</p>
                                </div>
                            </div>

                        <p>A fully responsive e-commerce UI clone inspired by a local pharmacy store. This project was created as part of a technical test to showcase skills in modern React development, routing, and responsive component-based UI using TailwindCSS and Vite.</p>

                        <div className="pj-buttons">
                            <a href="https://wilmed10.github.io/drugstore-clone/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/eye-white.png" alt="eye icon" />
                                <span>Preview</span>
                            </a>
                            <a href="https://github.com/wilmed10/drugstore-clone/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/github-white.png" alt="github logo" />
                                <span>Github</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className='btn-more'>
                    <a href="https://github.com/wilmed10?tab=repositories" target="_blank" rel="noopener noreferrer" className="pj-btn">
                        <span>More projects</span>
                    </a>
                </div>

            </div>
        </section>
    )
}
