import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Section2 = () => {
  return <div className="w-full h-[824px] flex bg-secondary">

    <div className="w-1/2 flex flex-col items-center justify-center relative">
    <div className="p-[68px] pb-[155px] ">
      <h2 className="text-[62px] font-medium">
        Live a fulfilling life.
      </h2>
      <p className="my-[16px] text-[21px]">
        Life can be challenging—especially when you're trying to balance your personal and professional life.
      </p>
      <p className="mt-[16px] text-[21px]">
        It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
      </p>
    </div>


    <div className="absolute bottom-0 w-full">
      
    <div className="w-full border-text border-t "/>
    <button className="h-[87px] w-full px-[27px] ">
        <div className="flex items-center justify-center gap-2">
          <p className="text-[13px] font-medium">
            GET IN TOUCH
          </p>
          <BsArrowRight />
        </div>
      </button> 
    </div>
    </div>
    <div className="w-1/2">
    <div className="w-full relative h-full">
      <Image
        src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
        alt="guy with flowers"
        fill
        className="object-cover"
        />
        </div>
    </div>
  </div>;
};

export default Section2;
