import lady from "../assets/lady.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./SectionThree.module.scss";
import { useEffect } from "react";
import purple1 from "../assets/purple-Lens-1.png";
import purple from "../assets/purple-lens.png";
import star2 from "../assets/star1.png";
import star1 from "../assets/star.png";

function SectionThree() {
  const { ref: arrowRef, inView: arrowInView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: introductionRef, inView: introductionInView } = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });

  useEffect(() => {
    console.log("Arrow in view 3:", arrowInView);
    console.log("Introduction in view 3:", introductionInView);
  });
  return (
    <>
      <div className={styles.line}></div>
      <section
        id="overview"
        className={styles.SectionThree}
        ref={arrowRef}
        style={{ position: "relative" }}
      >
        <img className={`${styles.star2}  ${styles.blink2}`} src={star2} />
        <img className={`${styles.star1}  ${styles.blink}`} src={star1} />

        <div>
          <img className={styles.purple1} src={purple1} />
          <img className={styles.purple} src={purple} />
          <motion.div
            initial={{ x: "100vw" }}
            animate={arrowInView ? { x: 0 } : { x: "100vw" }}
            transition={{ type: "spring", duration: 5, bounce: 0.3 }}
            className={styles.ladyDiv}
          >
            <img className={styles.lady} src={lady} />
          </motion.div>
        </div>

        <div className={styles.introduction} ref={introductionRef}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={introductionInView ? { x: 0 } : { x: "-100vw" }}
            transition={{ type: "spring", duration: 5, bounce: 0.3 }}
            className={styles.introduction}
          >
            <p className={styles.rules}>Rules and </p>
            <p className={styles.guidelines}>Guidelines</p>
            <p className={styles.hackathon}>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionThree;
