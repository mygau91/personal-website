import React from 'react'
import './portfolio.css'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
       {
        data.map(({id, image, title, skills, github}) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-img'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className='portfolio_item-skills'>{skills}</small>
              <div className='portfolio_item-cta'>
                {/* <a href={rmPreview} download className='btn'> 
                Preview
                </a> */} 
                {/* demo button above*/}
                <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">
                  View Project
                </a>
              </div>
            </article>
          )
        })
       }
      </div>
    </section>
  )
}

const data = [
  {
    id: 3,
    image: portfolio3,
    title: 'Company\'s LinkedIn Scraper',
    skills: 'Selenium | BS4 | Pandas',
    github: 'https://github.com/mygau91/scrape-linkedin-company-profile',
    demo: '',
  },
  {
    id: 2,
    image: portfolio2,
    title: 'ALS Database',
    skills: 'MySQL | SQLAlchemy | Pillow | Tkinter',
    github: 'https://github.com/mygau91/ALSDatabase',
    demo: '',
  },
  {
    id: 1,
    image: portfolio1,
    title: 'Risk Management in Tech Industry',
    skills: 'VaR | Risk Assessment | Financial Risk Management',
    github: "https://drive.google.com/file/d/1sJ23V4Enz8zfPwggkWQVjQPGQPrwMoTM/view?usp=sharing",
    demo: '',
  },
]

export default Portfolio