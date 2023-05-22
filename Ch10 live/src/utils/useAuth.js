import { useState } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // TODO: Logic to authenticate
  return [isLoggedIn, setIsLoggedIn];
};

export default useAuth;
