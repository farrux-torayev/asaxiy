import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MySwiperComponent = () => {
  return (
    <div style={{ maxWidth: '100%', margin: 'auto', padding: '20px' }}>
      <Swiper
       
        spaceBetween={10} // Slaydlar orasidagi masofa
        slidesPerView={1} // Bir nechta slaydlar bir vaqtning o'zida ko'rsatiladi
        loop={true} // Aylanma xususiyatini yoqish
        pagination={{ clickable: true }} // Paginationni faollashtirish
        navigation={true} // Navigatsiyani faollashtirish
        breakpoints={{
          640: {
            slidesPerView: 1, // Kichik ekranlarda 1 slayd ko'rsatiladi
          },
          768: {
            slidesPerView: 2, // O'rtacha ekranlarda 2 slayd
          },
          1024: {
            slidesPerView: 3, // Katta ekranlarda 3 slayd
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

