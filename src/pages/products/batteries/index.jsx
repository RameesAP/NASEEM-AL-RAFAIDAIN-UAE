import MainLayout from "@/common/layouts/MainLayout";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import battery from "@/common/constants/battery";


const batteries = () => {
  return (
    <MainLayout>
       <div>
       <div className="absolute   w-full h-full bg-gradient-to-r from-red-500  to-red-200">
        <Image src= {battery.icone} className='absolute -top-40' alt="" />
        
        </div>
        <div className="absolute top-36  flex items-center justify-center w-full h-fit ">
                    <div className="flex  items-center justify-center  ">
                        <div className="font-[700] text-[65px] text-[#32286E] leading-3 items-center">
                            Products
                        </div>
                    </div>
                    
            </div>
       <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className='imgSlide'>
        <SwiperSlide  >
         <div className="grid grid-cols-1">
          <div className="img">
          </div>
          <div className="text">
            data
          </div>

         </div>
        </SwiperSlide>
        <SwiperSlide><div className="grid grid-cols-1">
          <div className="img">
          </div>
          <div className="text">
            data
          </div>

         </div></SwiperSlide>
        <SwiperSlide><div className="grid grid-cols-1">
          <div className="img">
            
          </div>
          <div className="text">
            data
          </div>

         </div></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        </div>
      </Swiper>
    </>
  
      
    </div>
    </MainLayout>
  );
};

export default batteries;
