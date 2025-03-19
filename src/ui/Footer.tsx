import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className='flex w-screen bg-[#850d09] justify-center items-center p-20 py-[5rem] max-md:p-4 max-md:py-8'>
      <div className='w-full max-w-[1440px]'>
        <div className='w-full flex max-md:flex-col max-md:items-center max-md:gap-8 justify-between px-10 max-md:px-4'>
          <div className='flex items-center gap-5 max-md:flex-wrap max-md:justify-center'>
            <p className='text-2xl font-semibold text-[#fefefe] max-md:text-xl'>Follow Us</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none" className='max-md:w-8 max-md:h-8'>
              {/* ... first social icon */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none" className='max-md:w-8 max-md:h-8'>
              {/* ... second social icon */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none" className='max-md:w-8 max-md:h-8'>
              {/* ... third social icon */}
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none" className='max-md:w-8 max-md:h-8'>
              {/* ... fourth social icon */}
            </svg>
          </div>

          <div className='flex items-center gap-5 max-md:flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none" className='max-md:w-8 max-md:h-8'>
              {/* ... globe icon */}
            </svg>
            <p className='text-2xl font-semibold text-[#fefefe] max-md:text-xl'>Nepali</p>
          </div>
        </div>

        <div className='w-full h-[3px] bg-[#fefefe] my-5'/>

        <div className='w-full my-20 flex gap-5 px-10 justify-between max-md:flex-col max-md:my-10 max-md:px-4 max-md:gap-10'>
          {/* Areas Column */}
          <div className='h-full flex flex-col gap-5 max-md:w-full'>
            <h2 className='text-xl text-[#fefefe] font-bold'>Areas</h2>
            <div className='flex flex-col gap-2'>
              {/* ... area items */}
            </div>
          </div>

          {/* Campaigns Column */}
          <div className='h-full flex flex-col gap-5 max-md:w-full'>
            <h2 className='text-xl text-[#fefefe] font-bold'>Campaigns and Initiatives</h2>
            <div className='flex flex-col gap-2'>
              {/* ... campaign items */}
            </div>
          </div>

          {/* Programs Column */}
          <div className='h-full flex flex-col gap-5 max-md:w-full'>
            <h2 className='text-xl text-[#fefefe] font-bold'>Programs and Services</h2>
            <div className='flex flex-col gap-2'>
              {/* ... program items */}
            </div>
          </div>

          {/* About Column */}
          <div className='h-full flex flex-col gap-5 max-md:w-full'>
            <h2 className='text-xl text-[#fefefe] font-bold'>About Us</h2>
            <div className='flex flex-col gap-2'>
              {/* ... about items */}
            </div>
          </div>

          {/* Logo Column */}
          <div className='h-full flex flex-col gap-5 max-md:items-center'>
            <div className='bg-[#fefefe] flex justify-center items-center p-2 rounded-3xl max-md:w-40'>
              <Image
                src="/assets/images/logo3.png"
                alt="IRD Logo"
                width={200}
                height={120}
                className='max-md:w-full max-md:h-auto'
              />
            </div>
            <div className='flex flex-col gap-2 items-end max-md:items-center'>
              <p className='text-lg text-[#fefefe] max-md:text-base max-md:text-center'>Panchakanya-1, Nuwakot</p>
              <p className='text-lg text-[#fefefe] max-md:text-base max-md:text-center'>Nepal</p>
              <p className='text-lg text-[#fefefe] max-md:text-base max-md:text-center'>+977 9843504464</p>
              <p className='text-lg text-[#fefefe] max-md:text-base max-md:text-center'>contact@ird.com.np</p>
            </div>
          </div>
        </div>

        <div className='w-full p-5 flex justify-center max-md:p-2'>
          <p className='text-[#fefefe] text-lg max-md:text-sm max-md:text-center'>
            Copyright 2025 Institute For Rural Development
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer