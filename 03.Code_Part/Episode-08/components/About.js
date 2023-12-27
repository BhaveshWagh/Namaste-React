import React from "react";

import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>AboutUs</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Pune class"} />
      </div>
    );
  }
}

export default About;
