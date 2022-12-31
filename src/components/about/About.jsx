import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {HiAcademicCap} from 'react-icons/hi'
import {BsFillFolderSymlinkFill} from 'react-icons/bs'

const About = () => {
  return (
      <section id="about">
        <h5> Who am I?</h5>
        <h2> About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt="About Image" />
            </div>
          </div>


          <div className='about__content'>
            <div className='about__me-cards'>
              <article className='about__card'>
                <a href="#experience">
                  <FaAward className='about__card__icon'/>
                  <h5>Experience</h5>
                </a>
                
              </article>

              <article className='about__card'>
                <a href="#skill">
                <HiAcademicCap className='about__card__icon'/>
                <h5>Skills</h5>
                </a>
              </article>

              <article className='about__card'>
                <a href="#portfolio">
                  <BsFillFolderSymlinkFill className='about__card__icon'/>
                  <h5>Projects</h5>
                </a>
              </article>
            </div>

            <p>
              Hey there! I'm Meng Yew, but you can call me Michael if you like! I am an undergraduate in National University of Singapore, pursuing a double  degree (BBA/BSc) in Business Administration (Finance) and Business Analytics (Machine Learning). My interests currently lie in machine learning and data analytics, but I dabble in many other fields as well! Feel free to contact me for any details!
            </p>

            <a href="#contact" className='btn btn-primary'>Contact Me!</a>

          </div>

        </div>

      </section> 
    )
}

export default About