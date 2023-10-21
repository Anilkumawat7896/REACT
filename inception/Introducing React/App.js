// here the object if for the attributes you will give to your tag  syntex ---: attribute_name : "attribute_value"

/* const heading = React.createElement(
  "h1",
  {
    style: {
      color: "red",
      backgroundColor: "blue",
      "font-size": "60px",
    },
    title: "Intro message",
  },
  "Hellow World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); */

//  how to make nested elements

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const heading1 = React.createElement(
//   "h1",
//   { className: "heading" },
//   "This is how React Operate!"
// );
// const heading2 = React.createElement(
//   "h2",
//   { className: "heading" },
//   "This is the Second Heading!"
// );

// const childDiv = React.createElement("div", { id: "child" }, heading1);

/* 

if you want to give siblings then do this
react will thow a error like you need a key something like that

*/

/* const childDiv = React.createElement("div", { id: "child" }, [
  heading1,
  heading2,
]);

const parentDiv = React.createElement("div", { id: "parent" }, childDiv);

root.render(parentDiv); */

//  we left at 1.6.15 in inception in react

// nested child components

const root = ReactDOM.createRoot(document.getElementById("root"));

const parentDiv = React.createElement("div", { className: "parent" }, [
  React.createElement("div", { className: "child1" }, [
    React.createElement("h1", {}, "H1 from child one div"),
    React.createElement("h2", {}, "H1 from child one div"),
    React.createElement("hr"),
  ]),
  React.createElement("div", { className: "child2" }, [
    React.createElement("h1", {}, "H1 from child two div"),
    React.createElement("h2", {}, "H1 from child two div"),
  ]),
]);

root.render(parentDiv);

/* 

siblings can not be created like this because react will overwrite this 

    const randomHeading = React.createElement(
      "h1",
      { className: "Heading" },
      "This is a random Heading"
    );

    root.render(randomHeading);

*/
