import thinking from "../assets/Thinking.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./SectionFive.module.scss";
import { useEffect } from "react";
import star2 from "../assets/star1.png";
import star1 from "../assets/star.png";
import star3 from "../assets/star22.png";
import star4 from "../assets/star21.png";


function SectionFive() {
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
      x: "-100vw",
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
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
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
    },
  };

  const plusVarient = {
    hidden: {
      x: "-10vw",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div className={styles.line}></div>
      <section
        id="faqs"
        className={styles.SecFive}
        ref={arrowRef}
        style={{ position: "relative" }}
      >
        <div 
        style={{position:'relative'}}
        >
           <img
           src={star4}
           className={`${styles.star4} ${styles.blink1}`}
          />
           <img
           src={star4}
           className={`${styles.star5} ${styles.blink2}`}
          />

          <img
           src={star2}
           className={`${styles.star6} ${styles.blink3}`}
          />

          <img
           src={star1}
           className={`${styles.star7} ${styles.blink}`}
          />
          
          <motion.div
            variants={arrowVariant}
            animate={arrowInView ? "visible" : "hidden"}
            initial="hidden"
            className={styles.thinkingDiv}
          >
            <div className={styles.questionCategory}>
              <motion.span variants={plusVarient} className={styles.question1}>
                ?
              </motion.span>

              <motion.span variants={plusVarient} className={styles.question2}>
                ?
              </motion.span>

              <motion.span variants={plusVarient} className={styles.question3}>
                ?
              </motion.span>
            </div>
            <img className={styles.thinking} src={thinking} />
          </motion.div>
        </div>

        <div className={styles.introduction} ref={introductionRef}
        style={{position:'relative'}}
        >

        <img
           src={star3}
           className={`${styles.star3} ${styles.blink}`}
          />
          <motion.div
            variants={boxVariant}
            animate={introductionInView ? "visible" : "hidden"}
            initial="hidden"
            className={styles.introduction}
          >
            <div style={{ marginBottom: "40px" }}>
              <p className={styles.p1}>Frequently Ask</p>
              <p className={styles.p2}>Question</p>

              <p className={styles.p3}>
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
            </div>

            <motion.div variants={plusVarient}>
              <div className={styles.plusDiv}>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className={styles.btn}>+</span>
              </div>
              <h3 className={styles.name}></h3>
            </motion.div>

            <motion.div variants={plusVarient}>
              <div className={styles.plusDiv}>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className={styles.btn}>+</span>
              </div>
              <h3 className={styles.name}></h3>
            </motion.div>

            <motion.div variants={plusVarient}>
              <div className={styles.plusDiv}>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className={styles.btn}>+</span>
              </div>
              <h3 className={styles.name}></h3>
            </motion.div>

            <motion.div variants={listVarient}>
              <div className={styles.plusDiv}>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className={styles.btn}>+</span>
              </div>
              <h3 className={styles.name}></h3>
            </motion.div>

            <motion.div variants={listVarient}>
              <div className={styles.plusDiv}>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className={styles.btn}>+</span>
              </div>
              <h3 className={styles.name}></h3>
            </motion.div>

            <motion.div variants={listVarient}>
              <div className={styles.plusDiv}>
                <span>
                  Can I work on a project I started before the hackathon?
                </span>
                <span className={styles.btn}>+</span>
              </div>
              <h3 className={styles.name}></h3>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default SectionFive;
