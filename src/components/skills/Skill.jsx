import React from 'react'
import './skill.css'
import {SiRstudio,
  SiJava,
  SiPython,
  SiJavascript} from 'react-icons/si'
import {ImStatsDots, ImDatabase} from 'react-icons/im'


const Skill = () => {
  return (
    <section id="skill">
      <h2>Skills</h2>
      <div className='container skill_container'>
        <div className='skill_dsa'>
          <h3>Data Analytics</h3>
          <div className='skill_content'>
            <article className='skill_details'>
              <SiPython className='skills_details-icon'/>
              <div>
                <h4>Python</h4>
                <h5>Matplotlib | NumPy | Selenium | BS4 | Pandas</h5>
                <small classsName='text-light'>Experienced</small>
              </div>
            </article>  
            <article className='skill_details'>
              <SiRstudio className='skills_details-icon'/>
              <div>
                <h4>RStudio</h4>
                <h5> </h5>
                <small classsName='text-light'>Experienced</small>
              </div>
            </article>            
            <article className='skill_details'>
              <ImDatabase className='skills_details-icon'/>
              <div>
                <h4>Database Query</h4>
                <h5>MySQL | Snowflake</h5>
                <small classsName='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skill_details'>
              <ImStatsDots className='skills_details-icon'/>
              <div>
                <h4>Statistics</h4>
                <h5>Linear Regression | Business Intelligence | Statistical Testing</h5>
                <small classsName='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='skill_swe'>
        <h3>Software Engineering</h3>
          <div className='skill_content'>
            <article className='skill_details'>
              <SiJava className='skills_details-icon'/>
              <div>
                <h4>Java</h4>
                <h5> </h5>
                <small classsName='text-light'>Intermediate</small>
              </div>
            </article>  
            <article className='skill_details'>
              <SiJavascript className='skills_details-icon'/>
              <div>
                <h4>Javascript</h4>
                <h5>ReactJS | VueJS </h5>
                <small classsName='text-light'>Beginner</small>
              </div>
            </article>
            <article className='skill_details'>
              <SiPython className='skills_details-icon'/>
              <div>
                <h4>Python</h4>
                <h5>Tkinter | Pillow | SQLAlchemy</h5>
                <small classsName='text-light'>Experienced</small>
              </div>
            </article> 
            <article className='skill_details'>
              <ImDatabase className='skills_details-icon'/>
             <div>
              <h4>Database Dev</h4>
              <h5>MySQL | MongoDB | Firebase</h5>
              <small classsName='text-light'>Experienced</small>
             </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skill