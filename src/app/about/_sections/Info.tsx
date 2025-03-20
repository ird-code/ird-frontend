import styles from "@/styles/about/info.module.css"
import Image from "next/image"

export default function Info() {
  return (
    <div className={styles.infoContainer}>
        {/* Our Vision Section */}
        <div className={styles.ourVision}>
          <div className={styles.image}>
            <Image
              src="/assets/images/Nepal_Flag_Circle_500x500.png"
              alt="Nepal Flag Circle"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.desc}>
            <h2>Our Vision</h2>
            <p>
              Develop IRD as an open and collaborative platform for all individuals/groups who believe in the positive
              transformation of Nepal at its fundamental level
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className={styles.ourValues}>
          <h2>Our Values</h2>
        </div>
      </div>
  )
}

