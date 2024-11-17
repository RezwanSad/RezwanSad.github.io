import styles1 from './HeroStyles.module.css';
import {styles} from '../styles';
import image from '../assets/heroImg.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import githublogo from '../assets/githublogo.png';



const Hero = () => {
  return (
    <section className={`${styles1.container} 
    relative w-full h-screen mx-auto`}
    >
      <div>
        <img 
        className={styles1.hero}
        src={image}
        alt='Profile picture of Rezwan Ahmed'
        />
      </div>
      <div className={`${styles.heroHeadText} ${styles1.info} 
      text-[#915eff]`}>
        <h1>
          Rezwan Ahmed
        </h1>
        <h2>Sadman</h2>
        <span>
          <a 
          href="https://www.linkedin.com/in/rezwan-ahmed-sadman-30a22b238/"
          target="_blank">
            <img src={linkedin} alt="LinkedIn icon"/>
          </a>
          <a 
          href="https://github.com/RezwanSad"
          target="_blank">
            <img src={githublogo} alt="Github icon"/>
          </a>
          <a 
          href="https://www.facebook.com/Sad.Rezberry/"
          target="_blank">
            <img src={facebook} alt="Facebook icon"/>
          </a>
        </span>
        <p className={`${styles1.description} 
        ${styles.heroSubText} mt-2 text-white-100`}>
          A passionate third-year Computer Science major at 
          Memorial University of Newfoundland</p>
      </div>
    </section>
  )
}

export default Hero