import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySwiperComponent = () => {
  return (
    <div style={{ maxWidth: '100%', margin: 'auto', padding: '20px' }}>
      <Swiper
       
        spaceBetween={10} 
        slidesPerView={1} 
        loop={true} 
        pagination={{ clickable: true }} 
        navigation={true} 
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
      >
        <SwiperSlide>
          <div className="swiper-slide-content">
            <h2>Slide 1</h2>
            <p>Some content for the first slide.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <h2>Slide 2</h2>
            <p>Some content for the second slide.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <h2>Slide 3</h2>
            <p>Some content for the third slide.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <h2>Slide 4</h2>
            <p>Some content for the fourth slide.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiperComponent;

