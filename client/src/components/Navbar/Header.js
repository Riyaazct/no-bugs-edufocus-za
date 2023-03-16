import "./NavbarBlue.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../pages/OurPhotos.css";

function NavbarBlue() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>EduFocus</h3>
      <nav ref={navRef}>
        <div className={location.pathname === "/" ? "pageActive" : ""}>
          <a href="/">
            Home
          </a>
        </div>
        <div className={location.pathname === "/about" ? "pageActive" : ""}>
          <a href="/about">
            About Us
          </a>
        </div>
        <div className={location.pathname === "/contact" ? "pageActive" : ""}>
          <a href="/contact">
            Contact Us
          </a>
        </div>
        <div
          className={
            location.pathname === "/Ourpeople/this/a/team" ? "pageActive" : ""
          }
        >
          <a href="/Ourpeople/this/a/team">
            Our People
          </a>
        </div>
        <div className={location.pathname === "/photos" ? "pageActive" : ""}>
          <a href="/photos">Our Photos</a>
        </div>
        <div className="small-s">
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      <div className="header-buttons">
        <div className="small-white-outline">
          <div className="sign-up valign-text-middle dmsans-medium-white-16px">
            <span>
              <span className="dmsans-medium-white-16px">Sign in</span>
            </span>
          </div>
        </div>
        <Link to="/signup" className="no-link">
          <div className="small-fill">
            <div className="sign-up valign-text-middle dmsans-medium-white-16px">
              <span>
                <span className="dmsans-medium-white-16px">Sign Up</span>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default NavbarBlue;
