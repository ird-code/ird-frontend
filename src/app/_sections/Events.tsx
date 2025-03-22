import React from "react";
import styles from "@/styles/sections/events.module.css";
import Link from "next/link";
import Button from "@/components/Button";
import eventsLists from "@/data/eventsLists.json";
import Image from "next/image";
const Events = () => {
  return (
    <section className={styles.events}>
      <div className={styles.eventsWrapper}>
        <div className={styles.header}>
          <h2>Events</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem aliquam sapiente quis! Sapiente reprehenderit
            assumenda delectus aliquam ipsam inventore
          </p>
        </div>
           <ul className={styles.eventLists}>
          {eventsLists.eventLists.map((item, index) => {
            return (
              <li className={styles.event} key={index}>
              <div className={styles.eventImageContainer}>
                <Image
                  src={item.eventImage}
                  className={styles.eventImage}
                  alt="Event Photo"
                  width={500}
                  height={500}
                />
              </div>
              <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                  <div className={styles.eventInfo}>
                    <p className={styles.eventTag}>{item.eventTag}</p>
                    <h3 className={styles.eventName}>{item.eventName}</h3>
                    <p className={styles.impDates}>{item.eventDate}</p>
                  </div>
                  <div className={styles.actionButton}>
                    <Link href={item.registerLink}>
                      <Button size="medium">Register</Button>
                    </Link>
                  </div>
                </div>
                <div className={styles.eventDesc}>
                  <p>{item.eventDisc}</p>
                </div>
              </div>
            </li>
            );
          })}
        </ul>
        <div className={styles.moreEventButton}>
          <Link href="/about">
            <Button size="large">Learn More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
