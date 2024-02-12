import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/temp.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt='not founed '/>
          </div>
          <h3>Human Resources Management</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/khalid-radi/GRH.git' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt='not founed '/>
          </div>
          <h3>Location Management</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/khalid-radi/Gestion-Emplacement.git' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt='not founed '/>
          </div>
          <h3>TODO Mobile Application </h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com' className='btn' target='_blank'>Github</a>
            <a href='https://github.com' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>

        
      </div>

    </section>
  )
}

export default Portfolio