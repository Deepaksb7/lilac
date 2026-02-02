import Image from "next/image";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Section4 = () => {
  return <div className="h-[1021px] w-full bg-[#c2bfcb] flex relative ">
    <div className="w-1/2 relative h-full">
      <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w" alt="girl doing yoga" fill className="object-cover"/>
    </div>

    <div className="w-1/2 h-full">
    <div className="px-[74px] py-[196px] pb-0">

      <div className="pb-[37px]">
        <h2 className="text-[61.8px] font-medium leading-[1.1]">You don’t have to do this all <i>alone.</i> </h2>
        <p className="text-[20.5px] mt-[33px]">
          If you are facing any of these, there’s hope:
        </p>
      </div>


      <div className="py-[10px] px-[20px] mb-[62px]">

        <ul className="list-disc list-inside text-[20.5px] text-normal">
          <li className="my-[10px]">
            Persistent feelings of sadness or hopelessness
          </li>
          <li className="my-[10px]">
            Trouble focusing or making decisions
          </li>
          <li className="my-[10px]">
            Difficulty maintaining relationships
          </li>
          <li className="my-[10px]">
            Feeling constantly exhausted or unmotivated
          </li>
          <li className="my-[10px]">
            A pervasive sense of being overwhelmed
          </li>
        </ul>
      </div>

      <p className="text-[20px]">With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
    </div>
      <div className="w-[948px] h-[87px] flex items-center justify-center px-[27.4px] absolute bottom-0 border-text border-t">
        <button className="flex items-center justify-center text-[13px] gap-[4px] font-medium">
          <p> WORK WITH ME  </p>
          <BsArrowRight className="w-[12px] h-[12px]"/>
        </button>
      </div>

    </div>
  </div>;
};

export default Section4;
