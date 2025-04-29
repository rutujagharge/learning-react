// // // Creating H1 element in React
// // const heading = React.createElement(
// //     "h1",
// //     { id: "heading" },
// //     "Hello World from React!");
// // // have to put h1 into DOM on to our browser
// // // let create the DOM element to put heading inside DIV tag
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // whatever will do we will render inside header using render
// // root.render(heading);

// // craeting nested elements

// /**
//  * <div id="parent">
//  *      <div id="child">
//  *             <h1> I'm, h1 tag <h1/>
//  *      </div>
//  * </div>
//  * ReactElement(Object)  = HTML(Browser understands)
//  *
//  */
// //---------------------------------------------- Eposide 2----------------------------------------
// // import React from 'react'
// // import ReactDOM from 'react-dom/client'

// // const parent = React.createElement(
// //     "div",
// //     { id: "parent" },
// //     [React.createElement(
// //         "div",
// //         { id: "child1" },
// //         // Array Of Children
// //         [React.createElement("h1", {}, "I'm an h1 tag of child 1"),
// //         React.createElement("h2", {}, "I'm an h2 tag of child 1")]    // we can add more than 1 child in an Array if have to add 2 tags as h1 and h2
// //     ),
// //     React.createElement(
// //         "div",
// //         { id: "child2" },
// //         // Array Of Children
// //         [React.createElement("h1", {}, "I'm an h1 tag of child 2"),
// //         React.createElement("h2", {}, "I'm an h2 tag of child 2")]    // we can add more than 1 child in an Array if have to add 2 tags as h1 and h2
// //     )]
// // );

// // console.log(parent)

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // whatever will do we will render inside header using render
// // //  It is rendering on to the DOM while rendering it convert itself into that html and puts it up into the DOM
// // root.render(parent);

// //---------------------------------------------- Eposide 2----------------------------------------

// //---------------------------------------------- Eposide 3----------------------------------------

// import React from "react";
// import ReactDOM from "react-dom/client";

// //jsx element
// const jsxElement = (
//   <div>
//     {" "}
//     {console.log("Hi rutuja from JSX")}{" "}
//     {/** We can print console logs also inside react element / react component HTML code */}
//     <h1> Hello React from JSX 🚀</h1>
//   </div>
// );

// // React component
// /**
//  * Class component
//  * Functional component
//  */

// // Composite Composition
// const Title = () => <h1>Hello React from Title Component 🚀</h1>;

// // JS Variable
// const number = 1000;
// // Functional Component
// const HeadingComponent = () => (
//   <div id="container">
//     {number}
//     {/* Inside react component HTML code we can write the Javascript code like this */}
//     <Title />
//     {/** we can write React componenet like below also*/}
//     {Title()}
//     {/** we can write React element inside react component */}
//     {jsxElement}
//     <h1>Hello React from JSX Heading Component 🚀</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxElement);
// console.log("First root - " + root);

// // In this case only last render will get print
// root.render(<HeadingComponent />);
// console.log("Second root - " + root);

// ---------------------------------------------- Eposide 4 app base----------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";

/* Header
    - Logo
    - Nav Items
   Body
    - Search
    - RestaurantContainer
    - RestaurantCard
   Footer
    - Copyright
    - Links
    - Address
    - Contact */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iwvr92y262mmviy6hwdu"
      />
      <h3>Copa Villa</h3>
      <h4>Continental, Italian</h4>
      <h4>4.2 rating </h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <HeaderComponent />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
