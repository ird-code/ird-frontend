import React from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Oxford Diplomatic Society's Nepal Trip",
    subtitle: "April 8–18, 2025",
    description: [
      "Diplomatic meetings, cultural exchanges, and political engagement in Nepal.",
    ],
    imageSrc: "/assets/images/flagship-programs/oxford-bg.webp",
  };

  const tripOverview = [
    "The Oxford Diplomatic Society is organizing a 10-day trip to Nepal from April 8 to 18, 2025. This initiative focuses on engaging with Nepal’s key political, diplomatic, and cultural institutions while fostering cross-cultural exchange and intellectual dialogue.",
    "Delegates will collaborate with Panchakanya Rural Municipality in Nuwakot, alongside the Institute for Rural Development (IRD), to draft a framework for local development initiatives. These efforts will center on sustainable tourism, cultural preservation, and regional development.",
    "The trip will also explore Nepal’s unique geopolitical role, its challenges in balancing environmental conservation with economic growth, and its approach to regional diplomacy. Activities include diplomatic discussions, cultural immersion events, and a two-day trek at an altitude of approximately 3,700 meters.",
  ];

  const ODCWork = {
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

  return (
    <>
      <Head>
        <title>Oxford Diplomatic Society Nepal Trip – April 8–18, 2025</title>
        <meta
          name="description"
          content="The Oxford Diplomatic Society's Nepal Trip is a 10-day journey focusing on diplomatic meetings, cultural exchanges, and political engagement in Nepal."
        />
      </Head>

      <main className="min-h-screen pb-16">
        {/* Hero Section */}
        <section className="relative min-h-[600px] mt-[80px]">
          <div className="relative w-full h-full min-h-[600px]">
            <Image
              src={mainSection.imageSrc}
              alt="Nepal Trip Banner"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-[60px] text-white font-bold mb-8 drop-shadow-lg">
                Oxford Diplomatic Society&apos;s Nepal Trip
              </h1>
              <h2 className="text-4xl md:text-[44px] text-white mb-6 drop-shadow-lg">
                April 8–18, 2025
              </h2>
              <p className="text-[20px] text-white drop-shadow">
                {mainSection.description[0]}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center py-12">
                <a
                  href="#schedule"
                  className="bg-yellow-400 uppercase tracking-wide text-blue-900 text-sm md:text-[17px] py-2 px-4 md:py-[17px] md:px-[37px] rounded hover:bg-opacity-80"
                >
                  Scroll to Schedule
                </a>
                <a
                  href="https://calendar.google.com/calendar/render?cid=d48247634828fad41e38038c23eebb1a8629a939971f034e710f07bbfac4ecf0@group.calendar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white uppercase tracking-wide text-blue-900 text-sm md:text-[17px] py-2 px-4 md:py-[17px] md:px-[37px] rounded hover:bg-gray-100"
                >
                  Add Trip to Calendar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trip Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-[45px] text-blue-900 mb-6 text-center">
              Trip Overview
            </h2>
            <div className="space-y-4 mb-12">
              {tripOverview.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        {ODCWork.items && ODCWork.items.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h3 className="text-[28px] font-semibold mb-4 text-blue-900">
                {ODCWork.headline}
              </h3>
              <ul className="list-decimal list-inside space-y-4">
                {ODCWork.items.map((item, id) => (
                  <li key={id} className="text-gray-700">
                    <b>{item.title}: </b>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Google Calendar Section */}
        <section id="schedule" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-[45px] text-blue-900 mb-6 text-center">
              Trip Schedule
            </h2>
            <div className="overflow-x-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=d48247634828fad41e38038c23eebb1a8629a939971f034e710f07bbfac4ecf0@group.calendar.google.com&dates=20250407/20250414&mode=WEEK"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>
            <div className="mt-12 text-center">
              <a
                href="https://calendar.google.com/calendar/render?cid=d48247634828fad41e38038c23eebb1a8629a939971f034e710f07bbfac4ecf0@group.calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-bold text-[17px] py-[17px] px-[37px] rounded hover:bg-blue-700"
              >
                Add to Google Calendar
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-[45px] text-blue-900 mb-6 text-center">Contact</h2>
            <div className="mb-8">
              <h3 className="text-[32px] font-semibold mb-2">Contact Information</h3>
              <p className="mb-2"><strong>Asmod Khakurel</strong></p>
              <p className="mb-2">Area Contact for Nepal, Oxford Alumni Network</p>
              <p className="mb-2">
                Email:{" "}
                <a
                  href="mailto:asmodkhakurel@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  asmodkhakurel@gmail.com
                </a>
              </p>
              <p className="mb-2">Phone / WhatsApp: +977 980-3609207</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;