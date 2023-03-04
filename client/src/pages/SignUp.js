import React from "react";
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
// const SIGNUP_URL = ;
function SignUp() {

  const userRef = useRef();
  const errRef = useRef();

  const [users, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //for focus
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //for user name
  useEffect(() => {
    const result = USER_REGEX.test(users);
    console.log(result);
    console.log(users);
    setValidName(result);
  }, [users]);

  //for email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  //for password
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(users);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);

    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    const newUser = {
      users,
      email,
      pwd,

    };

    try {
      const response = await axios.post("/api/users",

        JSON.stringify(newUser),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const data = await response.data;
      console.log(data);

      setSuccess(true);
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }

  };
  return (
    <>
      {success ? (
        <section className="success">
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className='wrap'>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>

            {/* USERNAME */}
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validName || !users ? "hide" : "invalid"} />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={users}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p id="uidnote" className={userFocus && users && !validName ? "instructions" : "offscreen"}>
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            {/* EMAIL */}
            <label htmlFor="email">
              Email:
              <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
            </label>
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}>
              Please enter a valid email address.
            </p>

            {/* PASSWORD */}
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              6 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at
              symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-
                label="percent">%</span>
            </p>

            {/* CONFIRM PASSWORD */}
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
              <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              required
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              Must match the first password input field.
            </p>
            <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
          </form>
          <p>
            Already have an account?<br />
            <span className="line">
              <a href="#">Log In</a>
            </span>
          </p>
        </section>
      )
      }
    </>
  );
}
export default SignUp;