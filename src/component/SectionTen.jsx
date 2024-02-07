import styles from "./SectionTen.module.scss";
import virus from "../assets/virus.svg";
import kwado from "../assets/kwado.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import star2 from "../assets/star1.png";
import star1 from "../assets/star.png";
import star3 from "../assets/star22.png";

function SectionTen() {
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
        delay: 0.5,
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
        delay: 0.5,
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <>
      <div className={styles.line}></div>
      <section ref={arrowRef} className={styles.container}>
        <motion.div
          variants={arrowVariant}
          animate={arrowInView ? "visible" : "hidden"}
          initial="hidden"
          className={styles.sec1}
        >
          <div style={{ position: "relative" }} className={styles.title}>
            <img className={`${styles.star1} ${styles.blink}`} src={star2} />
            <p className={styles.p1}>Privacy Policy and </p>
            <p className={styles.p2}> Terms</p>
            <p className={styles.p3}>Last updated on September 12, 2023</p>
            <p className={styles.p3}>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className={styles.box}>
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <p>Licensing Policy</p>
            <p>Here are terms of our Standard License:</p>

            <p>
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>

            <p className={styles.btn}>Read More</p>
          </div>
        </motion.div>

        <div style={{ position: "relative" }} ref={introductionRef}>
          <img className={`${styles.star2} ${styles.blink2}`} src={star3} />

          <img className={`${styles.star3} ${styles.blink3}`} src={star1} />

          <img className={`${styles.star4} ${styles.blink}`} src={star1} />

          <img className={`${styles.star5} ${styles.blink2}`} src={star3} />

          <img className={`${styles.star6} ${styles.blink3}`} src={star2} />
          <motion.div
            variants={boxVariant}
            animate={arrowInView ? "visible" : "hidden"}
            initial="hidden"
            className={styles.foto}
          >
            <img className={styles.virus} src={virus} />
            <img className={styles.kwado} src={kwado} />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionTen;
