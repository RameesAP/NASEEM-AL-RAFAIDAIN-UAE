import Image from "next/image";
import { Inter } from "next/font/google";
import home from "@/common/constants/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="main flex justify-center ">
      <div className="2xl:container w-full h-full flex:col justify-center ">
        <div className="w-full h-[600px] mb-8  bg-cover bg-center bg-no-repeat relative ">
          <div>
            <Image className="w-full absolute" src={home.Background} alt="bg" />
          </div>
          <div className="absolute top-56 flex items-center justify-center w-full h-fit">
            <div className="flex flex-col items-center justify-center ">
              <div className="font-[700] text-[65px] text-[#32286E] ">
                WELCOME TO
              </div>
              <div className="font-[700] text-[140px] text-red-500">نسيم الرافدين</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
