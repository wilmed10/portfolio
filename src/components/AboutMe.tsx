import { useStore } from '../store/useStore';
import './AboutMe.css'

export default function AboutMe() {
  const { theme } = useStore();
  return (
    <section>
        <div className="title">
            <div className='photo'>
                <img src={theme === 'dark' ?'./img/perfil-white.png':'./img/perfil-black.png'} alt="Projects" />
            </div>
            <h2>ABOUT ME</h2>
        </div>

        <div className="aboutMe-description">
  <p>
    I am a <span>Backend-oriented Full Stack Developer</span> and Mechatronics Engineer 
    with hands-on experience building and maintaining production web applications.
  </p>

  <p>
    My work focuses on API design, backend business logic, and relational databases,
    while also delivering performant and SEO-friendly frontend solutions with Next.js.
  </p>

  <p>
    I have experience working with <span>Go, Node.js, PostgreSQL</span> and headless CMS platforms
    such as Strapi, following clean architecture principles and real-world development practices. 
    Always eager to learn and collaborate, I am open to new challenges 
    and opportunities to grow as a developer.
  </p>
</div>


    </section>
  )
}
