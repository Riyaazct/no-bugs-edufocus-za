import { Button } from "@mui/material";
import "./NavbarBlue.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function NavbarBlue() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>EduFocus</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">About Us</a>

no-bugs-edufocus-za/client/src/components/Navbar/
16

        return (

17

                <header>

18

                        <h3>EduFocus</h3>

19

                        <nav ref={navRef}>

20

                                <a href="/#">Home</a>

21

                                <a href="/#">About Us</a>

22

                                <a href="/#">Contact Us</a>

23

                                <a href="/#">Our People</a>

24

        <div className="header-buttons2">

25

          <div className="small-white-outline">

26

            <div className="sign-up valign-text-middle dmsans-medium-white-16px">

27

              <span>

28

                <span className="dmsans-medium-white-16px">Sign in</span>

29

              </span>

30

            </div>

31

          </div>

32

​

33

          <div className="small-fill">

34

            <div className="sign-up valign-text-middle dmsans-medium-white-16px">

35

              <span>

36

                <span className="dmsans-medium-white-16px">Sign Up</span>

37

              </span>

38

            </div>

39

          </div>

40

        </div>

41

        
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
        
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
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
