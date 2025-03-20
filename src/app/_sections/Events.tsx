import React from "react";
import styles from "@/styles/sections/events.module.css";
import Link from "next/link";
import Button from "@/components/Button";
import eventsLists from "@/data/eventsLists.json";
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
        {/* <ul className={styles.events}>
          <li className={styles.event}>
            <div className={styles.eventHeader}>
              <div className={styles.eventInfo}>
                <h3 className={styles.eventName}>Event Name</h3>
                <p className={styles.impDates}>2024, Jan 7 - 2025 Jan 3</p>
              </div>
              <div className={styles.actionButton}>
                <Link href="/register">
                  <Button size="medium">Register</Button>
                </Link>
              </div>
            </div>
            <div className={styles.eventDesc}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit aut voluptatibus ab rem magnam harum aliquid
                voluptates officia aliquam nisi minus voluptate sunt, officiis
                voluptas consequuntur quisquam, laudantium adipisci saepe. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </li>
          <li className={styles.event}>
            <div className={styles.eventHeader}>
              <div className={styles.eventInfo}>
                <h3 className={styles.eventName}>Event Name</h3>
                <p className={styles.impDates}>2024, Jan 7 - 2025 Jan 3</p>
              </div>
              <div className={styles.actionButton}>
                <Link href="/register">
                  <Button size="medium">Register</Button>
                </Link>
              </div>
            </div>
            <div className={styles.eventDesc}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit aut voluptatibus ab rem magnam harum aliquid
                voluptates officia aliquam nisi.
              </p>
            </div>
          </li>
        </ul> */}
           <ul className={styles.eventLists}>
          {eventsLists.eventLists.map((item, index) => {
            return (
              <li className={styles.event} key={index}>
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
