import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="w-full h-[1017px] py-[126px]">
      <div className="px-[71px]">
        <div className="pb-[50px] text-center">
          <p className="text-[62px] font-medium">My Specialties</p>
        </div>
        <div className="flex gap-[20px] h-[614px]">
          <div className="h-[614px] w-[573px] px-[22px] py-[20px] m-0 border-text border bg-secondary flex flex-col justify-between">
            <div className="flex flex-col gap-[20px] h-[119px] justify-between">
              <h2 className="text-[20px] font-medium">Self-Esteem</h2>
              <p className="text-[13px]">
                Building a strong sense of self-worth is key to living a
                fulfilled life. Let's work together to bolster your self-esteem.
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="h-[399px] w-[398px] relative rounded-full overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1000w"
                  alt=""
                  fill
                  className="object-cover object-[13%_30%]"
                />
              </div>
            </div>
          </div>

          <div className="h-[614px] w-[573px] px-[22px] py-[20px] border-text border bg-secondary flex flex-col justify-between">
            <div className="flex flex-col gap-[20px] h-[119px] justify-between">
              <h2 className="text-[20px] font-medium">Relationships</h2>
              <p className="text-[13px]">
                Navigating relationships can be complex. I'm here to guide you
                through these complexities to help you form healthier
                connections.
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="h-[399px] w-[398px] relative rounded-full overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=750w"
                  alt=""
                  fill
                  className="object-cover object-[10%_100%]"
                />
              </div>
            </div>
          </div>

          <div className="h-[614px] w-[573px] px-[22px] py-[20px] border-text border bg-secondary flex flex-col justify-between">
            <div className="flex flex-col gap-[20px] h-[119px] justify-between">
              <h2 className="text-[20px] font-medium">Burnout</h2>
              <p className="text-[13px]">
                Feeling overwhelmed by your career is more common than you
                think. Together, we'll identify strategies to manage and prevent
                burnout.
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <div className="h-[399px] w-[398px] relative rounded-full overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=750w"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
