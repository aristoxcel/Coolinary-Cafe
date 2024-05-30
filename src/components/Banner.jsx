
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.css'


// import required modules
import { EffectFade, Autoplay, Navigation, Pagination, Parallax  } from 'swiper/modules';
import Slide from './Slide';

export default function Banner() {
  return (
    <div className='relative top-[-99px]'>
      <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination, Parallax]}
        className="mySwiper"
        parallax={true}
      >
      {/* <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Autoplay,  Navigation, Pagination]}
        className="mySwiper"
      > */}
        <SwiperSlide>
        <Slide
            image={'banner5.jpg'}
            text='Welcome to'
            text1='Coolinary Cafe'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            image={'banner4.jpg'}
            text='Discover'
            text1='The Taste of Excellence'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            image={'banner6.jpg'}
            text='Immerse Yourself'
            text1='In Gourmet Delights'
          />
        </SwiperSlide>
        <SwiperSlide>
        <Slide
            image={'banner7.jpg'}
            text='Elevate'
            text1='Your Dining Experience'
          />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
}
