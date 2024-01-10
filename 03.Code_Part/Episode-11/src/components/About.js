import React from "react";

import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext";

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
      <div className="text-center ">

        <h1 className="font-bold my-2">AboutUs</h1>
        <div>
          
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1 className="font-bold">loggedIn User : {loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"First"} location={"Pune class"} />
        {/* <User name={"First"} location={"Pune class"} /> */}
      </div>
    );
  }
}

export default About;
