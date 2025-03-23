import React from "react";
import Image from "next/image";

function News() {
  return (
    <div className="w-full bg-[#fefefe] overflow-hidden py-8 md:py-15">
      <div className="p-4 md:p-7 flex flex-col justify-center items-center gap-3 md:gap-4">
        <h2 className="text-xl md:text-3xl font-semibold text-center">
          News, Stories, and Blogs
        </h2>
        <p className="text-center text-sm md:text-base">Featuring Journeys of Transformation</p>
      </div>

      <div className="w-full flex items-center flex-col">
        <div className="w-full max-w-[1440px] px-4 md:px-20 py-3 md:py-5">
          <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
            {/* Main News Card */}
            <div className="h-[18rem] md:h-[23rem] w-full md:w-1/2 relative">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-4 md:px-10 py-3 md:py-5 flex flex-col gap-1">
                  <p className="text-sm md:text-base">Overlay Content</p>
                  <h2 className="text-lg md:text-2xl font-semibold">
                    Stanford researchers team up with student-athletes to unlock
                    peak performance
                  </h2>
                </div>
              </div>
            </div>

            {/* Side Cards Container */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-3 md:gap-5">
              <div className="h-[18rem] md:h-[23rem] w-full md:w-1/2 relative">
                <Image
                  src="/assets/images/Hero_BG.png"
                  alt="News Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 text-white bg-black/30 z-20">
                  <div className="absolute bottom-0 px-4 md:px-10 py-3 md:py-5 flex flex-col gap-1">
                    <p className="text-sm md:text-base">Overlay Content</p>
                    <h2 className="text-base font-semibold">
                      Stanford researchers team up with student-athletes to unlock
                      peak performance
                    </h2>
                  </div>
                </div>
              </div>
              <div className="h-[18rem] md:h-[23rem] w-full md:w-1/2 relative">
                <Image
                  src="/assets/images/Hero_BG.png"
                  alt="News Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 text-white bg-black/30 z-20">
                  <div className="absolute bottom-0 px-4 md:px-10 py-3 md:py-5 flex flex-col gap-1">
                    <p className="text-sm md:text-base">Overlay Content</p>
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

        {/* Second Row */}
        <div className="w-full max-w-[1440px] px-4 md:px-20 py-3 md:py-5">
          <div className="w-full flex flex-col md:flex-row gap-3 md:gap-5">
            {/* Side Cards Container (reversed on mobile) */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-3 md:gap-5 order-2 md:order-1">
              <div className="h-[18rem] md:h-[23rem] w-full md:w-1/2 relative">
                <Image
                  src="/assets/images/Hero_BG.png"
                  alt="News Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 text-white bg-black/30 z-20">
                  <div className="absolute bottom-0 px-4 md:px-10 py-3 md:py-5 flex flex-col gap-1">
                    <p className="text-sm md:text-base">Overlay Content</p>
                    <h2 className="text-base font-semibold">
                      Stanford researchers team up with student-athletes to unlock
                      peak performance
                    </h2>
                  </div>
                </div>
              </div>
              <div className="h-[18rem] md:h-[23rem] w-full md:w-1/2 relative">
                <Image
                  src="/assets/images/Hero_BG.png"
                  alt="News Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="absolute inset-0 text-white bg-black/30 z-20">
                  <div className="absolute bottom-0 px-4 md:px-10 py-3 md:py-5 flex flex-col gap-1">
                    <p className="text-sm md:text-base">Overlay Content</p>
                    <h2 className="text-base font-semibold">
                      Stanford researchers team up with student-athletes to unlock
                      peak performance
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Main News Card */}
            <div className="h-[18rem] md:h-[23rem] w-full md:w-1/2 relative order-1 md:order-2">
              <Image
                src="/assets/images/Hero_BG.png"
                alt="News Image"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute inset-0 text-white bg-black/30 z-20">
                <div className="absolute bottom-0 px-4 md:px-10 py-3 md:py-5 flex flex-col gap-1">
                  <p className="text-sm md:text-base">Overlay Content</p>
                  <h2 className="text-lg md:text-2xl font-semibold">
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