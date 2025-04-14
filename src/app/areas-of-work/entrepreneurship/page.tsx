import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Work Root Ventures",
    imageSrc:"",
    description: [
      "IRD’s Work Root Ventures aim to empower Nepal’s rural communities through innovative, practical, and locally-rooted solutions in agriculture, self-employment, and sustainability. Our initiatives help communities become more self-reliant and resilient by bridging the gap between tradition and modern tools.",
      "We’re committed to improving livelihoods by connecting investors with local enterprises and entrepreneurs to lower the financial barriers and promote local business.",
    ],
  };
  
  const subSections = [
    {
      title: "KrishiMitra",
      description: [
        "KrishiMitra is a complete digital infrastructure for the agriculture sector of Nepal. It is an AI-powered digital platform designed to support smallholder farmers by providing them with real-time weather information, technical solutions, and market access. By integrating smart and affordable farming technologies, affordable sensor-based soil testing, and data-driven insights, we aim to make farming more productive, sustainable, and profitable.",
      ],
      imageSrc: "/assets/images/areas-of-work/entrepreneurship/img_1.webp",
      features: [
        { text: "AI-powered app and voice helpline for real-time support" },
        { text: "IoT-based soil health tracking and AI pest detection" },
        { text: "Satellite-based climate data for precision farming" },
        { text: "Farmer training and community workshops" },
        { text: "Market linkage for direct selling" },
      ],
    },
    {
      title: "Kisan Connect (KisCo)",
      description: [
        "Promoting local and regional trade via enhanced customer and owner connectivity. It is a digital marketplace designed to connect local farmers and consumers effortlessly. Integrated into the KrishiMitra app, KisCo allows farmers to list their surplus products, making them visible to potential buyers within a chosen radius. Consumers can search for available products, contact the farmer, and purchase directly—eliminating unnecessary middlemen and ensuring fair prices for both parties.",
      ],
      imageSrc: "/assets/images/areas-of-work/entrepreneurship/img_6.webp",
    },
    {
      title: "IRD Seed Bank",
      description: [
        "Access to high-quality seeds and saplings is one of the most crucial factors for successful farming. However, many farmers in Nepal struggle with the availability of reliable seeds, especially during peak planting seasons. To address this challenge, IRD Seed Bank aims to provide farmers and customers with high-quality seeds and saplings, ensuring they have the right resources at the right time for optimal agricultural productivity.",
      ],
      imageSrc: "/assets/images/areas-of-work/entrepreneurship/img_2.webp",
      features: [
        { text: "Community-level seed banks with local government support" },
        { text: "Focus on climate-resilient and indigenous varieties" },
        { text: "Central nurseries for saplings and farmer training" },
        { text: "Affordable and accessible seed distribution" },
        { text: "Training on seed handling and preservation" },
      ],
    },
    {
      title: "Kutir",
      description: [
        "Transforming abandoned houses into housing space to penetrate tourism into local level. Nepal’s breathtaking landscapes, rich cultural heritage, and warm hospitality make it an unparalleled destination for travelers. However, safe, affordable, and locally immersive accommodations remain a challenge, especially in rural areas. At the same time, many homes in villages and hillsides lie abandoned as families migrate to cities and abroad. Kutir—a term that signifies a simple, small dwelling for seekers and wanderers—aims to bridge this gap by converting these abandoned houses into low-cost cabins and guest stays.",
      ],
      imageSrc: "/assets/images/areas-of-work/entrepreneurship/img_3.webp",
      features: [
        { text: "Transforms abandoned homes into income-generating guesthouses" },
        { text: "Connects rural communities with responsible tourism" },
        { text: "Promotes cultural preservation and local employment" },
        { text: "Affordable travel experiences for domestic and international tourists" },
      ],
    },
    {
      title: "Aaditya",
      description: [
        "Solar + electric dual mode dryer system for rural communities. In Nepal’s villages, drying vegetables and herbs has been a long-standing tradition to ensure food availability during off-seasons. However, traditional drying methods rely solely on sunlight, which is often unreliable due to unpredictable weather conditions leading to significant food waste due to fungus development. With Aaditya, farmers and households no longer have to depend solely on sunlight for drying food. This hybrid solution ensures a steady food supply, reduces waste, and enables villagers to preserve vegetables, herbs, etc. efficiently and affordably.",
      ],
      imageSrc: "/assets/images/areas-of-work/entrepreneurship/img_4.webp",
      features: [
        { text: "Works with solar energy and switches to electricity when needed" },
        { text: "Preserves nutrients and extends shelf life of produce" },
        { text: "Low-cost and suitable for rural environments" },
        { text: "Supports micro-entrepreneurs and food preservation businesses" },
      ],
    },
    {
      title: "Aatmanirbhar Abhiyaan",
      description: [
        "Aatmanirbhar promotes production and consumption at the local level using locally available resources to promote healthier life and bring down expenses. Incense sticks from local flowers, Bamboo crafts and household items, Herbal toothpaste and neem-stick toothbrushes, Organic colors for festivals and art, Straw mats, and many more can be created at home using locally available resources in the villages.",
      ],
      features: [
        { text: "Trains locals in producing and selling essential goods" },
        { text: "Reduces reliance on imported and chemical-based products" },
        { text: "Promotes economic self-reliance at the village level" },
        { text: "Creates small-scale sustainable industries" },
      ],
    },
    {
      title: "Entrepreneurship Camps & Trainings",
      description: [
        "We organize hands-on entrepreneurship camps and workshops for villagers, students, and returnee migrants. These trainings build confidence, business skills, and a problem-solving mindset.",
        "Our goal is to nurture rural innovation and create homegrown businesses that thrive within local ecosystems.",
      ],
      imageSrc: "/assets/images/areas-of-work/entrepreneurship/img_5.webp",
      features: [
        { text: "Skill-building workshops and training programs" },
        { text: "Business model development and mentorship" },
        { text: "Focus on local resource utilization and problem-solving" },
        { text: "Support systems for startup incubation in rural areas" },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Entrepreneurship | IRD</title>
        <meta
          name="description"
          content="IRD&apos;s agricultural services for Nepal&apos;s farming communities"
        />
      </Head>

      <main className="min-h-screen pb-16 mt-[10rem]">
        <section className="mt-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
              {mainSection.title && (
                <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-left">
                  {mainSection.title}
                </h1>
              )}

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

              {mainSection.description?.length > 0 && (
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

        {typeof subSections !== "undefined" && subSections?.length > 0 &&
          subSections.map((section, index) => (
            <section key={index} className="py-16">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-[1280px] mx-auto">
                  {section.title && (
                    <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-left">
                      {section.title}
                    </h2>
                  )}

                  {section.description?.length > 0 && (
                    <div className="space-y-4 mb-12">
                      {section.description.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.imageSrc && (
                    <div className="mb-12">
                      <div className="relative w-full aspect-[16/9] max-h-[30rem]">
                        <Image
                          src={section.imageSrc}
                          alt={section.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  )}

                  {section.features &&
                    section.features.length > 0 && (
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                          Key Features
                        </h3>
                        <ul className="space-y-4">
                          {section.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start">
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
                              <p className="text-gray-700">{feature.text}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            </section>
          ))}
      </main>
    </>
  );
};

export default Page;
