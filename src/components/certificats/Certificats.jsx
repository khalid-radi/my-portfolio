import React from 'react'
import './Certificats.css'
import AVTR1 from '../../assets/logo.jpg'

// import Swiper core and required modules
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  {
    avatar:AVTR1,
    name:'IBM : Full Stack Software Developer Assessment',
    review:'https://coursera.org/share/3cc648ce3e47ceaeddf91804b5d942a8'
  },
  {
    avatar:AVTR1,
    name:'IBM : Developing Front-End Apps with React',
    review:'https://coursera.org/share/dbae84d955b8cc567c12df59242fefd1'
  },
  {
    avatar:AVTR1,
    name:'MTA : Introduction to Programming Using Python',
    review:'https://www.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=WwFkzXjp3Fh4uk19GWc8Ow=='
  },
  {
    avatar:AVTR1,
    name:'MOS : Microsoft Office Specialist Expert | Word 2016 |',
    review:'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=248'
  },
  {
    avatar:AVTR1,
    name:'MOS : Microsoft Office Specialist Expert | Excel 2016 |',
    review:'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=249'
  },
  {
    avatar:AVTR1,
    name:'MOS : Microsoft Office Specialist | Access 2016 |',
    review:'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&format=pdf&id=253'
  }

]

const Certificats = () => {
  return (
    <section id='testimonials'>
      <h5>My latests Certificats</h5>
      <h2>Online Certificats</h2>
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
                <h4 className="client__name">{name}</h4>

                <a href={review} target="_blank" class='client__review'>Check the Certificat</a>
              </SwiperSlide>
            )
          })
          }
        </Swiper>
    </section>
  );
};

export default Certificats