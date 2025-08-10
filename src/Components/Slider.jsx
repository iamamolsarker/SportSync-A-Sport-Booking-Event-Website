import React from "react";
import { Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwimmingBg from "../assets/swimming.avif";
import MarathonBg from "../assets/marathon.avif";
import BasketballBg from "../assets/basketball.avif";
import { Link } from "react-router";



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
      style={{}}
    >
      <div className="min-h-[75vh] flex flex-col items-center justify-center z-10">
        <SwiperSlide>
          <div
            className=" px-5 md:px-15 min-h-[75vh] flex justify-center"
            style={{ backgroundImage: `url(${MarathonBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          >
            <div className="hero-overlay absolute"></div>
            <div className="flex flex-col justify-center items-center gap-5 w-full md:max-w-1/2 text-center z-10">
              <h2 className="text-4xl md:text-7xl font-semibold text-white">
                City Marathon Championship
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white">
                Join thousands of runners in the ultimate endurance challenge
              </p>
              <p className="text-base md:text-xl max-w-[700px] mx-auto text-[#e7e9ec]">
                Push your limits alongside a community of passionate athletes,
                conquer every mile, and experience the thrill of crossing the
                finish line stronger than ever.
              </p>
              <div className="flex gap-6 w-full">
                <Link to={"/all-event"} className="p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg w-full font-semibold cursor-pointer">
                  Book Event
                </Link>
                <Link to={'/contact'} className="p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg w-full font-semibold cursor-pointer">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" px-5 md:px-15 min-h-[75vh] flex justify-center"
            style={{ backgroundImage: `url(${SwimmingBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          >
            <div className="hero-overlay absolute"></div>
            <div className="flex flex-col justify-center items-center gap-5 w-full md:max-w-1/2 text-center z-10">
              <h2 className="text-4xl md:text-7xl font-semibold text-white">
                Swimming World Championships
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white">
                Witness world records being broken in the pool
              </p>
              <p className="text-base md:text-xl max-w-[700px] mx-auto text-[#e7e9ec]">
                Witness world records being broken in the pool as elite swimmers push the boundaries of human performance. Feel the adrenaline, the roar of the crowd, and history being made—stroke by stroke.
              </p>
              <div className="flex gap-6 w-full">
                <button className="p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg w-full font-semibold cursor-pointer">
                  Book Event
                </button>
                <button className="p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg w-full font-semibold cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className=" px-5 md:px-15 min-h-[75vh] flex justify-center"
            style={{ backgroundImage: `url(${BasketballBg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
          >
            <div className="hero-overlay absolute"></div>
            <div className="flex flex-col justify-center items-center gap-5 w-full md:max-w-1/2 text-center z-10">
              <h2 className="text-4xl md:text-7xl font-semibold text-white">
                Basketball Tournament Finals
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white">
                Watch the best teams compete for the championship title
              </p>
              <p className="text-base md:text-xl max-w-[700px] mx-auto text-[#e7e9ec]">
                From buzzer-beaters to clutch plays, witness unforgettable moments as legends are made on the court. The energy is electric, the stakes are sky-high, and the glory is within reach.
              </p>
              <div className="flex gap-6 w-full">
                <button className="p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg w-full font-semibold cursor-pointer">
                  Book Event
                </button>
                <button className="p-3 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg w-full font-semibold cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Slider;
