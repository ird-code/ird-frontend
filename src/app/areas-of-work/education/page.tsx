import React from "react";
import Image from "next/image";
import Head from "next/head";

const EducationPage = () => {
  const mainSection = {
    title: "Education",
    imageSrc: "/assets/images/areas-of-work/education/img_2.webp", 
    description: [
      "Education in Nepal continues to rely heavily on rote memorization and exam-based success. At IRD, we aim to transform this landscape by promoting holistic development, critical thinking, and community-rooted learning.",
      "Through a diverse range of programs—from curriculum reform and literacy training to mentorship and digital platforms—we work with schools, students, and local governments to reimagine education as an empowering, inclusive, and future-ready journey.",
    ],
  };

  const subSections = [
    {
      title: "Education Reform Initiative",
      description: [
        "Current systems prioritize rote memorization and exam results as the primary markers of success, often at the expense of students’ holistic development and creativity. Our reform initiative bridges this gap by empowering schools to reimagine their curriculum, pedagogy, and teaching practices.",
      ],
      imageSrc: "/assets/images/areas-of-work/education/img_3.webp", 
    },
    {
      title: "Literacy Course Package",
      description: [
        "This package includes Media Literacy, Political Literacy, Financial Literacy, and Leadership training. The package aims to equip students with knowledge and skills that are usually not included in the mainstream curriculum but are vital for a successful future.",
      ],
    },
    {
      title: "Local Curriculum Development",
      description: [
        " IRD collaborates with local governments in municipalities to help and guide them to design local curriculum. Our vision is to foster a deep connection between students and their local heritage, culture, and developmental potential through tailored educational materials (booklets, documentary) that reflect the unique identity of their community.",
      ],
      imageSrc: "/assets/images/areas-of-work/education/img_1.webp", 
    },
    {
      title: "Excel Learning (Ex-L)",
      description: [
        "We are developing an innovative personalized learning platform designed to enhance student education beyond the traditional classroom learning in Nepal that follows a “one-size-fits-all” approach, where all students receive the same assignments, homework, and pace of instruction. This often leaves behind students who need extra support in specific areas. Teachers, burdened with large class sizes and limited time, struggle to provide personalized assistance to each student.",
      ],
      imageSrc: "/assets/images/areas-of-work/education/exl.webp",
    },
    {
      title: "Maitri",
      description: [
        "We are promoting sports and physical activities. Through distribution of sports materials, construction of local sport infrastructures, and organization of sports events, we not only nurtures talent but also strengthens community bonds, enhances well-being, and instills values of teamwork and perseverance.",
      ],
      imageSrc: "/assets/images/areas-of-work/education/maitri.webp", 
    },
    {
      title: "Phonics Project",
      description: [
        "It aims to promote English speaking and reading skills for primary school students using a phonetic based technique which is simpler and more efficient to learn.",
      ],
      imageSrc: "/assets/images/areas-of-work/education/img_4.webp", 
    },
    {
      title: "Mentorship Program",
      description: [
        "Providing a thorough guidance to High school students on their college application to universities in the US and abroad.",
      ],
    },
    {
      title: "Scholarship Program",
      description: [
        "Supporting promising students with high academic performance and weak financial background and gradually mentoring them to gain leadership skills and mindset.",
      ],
    },
    {
      title: "Samvidha",
      description: [
        "A comprehensive digital platform tailored for schools, empowering administrators, students, and parents to manage critical school functions seamlessly. By integrating cutting-edge technology into daily operations, Samvidha reduces administrative burdens, streamlines communication, and enhances the overall educational experience.",
      ],
      imageSrc: "/assets/images/areas-of-work/education/samvidha.webp", 
    },
  ];

  return (
    <>
      <Head>
        <title>Education Services | IRD</title>
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

export default EducationPage;
