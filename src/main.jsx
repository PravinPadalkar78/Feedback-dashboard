import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";

import Home from "./Components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          {/* <Route path="/feedback" element={<FeedBackPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
