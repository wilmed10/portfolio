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
    I am a <span>Full Stack Developer</span> and Mechatronics Engineer 
    specialized in creating interactive and scalable web applications.
  </p>

  <p>
    Focused on building optimized interfaces, consuming APIs, and applying 
    best practices for performance, maintainability, and user experience.
  </p>

  <p>
    Passionate about software development, I have hands-on experience with 
    <span> React, Next.js, TypeScript, Node.js, and PostgreSQL</span>. 
    Always eager to learn and collaborate, I am open to new challenges 
    and opportunities to grow as a developer.
  </p>
</div>


    </section>
  )
}
