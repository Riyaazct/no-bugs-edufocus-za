import { Button } from "@mui/material";
import "./NavbarBlue.css";
import { Link } from "react-router-dom";


const NavbarBlue = () => {
  let Links = [
    { name: "Home", link: "/" ,className: "home" },
    { name: "About Us", link: "/about/this/site", className: "about-us" },
    { name: "Contact us", link: "/contact-us", className: "contact-us" },
    { name: "Our People", link: "/our-people", className: "our-people" }
  ];
  return (
    <div className="navbar-blue">
      <div className="sign-up1">
        <div className="login"><a href="/login" style={{
          color: '#fff',
          'text-decoration': 'none',
        }}>Login</a></div>
        <div className="small-dark-outline">
          <div className="rectangle1" />
          <div className="sign-up2">
            <a href="/createAccount" style={{
              color: '#fff',
              'text-decoration': 'none',
            }}>Sign Up</a></div>
        </div>
      </div>


      <div className="menu">
        {
          Links.map((link) => (
            <div key={link.name} className={link.className}>
              <a href={link.link}>{link.name}</a>
            </div>
          ))
        }
      </div>
      <div className="black">
        <b className="edufocus">EduFocus</b>
      </div>
    </div>
  );
};

export default NavbarBlue;
