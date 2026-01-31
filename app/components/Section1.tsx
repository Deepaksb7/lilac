import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Section1 = () => {
  return (
    <div className="w-full min-h-110vh px-[96px] py-[49px] pb-0 flex gap-[45px]">
      <div className="relative w-[681px] h-[1021px]">
        <div className="w-full h-full overflow-hidden rounded-t-full">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"
            alt="guy with flowers"
            width={681}
            height={1021}
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center p-39 space-y-7">
        <h1 className="text-[96px] text-center font-medium leading-[100px] mt-[97px]">
          Live your life <br /> in full bloom
        </h1>
        <p className="text-[21px] text-center">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <button className="cursor-pointer text-[13px] text-center font-medium border border-text py-[13px] px-[27px] flex mt-6">
          <div className="flex items-center gap-2">
            CONNECT WITH ME
            <BsArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Section1;
