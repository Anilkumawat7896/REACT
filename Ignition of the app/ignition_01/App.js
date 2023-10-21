const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Welcome to React Once Again!"
);

root.render(heading);
