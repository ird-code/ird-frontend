import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "One App, One Tap",
    imageSrc: "/assets/images/areas-of-work/flagship-programs/one-app-one-tap/One-Tap.png",
    description: [
      "Transforming Rural Nepal Through Digital Innovation",
      "One App, One Tap is a flagship initiative of IRD, designed to bridge the digital divide in rural Nepal by developing critical digital infrastructure, services, accessibility, and literacy. In many villages, people struggle to access and utilize digital tools, making their lives less efficient and more challenging as the world rapidly evolves",
      "The goal of One App, One Tap is to collaborate with local governments, schools, and community organizations to ensure universal access and adoption of these vital apps. Through door-to-door outreach, school campaigns, and hands-on digital literacy training, we will ensure that every student and household learns how to use these tools effectively.",
    ],
  };

  const Impact = {
    headline:
      "One App, One Tap will empower villages through powerful digital tools:",
    items: [
      {
        title: "Safety & Security",
        description:
          "Surakshya: A human safety app, especially designed for women's protection and emergency response.",
      },
      {
        title: "Health & Well-being",
        description:
          "Aayush: A health app providing medical guidance, telehealth support, and emergency health services.",
      },
      {
        title: "Agriculture & Livelihood",
        description:
          "Krishimitra: A smart farming app connecting farmers to market access, weather updates, and expert advice.",
      },
      {
        title: "Disaster Preparedness",
        description:
          "Disaster Warning System (DWS): A real-time disaster alert app to ensure communities are informed and prepared.",
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

        {typeof Impact !== "undefined" &&
          Impact.items &&
          Impact.items.length > 0 && (
            <section className="py-6">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-[1280px] mx-auto">
                  <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                    {Impact.headline}
                  </h3>
                  <ul className="space-y-4 mb-12">
                    {Impact.items.map((item, id) => (
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
                        <p className="text-gray-700">
                          <b>{item.title}: </b>
                          {item.description}
                        </p>
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
