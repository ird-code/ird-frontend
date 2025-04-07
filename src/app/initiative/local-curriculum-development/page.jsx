import { React } from "react";
import Image from "next/image";
import Head from "next/head";

const LocalCurriculum = () => {
  const mainSection = {
    title: "Local Curriculum Development",
    imageSrc: "/assets/images/local-cd.webp",
    description: [
      "IRD works in close collaboration with local governments across municipalities to help design and implement tailored local curricula that reflect the unique cultural, historical, and developmental characteristics of each community. By engaging local historians, cultural experts, artisans, and community leaders, we ensure that the educational content is both rich in local relevance and fully aligned with national curriculum standards.",
      "Our vision is to foster a deep, lasting connection between students and their local heritage, culture, and the opportunities for growth and development within their communities. We aim to inspire a strong sense of pride and responsibility in students, encouraging them to actively participate in the preservation of their local culture and contribute to the sustainable development of their environment.",
      "Through this initiative, students are empowered to see the value of their local identity, while also gaining the knowledge and skills needed to address the future needs of their communities."
    ]
  };
  
  const sections = [
    {
      title: "Key Components",
      imageSrc: "/assets/images/component.webp",
      features: [
        "Design Books and Booklets – Create comprehensive books with stories, poems, and essays written by or about local figures. Include content on traditions, local landmarks, agricultural practices, biodiversity, and historical events.",
        "Documentaries – Help film documentaries showcasing local heritage, cultural practices, festivals, oral histories, success stories, and community struggles.",
        "Visual Aids – Make posters, maps, and charts showing the area's geography, flora and fauna, and socio-economic activities."
      ]
    },
    {
      title: "Implementation",
      imageSrc: "/assets/images/implementation.webp",
      features: [
        "Step 1: Needs Assessment – Collaborate with municipalities to understand local priorities and gaps. Analyze the existing curriculum to identify where local content fits.",
        "Step 2: Content Creation – Engage local experts, writers, and educators. Involve students and teachers through contests and workshops.",
        "Step 3: Piloting the Materials – Test content in selected schools. Gather feedback and refine materials for clarity and engagement.",
        "Step 4: Teacher Training – Train teachers to use the materials effectively. Provide tools to lead discussions and community-based activities.",
        "Step 5: Full-Scale Implementation – Distribute materials to all schools in the municipality. Monitor and evaluate usage through reviews and feedback."
      ]
    }
  ];
  
  return (
    <>
      <Head>
        <title>Local Curriculum Development | IRD</title>
        <meta
          name="description"
          content="IRD's Local Curriculum Development for holistic student development in Nepal"
        />
      </Head>

      <main className="min-h-screen pb-16 mt-[10rem]">
        <section className="mt-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-[#850d09] mb-8 text-left">
                {mainSection.title}
              </h1>

              <div className="mb-12">
                <div className="relative w-full aspect-[16/9] max-h-[30rem]">
                  <Image
                    src={mainSection.imageSrc}
                    alt="Education Reform"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-12">
                {mainSection.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <section key={index} className="py-16">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-[1280px] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-[#850d09] mb-8 text-left">
                  {section.title}
                </h2>

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

                {section.description && (
                  <div className="space-y-4 mb-8">
                    {section.description.map((para, idx) => (
                      <p key={idx} className="text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {section.features && (
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#850d09] mb-6 text-left">
                      Key Features
                    </h3>
                    <ul className="space-y-4">
                      {section.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start">
                          <span className="text-[#850d09] mr-3 mt-1">
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
                          <p className="text-gray-700">{feature}</p>
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

export default LocalCurriculum;