import './Projects.css';

export default function Projects() {
  return (
    <section className='project-container'>
        <div className="title">
            <div className='photo'>
                <img src="./img/dev2-white.png" alt="Projects" />
            </div>
            <h2>PROJECTS</h2>
        </div>

        <div className='projects'>

            {/* make a component with each project */}

            <div className="project">
                <div className='photo'>
                    <img src="./img/project-crypto.png" alt="project 1" />
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

                            <div className='tech'>
                                <div className="photo-tech"><img src="./img/tailwindcss-logo.svg" alt="tailwindcss logo" /></div>
                                <p>Tailwind CSS</p>
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

            <div className="project midle">
                <div className='photo'>
                    <img src="./img/project-expense.png" alt="project 2" />
                </div>

                <div className="description">
                    <div>
                        <h3>Expense control</h3>

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

                    <p>Expense planner built with React, TypeScript, and Tailwind CSS. It
                    uses Zustand for state management, React Hook Form for
                    efficient form handling, and a modal for smooth interactions,
                    providing an intuitive expense tracking interface</p>

                    <div className="pj-buttons">
                        <a href="https://wilmed10.github.io/expense-control/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                            <img src="./img/eye-white.png" alt="eye icon" />
                            <span>Preview</span>
                        </a>
                        <a href="https://github.com/wilmed10/expense-control/" target="_blank" rel="noopener noreferrer" className="pj-btn">
                            <img src="./img/github-white.png" alt="github logo" />
                            <span>Github</span>
                        </a>
                    </div>

                </div>
            </div>

            <div className="project">
                <div className='photo'>
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

            <div>
                <a href="https://github.com/wilmed10?tab=repositories" target="_blank" rel="noopener noreferrer" className="pj-btn">
                    <span>More projects</span>
                </a>
            </div>

        </div>
    </section>
  )
}
