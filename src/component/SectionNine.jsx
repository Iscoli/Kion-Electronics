import React from "react";
import styles from "./SectionNine.module.scss";
import pixel1 from "../assets/pixel1.png";
import pixel2 from "../assets/pixel2.png";
import pixel3 from "../assets/pixel3.png";
import pixel4 from "../assets/pixel4.png";
import star2 from "../assets/star1.png";
import star1 from "../assets/star.png";
import star3 from "../assets/star22.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import light from "../assets/purple-flare.png";

function SectionNine() {
  const { ref: arrowRef, inView: arrowInView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });

  const boxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 9,
        delay: 1,
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const plusVarient = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
    },
  };
  return (
    <section className={styles.mainContainer}>
      <img className={styles.light1} src={light} />

      <img className={styles.light2} src={light} />
      
      <img src={star3} className={`${styles.star1} ${styles.blink}`} />
      <img src={star1} className={`${styles.star2} ${styles.blink3}`} />
      <p className={styles.patners} style={{ textAlign: "center" }}>
        Partners and Sponsors
      </p>
      <p
        className={styles.sponsors}
        ref={arrowRef}
        style={{ textAlign: "center" }}
      >
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors.
      </p>

      <motion.div
        variants={boxVariant}
        animate={arrowInView ? "visible" : "hidden"}
        initial="hidden"
        className={styles.boxContainer}
      >
        <div className={styles.gridContainer}>
          <motion.div variants={plusVarient} className={styles.gridItem}>
            <img src={pixel1} alt="Pixel 1" />
          </motion.div>
          <div className={styles.gridItem}>
            <span className={styles.straight}></span>
          </div>

          <motion.div variants={plusVarient} className={styles.gridItem}>
            <img src={pixel2} alt="Pixel 2" />
          </motion.div>

          <div className={styles.gridItem}>
            <span className={styles.straight}></span>
          </div>
          <motion.div variants={plusVarient} className={styles.gridItem}>
            <img src={pixel3} alt="Pixel 3" />
          </motion.div>
        </div>

        <div className={styles.gridRow}>
          <div className={styles.gridItem}>
            <span className={styles.long}></span>
          </div>

          <div className={styles.gridItem}>
            <span className={styles.long}></span>
          </div>

          <div className={styles.gridItem}>
            <span className={styles.long}></span>
          </div>
        </div>

        <div className={styles.gridContainer}>
          <motion.div variants={plusVarient} className={styles.gridItem}>
            <img src={pixel4} alt="Pixel 1" />
          </motion.div>
          <div className={styles.gridItem}>
            <span className={styles.straight}></span>
          </div>

          <motion.div variants={plusVarient} className={styles.gridItem}>
            <img src={pixel2} alt="Pixel 2" />
          </motion.div>

          <div className={styles.gridItem}>
            <span className={styles.straight}></span>
          </div>
          <motion.div variants={plusVarient} className={styles.gridItem}>
            <img src={pixel3} alt="Pixel 3" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionNine;
