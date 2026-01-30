import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="body-main">
      <div className="navigation">
        <nav>
          <div className="left-navigation">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc01kPmgxpQwhWfr2wqmJkDUPe3TSNI97xg&s"
              alt="Cancer Detect Logo"
            />
          </div>

          <div className="right-navigation">
            {/* Hamburger Icon for Mobile */}
            <button
              className="hamburger-menu"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <FontAwesomeIcon icon={faBars} size="lg" color="white" />
            </button>

            {/* Regular Menu */}
            <div className={`mid-navigation ${menuOpen ? "active" : ""}`}>
              <Link to="/preventions" onClick={closeMenu}>
                Preventions
              </Link>
              <Link to="/checkpage" onClick={closeMenu}>
                CheckNow
              </Link>
              <Link to="/about" onClick={closeMenu}>
                AboutUs
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>

            {/* Profile Icon */}
            <div className="profile-wrapper">
              <Link to="/profile">
                <FontAwesomeIcon icon={faUserCircle} size="2x" color="white" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="home-body">
        <div className="left-body">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBc01kPmgxpQwhWfr2wqmJkDUPe3TSNI97xg&s"
            alt="Cancer Detect Illustration"
          />
          <h1>
            Check Your <br /> Health Today
          </h1>
          <p>Early Detection is the Key to a Cancer-Free Tomorrow!</p>
          <div className="btn">
            <Link to="/checkpage">Check Now</Link>
          </div>
        </div>

        <div className="right-body">
          {/* Marquees */}
          {["marquee1", "marquee2", "marquee3"].map((marquee, idx) => (
            <div className={marquee} key={idx}>
              {[...Array(10)].map((_, i) => (
                <div className="img-con" key={i}>
                  <img
                    src={`https://via.placeholder.com/250x150?text=Image+${i + 1}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
