import styles from "@/styles/sections/join.module.css";
import Link from "next/link";
import Button from "@/components/Button";
import joinUsPrograms from "@/data/joinUsPrograms.json";
const JoinsUs = () => {
  return (
    <section className={styles.joinUS}>
      <div className={styles.joinUsWrapper}>
        <div className={styles.header}>
          <h2>Join Us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem aliquam sapiente quis! Sapiente reprehenderit
            assumenda delectus aliquam ipsam inventore
          </p>
        </div>
        <ul className={styles.programLists}>
          {joinUsPrograms.joinUsPrograms.map((item, index) => {
            return (
              <li className={styles.program} key={index}>
                <Link href={item.programLink}>
                  <div className={styles.programHeader}>
                    <h3 className={styles.programName}>{item.programName}</h3>
                  </div>
                  <div className={styles.programDesc}>
                    <p>
                     {item.programDesc}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.moreOpportunities}>
          <Link href="/opportunities">
            <Button size="large">More Opportunities</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinsUs;
