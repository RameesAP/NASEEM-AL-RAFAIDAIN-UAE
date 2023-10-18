import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="w-full h-20  flex">
        <div className="w-[50%] ">
          <div className=" w-fit rounded-full px-7 p-2 mt-2 ml-7  bg-gradient-to-r from-[#004AAD] to-[#CB6CE6] text-white hover:cursor-pointer font-bold">ENQUIRE NOW</div>
        </div>
        <div className="w-[50%]  flex justify-end mt-2 mr-7">
          <div className=" border border-black w-[300px] h-10 rounded-full flex items-end justify-end">
            <div className="w-8 h-9 border rounded-full mr-1 bg-blue-600 flex items-center justify-center text-white">
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
