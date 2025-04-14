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

  const subSections = [
    {
      title: "Cultural Exchange Programs",
      description: [
        "We are developing immersive cultural exchange programs designed for students, researchers, and explorers from universities and institutions worldwide. Our goal is to foster a mutual exchange of experiences, perspectives, and knowledge, deepening global understanding through direct engagement with Nepal’s diverse cultures, traditions, and ways of life.",
      ],
    },
    {
      title: "Immersive Education Trips for High School",
      description: [
        " We believe that education extends beyond the classroom. Our Immersive Education Trips offer high schools from Nepal and abroad a unique opportunity to provide their students with global exposure, cultural immersion, and real-world learning experiences.",
      ],
      imageSrc: "/assets/images/areas-of-work/tourism/trip.webp",
    },
    {
      title: "School Tour Consulting and Advising",
      description: [
        " In Nepal, students up to grade 10 rarely get opportunities to explore their own country, with annual school tours being one of the few chances for them to travel beyond their hometowns and unfortunately mostly they end up as sightseeing and enjoyment trips. At IRD, we believe these tours should be more than just sightseeing—they should be transformative learning experiences that broaden perspectives, deepen cultural understanding, and foster a sense of connection to Nepal’s heritage.",
      ],
      imageSrc: "/assets/images/areas-of-work/tourism/img_1.webp",
    },
    {
      title: "Project Saakar",
      description: [
        "Turning tourism potential into reality. We collaborate with the local government to identify and develop tourism prospects in the area by integrating it into the economic and education framework of the region.",
      ],
      imageSrc: "/assets/images/areas-of-work/tourism/img_4.webp",
    },
  ];

  return (
    <>
      <Head>
        <title>Tourism| IRD</title>
        <meta name="description" content="" />
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
