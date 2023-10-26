import home from "@/common/constants/home";
import MainLayout from "@/common/layouts/MainLayout";
import Desktop3 from "@/components/Home/Desktop3";
import Desktop4 from "@/components/Home/Desktop4";
import Image from "next/image";
import React from "react";
//motion
import { motion } from 'framer-motion'
//variants
import { fadeIn } from '@/vintage'
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
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.5 }}
         className="">
            
          <Image
            width={500}
            height={500}
            className="absolute top-40 left-28"
            src={home.desk2}
            alt="bbb"
          />
        </motion.div>

        <div className="absolute end-0 w-[40%] h-full bg-gradient-to-r from-red-500  to-red-200">
          <motion.div
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
           className="">
            <Image
              width={500}
              height={500}
              className="absolute top-36 right-11"
              src={home.tirebat}
              alt="bbb"
            />
          </motion.div>
        </div>
      </div>

      <Desktop3 />
      <Desktop4 />
    </MainLayout>
  );
};

export default index;
