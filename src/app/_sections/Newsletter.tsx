import React from "react";
import styles from "@/styles/sections/newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <div className={styles.organizationTitle}>
          <h3>Institute For Rural Development</h3>
        </div>

        <div>
          <div className={styles.newsletterHeading}>
            <h2>
              Subscribe to our
              <br /> newsletter
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

        <img
          className={`${styles.decorationImage} ${styles.decorationImageTop}`}
          src="/assets/images/Blue_Shade.png"
          alt="Decorative blue shade"
        />
        <img
          className={`${styles.decorationImage} ${styles.decorationImageBottom}`}
          src="/assets/images/Red_Shade.png"
          alt="Decorative red shade"
        />
      </div>
    </section>
  );
};

export default Newsletter;
