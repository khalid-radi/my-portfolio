import React from 'react'
import './About.css'
import me from '../../assets/profil22.png'
import {TbTelescope} from'react-icons/tb'
import {FaLaptopCode} from'react-icons/fa'
import {GiBrain} from'react-icons/gi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt='not founded'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

          <article className='about__card'>
            <GiBrain className='about__icon'/>
            <h5>Continuous Learning Attitude</h5>
          </article>

          <article className='about__card'>
            <FaLaptopCode className='about__icon'/>
            <h5>Problem Solving</h5>
          </article>

          <article className='about__card'>
            <TbTelescope className='about__icon'/>
            <h5>Attention to Detail & Precision</h5>
          </article>


          </div>

          <p>
            I am currently a young 21-year-old graduate in Professional University License in Engineer of Conception and Applications Development at (𝐅𝐒𝐓 𝐒𝐞𝐭𝐭𝐚𝐭) and I am confident in my ability to come up with interesting ideas.
            <br/>My one-month internship and my completed projects allowed me to put my knowledge into practice and work effectively in a team. I participated in the design and implementation of features for websites, as well as my ability to solve problems and collaborate with other developers.
            <br/>🚀 Motivated, attentive to detail and able to meet deadlines, I constantly stay up to date on the latest trends and technologies in the field.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default about