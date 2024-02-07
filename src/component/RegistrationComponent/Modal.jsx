import star2 from "../../assets/star1.png";
import man from "../../assets/successful-man.png";
import success from "../../assets/successfully-done.png";
import emoji from "../../assets/emoji.png";
import star3 from "../../assets/star22.png";
import styles from "./Modal.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


function Modal({ openModal }) {

  useEffect(() => {
    if (openModal) {
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [openModal]);
  return (
    <>
      {openModal && (
        <div>
          <img className={styles.star1} src={star3} />
         
          <div className={styles.backdrop}></div>
          <div className={styles.picture}>
          <img 
         className={`${styles.star1} ${styles.blink3}`}
          src={star3} />

          <img 
         className={`${styles.star2} ${styles.blink}`}
          src={star3} />
            <div className={styles.imgDiv}>
              <img
                styles={{ marginTop: "40px" }}
                className={styles.success}
                src={success}
              />
              <img className={styles.man} src={man} />
            </div>

            <div styles={{ marginTop: "40px" }}>
              <p className={styles.p1}>
                congratulation you have succefully registered
              </p>
            </div>

            <p className={styles.p2}>
              Yes, it was easy and you did it! check your mail box for next step
              <img className={styles.emoji} src={emoji} />
            </p>

            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className={styles.backDiv}
            >
              <button className={styles.btn}>Back</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
