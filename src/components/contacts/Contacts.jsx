import React from 'react'
import './Contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1u2p24h', 'template_xzu48sa', form.current, 'q4Nf_wJsQN1RPh5Eq')

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>khalid.radi95@gmail.com</h5>
            <a href='mailto:khalid.radi95@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Khalid Radi</h5>
            <a href='https://www.linkedin.com/in/khalid-radi-b87756203/message' target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+212694459157</h5>
            <a href='https://api.whatsapp.com/send?phone=212694459157' target='_blank'>Send a Message</a>
          </article>

        </div>
      
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contacts