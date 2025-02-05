import React from "react";
import styles from "./Homegrown.module.css"; // ✅ Correct way to import CSS Module

const Homegrown = () => {
  return (
    <section className={styles.homegrownContainer}>
      <h2 className={styles.homegrownTitle}>
        Homegrown, Handcrafted, and <span className={styles.gradientText}>Hyper-Local</span>
      </h2>
      <p className={styles.homegrownSubtitle}>
        Upstart Market connects <strong>home growers, urban farmers, and small-scale artisans</strong> with distributors and consumers.
        By cutting out the middleman, we ensure fresh, high-quality, local food reaches the people who need it most.
      </p>
      <div className={styles.homegrownGrid}>
        <div className={styles.homegrownCard}>
          <div className={styles.homegrownCardIcon}>🌱</div>
          <h3 className={styles.homegrownCardTitle}>Home Growers & Farmers</h3>
          <p className={styles.homegrownCardText}>
            Providing fresh, locally sourced ingredients from backyard gardens to urban farms.
          </p>
        </div>
        <div className={styles.homegrownCard}>
          <div className={styles.homegrownCardIcon}>🎨</div>
          <h3 className={styles.homegrownCardTitle}>Transformers & Artisans</h3>
          <p className={styles.homegrownCardText}>
            Turning ingredients into unique, handcrafted food products.
          </p>
        </div>
        <div className={styles.homegrownCard}>
          <div className={styles.homegrownCardIcon}>🚛</div>
          <h3 className={styles.homegrownCardTitle}>Distributors & Markets</h3>
          <p className={styles.homegrownCardText}>
            Helping deliver and connect products with local businesses and consumers.
          </p>
        </div>
      </div>
      <button className={styles.homegrownCta}>
        Join the Upstart Market Movement
      </button>
    </section>
  );
};

export default Homegrown;
