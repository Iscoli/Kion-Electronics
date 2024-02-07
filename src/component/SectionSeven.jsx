import React from "react";
import styles from "./SectionSeven.module.scss";
import cupy from "../assets/cufy.png";
import daya from "../assets/daya.png";
import uku from "../assets/uku.png";
import biyu from "../assets/biyu.png";
import wuta1 from "../assets/purple-flare.png";
import wuta2 from "../assets/purple-Lens-Flare3.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import star1 from "../assets/star.png";
import star3 from "../assets/star22.png";

function SectionSeven() {
  const { ref: arrowRef, inView: arrowInView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: introductionRef, inView: introductionInView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });

  const boxVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
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

  const arrowVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        duration: 9,
        delay: 1,
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.3,
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
    <section style={{ position: "relative" }} className={styles.Maincontainer}>
      <div className={styles.header}>
        <p className={styles.price}>Prices and</p>
        <p className={styles.rewards}>Rewards</p>
      </div>

      <img className={styles.wuta1} src={wuta1} />
      <img className={styles.wuta2} src={wuta2} />

      <div
        ref={arrowRef}
        style={{ position: "relative" }}
        className={styles.subContainer}
      >
        <img src={star3} className={`${styles.star1} ${styles.blink}`} />

        <img src={star1} className={`${styles.star2} ${styles.blink3}`} />
        <motion.article
          variants={arrowVariant}
          animate={arrowInView ? "visible" : "hidden"}
          initial="hidden"
          className={styles.article1}
        >
          <img src={cupy} />
        </motion.article>

        <div
          style={{ flexBasis: "50%", position: "relative" }}
          ref={introductionRef}
        >
          <img src={star1} className={`${styles.star3} ${styles.blink2}`} />
          <motion.article
            variants={boxVariant}
            animate={introductionInView ? "visible" : "hidden"}
            initial="hidden"
            className={styles.article2}
          >
            <motion.div variants={plusVarient} className={styles.secondDiv}>
              <img src={biyu} />
              <div className={styles.runnerText}>
                <p>2nd</p>
                <p>Runner</p>
                <p>N300,000</p>
              </div>
            </motion.div>

            <motion.div variants={plusVarient} className={styles.firstDiv}>
              <img src={daya} />
              <div className={styles.runnerText}>
                <p>1st</p>
                <p>Runner</p>
                <p>N500,000</p>
              </div>
            </motion.div>

            <motion.div variants={plusVarient} className={styles.thirdDiv}>
              <img src={uku} />
              <div className={styles.runnerText}>
                <p>3rd</p>
                <p>Runner</p>
                <p>N500,000</p>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default SectionSeven;
