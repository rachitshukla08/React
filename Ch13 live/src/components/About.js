import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <h2>This is the about us page</h2>
      <ProfileFunctional name={"Rachit"} />
      <ProfileClass name={"Rac class"} />
    </div>
  );
};

class About2 extends React.Component {
  constructor(props) {
    super(props);
  }
  // Constructor => Render => ComponentDidMount
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <h2>This is the about us page</h2>
        <ProfileFunctional name={"Rachit"} />
        <ProfileClass name={"Rac class"} />
      </div>
    );
  }
}

export default About;
