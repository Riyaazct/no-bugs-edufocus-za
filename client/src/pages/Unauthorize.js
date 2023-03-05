import React from "react";

const Unauthorized = () => {
  return (
    <div className='unauthorized-page' style={{ textAlign: "center", marginTop: "3rem" }}>
      <div>HTTP Error 401: Unauthorized Access</div>
      <p>You have attempted to access a page for witch you are not authorized.</p>
      <p>Back to Home Page</p>
    </div>
  )
}

export default Unauthorized;