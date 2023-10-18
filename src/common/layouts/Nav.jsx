import Image from "next/image";
import home from "../constants/home";

const Nav = () => {
  return (
    <header>
      <div className=" w-full h-fit">
        <div className="flex ">
          <div className="w-[40%]">
            <div className="">
              <Image className="" width={300} height={300} src={home.NavLogo} />
            </div>
          </div>
          <div className="w-[60%] flex items-center justify-between px-7">
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
              Home
            </div>
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
              Products
            </div>
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
              About Us
            </div>
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
              Gallery
            </div>
            <div className=" p-1 px-4 rounded-full flex justify-center items-center bg-slate-700 text-white">
              Contact
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
