import React, { useState, useEffect } from "react";
import { FaChevronDown} from "react-icons/fa";
import Nav from "./Nav";
import Aboutwelcome from "./Aboutwelcome";
import Cancertypes from "./Cancertypes";
import "./welcomepage.css";

function Welcomepage() {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsArrowVisible(false);
      } else {
        setIsArrowVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    const aboutSection = document.querySelector(".about-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
      setIsArrowVisible(false);
    }
  };

  return (
    <div className="main">
      <div className="background">

        {/* Navigation Bar */}
        <Nav/>

        {/* Hero Section */}
        <div className="matter">
          <h1>
            <span className="span-txt">DETECT EARLY</span>
            <span className="span">SAVE LIVES</span> 
            <span className="span-txt">ACT BEFORE</span>
            <span className="span">IT'S LATE</span>
          </h1>
        </div>

        {/* Down Arrow */}
        {isArrowVisible && (
          <div className="bottom-arrow" onClick={scrollToSection}>
            <FaChevronDown size={30} />
          </div>
        )}
      </div>
      
      {/* aboutus */}
      <Aboutwelcome/>

      {/* Cancer Types Section */}
      <Cancertypes/>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} CancerDetect | Dedicated to Better
          Healthcare
        </p>
      </footer>
    </div>
  );
}

export default Welcomepage;
