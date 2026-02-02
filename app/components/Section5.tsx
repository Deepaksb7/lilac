import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Section5 = () => {
  return <div className="w-full h-[871px] bg-[#e5e0da] flex">
    <div className="w-1/2 ">
      <div className="w-[916px] pl-[146px] pt-[184px]">
        <h2 className="text-[61.8px] font-medium mb-[14px]">Hi, I’m Lilac.</h2>
        <p className="text-[20.5px] leading-[1.7]">I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.</p>
      </div>
      <div className="ml-[471px] mt-[165px] ">
        <button className="flex items-center justify-center gap-[6px] w-[155px] h-[46px] text-[13px] font-medium border-text border px-[27px] py-[13px]">
          <p className="text-[13px] font-medium ">LET'S CHAT</p>
          <BsArrowRight />
        </button>
      </div>
    </div>
    <div className="w-1/2">
    <div className="ml-[147px] w-[515px] h-[773px] relative">
      <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w" alt="girl with flowers" fill className="object-cover rounded-t-full"/>

    <div className="w-[381px] h-[381px] absolute bottom-[-101px] right-[-190px]">
      <Image src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w" alt="girl with flowers" fill className="object-cover rounded-full"/>
    </div>
    </div>
    </div>
  </div>;
};

export default Section5;
