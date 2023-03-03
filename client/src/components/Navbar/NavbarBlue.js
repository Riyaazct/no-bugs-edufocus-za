// import { Button } from "@mui/material";
import "./NavbarBlue.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavbarBlue() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>EduFocus</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
				<a href="/#">Contact Us</a>
				<a href="/#">Our People</a>

				<div className="header-buttons2">
					<div className="small-white-outline">
						<div className="sign-up valign-text-middle dmsans-medium-white-16px">
							<span>
								<span className="dmsans-medium-white-16px">Sign in</span>
							</span>
						</div>
					</div>

					<div className="small-fill">
						<div className="sign-up valign-text-middle dmsans-medium-white-16px">
							<span>
								<span className="dmsans-medium-white-16px">Sign Up</span>
							</span>
						</div>
					</div>
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

				<div className="small-fill">
					<div className="sign-up valign-text-middle dmsans-medium-white-16px">
						<span>
							<span className="dmsans-medium-white-16px">Sign Up</span>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
}

export default NavbarBlue;
