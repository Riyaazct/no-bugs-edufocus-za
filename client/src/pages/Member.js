import React from 'react';
import { Link } from "react-router-dom";


const Member = ({loginStatus}) => {
  return (
    <div className='member-wrap'>
      <div className="content">
				<h1>MEMBER PAGE</h1>
        <p>{loginStatus}</p>
				<p>Member exclusive content follow at a later stage</p>
        <Link to="/">Visit Our Home Page</Link>
			</div>
    </div>
  )
}



export default Member