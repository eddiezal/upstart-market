import React from "react";
import styles from "./Homegrown.module.css"; 
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Homegrown = () => {
    useScrollAnimation();  // ✅ Apply scroll effect hook

    return (
        <>
            {/* Section Divider Above */}
            <div className="section-divider"></div>  

            <section className={`${styles.homegrownContainer} fade-in`}>  
                <h2 className={styles.homegrownTitle}>
                    Homegrown, Handcrafted, and <span className={styles.gradientText}>Hyper-Local</span>
                </h2>
                <p className={styles.homegrownSubtitle}>
                    Upstart Market connects <strong>home growers, urban farmers, and small-scale artisans</strong> with connectors and consumers.
                    By cutting out the middleman, we ensure fresh, high-quality, local food reaches the people who need it most.
                </p>

                {/* Homegrown Cards with Scroll Effects */}
                <div className={styles.homegrownGrid}>
                    <div className={`${styles.homegrownCard} fade-in`}>
                        <div className={styles.homegrownCardIcon}>🌱</div>
                        <h3 className={styles.homegrownCardTitle}>Home Growers & Farmers</h3>
                        <p className={styles.homegrownCardText}>
                            Providing fresh, locally sourced ingredients from backyard gardens to urban farms.
                        </p>
                    </div>
                    <div className={`${styles.homegrownCard} fade-in`}>
                        <div className={styles.homegrownCardIcon}>🎨</div>
                        <h3 className={styles.homegrownCardTitle}>Transformers & Artisans</h3>
                        <p className={styles.homegrownCardText}>
                            Turning ingredients into unique, handcrafted food products.
                        </p>
                    </div>
                    <div className={`${styles.homegrownCard} fade-in`}>
                        <div className={styles.homegrownCardIcon}>🚛</div>
                        <h3 className={styles.homegrownCardTitle}>Distributors & Markets</h3>
                        <p className={styles.homegrownCardText}>
                            Helping deliver and connect products with local businesses and consumers.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <button className={styles.homegrownCta}>
                    Join the Upstart Market Movement
                </button>
            </section>

            {/* Section Transition Below */}
            <div className="section-transition"></div>
        </>
    );
};

export default Homegrown;
