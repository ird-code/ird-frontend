import React from "react";
import Image from "next/image";
import joinUsPrograms from "@/data/joinUsPrograms.json";

import styles from "@/styles/pages/involve.module.css";
import Button from "@/components/Button";

const AreasOfWork = () => {
  return (
    <section className={styles.involve}>
      <div className={styles.involveWrapper}>
        <div className={styles.heroSection}>
          <h2>Join IRD</h2>
          <div className={styles.heroSectionContent}>
            <div className={styles.heroSectionDesc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Voluptates minus
                quas iusto officiis fuga, error tenetur ipsum magnam ad,
                veritatis dolorem laudantium ratione repellat possimus. Expedita
              </p>
              <p>
                eaque fugiat deserunt exercitationem. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Alias et cumque debitis in illo
                libero, pariatur aspernatur consequatur dicta, temporibus
                reprehenderit soluta maiores, fuga tempora. Veritatis ipsa
                maiores incidunt voluptatum. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit.
              </p>
            </div>
            <div className={styles.heroSectionImage}>
              <Image
                src="/assets/images/temp.webp"
                alt="Join Us Hero Image"
                className={styles.image}
                fill
                priority
              />
            </div>
          </div>
        </div>
        <ul className={styles.involveLists}>
          {joinUsPrograms.joinUsPrograms.map((item, index) => (
            <li className={styles.involveList} key={index}>
              <div className={styles.involveListInfo}>
                <h3 className={styles.involveListHeadline}>{item.programName}</h3>
                <p className={styles.involveListDesc}>
                 {item.programDesc}
                </p>
                <Button size="medium">Join Us</Button>
              </div>
              <div className={styles.involveListImage}>
                <Image
                  src={item.programImage}
                  alt="Join Us Hero Image"
                  className={styles.image}
                  fill
                  priority
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AreasOfWork;
