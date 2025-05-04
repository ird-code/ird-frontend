import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Oxford Diplomatic Society Nepal Trip",
    imageSrc: "/assets/images/flagship-programs/Oxford Diplomatic Society Nepal Trip.jpeg",
    description: [
      "We are thrilled to announce the Oxford Diplomatic Society's upcoming international trip to Nepal, taking place from April 8-18, 2025. This 10-day journey offers a rare opportunity for students and members to engage directly with high-level policymakers, diplomats, international organizations, and nonprofits. Participants will explore Nepal's dynamic landscape of diplomacy, governance, development, and culture through a series of official meetings, site visits, and immersive experiences.",
      "Led by Asmod Khakurel, Director of the Tourism and Cultural Exchange department at IRD and a valued member of the Society, this trip marks a milestone as the first official exchange program organized in partnership with IRD. From discussions at the Prime Minister's Office to cultural walks through the historic Kathmandu Valley, the program promises a rich blend of intellectual engagement and cultural discovery.",
    ],
  };
  
  const ODCWork = {
    headline: "What Do Oxford Diplomatic Society Do?",
    items: [
      {
        title: "Workshops",
        description:
          "The Oxford Diplomatic Society offers interactive workshops led by experienced practitioners across a range of fields, providing members with practical skills and valuable tools. From mastering negotiations and policy drafting to refining speechwriting, our sessions are designed to prepare members for real-world diplomatic challenges.",
      },
      {
        title: "Social Events",
        description:
          "The Society hosts bi-weekly socials that bring together students from across Oxford's colleges and disciplines. These relaxed gatherings provide a space to connect, exchange ideas, and build community over drinks and shared experiences.",
      },
      {
        title: "Trips & Excursions",
        description:
          "Leveraging its proximity to London, the Society organizes exclusive visits to embassies, think tanks, and multilateral organizations. These excursions offer members direct engagement with professionals in diplomacy and international affairs.",
      },
      {
        title: "Events & Networking",
        description:
          "Through speaker events, panels, and networking sessions, the Society facilitates conversations with leading diplomats, scholars, and global thinkers. These events are designed to inspire dialogue and shape the future of diplomacy.",
      }
    ],
  };

  return (
    <>
      <Head>
        <title>Oxford Diplomatic Society Nepal Trip | IRD</title>
        <meta name="description" content="Oxford Diplomatic Society Nepal Trip is a 10-day trip that offers a unique opportunity to engage with high-level policymakers, diplomats, international organizations, and nonprofits while also exploring Nepal's diplomacy, governance, development, and cultural landscape." />
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
                      objectFit="contain"
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

        {typeof ODCWork !== "undefined" &&
          ODCWork.items &&
          ODCWork.items.length > 0 && (
            <section className="mt-6">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-[1280px] mx-auto">
                  <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                    {ODCWork.headline}
                  </h3>
                  <ul className="space-y-4 mb-12">
                    {ODCWork.items.map((item, id) => (
                      <li key={id} className="flex items-start">
                        <p className="text-gray-700"><b>{item.title}:  </b>{item.description}</p>
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
