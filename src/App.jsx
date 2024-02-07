import { useState,React } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./global.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useLocation } from "react-router-dom";

function App() {


  return (
    <>
      <Router>
      <ScrollToTopOnRouteChange />
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <ToastContainer />
      </Router>
    </>
  );
}

  // Scroll to top on route change
  function ScrollToTopOnRouteChange() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

export default App;
