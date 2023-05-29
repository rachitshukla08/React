import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // API Call
    // We render first and then we call use effect to update state and re render
    // console.log("use effect");
  });
  // console.log("render");
  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {props.name}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Profile;
