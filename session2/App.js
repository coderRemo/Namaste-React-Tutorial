import React from "react";
import ReactDOM from "react-dom/client";

// code in react
/*
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

// code in JSX
/*
const jsxHeading = <h1 id="heading">This in React in JSX 💥</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
*/

// react element
/*
const heading = <h1 className="head">React using React Element</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
*/

// react functional component
const Title = function () {
  return <h1 className="head">Component Composition</h1>;
};

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading"> React using functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
