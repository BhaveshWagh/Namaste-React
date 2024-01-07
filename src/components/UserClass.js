import React from "react";
// Whenever u loading/mounting a class based components on the web-page the instance of that class was created

// Whenever u created a instance of a class the constructor was called & this is the best place to receive a props and create a state variable inside a constructor

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor");

    // Imp Note : This state keyword itself it is a big object which can hold all the state variables. In the functional components react do the same thing behind the scene to hold all the state varibales inside a big object like class do.

    // Multiple state variable created
    this.state = {
      userInfo: { name: "Dummy", location: "default" },
    };
  }

  // make an api call

  async componentDidMount() {
    console.log(this.props.name + "child Component Did Mount");
    // api call
    const data = await fetch("https://api.github.com/users/BhaveshWagh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");

    // Destructure on a fly
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        <img className="avatar-img" src={avatar_url} alt="avatar" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : 7058857983</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * --- MOUNTING ---
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component Did Mount
 *      <API call>
 *      <this.setState> -> State variable is updated
 *
 * Now update cycle called
 * --- UPDATE ---
 *
 *      Render(API data)
 *      <HTML (new API data)>
 *      Component Did Update
 */
