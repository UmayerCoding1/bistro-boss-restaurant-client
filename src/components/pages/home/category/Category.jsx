import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  Slider1,
  Slider2,
  Slider3,
  Slider4,
  Slider5,
} from "./../../../../provider/ImageProvider";
import SliderSection from './SliderSection/SliderSection';
import SectionTitle from './../../../shared/section-title/SectionTitle';

const Category = () => {
  return (
    <div className="w-full mb-10  font-Cinzel text-white lg:mb-24">
      <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"} />

      <div className="hidden font-[500] lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderSection img={Slider1} title={"Salads"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider2} title={"pizzas"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider3} title={"soups"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider4} title={"desserts"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider5} title={"Salads"} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="p-2 bg-white font-[500] lg:hidden ">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderSection img={Slider1} title={"Salads"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider2} title={"pizzas"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider3} title={"soups"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider4} title={"desserts"} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderSection img={Slider5} title={"Salads"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
