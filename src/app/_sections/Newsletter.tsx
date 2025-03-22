import React from "react";
import styles from "@/styles/sections/newsletter.module.css";
import Image from "next/image";
const Newsletter = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <div className={styles.organizationLogo}>
          <Image src="/assets/images/IRD_logo_500x250.png" width={500} height={500} alt="IRD Logo" className={styles.logo}/>
        </div>

        <div className={styles.newsletterContent}>
          <div className={styles.newsletterHeading}>
            <h2>
              Subscribe to our
              <br className={styles.desktopBreak} /> newsletter
            </h2>
          </div>

          <div className={styles.contentWrapper}>
            <form className={styles.subscriptionForm}>
              <input
                className={styles.inputField}
                type="text"
                placeholder="First Name"
                aria-label="First Name"
              />
              <input
                className={styles.inputField}
                type="text"
                placeholder="Last Name"
                aria-label="Last Name"
              />

              <input
                className={`${styles.inputField} ${styles.emailField}`}
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
              <button type="submit" className={styles.subscribeButton}>
                Subscribe
              </button>
            </form>

            <div className={styles.contactInfo}>
              <p>Basantapur, Kathmandu, Nepal</p>
              <p>contact@tempgmail.com</p>
              <p>+977 980943605</p>
              <div className={styles.socialMediaLinks}>
                <p>FB</p>
                <p>TW</p>
                <p>IN</p>
                <p>LI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;