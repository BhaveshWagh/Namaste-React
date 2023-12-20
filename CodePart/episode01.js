import React from "react";
import ReactDOM  from "react-dom/client";
// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Namaste React!");
// {} =>  {id:"heading"} :  this object is a place where u will give attributes to your class

// console.log(heading) // It will return an object

// How to add nested structure inside react & its sibling
// for sibling add all siblings into array
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im an H1 tag"),
    React.createElement("h2", {}, "Im an H2 tag"),
  ]),
]);

// later on the above code is very lengthy and it very complicated to understand then JSX is coming into the picture

// JSX

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


// HTML script
//  <script
// crossorigin
// src="https://unpkg.com/react@18/umd/react.development.js"
// ></script>
// <script
// crossorigin
// src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
// ></script> 
//  <script>

// Javascipt script
//             const heading = document.createElement("h1")
//             heading.innerHTML = "Hello World from Javascript!"
//             const root = document.getElementById("root")
//             root.appendChild(heading)
//         </script> -->
