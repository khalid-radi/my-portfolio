import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/AVTR1.png'

// import Swiper core and required modules
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  {
    avatar:AVTR1,
    name:'Mohamed Ali',
    review:'Très bon service de la part de vous ! Vraiment je vous remercie infiniment mr.Khalid'
  },
  {
    avatar:AVTR1,
    name:'Anas Atif',
    review:'Rien à dire ! Je suis impréssionné par votre travail '
  },
  {
    avatar:AVTR1,
    name:'Saad Merjani',
    review:'Quel travail  ! Vraiment je vous remercie '
  }

]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
        <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation={{ clickable: true }}>
          {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={`Avatar of ${name}`} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
          }
        </Swiper>
    </section>
  );
};

export default Testimonials;