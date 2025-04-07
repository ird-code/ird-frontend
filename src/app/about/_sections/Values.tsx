import { GiH2O } from "react-icons/gi";

const Values = () => {
  const valuesData = [
    {
      id: 1,
      title: "Compassion",
      description:
        "We believe in peace, harmony, and universal well-being. We consider the welfare of all, ensuring our programs bring no harm to individuals, society, or the environment, promoting a prosperous coexistence.",
    },
    {
      id: 2,
      title: "Trust",
      description:
        "Trust is the foundation of everything we do. Whether with our partners, communities, or government agencies, we uphold the confidence placed in us with integrity and dedication.",
    },
    {
      id: 3,
      title: "Commitment",
      description:
        "We take on challenges with patience and resilience, staying dedicated to our goals until real solutions are achieved. Our persistence drives meaningful progress.",
    },
    {
      id: 4,
      title: "Collaboration",
      description:
        "True transformation happens when we work together. We believe in the power of collective effort and actively seek collaborations to amplify social impact.",
    },
    {
      id: 5,
      title: "Accountability",
      description:
        "We honor the trust and contributions of all involved by ensuring transparency and responsibility in our work. Every effort counts, and every role matters.",
    },
  ];

  return (
    <main className="py-16 overflow-hidden max-w-[1280px] mx-auto relative">
      <h1>Our Values</h1>
      <p className="!text-[1.6rem] max-w-[70ch] mb-16">
        Empowering and guiding the local leadership and communities to build the
        foundation for sustainable rural development rooted in Nepal's ethos.
      </p>
      <div>
        {valuesData.map((value, index) => (
          <div
            key={value.id}
            className={`mb-24 ${
              index % 2 === 0 ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
            } md:max-w-[600px] bg-[#f3f3f3] p-10`}
          >
            <h2 className="!text-[2rem]">{value.title}</h2>
            <div className="mx-auto">
              <p className="!text-[1.6rem]">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Values;
