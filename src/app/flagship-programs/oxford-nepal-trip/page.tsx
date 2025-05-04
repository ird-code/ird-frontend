import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Oxford Diplomatic Society Nepal Trip",
    imageSrc: "/assets/images/flagship-programs/Oxford Diplomatic Society Nepal Trip.jpeg",
    description: [
      "The Oxford Diplomatic Society is organizing a 10-day trip to Nepal from April 8 to 18, 2025. This initiative focuses on engaging with Nepal’s key political, diplomatic, and cultural institutions while fostering cross-cultural exchange and intellectual dialogue.",
      "Delegates will collaborate with Panchakanya Rural Municipality in Nuwakot, alongside the Institute for Rural Development (IRD), to draft a framework for local development initiatives. These efforts will center on sustainable tourism, cultural preservation, and regional development.",
      "The trip will also explore Nepal’s unique geopolitical role, its challenges in balancing environmental conservation with economic growth, and its approach to regional diplomacy. Activities include diplomatic discussions, cultural immersion events, and a two-day trek at an altitude of approximately 3,700 meters.",
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
      },
    ],
  };

  const ourImpact = {
    headline: "Our Impact",
    items: [
      {
        title: "Speaker Events & Panels",
        description:
          "Focused on issues related to diplomacy and international relations, hosting experts ranging from business leaders to UN officials and heads of state.",
      },
      {
        title: "Workshops",
        description:
          "Run by experts for our annual Diplomatic Academy, assessed by members of the DPIR and DCE faculty.",
      },
      {
        title: "The Diplomatic Dispatch",
        description:
          "Our well-respected journal available to read on our website for free.",
      },
      {
        title: "Competitions & Initiatives",
        description:
          "Sponsored by international organizations, such as NATO.",
      },
      {
        title: "Domestic & Foreign Trips",
        description:
          "Visits to embassies, government offices, and foreign excursions for cultural exchange and exploring key institutions.",
      },
    ],
  };

  const delegation = {
    headline: "Meet the Delegation",
    description: [
      "The delegation comprises students and alumni from the University of Oxford representing nationalities—United Kingdom, United States, China, India, Japan, and Nepal. Delegates bring expertise across fields such as international relations, public policy, economics, sustainability leadership, healthcare innovation, mental health advocacy, cultural preservation efforts, and emerging technologies.",
      "During the trip, delegates will work closely with the local government of Panchakanya Rural Municipality, Nuwakot, to design and implement a sustainable tourism and cultural exchange plan. Their expertise in fields such as international relations, public policy, economics, and environmental sustainability will contribute to the development of actionable recommendations for the region.",
    ],
    imageSrc: "/assets/images/flagship-programs/oxford-embassy.webp",
  };

  const contactInfo = {
    headline: "Contact Information",
    name: "Asmod Khakurel",
    role: "Area Contact for Nepal, Oxford Alumni Network",
    email: "asmodkhakurel@gmail.com",
    phone: "+977 980-3609207",
  };

  return (
    <>
      <Head>
        <title>Oxford Diplomatic Society Nepal Trip | IRD</title>
        <meta
          name="description"
          content="Oxford Diplomatic Society Nepal Trip is a 10-day trip that offers a unique opportunity to engage with high-level policymakers, diplomats, international organizations, and nonprofits while also exploring Nepal's diplomacy, governance, development, and cultural landscape."
        />
      </Head>

      <main className="min-h-screen pb-16 mt-[10rem]">
        {/* Main Section */}
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
                      alt="Oxford Diplomatic Society Nepal Trip"
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

        {/* ODC Work Section */}
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

        {/* Our Impact Section */}
        <section className="mt-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                {ourImpact.headline}
              </h3>
              <ul className="space-y-4 mb-12">
                {ourImpact.items.map((item, id) => (
                  <li key={id} className="flex items-start">
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

        {/* Meet the Delegation Section */}
        <section className="mt-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                {delegation.headline}
              </h3>
              <div className="space-y-4 mb-12">
                {delegation.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {delegation.imageSrc && (
                <div className="relative w-full aspect-[16/9] max-h-[30rem]">
                  <Image
                    src={delegation.imageSrc}
                    alt="Delegation"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-[1280px] mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                {contactInfo.headline}
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <b>Name:</b> {contactInfo.name}
                </li>
                <li className="text-gray-700">
                  <b>Role:</b> {contactInfo.role}
                </li>
                <li className="text-gray-700">
                  <b>Email:</b>{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li className="text-gray-700">
                  <b>Phone:</b> {contactInfo.phone}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
