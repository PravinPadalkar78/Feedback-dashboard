import React, { useState } from 'react'
import { Link } from 'react-router'

export default function Login() {
  const [credntials,setCredentails] = useState({
    username : "",
    password: ""
  })
  const [errorData,setErrorData] = useState({})
  const handleSubmit=(e)=>{
    e.preventDefault();
    let data = {};
    if(!credntials.username)
    {
      data.username = "Username should be more than 5 characters"
    }
    if(!credntials.password)
      {
        data.password = "Enter a Valid Password"
      }
    console.log(e.target)
    setErrorData(data);
    console.log(errorData)
  }
  const handleChange=((e,type)=>{
    setCredentails((prevState) => ({ ...prevState, [type]: e.target.value }));
  })
  return (
    <form className='login-form form'>
        <h2 className='title'>Login</h2>
        <div className="input-group">
            <label htmlFor="login-username">Username</label>
            <input type="text" name="login-username" value={credntials.username} onChange={(e)=>handleChange(e,'username')} id="login-username" placeholder='Enter the Username' />
            <p id='error'>{errorData.username}</p>
        </div>
        
        <div className="input-group">
            <label htmlFor="login-password">Password</label>
            <input type="password" name="login-password" value={credntials.password} onChange={(e)=>handleChange(e,'password')} id="login-password" placeholder='Enter the Password' />
            <p id='error'>{errorData.password}</p>
        </div>
        <div className="input-group">
           <button onClick={(e)=>handleSubmit(e)} className='submit-btn' type='submit'>Login</button>
        </div>
        <p>Don't have account? <Link to="/register">Register</Link></p>
    </form>
  )
}
