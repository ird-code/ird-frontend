import React from "react";
import styles from "@/styles/ui/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.top_bar}>
          <div className={styles.top_bar_logo}>
            <Image
              src="/assets/images/IRD_logo_500x250.png"
              width={500}
              height={36}
              alt="IRD Logo"
              aria-label="IRD Logo"
            />
          </div>
          <div className={styles.user_action_btns}>
            <button className={styles.login_btn}>Login in</button>
            <div className={styles.search}>
              <p>O</p>
              <p>Search</p>
            </div>
          </div>
        </div>
        <div className={styles.nav_lists}>
          <ul aria-label="Navigation Menu">
            <li>
              <Link href="/#" aria-label="Events">
                Events
              </Link>
            </li>
            <li>
              <Link href="/#" aria-label="Areas of Work">
                Areas of Work
              </Link>
            </li>
            <li
              aria-label="Initiatives & Campaign"
              className={styles.drop_down}
            >
              Initiatives & Campaigns
              <ul>
                <li>
                  <Link href="/#" aria-label="">
                    Menu Item 1
                  </Link>
                </li>
                <li>
                  <Link href="/#" aria-label="">
                    Menu Item 2
                  </Link>
                </li>
              </ul>
            </li>
            <li
              aria-label="Initiatives & Campaign"
              className={styles.drop_down}
            >
              Flagship Programs
              <ul>
                <li>
                  <Link href="/#" aria-label="">
                    Menu Item 1
                  </Link>
                </li>
                <li>
                  <Link href="/#" aria-label="">
                    Menu Item 2
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#" aria-label="News">
                News
              </Link>
            </li>
            <li>
              <Link href="/#" aria-label="Involve">
                Involve
              </Link>
            </li>
            <li>
              <Link href="/#" aria-label="Gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#" aria-label="About Us">
                About Us
              </Link>
            </li>
            <li>
              <button>Donate</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
