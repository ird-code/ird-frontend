import React from "react";
import styles from "@/styles/sections/about.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_wrapper}>
        <div className={styles.our_mission}>
          <div className={styles.mission_desc}>
            <h2>Our Value</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores iste explicabo nihil? Earum nostrum, assumenda
              at id non cupiditate veniam sed, beatae, minima laborum esse
              ipsam. Cupiditate, quasi blanditiis.
            </p>
          </div>
          <div className={styles.mission_image}>
            <Image
              src="/assets/images/IRD_logo_500x250.png"
              alt="IRD Logo"
              width={500}
              height={36}
            />
          </div>
        </div>
        <div className={styles.our_value}>
          <div className={styles.value_image}>
            <Image
              src="/assets/images/IRD_logo_500x250.png"
              alt="IRD Logo"
              width={500}
              height={36}
            />
          </div>
          <div className={styles.value_desc}>
            <h2>Our Value</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores iste explicabo nihil? Earum nostrum, assumenda
              at id non cupiditate veniam sed, beatae, minima laborum esse
              ipsam. Cupiditate, quasi blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
