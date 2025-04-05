import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

function News() {
  const news = [
    {
      id: 1,
      image: "/assets/images/temp.webp",
      title: "News Title",
      meta_disc:
        "Stanford researchers team up with student-athletes to unlock peak performance",
    },
    {
      id: 2,
      image: "/assets/images/temp.webp",
      title: "News Title",
      meta_disc:
        "Stanford researchers team up with student-athletes to unlock peak performance",
    },
    {
      id: 3,
      image: "/assets/images/temp.webp",
      title: "News Title",
      meta_disc:
        "Stanford researchers team up with student-athletes to unlock peak performance",
    },
    {
      id: 4,
      image: "/assets/images/temp.webp",
      title: "News Title",
      meta_disc:
        "Stanford researchers team up with student-athletes to unlock peak performance",
    },
    {
      id: 5,
      image: "/assets/images/temp.webp",
      title: "News Title",
      meta_disc:
        "Stanford researchers team up with student-athletes to unlock peak performance",
    },
  ];

  return (
    <section className="w-full">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div>
          <h2>News, Stories, and Blogs</h2>
          <p className="!text-[1.6rem] max-w-[70ch]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem aliquam sapiente quis! Sapiente reprehenderit
            assumenda delectus aliquam ipsam inventore
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-12">
          {news.map((news) => (
            <div key={news.id} className="bg-[#f3f3f3]">
              <div className="relative w-full pt-[65%]">
                <Image
                  src={news.image}
                  alt={`${news.title} Logo`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3>{news.title}</h3>
                <p className="text-[#505050]">{news.meta_disc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/news">
            <Button size="large">View More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default News;
