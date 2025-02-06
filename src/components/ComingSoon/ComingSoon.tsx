import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import styles from "./ComingSoon.module.css";

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError(true);
      setTimeout(() => setError(false), 500);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:yourcompanyemail@gmail.com?subject=Join Waitlist&body=${email}`;
    }, 2000);
  };

  return (
    <div className={styles.comingSoon}>

      {/* Parallax Background */}
      <motion.div
        className={styles.parallaxBg}
        style={{ backgroundImage: "url('/placeholder-bg.jpg')" }}
        initial={{ y: 0, x: 0 }}
        animate={{ y: [0, -50, 0], x: [-10, 10, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className={styles.contentBox}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Local Food Future is Coming
        </motion.h1>
        <p className={styles.heroSubtitle}>
          Be the first to reshape our community’s table by joining the waitlist.
        </p>

        {/* Email Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <motion.input
              type="email"
              className={styles.inputField}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              whileFocus={{ scale: 1.02, borderColor: "#4CAF50" }}
              animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
            />
            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? (
                <motion.div
                  className={styles.spinner}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⏳
                </motion.div>
              ) : (
                "Join the Waitlist"
              )}
            </motion.button>
          </form>
        ) : (
          <motion.p
            className={styles.successMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Thank you for joining! We'll be in touch soon.
          </motion.p>
        )}
      </motion.div>

      {/* Floating CTA Button for Mobile */}
      <motion.button
        className={styles.floatingCta}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Join Now
      </motion.button>
    </div>
  );
};

export default ComingSoon;
