import Image from "next/image";
import { Inter } from "next/font/google";
import home from "@/common/constants/home";
import Link from "next/link";
import { fadeIn } from "@/vintage"
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main flex justify-center ">
      <div className="2xl:container w-full h-full flex:col justify-center ">
        <div className="w-full overflow-hidden h-screen bg-cover bg-center bg-no-repeat relative ">
          <div>
            <Image
              className="w-full h-screen absolute"
              src={home.BackgroundLogo}
              alt="bg"
            />
          </div>
          <motion.div
          variants={fadeIn('up', 0.2)} 
          initial= 'hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount:0.7  }} 
           className="absolute">
            <Image className=""width={400} src={home.logo} alt="bgg" />
          </motion.div>
          <div className="absolute top-36 flex items-center justify-center w-full h-fit ">
            <div className="flex flex-col items-center justify-center ">
              <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
              
              className="font-[700] text-[65px] text-[#32286E] ">
                WELCOME TO
              </motion.div>
              <motion.div 
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
               className="font-[700] text-[140px] text-red-500">
                نسيم الرافدين
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full ">
            <div className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat  ">
              <motion.div
              variants={fadeIn('left', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
               className=" relative">
                <Link href="/home" className="absolute top-7  left-72 px-4  p-2 rounded-full w-fit  bg-gradient-to-r from-[#004AAD] to-[#CB6CE6] text-white hover:cursor-pointer">
                  EXPLORE NOW
                </Link>
                <Image className=""width={700}  src={home.tireandbat} alt="mainpg" />
              </motion.div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}
