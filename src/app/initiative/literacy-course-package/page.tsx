import React from "react";
import Image from "next/image";
import Head from "next/head";

const LiteracyCourse = () => {
  const mainSection = {
    title: "Literacy Course Package",
    imageSrc: "/assets/images/literacy-course.jpg",
    description: [
      "The Literacy Course Package is designed to equip students with essential skills to navigate an ever-changing world. Focusing on financial, media, political, and leadership literacy, the courses help students make informed decisions, think critically, and engage responsibly within their communities. IRD's approach combines practical knowledge with real-world applications to ensure students are well-prepared for the challenges they may face.",
      "Through this comprehensive curriculum, IRD empowers students to manage their finances, evaluate media content, understand political systems, and develop strong leadership abilities. By fostering these key skills, the Literacy Course Package aims to prepare students to become active, informed, and responsible citizens, capable of thriving in an interconnected and rapidly evolving society."
    ]
  };

  const sections = [
    {
      title: "Financial Literacy",
      description:[],
      imageSrc: "/assets/images/fin-literacy.jpg",
      features: [
        "Basics of Money Management – Understanding income, expenses, savings, and budgeting. The importance of setting financial goals.",
        "Banking and Financial Systems – How banks, cooperatives, and microfinance institutions work. Steps to open and manage a bank account.",
        "Introduction to Loans and Credit – Types of loans (personal, agricultural, etc.). Risks of debt and managing repayments.",
        "Saving and Investment – Importance of savings for emergencies and future goals. Introduction to simple investment options like savings groups and fixed deposits.",
        "Financial Safety – Recognizing financial fraud and scams. Importance of secure transactions and record-keeping."
      ],
      objective: "Equip students with the skills to manage money, understand financial systems, and make informed financial decisions."
    },
    {
      title: "Media Literacy",
      description:[],
      imageSrc: "/assets/images/media-literacy.jpg",
      features: [
        "Understanding Media – Types of prevalent media: traditional (radio, print) and digital (Facebook, Instagram, TikTok, YouTube, news websites, etc). Role of media in society and its influence on perceptions.",
        "Evaluating Information – Identifying credible sources of news and information. Understanding fake news, misinformation, and propaganda.",
        "Responsible Media Consumption – Ethical use of social media and digital platforms. Managing screen time and preventing cyberbullying.",
        "Creating Media – Basics of photography, video production, and storytelling. Writing and presenting ideas effectively through media."
      ],
      objective: "Enable students to critically analyze media, differentiate between credible and false information, and use media responsibly."
    },
   
   {
      title: "Political Literacy",
      description:[],
      imageSrc: "/assets/images/political-literacy.jpg",
      features: [
        "Basics of Governance – Structure of Nepal's federal, provincial, and local governments. Power, roles, and responsibilities of elected officials.",
        "Major Parties and Their Origin and Ideologies – Nepali Congress, UPN UML, Maoist, Rashtriya Swatantra Party.",
        "Elections and Voting – Learn how elections work and the importance of voting through a mock election of student government. Independent candidate. Avoiding election-related misinformation and understanding political promises.",
        "Civic Engagement – Role of individuals in shaping policies and holding leaders accountable. Advocacy and community organizing for local development."
      ],
      objective: "Foster an understanding of political systems, rights, and responsibilities to encourage active citizenship."
    },
    {
      title: "Leadership Course",
      description:[],
      imageSrc: "/assets/images/leadership-course.jpg",
      features: [
        "Foundations of Leadership – Qualities of an effective leader. Leadership styles and their applications.",
        "Teamwork and Collaboration – Building and leading a team. Effective communication and conflict resolution.",
        "Time and Resource Management – Prioritization, scheduling, and goal-setting. Managing financial and human resources in projects.",
        "Decision-Making and Problem-Solving – Identifying challenges and developing solutions. Risk assessment and adaptability in decision-making.",
        "Leading for Change – Developing and implementing community-focused projects. Motivating others and creating a shared vision."
      ],
      objective: "Build leadership skills and equip students with management strategies to lead projects and initiatives effectively. Our leadership and management modules are inspired by courses at the world's best universities."
    },
  ];

  return (
    <>
      <Head>
        <title>Literacy Course | IRD</title>
        <meta
          name="description"
          content="IRD&apos;s Literacy Course initiative for holistic student development in Nepal"
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

export default LiteracyCourse;