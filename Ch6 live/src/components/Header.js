import { useState } from "react/cjs/react.production.min";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const loggedInUser = () => {
  return true;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
