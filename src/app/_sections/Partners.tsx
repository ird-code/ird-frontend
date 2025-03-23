import React from "react";
import Image from "next/image";
import Button from "./Button";

function Partners() {
  return (
    <div className='w-full bg-[#eeeeee] py-15'>
      <div className="p-7 flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-semibold text-center">Our Partners</h2>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-full flex gap-10 px-10 py-10 justify-center items-center max-w-[1440px] flex-wrap'>
          {[...Array(5)].map((_, index) => (
            <div key={index} className='w-32 h-32 md:w-40 md:h-40 relative grayscale hover:grayscale-0'>
              <Image
                src="/assets/images/logo2.png"
                alt="Partner Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-full flex flex-col md:flex-row gap-10 px-10 py-10 my-10 justify-between max-w-[1440px]'>
          <div className='md:w-2/3'>
            <h2 className="text-2xl font-semibold text-left text-[#850d09]">
              We collaborate with dedicated partners to drive sustainable rural development and create lasting impact
            </h2>
          </div>
          <div className='md:w-1/3 flex justify-end'>
            <Button/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
