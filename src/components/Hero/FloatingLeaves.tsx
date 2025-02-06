import React from "react";
import styles from "./Hero.module.css";

const FloatingLeaves = () => {
  return (
    <div className={styles.floatingLeaves}>
      <img src="/assets/leaves.svg" alt="Floating Leaves" className={styles.leaf} />
      <img src="/assets/leaves.svg" alt="Floating Leaves" className={styles.leaf} />
      <img src="/assets/leaves.svg" alt="Floating Leaves" className={styles.leaf} />
    </div>
  );
};

export default FloatingLeaves;
