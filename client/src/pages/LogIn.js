import React from 'react'

function LogIn() {
  return (
    <>
      <div className='wrap'>
        <h2>Log in</h2>
        <form >
          <label htmlFor="username">
            Username:</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            required />

          <label htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            required />

          <button>Log in</button>
        </form>
        <p>
          Don't have an account?<br />
          <span className="line">
            
            <a href="#">Sign Up</a>
          </span>
        </p>
      </div>
    </>
  )
}
export default LogIn;