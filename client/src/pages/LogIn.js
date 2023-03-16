import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "axios";



function LogIn() {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    try {
      // Make a POST request to the server using Axios
      const response = await axios.post("/api/login", { username, password }, {
        headers: {
          "Content-Type":
            "application/json",
        }, withCredentials: true,
      });
      const { user, message } = response.data;
      const role = response.data.user.role;
      if (message) {
        setErrMsg(message);
      }
      setAuth({ user, role });
      if (role === "admin") {
        setUsername("");
        setPassword("");
        navigate("/adm");
      } else if (role === "member") {
        setUsername("");
        setPassword("");
        navigate("/member");
      }
    } catch (err) {
      //Handle errors from the server or network
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (

    <section className='login-wrap'>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h2>Log in</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        {/* USERNAME */}
        <label htmlFor="username">
          Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
        />
        {/* PASSWORD */}
        <label htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required />
        <button>Log in</button>
      </form>
      <div>
        Don't have an account?<br />
        <span className="line">
          <Link to="/signup">Sign up</Link>
        </span>

      </div>
    </section>


  );
}
export default LogIn;