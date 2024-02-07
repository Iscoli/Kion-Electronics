import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import teacher from "../assets/Teacher.png";
import styles from "./SectionFour.module.scss";
import purple from "../assets/purple-Lens-Flare3.png";
import purple1 from "../assets/purple-Lens-Flare3.png";
import star2 from "../assets/star1.png";
import star1 from "../assets/star.png";
import star3 from "../assets/star22.png";

function SectionFour() {
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
  }, [introductionInView, arrowInView]);

  const boxVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
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
      transition: { type: "spring", when: "beforeChildren", delay: 0.9 },
    },
  };

  const listVarient = {
    hidden: {
      x: "10vw",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", mass: 0.4, damping: 8 },
    },
  };

  return (
    <>
      <div className={styles.line}></div>
      <section style={{ position: "relative" }} className={styles.SectionFour}>
        <img
          className={`${styles.star1} 
      ${styles.blink}`}
          src={star1}
        />
        <img
          className={`${styles.star2} 
      ${styles.blink2}`}
          src={star2}
        />

        <img
          className={`${styles.star3} 
      ${styles.blink3}`}
          src={star3}
        />

        <div ref={arrowRef}>
          <img className={styles.purple} src={purple} />

          <img className={styles.purple1} src={purple1} />

          <motion.div
            variants={arrowVariant}
            animate={arrowInView ? "visible" : "hidden"}
            initial="hidden"
            className={styles.teacherDiv}
          >
            <img className={styles.teacher} src={teacher} />
          </motion.div>
        </div>

        <div className={styles.introduction} ref={introductionRef}>
          <motion.div
            variants={boxVariant}
            animate={introductionInView ? "visible" : "hidden"}
            initial="hidden"
            className={styles.introduction}
          >
            <p className={styles.criteria}>Judging Criteria</p>
            <p variants={listVarient} className={styles.key}>
              Key attributes
            </p>
            <motion.p variants={listVarient} className={styles.text}>
              <span>Innovation and Creativity:</span> Evaluate the uniqueness
              and creativity of the solution. Consider whether it addresses a
              real-world problem in a novel way or introduces innovative
              features.
            </motion.p>

            <motion.p variants={listVarient} className={styles.text}>
              <span> Functionality:</span> Assess how well the solution works.
              Does it perform its intended functions effectively and without
              major issues? Judges would consider the completeness and
              robustness of the solution.
            </motion.p>

            <motion.p variants={listVarient} className={styles.text}>
              <span>Impact and Relevance:</span> Determine the potential impact
              of the solution in the real world. Does it address a significant
              problem, and is it relevant to the target audience? Judges would
              assess the potential social, economic, or environmental benefits.
            </motion.p>

            <motion.p variants={listVarient} className={styles.text}>
              <span>Technical Complexity:</span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </motion.p>

            <motion.p variants={listVarient} className={styles.text}>
              <span> Adherence to Hackathon Rules:</span> Judges will Ensure
              that the team adhered to the rules and guidelines of the
              hackathon, including deadlines, use of specific technologies or
              APIs, and any other competition-specific requirements.
            </motion.p>

            <div className={styles.buttonDiv}>
              <motion.button variants={listVarient}>Read More</motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionFour;
