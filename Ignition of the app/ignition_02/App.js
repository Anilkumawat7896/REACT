import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hellow From imported React! 😂"
);

root.render(heading);


//  we are at 1.45 and yes please understand the build concept well enough