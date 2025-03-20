
import styles from "@/styles/about/values.module.css";

export default function Value() {
  return (
    <main className={styles.valuesContainer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.leftBlob}>
            <p className={styles.blobText}>
              We take on challenges with patience and resilience, staying
              dedicated to our goals until real solutions are achieved. Our
              persistence drives meaningful progress
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.rightHeading}>Collaboration</h2>
          <div className={styles.rightBlob}>
            <p className={styles.blobText}>
              True transformation happens when we work together. We believe in
              the power of collective effort and actively seek collaborations to
              amplify social impact.
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.leftHeading}>Accountability</h2>
          <div className={styles.leftBlob}>
            <p className={styles.blobText}>
              We honor the trust and contributions of all involved by ensuring
              transparency and responsibility in our work. Every effort counts,
              and every role matters
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
