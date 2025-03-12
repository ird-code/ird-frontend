"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ui/navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const ToggleNavbar = () => {
    setisNavOpen(!isNavOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_wrapper}>
        <div className={styles.navbar_logo}>
          <button
            className={styles.toggle_btn}
            onClick={ToggleNavbar}
          >
            {isNavOpen ? "Open" : "Close"}
          </button>
          <Link href="/" aria-label="Go to Home Page">
            <Image
              src="/irdlogo_300x180.webp"
              width={120}
              height={72}
              alt="IRD Logo"
              priority
            />
          </Link>
        </div>

        <div className={`${isNavOpen ? styles.active_navbar_lists : styles.non_active_navbar_lists}`}>
          <ul>
            <button className={`${isNavOpen ? styles.close_navbar : ""}`} onClick={ToggleNavbar}>Close</button>
            <li>
              <Link href="/" aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" aria-label="About Us">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/events" aria-label="Events">
                Events
              </Link>
            </li>
            <li>
              <Link href="/fields" aria-label="Fields">
                Fields
              </Link>
            </li>
            <li>
              <Link href="/initiatives" aria-label="Initiatives">
                Initiatives
              </Link>
            </li>
            <li>
              <Link href="/flagships" aria-label="Flagships">
                Flagships
              </Link>
            </li>
            <li>
              <Link href="/involve" aria-label="Get Involved">
                Involve
              </Link>
            </li>
            <li>
              <Link href="/blogs" aria-label="Our Blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.donate_btn}>
          <Link href="/donate" passHref>
            <button aria-label="Donate to IRD">Donate Now</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
