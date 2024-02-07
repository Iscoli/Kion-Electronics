import styles from "../component/SectionSix.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import star2 from "../assets/star1.png";
import star1 from "../assets/star.png";
import star3 from "../assets/star22.png";



function SectionSix() {
  const { ref: arrowRef, inView: arrowInView } = useInView({
    threshold: 1, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: arrowRef1, inView: arrowInView1 } = useInView({
    threshold: 1, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: arrowRef2, inView: arrowInView2 } = useInView({
    threshold: 1, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: arrowRef3, inView: arrowInView3 } = useInView({
    threshold: 1, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: arrowRef4, inView: arrowInView4 } = useInView({
    threshold: 1, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: arrowRef5, inView: arrowInView5 } = useInView({
    threshold: 1, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const { ref: arrowRef6, inView: arrowInView6 } = useInView({
    threshold: 1, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });

  const boxVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { type: "spring", duration: 5, delay: 2, bounce: 0.3 },
    },
  };

  return (
    <>
      <div className={styles.line}></div>
      <section id="timeline" className={styles.SectionSix}>
        <p className={styles.TimeLine}>Timeline</p>
        <p ref={arrowRef} className={styles.breakdown}>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <img
           src={star3}
           className={`${styles.star3} ${styles.blink}`}
          />
          <img
           src={star1}
           className={`${styles.star1} ${styles.blink2}`}
          />
          <img
           src={star2}
           className={`${styles.star2} ${styles.blink3}`}
          />
        <motion.div
          variants={boxVariant}
          animate={arrowInView ? "visible" : "hidden"}
          initial="hidden"
          className={styles.majorContainer}
        >
          <div className={styles.TimeLine3}>
            <p className={styles.line2}></p>
            <div className={styles.numberDiv}>
              <p className={styles.number}>1</p>
            </div>
          </div>

          <div className={styles.textDiv}>
            <div className={`${styles.text1} ${styles.tall}`}>
              <p className={styles.purpleRight}>Hackathon Announcement</p>
              <p className={styles.p1Right}>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>

            <div ref={arrowRef1} className={styles.text2}>
              <p className={styles.purpleLeft}>November 18, 2023</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          animate={arrowInView1 ? "visible" : "hidden"}
          initial="hidden"
          className={styles.majorContainer}
        >
          <div className={styles.TimeLine3}>
            <p className={styles.line2}></p>
            <div className={styles.numberDiv}>
              <p className={styles.number}>2</p>
            </div>
          </div>

          <div className={`${styles.textDiv} ${styles.flexDiv}`}>
            <div className={styles.text1}>
              <p className={styles.purpleRight}>November 18, 2023</p>
            </div>

            <div ref={arrowRef6} className={`${styles.text2} ${styles.tall}`}>
              <p className={styles.purpleRight1} style={{ color: "#D434FE" }}>
                Teams Registration begins
              </p>
              <p className={styles.p1}>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          animate={arrowInView6 ? "visible" : "hidden"}
          initial="hidden"
          className={styles.majorContainer}
        >
          <div className={styles.TimeLine3}>
            <p className={styles.line2}></p>
            <div className={styles.numberDiv}>
              <p className={styles.number}>3</p>
            </div>
          </div>

          <div className={styles.textDiv}>
            <div className={`${styles.text1} ${styles.tall}`}>
              <p className={styles.purpleRight}>Teams Registration ends</p>
              <p className={styles.p1Right}>
                Interested Participants are no longer Allowed to register
              </p>
            </div>

            <div ref={arrowRef3} className={styles.text2}>
              <p className={styles.purpleLeft}>November 18, 2023</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          animate={arrowInView3 ? "visible" : "hidden"}
          initial="hidden"
          className={styles.majorContainer}
        >
          <div className={styles.TimeLine3}>
            <p className={styles.line2}></p>
            <div className={styles.numberDiv}>
              <p className={styles.number}>4</p>
            </div>
          </div>

          <div className={`${styles.textDiv} ${styles.flexDiv}`}>
            <div className={styles.text1}>
              <p className={styles.purpleRight}>November 18, 2023</p>
            </div>

            <div ref={arrowRef4} className={`${styles.text2} ${styles.tall}`}>
              <p className={styles.purpleRight1} style={{ color: "#D434FE" }}>
                Announcement of the accepted teams and ideas
              </p>
              <p className={styles.p1}>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          animate={arrowInView4 ? "visible" : "hidden"}
          initial="hidden"
          className={styles.majorContainer}
        >
          <div className={styles.TimeLine3}>
            <p className={styles.line2}></p>
            <div className={styles.numberDiv}>
              <p className={styles.number}>5</p>
            </div>
          </div>

          <div className={styles.textDiv}>
            <div className={`${styles.text1} ${styles.tall}`}>
              <p className={styles.purpleRight}>
                Getlinked Hackathon 1.0 Offically Begins
              </p>
              <p className={styles.p1Right}>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>

            <div ref={arrowRef5} className={styles.text2}>
              <p className={styles.purpleLeft}>November 18, 2023</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={boxVariant}
          animate={arrowInView5 ? "visible" : "hidden"}
          initial="hidden"
          className={styles.majorContainer}
        >
          <div className={styles.TimeLine3}>
            <p className={styles.line2}></p>
            <div className={styles.numberDiv}>
              <p className={styles.number}>6</p>
            </div>
          </div>

          <div className={`${styles.textDiv} ${styles.flexDiv}`}>
            <div className={styles.text1}>
              <p className={styles.purpleRight}>November 18, 2023</p>
            </div>

            <div ref={arrowRef2} className={`${styles.text2} ${styles.tall}`}>
              <p className={styles.purpleRight1} style={{ color: "#D434FE" }}>
                Demo
              </p>
              <p className={styles.p1}>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default SectionSix;
