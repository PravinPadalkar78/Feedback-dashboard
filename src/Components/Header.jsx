import React from "react";
import viteLogo from "/vite.svg";
import { Link } from "react-router";
export default function Header() {
  return (
    <div className="header">
       <div className="logo">
       <Link to=""><img width={40} src={viteLogo} alt="logo" /></Link>
       <Link to=""><h1>Customer Feedback</h1></Link>
       </div>
      <div className="authentication">
        <Link to="login" className="login-btn btn">Login</Link>
        <Link to="register" className="logout-btn btn">Register</Link>
      </div>
    </div>
  );
}
