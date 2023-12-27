# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Refreshment)/ Automatically refresh the page
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing : read yourself
- Code Splitting
- Differential Bundling - To support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

- Components
- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine,
- Footer
- - Copyright
- - Links
- - Address
- - Contact

## Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

React Hooks is basically (Normal JS utility functions), Which return some piece of JSX.

useState() - Superpowerfull state Variable in react

`Syntax : const [btnName,setBtnName] = useState("Login")`

`Syntax : useEffect( () => {}, [] ) `

# Two Approaches to make an api call

### First Approach

- As soon as page loads we can make api call and wait for response after get response then we render the UI

`Loads => API call(wait for resp) => Render`

### Second Approach

- As soon as page loads just render it whatever have just render it then make an api call then re-render it

- In React we use this approach. This is the better approach and It gives better UX (User Experience)

- If u think it render twice it can't matters because react renders your UI very fast

`Loads => Render => API call => Re-render `

- We can implement second approach using useEffect() hook in functional component
- In class based we use ComponentDidMount()

## useEffect

`If no dependency array => useEffect is called on every render`

    import {useEffect} from 'react;
    useEffect( () => {} )

`If dependency array is empty = [] => useEffect is called on initial render(just once)`

    import {useEffect} from 'react;
    useEffect( () => {}, [] )

`If dependency array is [btnName] => called everytime btnName is updated`

    import {useEffect} from 'react;
    useEffect( () => {}, [btnName])

## useState

Syntax:

    import {useState} from 'react;
    const [btnName,setBtnName] = useState("Login")

- Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

# There are 2 Types of Routing in web apps

### Client Side Routing :

In Client-side routing (CSR), during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All Single Page Applications uses client-side routing.

### Server Side Routing :

In Server-side routing (SSR), every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one.

# Ask in many interviews

# React Life-Cycle Method for multiple children's

![Alt text](image.png)

- Parent Constructor
- Parent render

  `This is the "Render" phase for both the childrens`

  - First Constructor
  - First Render

  - Second Constructor
  - Second Render

  `DOM UPDATED - IN SINGLE BATCH => In a single Batch both are the childrens are updated`
  `This is the "Commit" phase for both the childrens`

  - First ComponentDidMount
  - Second ComponentDidMount

- Parent ComponentDidMount

> Image Source : https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Class Based

```JSX
import React from "react";
// Whenever u loading/mounting a class based components on the web-page the instance of that class was created

// Whenever u created a instance of a class the constructor was called & this is the best place to receive a props and create a state variable inside a constructor

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child Constructor");

    // Imp Note : This state keyword itself it is a big object which can hold all the state variables. In the functional components react do the same thing behind the scene to hold all the state varibales inside a big object like class do.

    // Multiple state variable created
    // this.state = {};
    this.state = {
      userInfo: { name: "Dummy", location: "default" },
    };
  }
//   componentDidMount() {
//     console.log(this.props.name + "child Component Did Mount");
//   }
 async componentDidMount() {
    // console.log(this.props.name + "child Component Did Mount");
    // api call
    const data = await fetch("https://api.github.com/users/BhaveshWagh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  componentDidUpdate(){
    console.log("Component Did Update")
  }
  render() {
    console.log(this.props.name + "Child Render");

    // Destructure on a fly
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;


    return (
      <div className="user-card">
        <h1>
          Count : {count} : count_2 : {count2}
        </h1>
        <button
          onClick={() => {
            // NEVER UPDATE STATE VARIBLES DIRECTLY
            // React gives u access to an important function this is known as this.setState() and pass an object that object contains updated values
            this.setState({
              count: this.state.count + 1,
            });
            // whenever this state variable is updated  react will re-render the component
          }}
        >
          Count Increase
        </button>
       <img className="avatar-img" src={avatar_url} alt="avatar" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : 7058857983</h4>
      </div>
    );
  }
}

export default UserClass;

```

# How React Life-cylce method works behind the scene, When we make an api call using componentDidMount

- MOUNTING

  > Constructor (dummy)

  > Render (dummy)

  > HTML Dummy

  > Component Did Mount

  > API call

  `<this.setState> -> State variable is updated`

* Now update cycle called =>

- UPDATING

  > Render(API data)

  > HTML (new API data)

  > Component Did Update


- Parent Constructor
- Parent Render
- FirstChild Constructor
- FirstChild Render
- Firstchild Component Did Mount
- Parent Component Did Mount
- FirstChild Render
- Component Did Update