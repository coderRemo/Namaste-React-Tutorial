"use strict";

/*
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// TYPE 1 
const heading = React.createElement(
  // React.createElement - is an object
  "h1",
  {
    id: "heading", // attribute
  },
  "Hello World in React!" // Children of Props(props is children + attributes)
);

console.log(heading); // heading is an object, ie., it is a react element (JS object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render method is converting the object(React Element) to HTML(browser understands) tag/element and puts it inside DOM
*/

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// TYPE 2 - NESTED HTML TAGS

// SINGLE TAG EXAMPLE
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am h1 tag</h1>
 *   </div>
 * </div>
 **/
/*
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);

// multiple TAG EXAMPLE
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am h1 tag</h1>
 *     <h2>I am h2 tag</h2>
 *   </div>
 * </div>
 **/
/*
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
*/

// NESTED TAGS EXAMPLE
/**
 * <div id="parent">
 *   <div id="child1">
 *     <h1>I am h1 tag</h1>
 *     <h2>I am h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am h1 tag</h1>
 *     <h2>I am h2 tag</h2>
 *   </div>
 * </div>
 **/
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
