import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

// Import required modules
import { EffectCards, Navigation } from 'swiper/modules';
import './Slider.css';

export default function Slider() {
  return (
    <div className='sliderWrap'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
      >
        <SwiperSlide className='slider1'>Slide 1</SwiperSlide>
        <SwiperSlide className='slider2'>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>

        {/* Navigation buttons */}
        <div className="swiper-button-prev">Previous</div>
        <div className="swiper-button-next">Next</div>
      </Swiper>
    </div>
  );
}
