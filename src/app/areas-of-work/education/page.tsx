import { React } from "react";
import Image from "next/image";
import Head from "next/head";

const Page = () => {
  const mainSection = {
    title: "Education Reform Initiative (ERI)",
    imageSrc: "/assets/images/areas-of-work/education/img_1.webp",
    description: [
      "The Education Reform Initiative (ERI) is transforming education in Nepal, with a particular focus on rural areas. ERI moves away from traditional rote learning and embraces a holistic, student-centered approach. It nurtures intellectual, emotional, social, and creative development through a range of programs.",
      "Key components of ERI include a holistic curriculum that encourages project-based learning, integrates local context and environmental education, and involves students in workshops with leaders and experts. The initiative also emphasizes teacher and parent training, promoting skills for effective teaching and support at home.",
      "Additional elements include student clubs, extracurricular activities like sports tournaments and field trips, and courses in financial, media, and political literacy. Local curriculum development and the Maitreyi sports initiative further contribute to empowering communities. With tools like Samvidha (for school administration) and Ex-L (for personalized learning), ERI is creating a more inclusive and engaging education system that prepares students for the future.",
    ],
  };

  const eriProjects = {
    headline: "ERI Key Projects",
    items: [
      {
        title: "Project-Based Learning",
        description:
          "Encourages creativity and critical thinking by having students work on real-world projects, fostering skills needed for the future.",
      },
      {
        title: "Teacher & Parent Training",
        description:
          "Teachers are trained in holistic teaching strategies, while parents are empowered with tools to support learning and emotional development at home.",
      },
      {
        title: "Student Clubs & Extra-Curricular Activities",
        description:
          "Clubs for science, arts, sports, and leadership provide students with collaborative opportunities. Extra-curricular activities enhance life skills through tournaments, performances, and community engagement.",
      },
      {
        title: "Literacy Courses",
        description:
          "Financial, media, and political literacy courses equip students with crucial life skills, while leadership and management courses prepare them for future careers.",
      },
      {
        title: "Local Curriculum Development",
        description:
          "Collaborates with local governments to develop a curriculum reflecting local heritage and addressing regional needs.",
      },
      {
        title: "Maitreyi - The Spirit of Sports",
        description:
          "Promotes physical activity and strengthens community bonds through sports events and rural infrastructure development.",
      },
      {
        title: "Samvidha - School Administration Software",
        description:
          "A digital platform to streamline school management, including student records, communication, and financial transactions.",
      },
      {
        title: "Ex-L - Personalized Learning Platform",
        description:
          "An interactive platform providing personalized learning paths, teacher-assigned tasks, and real-time student progress tracking.",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Education Reform Initiative | IRD</title>
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
                      alt="Education Reform Initiative"
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

        {eriProjects.items && eriProjects.items.length > 0 && (
          <section className="mt-6">
            <div className="container mx-auto px-4 md:px-8">
              <div className="max-w-[1280px] mx-auto">
                <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-6 text-left">
                  {eriProjects.headline}
                </h3>
                <ul className="space-y-4 mb-12">
                  {eriProjects.items.map((item, id) => (
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
