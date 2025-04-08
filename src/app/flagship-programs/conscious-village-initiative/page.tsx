import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Conscious Village Initiative",
    imageSrc: "/assets/images/areas-of-work/flagship-programs/conscious-village-initiative/hero_img.webp",
    description: [
      "Transforming Villages, Empowering Communities",
      "The Conscious Village Initiative is one of IRD's flagship programs, designed to bring holistic and sustainable development to villages across Nepal. In close collaboration with local governments and communities, this initiative follows a graduation model spanning four years, much like a student's journey through college. During this time, IRD implements transformative projects across key sectors, including agriculture, education, entrepreneurship, health, and finance, equipping villages with knowledge, skills, resources, and digital infrastructure to level up in every aspect. By the time they graduate, these villages will have undergone a profound shift—from being under-resourced and financially weak to becoming conscious, self-sufficient, and empowered.",
      "The Vision: A Revolution from the Village",
      "The Conscious Village Initiative is more than just development—it's a movement. By empowering villages with education, economic stability, awareness, and digital connectivity, we ensure that no one can exploit them. Instead, they will lead their own progress, make informed political and economic decisions, and build a prosperous future for their community and the nation. This is more than an initiative—it's a revolution from the grassroots. Let's start the Gramkranti (Village Revolution) and reshape the future of Nepal, one village at a time.",
    ],
  };
  
  const AreasOfImpact = {
    headline: "Key Areas of Impact",
    items: [
      {
        title: "Education",
        description:
          "Implementing school reforms, conduct literacy programs, and complete local curriculum development, conduct relevant surveys and studies",
      },
      {
        title: "Agriculture",
        description:
          "Providing training, resources, and innovative farming solutions through agrifinance, KisCo, agroforestry, and Krisimitra to increase productivity and income.",
      },
      {
        title: "Entrepreneurship & Economic Development",
        description:
          "Nurture and support entrepreneurial spirit in the village through Work Root Ventures, Aatmanibhar campaign, Aaditya, IRD seed bank and nurseries, Kutir, and more to create jobs, economic stability, and self reliance.",
      },
      {
        title: "Health & Well-being",
        description:
          "Enhancing health services, awareness, and sanitation through Aayush, annual health camps, Yoga and Meditation camp, Maitri, Addiction and Substance Abuse Prevention camp, and more for better community health.",
      },
      {
        title: "Culture, Heritage & Tourism",
        description:
          "Identifying, revitalizing, and promoting cultural sites, traditions, and tourism potential though cultural exchange programs, Kutir, Save the Heritage campaign, and more to integrate local tourism into economic ecosystem.",
      },
      {
        title: "Digital Innovation & Connectivity",
        description:
          "Equipping villages with digital tools and technology through IRD's mobile apps and management software like Krishimitra, KisCo, Aayush, Surakshya, Mero Sahakari, Samvidha, Disaster Warning System (DWS) and more to make things efficient, reliable, less expensive, and safer.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Conscious Village Initiative | IRD</title>
        <meta name="description" content="" />
      </Head>

      <main className="min-h-screen pb-16 mt-[10rem]">
        <section className="mt-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-left">
                {mainSection.title}
              </h1>
              {mainSection.imageSrc && (
                <div className="mb-12">
                  <div className="relative w-full aspect-[16/9] max-h-[30rem]">
                    <Image
                      src={mainSection.imageSrc}
                      alt="Agriculture Services"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              )}

              {mainSection.description &&
                mainSection.description.length > 0 && (
                  <div className="space-y-4 mb-12">
                    {mainSection.description.map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </section>

        {typeof AreasOfImpact !== "undefined" &&
          AreasOfImpact.items &&
          AreasOfImpact.items.length > 0 && (
            <section className="mt-6">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-[1280px] mx-auto">
                  <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                    {AreasOfImpact.headline}
                  </h3>
                  <ul className="space-y-4 mb-12">
                    {AreasOfImpact.items.map((item, id) => (
                      <li key={id} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="text-gray-700"><b>{item.title}:  </b>{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}
      </main>
    </>
  );
};

export default Page;
