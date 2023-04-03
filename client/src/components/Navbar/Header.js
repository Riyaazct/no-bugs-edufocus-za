import "./NavbarBlue.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../pages/OurPhotos.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function NavbarBlue() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<div className="nav-logo">
			<h4>EduFocus Projects</h4>
			</div>
			<nav ref={navRef} className="navPosition">
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
				<div className={location.pathname === "/contact" ? "pageActive" : ""}>
					<a href="/contact">
						Contact Us
					</a>
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
        <Stack spacing={2} direction="row">
          <Link to="/login" className="no-link">
            <Button variant="outlined" id="loginButton">Login </Button>
          </Link>
          <Link to="/signup" className="no-link">
            <Button variant="contained" id="signupButton">Sign Up</Button>
          </Link>
        </Stack>
      </div>
		</header>
	);
}

export default NavbarBlue;
