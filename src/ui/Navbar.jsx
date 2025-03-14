"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

import styles from "@/styles/ui/navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const isMobileRef = useRef(false);

  // Check If we are in mobile view or not
  useEffect(() => {
    const checkMobile = () => {
      isMobileRef.current = window.innerWidth <= 970;
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

// check if we have scrolled more than 100vh
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight - 120;      
      setIsScrolled(scrollPosition > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the dropdown when we click outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileRef.current && 
          dropdownRef.current && 
          !dropdownRef.current.contains(event.target)
        ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 970 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const toggleDropdown = (e) => {
    // Only toggle dropdown on click for mobile
    if (isMobileRef.current) {
      e.preventDefault();
      setIsDropdownOpen(!isDropdownOpen);
    }
  };
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav 
      className={`${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`} 
      aria-label="Main Navigation"
    >
      <div className={styles.navbarContainer}>
        <div className={styles.topBar}>
          <div className={styles.topBarWrapper}>
            <div className={styles.logoContainer}>
              <Link href="/">
                <Image
                  src="/assets/images/IRD_logo_500x250.png"
                  width={500}
                  height={36}
                  alt="IRD Logo"
                  priority
                />
              </Link>
            </div>
            
            <div className={styles.actionButtons}>
              <button className={styles.loginButton} aria-label="Log in">
                Log in
              </button>
              
              <div className={styles.searchBox} aria-label="Search">
                <span className={styles.searchIcon}>🔍</span>
                <span className={styles.searchText}>Search</span>
              </div>
              
              <button
                className={styles.menuToggle}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? "✕" : "☰"}
                <span className={styles.menuToggleText}>
                  {isMobileMenuOpen ? "Close" : "Menu"}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div 
          className={`${styles.mainNav} ${isMobileMenuOpen ? styles.mainNavOpen : ""}`}
        >
          <div className={styles.mainNavWrapper}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/events" className={styles.navLink}>
                  Events
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/work" className={styles.navLink}>
                  Areas of Work
                </Link>
              </li>
              
              <li 
                className={`${styles.navItem} ${styles.dropdownContainer}`}
                ref={dropdownRef}
                onMouseEnter={() => !isMobileRef.current && setIsDropdownOpen(true)}
                onMouseLeave={() => !isMobileRef.current && setIsDropdownOpen(false)}
              >
                <button 
                  className={styles.dropdownButton}
                  onClick={toggleDropdown}
                >
                  Flagship Programs
                  <span className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.dropdownIconOpen : ''}`}>▼</span>
                </button>
                
                <ul 
                  className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ""}`}
                  aria-label="Flagship Programs submenu"
                >
                  <li className={styles.dropdownItem}>
                    <Link href="/" className={styles.dropdownLink}>
                      Menu Item 1
                    </Link>
                  </li>
                  <li className={styles.dropdownItem}>
                    <Link href="/" className={styles.dropdownLink}>
                      Menu Item 2
                    </Link>
                  </li>
                </ul>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/news" className={styles.navLink}>
                  News
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/involve" className={styles.navLink}>
                  Involve
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/gallery" className={styles.navLink}>
                  Gallery
                </Link>
              </li>
              
              <li className={styles.navItem}>
                <Link href="/about" className={styles.navLink}>
                  About Us
                </Link>
              </li>
              
              <li className={`${styles.navItem} ${styles.ctaItem}`}>
                <Link href="/donate" className={styles.ctaLink}>
                  <Button size="medium">Donate</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;