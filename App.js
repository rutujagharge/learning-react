// // Creating H1 element in React
// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Hello World from React!");
// // have to put h1 into DOM on to our browser
// // let create the DOM element to put heading inside DIV tag
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // whatever will do we will render inside header using render
// root.render(heading);

// craeting nested elements

/**
 * <div id="parent">
 *      <div id="child">
 *             <h1> I'm, h1 tag <h1/>
 *      </div>
 * </div>
 * ReactElement(Object)  = HTML(Browser understands)
 *
 */
//---------------------------------------------- Eposide 2----------------------------------------
// import React from 'react'
// import ReactDOM from 'react-dom/client'

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [React.createElement(
//         "div",
//         { id: "child1" },
//         // Array Of Children
//         [React.createElement("h1", {}, "I'm an h1 tag of child 1"),
//         React.createElement("h2", {}, "I'm an h2 tag of child 1")]    // we can add more than 1 child in an Array if have to add 2 tags as h1 and h2
//     ),
//     React.createElement(
//         "div",
//         { id: "child2" },
//         // Array Of Children
//         [React.createElement("h1", {}, "I'm an h1 tag of child 2"),
//         React.createElement("h2", {}, "I'm an h2 tag of child 2")]    // we can add more than 1 child in an Array if have to add 2 tags as h1 and h2
//     )]
// );

// console.log(parent)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // whatever will do we will render inside header using render
// //  It is rendering on to the DOM while rendering it convert itself into that html and puts it up into the DOM
// root.render(parent);

//---------------------------------------------- Eposide 2----------------------------------------

//---------------------------------------------- Eposide 3----------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

//jsx element
const jsxElement = (
  <div>
    {" "}
    {console.log("Hi rutuja from JSX")}{" "}
    {/** We can print console logs also inside react element / react component HTML code */}
    <h1> Hello React from JSX 🚀</h1>
  </div>
);

// React component
/**
 * Class component
 * Functional component
 */

// Composite Composition
const Title = () => <h1>Hello React from Title Component 🚀</h1>;

// JS Variable
const number = 1000;
// Functional Component
const HeadingComponent = () => (
  <div id="container">
    {number}
    {/* Inside react component HTML code we can write the Javascript code like this */}
    <Title />
    {/** we can write React componenet like below also*/}
    {Title()}
    {/** we can write React element inside react component */}
    {jsxElement}
    <h1>Hello React from JSX Heading Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxElement);
console.log("First root - " + root);

// In this case only last render will get print
root.render(<HeadingComponent />);
console.log("Second root - " + root);
