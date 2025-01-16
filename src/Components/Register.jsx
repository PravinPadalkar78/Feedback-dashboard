import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Register() {
  return (
    <form className='registeration-form form'>
    <h2 className='title'>Registration Form</h2>
    <div className="input-group">
        <label htmlFor="login-username">Username:</label>
        <input type="text" name="login-username" id="login-username" placeholder='Enter the Username' />
    </div>
    <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" placeholder='Enter the Email' />
    </div>
    <div className="input-group">
        <label htmlFor="registration-password">Password:</label>
        <input type="password" name="registration-password" id="registration-password" placeholder='Choose a password' />
    </div>
    <div className="input-group">
        <label htmlFor="confirm-password">Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm the password' />
    </div>
    <div className="input-group">
       <button className='submit-btn' type='submit'>Register</button>
    </div>
    <p>Already Have An Account? <Link to="/login">Sign In</Link></p>
</form>
  )
}
