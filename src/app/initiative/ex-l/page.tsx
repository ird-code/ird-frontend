import React from "react";
import Image from "next/image";
import Head from "next/head";

const ExL = () => {
  const mainSection = {
    title: "Ex-L",
    imageSrc: "/assets/images/initiative/ex-l/ex-l.jpg",
    description: [
      "Excel with Ex-L – Ex-L (Excel Learning) is an innovative personalized learning platform designed to enhance student education beyond the classroom. Aligned with the latest school and national curriculum guidelines, Ex-L supports students from Grade 1 to Grade 10 in mastering concepts, strengthening skills, and improving retention through interactive learning tools.",
      "Why Ex-L? Traditional classroom learning in Nepal follows a 'one-size-fits-all' approach, where all students receive the same assignments, homework, and pace of instruction. This often leaves behind students who need extra support in specific areas. Teachers, burdened with large class sizes and limited time, struggle to provide personalized assistance to each student. Ex-L bridges this gap by offering personalized, interactive, and structured learning experiences."
    ]
  };

  const sections = [
    {
      title: "Ex-L Features",
      description:[],
      imageSrc: "/assets/images/initiative/ex-l/exl-media1.jpg",
      features: [
        "Personalized Learning Paths – Students can practice targeted concepts, math skills, and critical information at their own pace.",
        "Interactive Tools for Better Retention – Flashcards, quizzes, and self-tests help students reinforce learning in a fun and engaging way.",
        "Guided Progression from Basic to Advanced – A structured question bank covering all levels ensures step-by-step growth.",
        "Workshops and Motivation Sessions – Frequent sessions with leaders and experts across various disciplines.",
        "Reward Reinforcement Techniques – Achievement badges and progress tracking to keep students motivated.",
        "Quick Access to Key Information – Clear and concise explanations make learning more efficient.",
        "Teacher-Assigned Individual Homework – Custom tasks tailored to student needs for deeper understanding.",
        "Skill-Based & Conceptual Strengthening – Modules that build fundamental skills and conceptual clarity."
      ]
    },
   {
      title: "Assessment",
      description:[],
      imageSrc: "/assets/images/initiative/ex-l/exl-media.jpg",
      features: [
        "Track Student Progress – Real-time assessments help teachers monitor growth and pinpoint challenges.",
        "Assign Customized Practice Modules – Tailored exercises ensure every student gets the support they need.",
        "Environmental Education – Emphasis on sustainability, climate change, and eco-practices.",
        "School-Wide Portal for Collaboration – Dedicated Ex-L portals enhance communication and community."
      ]
    },
   
  ];
  const topRowSubjects = [
    "Mathematics",
    "Science",
    "English Grammar",
    "Nepali Grammar",
  ];

  const bottomRowSubjects = ["Sanskrit Language", "Social Studies"];

  return (
    <>
      <Head>
        <title>Ex-L | IRD</title>
        <meta
          name="description"
          content="IRD&apos;s Ex-L initiative for holistic student development in Nepal"
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
        <section className="pt-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#850d09]">
                Subjects
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {topRowSubjects.map((subject, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-300 rounded-xl shadow-lg py-10 px-6 text-center text-xl font-semibold"
                  >
                    {subject}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {bottomRowSubjects.map((subject, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-300 rounded-xl shadow-lg py-10 px-6 text-center text-xl font-semibold"
                  >
                    {subject}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ExL;