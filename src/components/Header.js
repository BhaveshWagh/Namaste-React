import { CDN_URL } from "../constants" ;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  // console.log("Header rendered")

  // If no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called on initial render(just once)
  // If dependency array is [btnName] => called everytime btnName is updated

  useEffect(() => {
    // console.log("UseEffect called!")
  }, [btnName]);

  const onlineStatus = useOnlineStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} alt="Food App logo" />
      </div>
      <div className="nav-items">
        <ul>
        <li>
          Online status : {onlineStatus ? "🟢" : "🔴"} 
        </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li><li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
