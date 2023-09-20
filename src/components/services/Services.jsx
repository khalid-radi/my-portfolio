import React from 'react'
import './Services.css'
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design of intuitive and attractive user interfaces. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use of Adobe XD for the design of models and prototypes. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create wireframes, mockups, and interactive prototypes </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Use of colors, typography and layouts to optimize aesthetics. </p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Front-end Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manage page navigation and interface transitions. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Work collaboratively with designers to turn designs into working code. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure visual consistency and compliance with design guidelines </p>
            </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Back-End Developement</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement registration, authentication, and authorization features </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using databases to store and retrieve data. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize SQL queries to improve database performance. </p>
            </li>
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services