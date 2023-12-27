import { CDN_URL } from "../src/constants";
import { useState } from "react";


const Header = () => {
  const [btnlogin, setBtnLogin] = useState("LogIn") 
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={CDN_URL}
          alt="Food App logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnlogin === "LogIn" ? setBtnLogin("LogOut") : setBtnLogin("LogIn")
          }}>{btnlogin}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
