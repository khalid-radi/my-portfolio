import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/profil 2.jpg'
import Headersocial from './Headersocial'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Khalid Radi</h1>
      <h5 className='text-light'>FullStack Web Developer</h5>
      <CTA/>
      <Headersocial/>
      <div >
        <img src={ME} alt="not found" className='me' />
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down </a>
      
      </div>
    </header>   
      
    
  )
}

export default Header