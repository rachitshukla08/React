import { useEffect, useState } from "react";

// @returns true if the client is connected to the internet

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  // window.addEventListener("online", ()=>{})  : Javascript Way. Runs when the client comes online

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("online", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
