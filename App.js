// Creating H1 element in React
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React!");
// have to put h1 into DOM on to our browser
// let create the DOM element to put heading inside DIV tag
const root = ReactDOM.createRoot(document.getElementById("root"));
// whatever will do we will render inside header using render 
root.render(heading);