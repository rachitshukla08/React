import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useAuth();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between p-4 items-center shadow-md mb-2 bg-pink-50 flex-col md:flex-row ">
      <div className="logo-container">
        <img
          data-testid="logo"
          className="h-28"
          src={LOGO_URL}
          alt="Logo"
        ></img>
      </div>
      <div className="nav-items">
        <ul className="flex gap-8">
          <li className="hover:text-pink-800  flex items-center">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-pink-800 flex items-center">
            <Link to="/about">About us</Link>
          </li>
          <li className="hover:text-pink-800 flex items-center">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="hover:text-pink-800 flex items-center">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="hover:text-pink-800 flex items-center">
            <Link to="/cart">Cart : ({cartItems.length}) </Link>
          </li>

          {isLoggedIn ? (
            <button
              className="hover:text-pink-800 px-0 py-0"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              Logout
            </button>
          ) : (
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
          )}
          <span data-testid="online-status" className="flex items-center mr-8">
            {isOnline && isLoggedIn ? user.name + " ✅" : "🛑"}
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
