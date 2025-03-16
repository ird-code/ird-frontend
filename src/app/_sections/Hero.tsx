import styles from "@/styles/sections/hero.module.css";
const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentContainer}>
            {/* <Image
              src="/assets/images/IRD_Logo_750x750.png"
              alt="IRD Logo"
              width={500}
              height={500}
              className={styles.logo}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
