import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import slider1Img from "../assets/partners logo/sports-logo-adidas.png"
import slider2Img from "../assets/partners logo/sports-logo-ferrari.png"
import slider3Img from "../assets/partners logo/sports-logo-lakers.png"
import slider4Img from "../assets/partners logo/sports-logo-manchester-united.png"
import slider5Img from "../assets/partners logo/sports-logo-new-balance.png"
import slider6Img from "../assets/partners logo/sports-logo-nike.png"
import slider7Img from "../assets/partners logo//sports-logo-puma.png"
import slider8Img from "../assets/partners logo/sports-logo-real-madrid.png"
import slider9Img from "../assets/partners logo/sports-logo-reebok-1.png"
import slider10Img from "../assets/partners logo/sports-logo-under-armour.png"

export default function SponsorSlider() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={7}
        spaceBetween={20}
        loop={true}
        speed={8000} // slower speed for smooth continuous slide
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        breakpoints={{
            
          0: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 20,
          }
        }}
        
      >
        <SwiperSlide>
            <div>
                <img src={slider10Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider1Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider2Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider3Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider4Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider5Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider6Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider7Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider8Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <img src={slider9Img} alt=""  className="rounded-xl w-full"/>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
