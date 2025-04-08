import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Agriculture",
    imageSrc: "/assets/images/areas-of-work/agriculture/rural_village_farmers.webp",
    description: [
      "Agriculture has long been the backbone of Nepal's economy, yet it faces unprecedented challenges due to shifting societal trends, economic transformations, and declining interest among younger generations. These issues are further exacerbated by a lack of proper policies, incentives, and modern alternatives.",
      "At IRD, we are committed to revitalizing Nepal's agricultural sector by working closely with local governments and farmers to develop sustainable, innovative, and economically viable solutions. Our mission is to make agriculture secure, profitable, and resilient, ensuring that farming remains a thriving and attractive profession for generations to come.",
    ],
  };

  const subSections = [
    {
      title: "Agroforestry",
      description: [
        "A Sustainable Future for Nepal's Agriculture",
        "As soil health declines, farm productivity drops, and farmers struggle to generate sufficient income from their harvests, agroforestry is emerging as a game-changer. Many countries, including India, which shares Nepal's climatic and ecological conditions, have successfully integrated agroforestry to restore soil fertility, enhance biodiversity, and increase farmers' economic resilience.",
        "At IRD, we are committed to promoting agroforestry as a sustainable agricultural practice. By integrating trees with conventional crops, farmers can improve soil health, enhance water retention, protect biodiversity, and create additional income sources through timber, fruits, and medicinal plants. This holistic approach not only strengthens the agricultural sector but also combats climate change and ensures long-term environmental sustainability.",
        "To make agroforestry accessible and beneficial for farmers, IRD plans to collaborate with local and provincial governments to incentivize agroforestry models and encourage widespread adoption. Additionally, we will provide trainings and workshops to educate farmers on the most suitable trees and plants for their land, ensuring they maximize both economic and environmental benefits.",
        "Through research, policy support, and hands-on implementation, IRD's agriculture team will work with local farmers and governments to expand agroforestry across Nepal, empowering communities to build a more resilient, productive, and eco-friendly agricultural system.",
      ],
      imageSrc: "/assets/images/areas-of-work/agriculture/sellers.webp",
      features: [
        { text: "Improved soil health and water retention" },
        { text: "Enhanced biodiversity and ecosystem services" },
        { text: "Additional income sources through diverse products" },
        { text: "Climate change mitigation and adaptation" },
        { text: "Long-term environmental sustainability" },
      ],
    },
    {
      title: "Annual Soil Check Up Camp",
      description: [
        "Empowering Farmers with Soil Health Insights",
        "Soil health is the foundation of successful farming, yet many farmers in Nepal lack access to proper soil testing and analysis. To address this, IRD organizes an Annual Soil Check-Up Camp, providing farmers with scientific insights into their soil's condition to enhance productivity and sustainability.",
        "Through affordable soil testing and expert consultations, farmers will receive personalized recommendations on soil fertility, nutrient balance, and the most suitable crops and fertilizers to use. Our goal is to eliminate guesswork in farming, helping farmers make informed decisions that lead to higher yields, better-quality produce, and long-term soil health.",
      ],
      imageSrc: "/assets/images/areas-of-work/agriculture/consultation.webp",
      features: [
        {
          text: "Soil Testing & Analysis: Farmers get access to professional soil testing to assess fertility, pH levels, and nutrient composition.",
        },
        {
          text: "Personalized Recommendations: Experts provide customized guidance on fertilizers, crop selection, and soil improvement techniques.",
        },
        {
          text: "Affordable & Accessible: IRD collaborates with local governments, universities, and soil labs to ensure cost-effective and widespread participation.",
        },
        {
          text: "Sustainability & Productivity: Encourages environmentally friendly farming by reducing excessive chemical use and improving natural soil health.",
        },
      ],
    },
    {
      title: "KisanConnect (KisCo)",
      description: [
        "Bridging Farmers and Local Consumers",
        "In Nepal's rural villages, every household often has seasonal surplus—whether it's local chickens, fruits like mangoes and bananas, vegetables, gundruk, sesame seeds, or other homegrown products. However, many farmers struggle to sell their surplus because they lack direct access to buyers. On the other hand, consumers who want to purchase fresh, local produce have no easy way to find out who has what available at any given time.",
        "KisanConnect (KisCo) is IRD's digital marketplace designed to connect local farmers and consumers effortlessly. Integrated into the KrishiMitra app, KisCo allows farmers to list their surplus products, making them visible to potential buyers within a chosen radius. Consumers can search for available products, contact the farmer, and purchase directly—eliminating unnecessary middlemen and ensuring fair prices for both parties.",
      ],
      imageSrc: "/assets/images/areas-of-work/agriculture/sellers.webp",
      features: [
        {
          text: "Empowers Farmers: Helps small-scale farmers sell surplus produce easily, turning potential waste into income.",
        },
        {
          text: "Fair & Direct Pricing: Consumers can buy directly from farmers, avoiding inflated vendor prices.",
        },
        {
          text: "Convenience: Buyers can locate nearby products instantly instead of searching door-to-door as it usually happens in the villages.",
        },
        {
          text: "Community Growth: Strengthens local economies by fostering direct farmer-to-consumer connections.",
        },
      ],
    },
    {
      title: "AgroFinance",
      description: [
        "Empowering Farmers Through Sustainable Investment",
        "Access to financial resources is one of the biggest challenges smallholder farmers face in Nepal. AgroFinance, an initiative by IRD, is designed to support farmers living under the extreme poverty line by providing them with the necessary resources to cultivate their land and improve their livelihoods.",
        "Instead of traditional loans, AgroFinance operates through recoverable grants/funding, where farmers receive essential agricultural inputs such as fertilizers, seeds, saplings, and livestock. Once their harvest or livestock yields returns, they gradually repay the initial investment, ensuring a sustainable cycle of support that can help more farmers in need.",
      ],
      imageSrc:"/assets/images/areas-of-work/agriculture/rural_village_farmers.webp",
      features: [
        {
          text: "Access to Essential Farming Inputs - Farmers receive high-quality seeds, fertilizers, saplings, and livestock to start or expand their agricultural activities.",
        },
        {
          text: "Recoverable Grants Model - Farmers return the initial funding once they achieve a successful yield, ensuring continuous support for others.",
        },
        {
          text: "Training & Support - IRD provides guidance, training, and mentorship to help farmers maximize their productivity and income.",
        },
        {
          text: "Building Self-Reliance - By empowering farmers with resources rather than debt, AgroFinance creates long-term sustainability and financial independence.",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Agriculture Services | IRD</title>
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
