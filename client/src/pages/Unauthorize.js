import React from "react";
import { Link } from "react-router-dom";
const Unauthorized = () => {
  return (
    <div className='unauthorized-page' style={{ textAlign: "center", marginTop: "3rem" }}>
      <div>HTTP Error 401: Unauthorized Access</div>
      <p>You have attempted to access a page for witch you are not authorized.</p>
      <ul style={{listStyleType: "none"}}>
      <li><Link to="/login">Log In</Link></li>
      <li><Link to="/">Home Page</Link></li>
      </ul>
    </div>
  );
};

export default Unauthorized;