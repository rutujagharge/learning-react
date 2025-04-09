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

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        // Array Of Children
        [React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")]    // we can add more than 1 child in an Array if have to add 2 tags as h1 and h2
    ));

// const heading = React.createElement(s
//     "h1",
//     { id: "heading" },
//     "Hello World from React!");

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
// whatever will do we will render inside header using render 
//  It is rendering on to the DOM while rendering it convert itself into that html and puts it up into the DOM
root.render(parent);