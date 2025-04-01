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
                        <div>
                            <h3>Drink recipe finder</h3>

                            <div className="techs">
                                <div className='tech'>
                                    <div className="photo-tech">
                                        <img src="./img/react-logo.svg" alt="react logo" />
                                    </div>
                                    <p>React</p>
                                </div>

                                <div className='tech'>
                                    <div className="photo-tech"><img src="./img/typescript-logo.svg" alt="typescript logo" /></div>
                                    <p>Typescrypt</p>
                                </div>

                                <div className='tech'>
                                    <div className="photo-tech"><img src="./img/tailwindcss-logo.svg" alt="tailwindcss logo" /></div>
                                    <p>Tailwind CSS</p>
                                </div>
                            </div>
                        </div>

                        <p>This project was built with React and React Router DOM for seamless multi-page navigation. It leverages the Slice Pattern to manage multiple Zustand stores, ensuring modular and efficient state management for an enhanced user experience.</p>

                        <div className="pj-buttons">
                            <a href="https://wilmed10.github.io/drinks/" target="_blank" rel="noopener noreferrer" className="pj-btn">
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
                        <img src="./img/project-crypto2.png" alt="project 2" />
                    </div>

                    <div className="description">
                        <div>
                            <h3>Cryptocurrency Price Tracker</h3>

                            <div className="techs">
                                <div className='tech'>
                                    <div className="photo-tech">
                                        <img src="./img/react-logo.svg" alt="react logo" />
                                    </div>
                                    <p>React</p>
                                </div>

                                <div className='tech'>
                                    <div className="photo-tech"><img src="./img/typescript-logo.svg" alt="typescript logo" /></div>
                                    <p>Typescrypt</p>
                                </div>
                            </div>
                        </div>

                        <p>This price calculator retrieves cryptocurrency prices in different currencies via an API. It uses Zustand for state management and Zod to validate responses, ensuring accurate and consistent data.</p>

                        <div className="pj-buttons">
                            <a href="https://wilmed10.github.io/cryptocurrency-market/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/eye-white.png" alt="eye icon" />
                                <span>Preview</span>
                            </a>
                            <a href="https://github.com/wilmed10/cryptocurrency-market/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/github-white.png" alt="github logo" />
                                <span>Github</span>
                            </a>
                        </div>

                    </div>
                </div>

                <div className="project">
                    <div className={theme === 'dark' ?'photo':'photo light'}>
                        <img src="./img/project-guitar.png" alt="project 3" />
                    </div>

                    <div className="description">
                        <div>
                            <h3>Virtual guitar store</h3>

                            <div className="techs">
                                <div className='tech'>
                                    <div className="photo-tech">
                                        <img src="./img/react-logo.svg" alt="react logo" />
                                    </div>
                                    <p>React</p>
                                </div>

                                <div className='tech'>
                                    <div className="photo-tech"><img src="./img/typescript-logo.svg" alt="typescript logo" /></div>
                                    <p>Typescrypt</p>
                                </div>

                                <div className='tech'>
                                    <div className="photo-tech"><img src="./img/tailwindcss-logo.svg" alt="tailwindcss logo" /></div>
                                    <p>Tailwind CSS</p>
                                </div>
                            </div>
                        </div>

                        <p>Online guitar store developed with JavaScript and React, using TailwindCSS for styling. The project implements reusable components and utilizes hooks like useState and useEffect for state management, along with localStorage for persistent shopping cart storage, providing a dynamic and interactive user experience.</p>

                        <div className="pj-buttons">
                            <a href="https://wilmed10.github.io/guitarbaq/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                                <img src="./img/eye-white.png" alt="eye icon" />
                                <span>Preview</span>
                            </a>
                            <a href="https://github.com/wilmed10/guitarbaq/" target="_blank" rel="noopener noreferrer" className="pj-btn">
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
