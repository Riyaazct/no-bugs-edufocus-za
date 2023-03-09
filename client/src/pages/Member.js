
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
const Member = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();
  
  
  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='member-wrap'>
      <div className="content">
        <h1>MEMBER PAGE</h1>
        
        <p>Member exclusive content follow at a later stage</p>
        <Link to="/">Visit Our Home Page</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Member;
