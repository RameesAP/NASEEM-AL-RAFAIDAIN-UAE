import home from "@/common/constants/home";
import MainLayout from "@/common/layouts/MainLayout";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
        <MainLayout>
          <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
            <div>
              <Image
                className="w-full h-screen absolute"
                src={home.Background}
                alt="bg"
              />
            </div>
            <div className="absolute end-0 w-[40%] h-full bg-gradient-to-r from-red-500  to-red-200"></div>
          </div>
        </MainLayout>
  );
};

export default index;
