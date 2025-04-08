import React from "react";
import Image from "next/image";
import Head from "next/head";

const EducationReform = () => {
  const mainSection = {
    title: "Education Reform",
    imageSrc: "/assets/images/education-reform.jpg",
    description: [
      "In a world that is rapidly evolving, the majority of schools in Nepal—particularly in rural areas—continue to rely on rigid, traditional methods of education. These systems prioritize rote memorization and exam results as the primary markers of success, often at the expense of students' holistic development and creativity.",
      "At IRD, the Education Reform Initiative bridges this gap by empowering schools to reimagine their curriculum, pedagogy, and teaching practices. We collaborate with schools to foster a dynamic and supportive learning environment that nurtures creativity and promotes students' intellectual, social, emotional, and academic growth.",
    ],
  };

  const sections = [
    {
      title: "Holistic Curriculum Design",
      description:[],
      imageSrc: "/assets/images/holistic-curriculum.jpg",
      features: [
        "Project based Learning Modules: Teaches students teamwork, collaboration, and critical thinking through mini projects (village surveys, filming, art, coding, etc.)",
        "Environmental Education: Teach sustainability, climate change, and eco-friendly practices.",
        "Workshops and Motivation Sessions: Sessions with leaders and experts across disciplines.",
      ],
    },
    {
      title: "Teacher-Student-Parent",
      description:[],
      imageSrc: "/assets/images/t-s-p.jpg",
      features: [
        "Teacher Training: Inquiry-based learning, lesson planning, integration of technology, diverse assessments.",
        "Parent Workshop: Understanding child psychology, supporting learning at home, building emotional resilience.",
        "Collaborative Sessions: Joint sessions for teachers and parents to align efforts in supporting students.",
      ],
    },
    {
      title: "Student Club Formation",
      description:[],
      imageSrc: "/assets/images/student-club.jpg",
      features: [
        "Science and Math Clubs: Engage in experiments, innovations, and problem-solving.",
        "Literary Clubs: Promote reading, creative writing, and public speaking.",
        "Eco Clubs: Promote environmental activism and sustainable practices.",
        "Community Service Clubs: Support local communities through outreach.",
        "Arts and Culture Clubs: Celebrate creativity through arts and performances.",
        "Tech and Innovation Clubs: Focus on coding, robotics, and future tech.",
        "Sports Clubs: Encourage fitness, teamwork, and discipline.",
        "Peer Mentorship Clubs: Senior students support juniors in academics and growth.",
      ],
    },
    {
      title: "Extracurricular Integration",
      description:[],
      imageSrc: "/assets/images/extra-curriculars.webp",
      features: [
        "Dedicated time and infrastructure for sports, music, drama, and more.",
        "Holistic development beyond academics.",
        "Boosts self-esteem, creativity, and emotional intelligence.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Education Reform | IRD</title>
        <meta
          name="description"
          content="IRD&apos;s education reform initiative for holistic student development in Nepal"
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

export default EducationReform;