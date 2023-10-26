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

import bt1 from "@/assets/Battery/BTR/28.png";
import bt2 from "@/assets/Battery/BTR/29.png";
import bt3 from "@/assets/Battery/BTR/30.png";
import bt4 from "@/assets/Battery/BTR/31.png";
import bt5 from "@/assets/Battery/BTR/32.png";
import bt6 from "@/assets/Battery/BTR/33.png";
import bt7 from "@/assets/Battery/BTR/34.png";
import bt8 from "@/assets/Battery/BTR/35.png";
import bt9 from "@/assets/Battery/BTR/36.png";

const battery = [
  {
    id: "01",
    photo: bt1,
    BRAND: "INDIGO-R",
    SIZE: "80D26L  (NS70L)",
    TYPE: "CALCIUM MAINTENANCE FREE BATTERY ",
    AMPERE: "70 AH ",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE)",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "WITHOUT AND WITH BASE HOLD DOWN ",
  },
  {
    id: "02",
    photo: bt2,
    BRAND: "STARTER-EX",
    SIZE: "31S-950",
    TYPE: "PREMIUM BATTERY",
    AMPERE: "950 CCA",
    DIMENSION: "330MM*172MM*217MM",
    TERMINAL: "G",
    SPECIFICATION: "BCI SERIES ( AMERICAN)",
    TERMINAL_CLASSIFICATION: "TYPE T (STUD)",
    HOLD_DOWN: "WITHOUT  BASE HOLD DOWN",
  },
  {
    id: "03",
    photo: bt3,
    BRAND: "SUPERGOLD-X",
    SIZE: "80D26L  (NS70L / NX110-5L)",
    TYPE: "CALCIUM MAINTENANCE FREE BATTERY",
    AMPERE: "70 AH",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE)",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "	WITHOUT AND WITH BASE HOLD DOWN ",
  },
  {
    id: "04",
    photo: bt4,
    BRAND: "GENERAL",
    SIZE: "95D26L",
    TYPE: "CALCIUM MAINTENANCE FREE BATTERY ",
    AMPERE: "74 AH",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE)",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "WITHOUT AND WITH BASE HOLD DOWN",
  },
  {
    id: "05",
    photo: bt5,
    BRAND: "FREEDOM CRAFT",
    SIZE: "80D26L  (NS70L)",
    TYPE: "SEALED CALCIUM MAINTENANCE FREE BATTERY ",
    AMPERE: "70 AH ",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE) ",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "WITHOUT AND WITH BASE HOLD DOWN",
  },
  {
    id: "06",
    photo: bt6,
    BRAND: "PIONEER",
    SIZE: "80D26L  (NS70L / NX110-5L)",
    TYPE: "CALCIUM MAINTENANCE FREE BATTERY",
    AMPERE: "70 AH",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE)",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "WITHOUT AND WITH BASE HOLD DOWN ",
  },
  {
    id: "07",
    photo: bt7,
    BRAND: "MAXLIFE GOLD PLUS",
    SIZE: "85D26L",
    TYPE: "CALCIUM MAINTENANCE FREE BATTERY",
    AMPERE: "70 AH",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE)",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "WITHOUT AND WITH BASE HOLD DOWN",
  },

  {
    id: "08",
    photo: bt8,
    BRAND: "TARGET",
    SIZE: "85D26L",
    TYPE: "PREMIUM BATTERY ",
    AMPERE: "70 AH",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE)",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "WITHOUT AND WITH BASE HOLD DOWN ",
  },

  {
    id: "10",
    photo: bt9,
    BRAND: "AC DIAMOND",
    SIZE: "85D26L  (NS70L)",
    TYPE: "CALCIUM PREMIUM BATTERY",
    AMPERE: "70 AH",
    DIMENSION: "260MM*175MM*200MM",
    TERMINAL: "A",
    SPECIFICATION:
      "DIN SERIES ( EUROPE VEHICLE) , JIS SERIES (JAPANESE VEHICLE)",
    TERMINAL_CLASSIFICATION: "STANDARD AND SMALL",
    HOLD_DOWN: "WITHOUT AND WITH BASE HOLD DOW",
  },
];

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
          <div className="absolute top-28 w-full h-[500px] border border-yellow-200">
            <div className="border border-blue-400 w-full h-full flex items-center justify-center gap-5 overflow-x-scroll">
              {/* <div className="border border-yellow-200 w-[250px] h-[400px] flex flex-col">
                <div className="w-full h-[50%] border border-green-500 flex items-center justify-center">
                  <Image
                    className="border border-orange-500"
                    src={bt1}
                    alt=""
                  />
                </div>
                <div className="w-full h-[50%] border border-green-500 rounded-lg bg-gradient-to-r from-black via-gray-600 to-gray-400 p-3">
                  <div className=" text-white text-3xl font-bold">
                    INDIGO - R
                  </div>
                  <div className="text-white text-sm font-bold">
                    80D26L (NS70L)
                  </div>
                  <div className="text-white text-sm font-bold">70 AH</div>
                  <div className="text-white text-sm font-bold">
                    CALCIUM MAINTENANCE FREE BATTERY
                  </div>
                  <div className="text-white text-sm font-bold">
                    280mm*175MM*200NM
                  </div>
                  <div className=" text-sm font-bold mt-3 text-blue-500">
                    Explore more
                  </div>
                </div>
              </div> */}
              {battery.map((item) => (
                <div
                  key={item.id}
                  className="border border-yellow-200 w-[250px] h-[400px] flex flex-col"
                >
                  <div className="w-full h-[50%] border border-green-500 flex items-center justify-center">
                    <Image
                      className="border border-orange-500"
                      src={item.photo}
                      alt=""
                    />
                  </div>
                  <div className="w-full h-[50%] border border-green-500 rounded-lg bg-gradient-to-r from-black via-gray-600 to-gray-400 p-3">
                    <div className="text-white text-3xl font-bold">
                      {item.BRAND}
                    </div>
                    <div className="text-white text-sm font-bold">
                      {item.SIZE}
                    </div>
                    <div className="text-white text-sm font-bold">
                      {item.AMPERE}
                    </div>
                    <div className="text-white text-sm font-bold">
                      {item.TYPE}
                    </div>
                    <div className="text-white text-sm font-bold">
                      {item.DIMENSION}
                    </div>
                    <div className="text-sm font-bold mt-3 text-blue-500">
                      Explore more
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default batteries;
