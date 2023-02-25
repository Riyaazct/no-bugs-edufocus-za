import React from 'react'

function SignUp() {
  return (
    <>
      <div className='wrap'>
        <h2>Sign Up</h2>
        <form >
          <label htmlFor="username">
            Username:</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            required />
          <label htmlFor="email">
            Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            required />
          <label htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            required />
          <label htmlFor="confirm_pwd">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm_pwd"
            required />
          <button>Sign Up</button>
        </form>
        <p>
          Already have an account?<br />
          <span className="line">
            
            <a href="#">Log In</a>
          </span>
        </p>
      </div>

    </>
  )
}
export default SignUp;