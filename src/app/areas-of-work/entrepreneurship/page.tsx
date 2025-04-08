import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Work Root Ventures",
    imageSrc:"",
    description: [
      "IRD’s Work Root Ventures aim to empower Nepal’s rural communities through innovative, practical, and locally-rooted solutions in agriculture, self-employment, and sustainability. Our initiatives help communities become more self-reliant and resilient by bridging the gap between tradition and modern tools.",
      "We’re committed to improving farmer livelihoods, reducing rural-to-urban migration, and building ecosystems of opportunity through collaboration, training, and technology.",
    ],
  };
  
  const subSections = [
    {
      title: "KrishiMitra",
      description: [
        "Digital Farming Transformation",
        "KrishiMitra is a digital-first initiative that brings AI, IoT, and accessible education to Nepal’s smallholder farmers.",
        "Through our app and farmer helpline, we offer crop insights, weather alerts, and pest control advice. We also organize e-learning sessions, install IoT soil sensors, and analyze satellite data to support smarter farming.",
        "Our mission is to help farmers increase yields, reduce losses, and make agriculture more sustainable and appealing for the next generation.",
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
      title: "IRD Seed Bank",
      description: [
        "Access to Quality Seeds",
        "To tackle the scarcity of reliable seeds, IRD has launched community-based seed banks across Nepal. These banks distribute quality seeds and saplings while also training farmers on seed preservation and agroforestry techniques.",
        "We prioritize climate-resilient and indigenous crops that are better suited to local conditions and contribute to food security.",
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
        "Reviving Villages Through Rural Stays",
        "Kutir turns abandoned rural homes into homestays, promoting tourism and creating income opportunities for locals. Each Kutir offers travelers a culturally immersive and affordable stay experience while giving villagers new ways to engage with Nepal’s growing tourism market.",
        "We work with homeowners to renovate traditional houses, keeping them simple but comfortable.",
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
        "Hybrid Solar + Electric Dryer",
        "To reduce food spoilage and empower local food processing, Aaditya provides farmers with hybrid solar-electric dryers. These dryers preserve fruits, vegetables, and herbs more efficiently, even in unpredictable weather conditions.",
        "The result is lower waste, higher incomes, and greater food security.",
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
      title: "Aatmanirbhar Initiative",
      description: [
        "Self-Reliant Villages",
        "Aatmanirbhar promotes self-employment and reduces import dependency by helping villages produce daily-use goods using locally available natural resources.",
        "From handmade incense and herbal toothpaste to bamboo products and dried foods, these goods provide healthier alternatives while supporting local jobs and entrepreneurship.",
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
        "Inspiring Innovation at the Grassroots",
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
