import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motions';
import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionHeadText}>Overview.</p>
        <h2 className={styles.sectionSubText}>Introduction</h2>
      </motion.div>

      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl
      leading-[30px]'>
        I have a strong foundation in popular programming languages 
        like Python, Java, JavaScript and HTML/CSS. I'm 
        interested in the data science and machine learning
        field, especially it's application in healthcare 
        and medicine. My journey in the tech world 
        has just begun, and I'm eager to contribute my skills 
        and knowledge to innovative projects that drive 
        positive change.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")