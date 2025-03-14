"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import navData from "@/data/navItems.json"
import styles from "@/styles/ui/navbar.module.css";

const Navbar = () => {
  const dropdownRefs = useRef({});
  
  const [openDropdowns, setOpenDropdowns] = useState({
    areasOfWork: false,
    flagshipPrograms: false
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobileRef = useRef(false);

  // Function to set a ref for a dropdown by key
  const setDropdownRef = useCallback((element, key) => {
    if (element) {
      dropdownRefs.current[key] = element;
    }
  }, []);

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

    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileRef.current) {
        Object.entries(openDropdowns).forEach(([key, isOpen]) => {
          if (isOpen && 
              dropdownRefs.current[key] && 
              !dropdownRefs.current[key].contains(event.target)) {
            setOpenDropdowns(prev => ({ ...prev, [key]: false }));
          }
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdowns]);

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


  // Only toggle dropdown on click for mobile
  const toggleDropdown = (dropdownKey) => (e) => {
    if (isMobileRef.current) {
      e.preventDefault();
      setOpenDropdowns(prev => ({
        ...prev,
        [dropdownKey]: !prev[dropdownKey]
      }));
    }
  };
  
  // Handle hover events for desktop mode
  const handleMouseEnter = (dropdownKey) => () => {
    if (!isMobileRef.current) {
      setOpenDropdowns(prev => ({
        ...prev,
        [dropdownKey]: true
      }));
    }
  };
  
  const handleMouseLeave = (dropdownKey) => () => {
    if (!isMobileRef.current) {
      setOpenDropdowns(prev => ({
        ...prev,
        [dropdownKey]: false
      }));
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
                  height={39}
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
            {navData.navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <li key={item.label} className={styles.navItem}>
                    <Link href={item.href} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                );
              } else if (item.type === "dropdown") {
                return (
                  <li
                    key={item.id}
                    className={`${styles.navItem} ${styles.dropdownContainer}`}
                    ref={(e) => setDropdownRef(e, item.id)}
                    onMouseEnter={handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave(item.id)}
                  >
                    <button
                      className={styles.dropdownButton}
                      onClick={toggleDropdown(item.id)}
                    >
                      {item.label}
                      <span
                        className={`${styles.dropdownIcon} ${
                          openDropdowns[item.id] ? styles.dropdownIconOpen : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    <ul
                      className={`${styles.dropdownMenu} ${
                        openDropdowns[item.id] ? styles.dropdownMenuOpen : ""
                      }`}
                    >
                      {item.menuItems.map((subItem, index) => (
                        <li key={index} className={styles.dropdownItem}>
                          <Link
                            href={subItem.href}
                            className={styles.dropdownLink}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              } else if (item.type === "button") {
                return (
                  <li
                    key={item.label}
                    className={`${styles.navItem} ${styles.ctaItem}`}
                  >
                    <Link href={item.href} className={styles.ctaLink}>
                      <Button size="medium">{item.label}</Button>
                    </Link>
                  </li>
                );
              }
              return null;
            })}
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;