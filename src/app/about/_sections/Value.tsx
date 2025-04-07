import styles from "@/styles/about/values.module.css";

export default function Value() {
  return (
    <main className={styles.valueContainer}>
      <div className={styles.content}>
        {/* Compassion - Left side */}
        <div className={styles.section}>
          <h2 className={styles.leftHeading}>Compassion</h2>
          <div className={styles.leftBlob}>
            <p className={styles.blobText}>
              We believe in peace, harmony, and universal well-being.
              We consider the welfare of all, ensuring our programs
              bring no harm to individuals, society, or the environment,
              promoting a prosperous coexistence.
            </p>
          </div>
        </div>
        
        {/* Trust - Right side */}
        <div className={styles.section}>
          <h2 className={styles.rightHeading}>Trust</h2>
          <div className={styles.rightBlob}>
            <p className={styles.blobText}>
              Trust is the foundation of everything we do. Whether with
              our partners, communities, or government agencies, we
              uphold the confidence placed in us with integrity and
              dedication.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
