import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className='error-page'style={{ textAlign: "center", marginTop: "3rem"}}>
    <div  >The page you requested was not found!</div>
    <Link to="/">Visit Our Home Page</Link>
    </div>
  )
}



export default Error;