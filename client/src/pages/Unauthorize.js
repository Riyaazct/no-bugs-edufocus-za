import React from "react";
import { Link } from "react-router-dom";
const Unauthorized = () => {
  return (
    <div className='unauthorized-page' style={{ textAlign: "center", marginTop: "3rem" }}>
      <div>HTTP Error 401: Unauthorized Access</div>
      <p>You have attempted to access a page for witch you are not authorized.</p>
      <Link to="/">Visit Our Home Page</Link>
    </div>
  );
};

export default Unauthorized;