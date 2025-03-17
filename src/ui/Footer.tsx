import React from 'react'
import Image from "next/image";

const Footer = () => {
  return (
    <div className=' flex w-screen bg-[#850d09] justify-center items-center p-20 py-[5rem]'>
      <div className=' w-full max-w-[1440px]'>
        <div className='w-full flex justify-between px-10'>
          <div className='flex items-center gap-5'>

          <p className='text-2xl font-semibold text-[#fefefe]'>Follow Us</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none">
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>



          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none">
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none">
          <path d="M12 20.5C13.8097 20.5 15.5451 20.3212 17.1534 19.9934C19.1623 19.5839 20.1668 19.3791 21.0834 18.2006C22 17.0221 22 15.6693 22 12.9635V11.0365C22 8.33073 22 6.97787 21.0834 5.79937C20.1668 4.62088 19.1623 4.41613 17.1534 4.00662C15.5451 3.67877 13.8097 3.5 12 3.5C10.1903 3.5 8.45489 3.67877 6.84656 4.00662C4.83766 4.41613 3.83321 4.62088 2.9166 5.79937C2 6.97787 2 8.33073 2 11.0365V12.9635C2 15.6693 2 17.0221 2.9166 18.2006C3.83321 19.3791 4.83766 19.5839 6.84656 19.9934C8.45489 20.3212 10.1903 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.5" />
          <path d="M15.9621 12.3129C15.8137 12.9187 15.0241 13.3538 13.4449 14.2241C11.7272 15.1705 10.8684 15.6438 10.1728 15.4615C9.9372 15.3997 9.7202 15.2911 9.53799 15.1438C9 14.7089 9 13.8059 9 12C9 10.1941 9 9.29112 9.53799 8.85618C9.7202 8.70886 9.9372 8.60029 10.1728 8.53854C10.8684 8.35621 11.7272 8.82945 13.4449 9.77593C15.0241 10.6462 15.8137 11.0813 15.9621 11.6871C16.0126 11.8933 16.0126 12.1067 15.9621 12.3129Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none">
          <path d="M7 10V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.00801 7L6.99902 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
          </div>



          <div className='flex items-center gap-5'>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#fefefe" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
          <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          <path d="M21 15H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21 9H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className='text-2xl font-semibold text-[#fefefe]'>Nepali</p>

          </div>
        </div>

        <div className='w-full h-[3px] bg-[#fefefe] my-5'></div>


        <div className='w-full my-20 flex gap-5 px-10 justify-between'>

          <div className='h-full flex flex-col gap-5'>
            <h2 className='text-xl text-[#fefefe] font-bold'>Areas</h2>
            <div className='flex flex-col gap-2'>
              <p className='text-lg text-[#fefefe]'>Agriculture</p>
              <p className='text-lg text-[#fefefe]'>Culture and Heritage</p>
              <p className='text-lg text-[#fefefe]'>Education </p>
              <p className='text-lg text-[#fefefe]'>Economics</p>
              <p className='text-lg text-[#fefefe]'>Health and Sanitation</p>
              <p className='text-lg text-[#fefefe]'>Tourism</p>
              <p className='text-lg text-[#fefefe]'>IRD III Enterprise</p>
              <p className='text-lg text-[#fefefe]'>Entrepreneurship</p>
            </div>
          </div>

          <div className='h-full flex flex-col gap-5'>
            <h2 className='text-xl text-[#fefefe] font-bold'>Campaigns and Initiatives</h2>
            <div className='flex flex-col gap-2'>
              <p className='text-lg text-[#fefefe]'>Education Reform Initiative</p>
              <p className='text-lg text-[#fefefe]'>Save the Heritage Campaign</p>
              <p className='text-lg text-[#fefefe]'>Concious Village Initiative</p>
              <p className='text-lg text-[#fefefe]'>IRD Interdisciplinary Journal</p>
              <p className='text-lg text-[#fefefe]'>Community Learning Centre</p>
            </div>
          </div>

          <div className='h-full flex flex-col gap-5'>
            <h2 className='text-xl text-[#fefefe] font-bold'>Programs and Services</h2>
            <div className='flex flex-col gap-2'>
              <p className='text-lg text-[#fefefe]'>Infrastructure & Local Initiatives</p>
              <p className='text-lg text-[#fefefe]'>Training & Literacy</p>
              <p className='text-lg text-[#fefefe]'>Business & Livelihood</p>
              <p className='text-lg text-[#fefefe]'>Heritage & Traditions</p>
              <p className='text-lg text-[#fefefe]'>Eco-tourism</p>
              <p className='text-lg text-[#fefefe]'>Awareness & Healthcare</p>
            </div>
          </div>

          <div className='h-full flex flex-col gap-5'>
            <h2 className='text-xl text-[#fefefe] font-bold'>About Us</h2>
            <div className='flex flex-col gap-2'>
              <p className='text-lg text-[#fefefe]'>Mission</p>
              <p className='text-lg text-[#fefefe]'>Vision</p>
              <p className='text-lg text-[#fefefe]'>Core Values</p>
              <p className='text-lg text-[#fefefe]'>Guiding Principles</p>
            </div>
          </div>

          <div className='h-full flex flex-col gap-5'>
            <div className='bg-[#fefefe] flex justify-center items-center p-2 rounded-3xl'>
               <Image
                  src="/assets/images/logo3.png"
                  alt="IRD Logo"
                  width={200}
                  height={120}
                />
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <p className='text-lg text-[#fefefe]'>Panchakanya-1, Nuwakot</p>
              <p className='text-lg text-[#fefefe]'>Nepal</p>
              <p className='text-lg text-[#fefefe]'>+977 9843504464</p>
              <p className='text-lg text-[#fefefe]'>contact@ird.com.np</p>
            </div>
          </div>
        </div>

        <div className='w-full p-5 flex justify-center'>
          <p className='text-[#fefefe] text-lg'>Copyright 2025 Institute For Rural Development</p>
        </div>
      </div>
    </div>
  )
}

export default Footer