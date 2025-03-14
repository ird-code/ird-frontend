import React from 'react'
import styles from "@/styles/sections/hero.module.css"
import Image from 'next/image'
const HeroSection = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.hero_wrapper}>

        <Image src="/assets/images/IRD_Logo_750x750.png" alt="IRD Logo" width={500} height={500}/>
        </div>
    </div>
  )
}

export default HeroSection