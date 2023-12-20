import React from "react";
import ReactDOM from "react-dom/client";

// Core React:  React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log("head", heading);

// React Element: 
const num = 1000;

// JSX - HTML-like or XML-like syntax

// Babel: Transpiled before it reached the JS => PARCEL => Babel

// JSX => babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const Title = function () {
  return <h1 className="head">Namaste React using JSX 🚀</h1>;
};

const  element = <h1>React Element</h1>

// React Functional Component

const HeadingComponent = () => {
  return (
    <div>
      {element} <br/>
      <h2>React Element: {num}</h2>
      {100 * 2}
      <Title />
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};

// console.log("JSX", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// root.render(jsxHeading);
