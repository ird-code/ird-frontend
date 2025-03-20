import Image from "next/image";
import styles from "@/styles/about/about-section.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>Institute for Rural Development</h1>

      <p className={styles.description}>
      Institute for Rural Development (IRD) is a non-for-profit organization registered 
      under the Government of Nepal. IRD acts as a platform to channelize and direct knowledge, 
      resources, and authorities to drive holistic development in the grassroot level.
      </p>

      {/* Our Mission Section */}
      <div className={styles.ourMission}>
        <div className={styles.desc}>
          <h2>Our Mission</h2>
          <p>
          Empowering and guiding the local leadership, youths, and communities to build
           the foundation for sustainable rural development rooted in Nepal’s ethos
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/assets/images/Nepal_Flag_Circle_500x500.png"
            alt="Nepal Flag Circle"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
