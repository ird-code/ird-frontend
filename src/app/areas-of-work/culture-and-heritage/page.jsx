import { React } from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Culture And Heritage",
    imageSrc: "/assets/images/areas-of-work/culture-and-heritage/img_5.webp",
    description: [
      "Nepal, home to one of the world's oldest civilizations, is a treasure trove of diverse cultures, traditions, and heritage sites spread across its majestic landscapes. Yet, the true value of this rich cultural tapestry remains underappreciated and often overlooked. At IRD, we are committed to exploring, documenting, preserving, promoting, and revitalizing Nepal's cultural and historical assets.",
      "Through our dedicated campaigns and initiatives, we strive to ensure that Nepal's intangible heritage—its festivals, folklore, and traditional practices—along with tangible landmarks, including ancient temples, monuments, and art forms, are not only protected but also celebrated. By fostering awareness and encouraging community involvement, we aim to inspire a renewed sense of pride and responsibility among individuals and institutions to safeguard Nepal's cultural legacy for future generations.",
      "Join us in our journey to honor Nepal's past, celebrate its present, and pave the way for a culturally enriched future.",
    ],
  };

  const heritageProjects = {
    headline: "Save the Heritage Campaign",
    items: [
      {
        title: "Pashupatinath: A Guide to Sacred Journey",
        description:
          "Found lack of authentic info on Pashupati. Created an accessible resource with myths, history, and significance. Status: ✅ Complete.",
      },
      {
        title: "Saalik - Digital Heritage Projects",
        description:
          "Open-source digital tools for safeguarding heritage. Includes OpenAbilekh (digitizes NGMPP microfilms) and OpenLipi (scripts converter & LipiLens). Status: 🟨 Ongoing. Join Saalik to contribute!",
      },
      {
        title: "Bhashalaya App - Linguistic Preservation",
        description:
          "Platform to preserve Nepal's 120+ languages. Features include lessons, grammar, audio/video, stories, and gamified learning. Vision: Keep languages alive for future generations.",
      },
      {
        title: "Vinyaas - Nepali Grammar Tool",
        description:
          "A browser extension for grammar correction. Features short/long vowel adjustments. Future goal: Full grammar correction for better Nepali writing.",
      },
      {
        title: "Annual Art Exhibition (IRD Culture & Heritage)",
        description:
          "Showcases traditional Nepali art. Supports and promotes artists, offering exposure and cultural appreciation. Outcome: Preserves heritage through creativity and community.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Culture & Heritage | IRD</title>
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
                      alt="Culture and Heritage"
                      layout="fill"
                      style={{ objectFit: "cover" }}
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

        {heritageProjects.items && heritageProjects.items.length > 0 && (
          <section className="mt-6">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-[1280px] mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                  {heritageProjects.headline}
                </h3>
                <ul className="space-y-4 mb-12">
                  {heritageProjects.items.map((item, id) => (
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
                        <b>{item.title}:</b> {item.description}
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
