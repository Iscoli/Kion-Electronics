import React, { useEffect } from "react";
import light from "../assets/light.png";
import arrow from "../assets/arrow.png";
import styles from "./SectionTwo.module.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import star1  from '../assets/star21.png';
import star2  from '../assets/star22.png';


function SectionTwo() {
  const {ref:arrowRef, inView:arrowInView} = useInView({
    threshold: 0.5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });
  const {ref:introductionRef, inView:introductionInView}= useInView({
    threshold: .5, // Adjust the threshold as needed for larger screens
    triggerOnce: true,
  });

  useEffect(() => {
    console.log("Arrow in view:", arrowInView);
    console.log("Introduction in view:", introductionInView);
  });

  return (
    <>
    <div className={styles.line}></div>
    <section className={styles.SectionTwo}
    ref={arrowRef}
    >
      <img
      className={`${styles.star1}  ${styles.blink}`}
      src={star1}
      />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={arrowInView ? { x: 0 } : { x: "-100vw" }}
        transition={{ type: "spring", duration:5, bounce: 0.3 }}
        className={styles.lightDiv}
      >
        <img
          style={{
            position: "absolute",
          }}
          className={styles.arrow}
          src={arrow}
        />

        <img src={light} className={styles.light} />
      </motion.div>
        









        <div 
          className={styles.introduction}
        ref={introductionRef}
        >
          <img 
          className={`${styles.star2} ${styles.blink2}`}
          src={star2}
          />
      <motion.div
        initial={{ x: "100vw" }}
        animate={introductionInView ? { x: 0 } : { x: "100vw" }}
        transition={{ type: "spring", duration:5, bounce: 0.3 }}
      
       
      >
        <p
         className={styles.introP}
        >
          Introduction to getlinked 
        </p>
        <p
        className={styles.hackP}
        >tech Hackathon 1.0</p
        >
        <p className={styles.hackathon}>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems, pushing
          the boundaries of technology, and creating solutions that can change
          the world, that's what we're all about!
        </p>
      </motion.div>
      </div>
    </section>
    </>
  );
}

export default SectionTwo;
