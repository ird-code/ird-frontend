import React from 'react'
import Image from "next/image";
import Button from './Button';

function Partners() {
  return (
    <div className=' w-screen bg-[#eeeeee] py-15'>
         <div className="p-7 flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-semibold text-center">
          Our Partners
        </h2>
        </div>

        <div className='w-full flex justify-center '>
        <div className='w-full flex gap-20 px-20 py-10 justify-center items-center max-w-[1440px] flex-wrap '>
            <div className='w-40 h-40 relative grayscale hover:grayscale-0'>
                 <Image
                    src="/assets/images/logo2.png"
                    alt="Partner Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className='w-40 h-40 relative grayscale hover:grayscale-0'>
            <Image
                    src="/assets/images/logo2.png"
                    alt="Partner Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className='w-40 h-40 relative grayscale hover:grayscale-0'>
            <Image
                    src="/assets/images/logo2.png"
                    alt="Partner Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className='w-40 h-40 relative grayscale hover:grayscale-0'>
            <Image
                    src="/assets/images/logo2.png"
                    alt="Partner Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            <div className='w-40 h-40 relative grayscale hover:grayscale-0'>
            <Image
                    src="/assets/images/logo2.png"
                    alt="Partner Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>
            
            
            
        </div>
        </div>

        <div className='w-full flex justify-center '>
        <div className='w-full flex gap-20 px-20 py-10 my-10 justify-between  max-w-[1440px]'>
            <div>
            <h2 className="text-2xl font-semibold text-left w-[70%] text-[#850d09]">
            We collaborate with dedicated partners to drive
            sustainable rural development and create lasting impact
        </h2>
            </div>
            <div>
                <Button/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Partners