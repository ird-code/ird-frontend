import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Tourism",
    imageSrc: "/assets/images/areas-of-work/culture-and-heritage/img_6.webp",
    description: [
      "As part of IRD's Travel and Tourism sector, we are developing immersive cultural exchange programs designed for students, researchers, and explorers from universities and institutions worldwide. Our goal is to foster a mutual exchange of experiences, perspectives, and knowledge. We aim to deepen global understanding through direct engagement with Nepal's diverse cultures, traditions, and ways of life.",
    ],
  };

  const culturalExchange = {
    headline: "Immersive Learning & Cultural Exchange in Nepal",
    items: [
      {
        title: "Why Nepal?",
        description:
          "A cultural and geographic mosaic—Nepal offers learning through Himalayan treks, agrarian Terai life, and centuries-old traditions. It's also a neutral geopolitical hub, offering insight into South Asia's complexities.",
      },
      {
        title: "What We Offer",
        description:
          "Programs foster empathy and cross-cultural learning via: 🌏 Academic immersions, 🏡 Village homestays, 🎭 Art/music workshops, 🌿 Eco-travel, 🤝 Volunteer projects.",
      },
      {
        title: "Upcoming Trips & Programs",
        description:
          "Stay tuned for cultural expeditions and educational trips. Open to students, researchers, and global learners seeking deeper connection with Nepal.",
      },
      {
        title: "Oxford Diplomatic Society Trip",
        description:
          "An international academic exchange bringing future leaders to explore Nepal's diplomacy, culture, and development firsthand.",
      },
      {
        title: "Immersive Education Trips for High Schools",
        description:
          "Global exposure through travel. Students gain leadership skills, engage with rural issues, and connect with scholars, sparking changemaking ideas.",
      },
      {
        title: "School Tours Across Nepal",
        description:
          "Turning local school tours into immersive learning. Students explore heritage, interact with diverse communities, and deepen cultural understanding.",
      },
      {
        title: "Why Choose IRD for School Tours?",
        description:
          "Expert itineraries, Educational integration, Deep student engagement. Tours with IRD become meaningful journeys of discovery.",
      },
      {
        title: "Saakar: Turning Potential into Reality",
        description:
          "Empowering youth through immersive programs that inspire impact, leadership, and personal transformation.",
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
                      alt="Tourism"
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

        {culturalExchange.items && culturalExchange.items.length > 0 && (
          <section className="mt-6">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-[1280px] mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                  {culturalExchange.headline}
                </h3>
                <ul className="space-y-4 mb-12">
                  {culturalExchange.items.map((item, id) => (
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