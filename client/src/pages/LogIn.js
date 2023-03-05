import React from "react";
import { Link } from "react-router-dom"
import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

function LogIn() {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    setUsername("");
    setPassword("");
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Member page</a>
          </p>
        </section>
      ) : (
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
          <p>
            Don't have an account?<br />
            <span className="line">
            <Link to="/signup">Sign up</Link>
               
            </span>
          </p>
        </section>
      )}
    </>
  );
}
export default LogIn;