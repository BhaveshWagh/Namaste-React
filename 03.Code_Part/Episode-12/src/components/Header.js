import { CDN_URL } from "../constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser)

  // If no dependency array => useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called on initial render(just once)
  // If dependency array is [btnName] => called everytime btnName is updated

  useEffect(() => {
    // console.log("UseEffect called!")
  }, [btnName]);

  // Subscribing to the store using useSelector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <div className="flex justify-between border rounded-xl shadow-xl mt-1">
      <div className="logo-container">
        <img className="w-32 rounded-xl" src={CDN_URL} alt="Food App logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
          <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
