import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
// * React Element
const heading = React.createElement(
  "h1",
  { className: "heading" },
  `this the heading for React!`
);

console.log(heading);
//  this piece of code is traspiled before it goes to the js engine or browser who does it ->parcel does parcel does it all alone -> no , it is using support of babel
const jsxHeading = <h1 id="jsxHeading">This is Jsx Heading</h1>;

console.log(jsxHeading);
//  root.render(jsxHeading);

// react element to html element how = babale dose the job for us

//  functional component

const HeadingComponent = () => {
  return (
    <h1>
      This is a Functional component heading from react 😒 yahh there is nothing
      new about it so don't try to make your seld oversmart.
    </h1>
  );
};

//  how will we render our component we must follow this syntex
//  this syntex is undestood by bable so we need to write this like it
root.render(<HeadingComponent />);
