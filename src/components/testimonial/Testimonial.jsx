import React from 'react'
import './testimonial.css'
import testimonialCo1 from '../../assets/testimonialCo1.png'
import testimonialCo2 from '../../assets/testimonialCo2.png'
import testimonialCo3 from '../../assets/testimonialCo3.png'
// SwiperJS functions
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// End of SwiperJS functions
const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Recommendation letters from former supervisors</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{clickable: true }}>
        <div class="swiper-pagination"></div>
        {
          data.map(({id, title, testimonial, image}) => {
            return (
              <SwiperSlide className="testimonials_item">
                <h3 className="testimonial_item-title">{title}</h3>
                <div className="testimonial_item-img">
                  <img src={image} alt={title} />
                </div>
                <div class="swiper-pagination"></div>

                <div className="testimonial-item-cta">
                  <a href={testimonial} className='btn btn-primary' target='_blank' rel="noreferrer">
                    View Testimonial
                  </a>
                </div>
              </SwiperSlide>
            )
          })
        }  
      </Swiper>
    </section>
  )
}

const data = [
  {
    id: 3,
    title: 'Pufferfish Partners',
    testimonial: "https://drive.google.com/file/d/1sctS1Cm4LSxlXx6qlJiIKcSIuPkATutF/view?usp=sharing",
    image: testimonialCo3,
  },
  {
    id: 2,
    title: 'Fewcents Co',
    testimonial: "https://drive.google.com/file/d/1m8BI5YfPuYc6xzZ5xSa6rkOfb4YyukS7/view?usp=sharing",
    image: testimonialCo2,
  },
  {
    id: 1,
    title: 'Pacific International Lines',
    testimonial: "https://drive.google.com/file/d/19fQUvbni7I5iYBQUj0xy4-Ur1xA6bH2z/view?usp=sharing",
    image: testimonialCo1,
  },
]

export default Testimonial