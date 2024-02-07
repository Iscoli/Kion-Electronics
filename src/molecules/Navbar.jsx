import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import MySVGIcon from "../assets/hambuger.svg";
import KionLogo from "../assets/Kion Electric.jpeg";
import closeIcon from "../assets/Close.svg";
import profile from "../assets/profile.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [modal, setModal] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.matchMedia("(min-width: 700px)").matches
  );

  useEffect(() => {
    // Define a media query
    const mediaQuery = window.matchMedia("(min-width:700px)");

    // Function to update the state based on the media query result
    const handleMediaQueryChange = (event) => {
      setIsLargeScreen(event.matches);
    };

    // Add an event listener to watch for changes in the media query
    mediaQuery.addListener(handleMediaQueryChange);

    // Initial check and cleanup when the component unmounts
    setIsLargeScreen(mediaQuery.matches);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const Modal = () => {
    setModal((modal) => !modal);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <>
      <nav className={styles.navbarContainer}>
        
          {!isLargeScreen && (
            <div onClick={Modal}>
              <img style={{ cursor: "pionter" }} src={MySVGIcon} />
            </div>
          )}
        
        <div className={styles.getLinked}>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            <img className={styles.KionLogo} src={KionLogo} alt="logo" />
          </Link>
        </div>
        <div
          className={styles.navLinks}
          style={{ display: isLargeScreen ? "flex" : "none" }}
        >
          <p>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#timeline"
            >
              TimeLine{" "}
            </a>
          </p>
          <p>
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="#overview"
            >
              Overveiw{" "}
            </a>
          </p>
          <p>
            <a style={{ textDecoration: "none", color: "#fff" }} href="#faqs">
              FAQs{" "}
            </a>
          </p>
          <p>
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/contact"
            >
              Contact{" "}
            </Link>
          </p>
        </div>

        <div>
          <Link style={{ 
            marginRight:'25px',
            textDecoration: "none", color: "#fff" }} to="/">
            <img src={cart} alt="image" />
          </Link>
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
            <img src={profile} alt="image" />
          </Link>
        </div>
      </nav>

      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {modal && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.modal}
              style={{ transformOrigin: "top", overflow: "hidden !important" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "30px",
                  overflow: "hidden !important",
                }}
              >
                <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                  <img
                    style={{ maxWidth: "60px" }}
                    className={styles.KionLogo}
                    src={KionLogo}
                    alt="logo"
                  />
                </Link>

                <img onClick={Modal} src={closeIcon} />
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                style={{ overflow: "hidden !important" }}
              >
                <p style={{ marginTop: "5px" }}>
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="#timeline"
                    onClick={Modal}
                  >
                    Timeline
                  </a>
                </p>
                <p style={{ marginTop: "5px" }}>
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="#overview"
                    onClick={Modal}
                  >
                    Overview
                  </a>
                </p>
                <p style={{ marginTop: "5px" }}>
                  <a
                    style={{ textDecoration: "none", color: "#fff" }}
                    href="#faqs"
                    onClick={Modal}
                  >
                    FAQs
                  </a>
                </p>
                <p style={{ marginTop: "5px" }}>
                  <Link
                    style={{ textDecoration: "none", color: "#fff" }}
                    to="/contact"
                    onClick={Modal}
                  >
                    Contact{" "}
                  </Link>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default NavBar;
