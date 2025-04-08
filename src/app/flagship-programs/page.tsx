import React from "react";
import Image from "next/image";
import Link from "next/link";
import flagshipPrograms from "@/data/flagshipPrograms.json";
import Button from "@/components/Button";

const Page = () => {
  return (
    <section className="mt-40">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12 text-left">
          <h2 className="text-[3.3rem] font-bold text-[#850d09] uppercase mb-4">
            Flagship Programs
          </h2>
          <p className="max-w-3xl !text-[1.6rem]">
            IRD&apos;s flagship programs drive sustainable development and digital
            innovation to empower rural communities in Nepal.
          </p>
        </div>
        <div>
          <ul className="space-y-16">
            {flagshipPrograms.flagshipPrograms.map((item, index) => (
              <li className="flex flex-col md:flex-row gap-0" key={index}>
                <div
                  className={`relative w-full md:w-1/2 h-40 md:min-h-[30rem] order-1 ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <Image
                    src="/assets/images/temp.webp"
                    fill
                    alt={`${item.flagshipProgramsName}`}
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex flex-col w-full md:w-1/2 p-8 bg-[rgb(243,243,243)] order-2 ${
                    index % 2 === 1 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="uppercase mb-2 !font-[700]">
                      {item.flagshipProgramsName}
                    </h3>
                    <p>{item.flagshipProgramsDec}</p>
                  </div>
                  <div>
                    <Link href={item.link}>
                      <Button size="medium">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Page;
