

import home from "@/common/constants/home";
import Image from "next/image";
import React from "react";
import imageess from "@/assets/carosel1.png";





const Desktop4 = () => {
  return (
    <div>
      <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
        <div>
          <Image
            className="w-full h-screen absolute"
            src={home.Background}
            alt="bg"
          />
        </div>
        <div className="absolute border border-green-500 w-full h-[800px] mt-20 p-6">
          <div className="border border-red-500 w-full h-full">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop4;
