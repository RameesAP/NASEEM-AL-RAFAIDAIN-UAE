import MainLayout from "@/common/layouts/MainLayout";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import battery from "@/common/constants/battery";

import bt1 from "@/assets/Battery/BTR/29.png"

const batteries = () => {
  return (
    <MainLayout>
      <div>
        <div className="relative w-full h-screen bg-gradient-to-r from-red-500  to-red-200 border border-red-500">
          <div className="absolute w-full border border-green-400 flex items-center justify-center font-[700] text-4xl top-6 text-white">
            Products
          </div>
          <div className="absolute top-28 border border-blue-400 w-full">
            <div className="w-full flex items-center justify-center">
              <Image
                src={battery.icone}
                className="w-fit border border-green-500"
                alt=""
              />
            </div>
          </div>
          <div className="absolute top-28 w-full h-[450px] border border-yellow-200">
            <div className="border border-blue-400 w-full h-full flex items-center justify-center gap-10">
              <div className="border border-yellow-200 w-[250px] h-[400px] flex flex-col">
                <div className="w-full h-[50%] border border-green-500 flex items-center justify-center">
                  <Image className="border border-orange-500" src={bt1} alt="" />
                </div>
                <div className="w-full h-[50%] border border-green-500 rounded-lg bg-gradient-to-r from-black via-gray-600 to-gray-400 p-3">
                  <div className=" text-white text-3xl font-bold">INDIGO - R</div>
                  <div className="text-white text-sm font-bold">80D26L (NS70L)</div>
                  <div className="text-white text-sm font-bold">70 AH</div>
                  <div className="text-white text-sm font-bold">CALCIUM MAINTENANCE FREE BATTERY</div>
                  <div className="text-white text-sm font-bold">280mm*175MM*200NM</div>
                  <div className=" text-sm font-bold mt-3 text-blue-500">Explore more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default batteries;
