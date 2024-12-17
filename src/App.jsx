import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { useLocation } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { ServicesPage } from "./pages/ServicesPage";
import { ProductsPage } from "./pages/Product";
import { SupportPage } from "./pages/SupportPage";
import AboutCompany from "./component/AboutCompany";

function App() {


  return (
    <>
      <Router>
        <ScrollToTopOnRouteChange />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutCompany />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/support" element={<SupportPage/>} />
        </Routes>
        <Footer />
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
