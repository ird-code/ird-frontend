import React from "react";
import Image from "next/image";

function News() {
  return (
    <div className="w-full  bg-[#fefefe] overflow-hidden py-15">
  
      <div className="p-7 flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-semibold text-center">
          News, Stories, and Blogs
        </h2>
        <p className="text-center">Featuring Journeys of Transformation</p>
      </div>

  
      <div className="w-full flex items-center flex-col">
        <div className="w-full max-w-[1440px]  px-20 py-5">
          <div className="w-full flex gap-5">
           
            <div className="h-[23rem] w-1/2 relative">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-10 py-5 flex flex-col gap-1">
                  <p>Overlay Content</p>
                  <h2 className="text-2xl font-semibold">
                    Stanford researchers team up with student-athletes to unlock
                    peak performance
                  </h2>
                </div>
              </div>
            </div>

           
            <div className="h-full w-1/2 flex gap-5">
              <div className="h-full w-1/2">
              <div className="h-[23rem] w-full relative">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-10 py-5 flex flex-col gap-1">
                  <p>Overlay Content</p>
                  <h2 className="text-base font-semibold">
                    Stanford researchers team up with student-athletes to unlock
                    peak performance
                  </h2>
                </div>
              </div>
            </div>
              
              </div>
              <div className="h-full w-1/2">
              <div className="h-[23rem] w-full relative">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-10 py-5 flex flex-col gap-1">
                  <p>Overlay Content</p>
                  <h2 className="text-base font-semibold">
                    Stanford researchers team up with student-athletes to unlock
                    peak performance
                  </h2>
                </div>
              </div>
            </div>              
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1440px]  px-20 py-5">
          <div className="w-full flex gap-5">
          <div className="h-full w-1/2 flex gap-5">
              <div className="h-full w-1/2">
              <div className="h-[23rem] w-full relative">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-10 py-5 flex flex-col gap-1">
                  <p>Overlay Content</p>
                  <h2 className="text-base font-semibold">
                    Stanford researchers team up with student-athletes to unlock
                    peak performance
                  </h2>
                </div>
              </div>
            </div>
              
              </div>
              <div className="h-full w-1/2">
              <div className="h-[23rem] w-full relative">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-10 py-5 flex flex-col gap-1">
                  <p>Overlay Content</p>
                  <h2 className="text-base font-semibold">
                    Stanford researchers team up with student-athletes to unlock
                    peak performance
                  </h2>
                </div>
              </div>
            </div>              
              </div>
            </div>
            <div className="h-[23rem] w-1/2 relative">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-10 py-5 flex flex-col gap-1">
                  <p>Overlay Content</p>
                  <h2 className="text-2xl font-semibold">
                    Stanford researchers team up with student-athletes to unlock
                    peak performance
                  </h2>
                </div>
              </div>
            </div>

           
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;