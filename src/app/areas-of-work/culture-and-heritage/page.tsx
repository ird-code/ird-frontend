import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Culture And Heritage",
    imageSrc: "/assets/images/areas-of-work/culture-and-heritage/img_5.webp",
    description: [
      "Nepal, home to one of the world's oldest civilizations, is a treasure trove of diverse cultures, traditions, and heritage sites spread across its majestic landscapes. Yet, the true value of this rich cultural tapestry remains underappreciated and often overlooked. At IRD, we are committed to exploring, documenting, preserving, promoting, and revitalizing Nepal's cultural and historical assets.",
      "Through our dedicated campaigns and initiatives, we strive to ensure that Nepal's intangible heritage—its festivals, folklore, and traditional practices—along with tangible landmarks, including ancient temples, monuments, and art forms, are not only protected but also celebrated. By fostering awareness and encouraging community involvement, we aim to inspire a renewed sense of pride and responsibility among individuals and institutions to safeguard Nepal's cultural legacy for future generations.",
      "Join us in our journey to honor Nepal's past, celebrate its present, and pave the way for a culturally enriched future.",
    ],
  };
  const subSections = [
    {
      title: "Save the Heritage Campaign",
      description: [
        "A campaign to explore, document, and spread awareness about the major heritage sites across Nepal. The campaign is an umbrella that brings all the efforts aimed specifically at documentation of the heritage sites regarding their origin, importance, and present state.",
        "Depending on the type of heritage, we will either create ebooks, videos, or documentaries which will be available to the public free of cost.",
      ],
      imageSrc: "/assets/images/areas-of-work/culture-and-heritage/img_9.webp",
    },
    {
      title: "Bhashalaya",
      description: [
        "A language learning app for all of Nepal's spoken languages (120+). With the help of this app, once completed, we will integrate it in the school curriculum, to introduce a language credit system.",
      ],
      imageSrc: "/assets/images/areas-of-work/culture-and-heritage/img_2.webp",
    },
    {
      title: "Art Exhibitions",
      description: [
        "Our Annual Art Exhibition aims to bring together local artists from diverse backgrounds to celebrate and promote Nepal’s artistic legacy.",
        "This exhibition serves as a dynamic space where artists can share their work, inspire one another, and engage with the community.",
      ],
      imageSrc: "/assets/images/areas-of-work/culture-and-heritage/img_8.webp",
    },
  ];

  return (
    <>
      <Head>
        <title>Culture & Heritage | IRD</title>
        <meta name="description" content="IRD's education programs and services" />
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
                      alt="Education Services"
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

        {subSections.map((section, index) => (
          <section key={index} className="py-16">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-[1280px] mx-auto">
                {section.title && (
                  <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-left">
                    {section.title}
                  </h2>
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

                {section.description?.length > 0 && (
                  <div className="space-y-4 mb-12">
                    {section.description.map((paragraph, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
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
