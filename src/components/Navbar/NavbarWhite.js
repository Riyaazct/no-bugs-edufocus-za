import "./NavbarWhite.css";

const NavbarWhite = () => {
  let Links = [
    { name: "Home", link: "/", className: "home1" },
    { name: "About Us", link: "/about/this/site", className: "about-us1" },
    { name: "Contact us", link: "/contact-us", className: "contact-us1" },
    { name: "Our People", link: "/our-people", className: "our-people1" }
  ];
  return (
    <div className="navbar-white">
      <div className="sign-up1">
        <div className="login"><a href="/login" style={{
          'text-decoration': 'none',
        }}>Login</a></div>
        <div className="small-dark-outline">
          <div className="rectangle1" />
          <div className="sign-up2">Sign Up</div>
        </div>
      </div>
      <div className="menu1">
        {
          Links.map((link) => (
            <div key={link.name} className={link.className}>
              <a href={link.link}>{link.name}</a>
            </div>
          ))
        }
      </div>
      <div className="logo-b">
        <b className="logo">EduFocus</b>
      </div>
    </div>
  );
};

export default NavbarWhite;
