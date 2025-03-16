import React from "react";
import styles from "@/styles/sections/about.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.ourMission}>
          <div className={styles.desc}>
            <h2>Our Value</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores iste explicabo nihil? Earum nostrum, assumenda
              at id non cupiditate veniam sed, beatae, minima laborum esse
              ipsam. Cupiditate, quasi blanditiis.
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
        <div className={styles.ourValue}>
          <div className={styles.image}>
            <Image
              src="/assets/images/Nepal_Flag_Circle_500x500.png"
              alt="Nepal Flag Circle"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.desc}>
            <h2>Our Mission</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores iste explicabo nihil? Earum nostrum, assumenda
              at id non cupiditate veniam sed, beatae, minima laborum esse
              ipsam. Cupiditate, quasi blanditiis.
            </p>
          </div>
        </div>
        <div className={styles.moreEventButton}>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
