import React from 'react';
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = () => {
    return (
        <Swiper
      modules={[Pagination, A11y, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay
      loop={true}
      navigation
      pagination={{ clickable: true }}
    >
      <div
        className="min-h-[75vh] flex flex-col items-center justify-center"
        // style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <SwiperSlide>
          <div
            className="px-15 min-h-[75vh] flex justify-center"
            // style={{ backgroundImage: `url(${BannerBg})` }}
          >
            <div className="flex flex-col justify-center items-center gap-5 max-w-1/2 text-center">
              <h2 className="text-7xl font-semibold">
                Earn Money with Your Skills
              </h2>
              <p className="text-2xl font-medium">
                Turn your expertise into income with flexible freelance
                opportunities
              </p>
              <p className="text-xl max-w-[700px] mx-auto text-[#4b5563]">
                Whether you're a developer, designer, writer, or marketer, find
                high-paying projects that match your skills and schedule. Start
                earning today.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
                Start Freelancing
              </button>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
    );
};

export default Slider;