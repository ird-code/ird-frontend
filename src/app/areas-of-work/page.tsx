import React from "react";
import Image from "next/image";
import Link from "next/link";
import areasOfWork from "@/data/areasOfWork.json";
import styles from "@/styles/pages/areasOfWork.module.css";
import { IoIosArrowForward } from "react-icons/io";

const AreasOfWork = () => {
  return (
    <section className={styles.areasOfWork}>
      <div className={styles.areasOfWorkWrapper}>
        <div className={styles.header}>
          <h2>Areas of Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <ul className={styles.list}>
            {areasOfWork.areasOfWork.map((item, index) => (
              <li className={styles.item} key={index}>
                <div className={styles.imageContainer}>
                    <Image
                      src="/assets/images/temp.webp"
                      fill
                      alt={`${item.initiativeName}`}
                      loading="lazy"
                      className={styles.initiativeImage}
                    />
                </div>

                <div className={styles.details}>
                  <div className={styles.info}>
                    <h3 className={styles.title}>{item.initiativeName}</h3>
                    <p className={styles.description}>{item.initiativeDesc}</p>
                  </div>

                  {item.initiativeLists.length > 0 && (
                    <ul className={styles.links}>
                      {item.initiativeLists.map((list, listIndex) => (
                        <li
                          key={`link-${listIndex}`}
                          className={styles.linkItem}
                        >
                          <Link
                            href={list.initiativeListLink}
                            className={styles.initiativeListLink}
                          >
                            <p>{list.initiativeListName}</p>
                            <p>
                              <IoIosArrowForward />
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AreasOfWork;
