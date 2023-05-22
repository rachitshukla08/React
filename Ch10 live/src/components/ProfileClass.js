// Class based component
import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // create state here
    // React gives us access to this.state
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Called after render");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Profile Class component</h1>
        <h2>Name: {this.props.name}</h2>
        <h2>Count: {this.state.count}</h2>
        {/* Do not mutate state directly */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default ProfileClass;
