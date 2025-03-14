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
          <p>I am a <span>mechatronics engineer</span> focused on web development, specializing in creating interactive applications, optimizing interfaces, and consuming APIs.</p>

          <p>Passionate about programming, with <span>more than 5 years</span> of experience with programming projects through Arduino, Java, Python, and JavaScript.</p>

          <p>I am always looking to improve my skills, apply best practices, and develop efficient and scalable solutions. <span>I am open to new opportunities and collaborations</span>, so feel free to contact me for future projects.</p>
        </div>

    </section>
  )
}
