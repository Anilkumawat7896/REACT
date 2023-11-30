# Laying the Foundation

## React Element

in react we have react element those like dom elements.
example :

```javascript
const headingByCreateElement = React.createElement(
  "h2",
  {},
  "Hellow React Child"
);

// this could be written like this

const heading = <h2>Hellow React Child</h2>;
```

here createElement() is a perdifeined function which react provides us and it takes 3 arguments

- first is the name of the tag or element we want to create
- second is a object which will contain the attributes to this element we have cerated
- third is the children of the element

<span style="background-color:Yellow;color:Red;padding:2px 8px"> NOTE</span> : react element is not a html element.

## JSX

jsx provides us a simple syntex to write markup it is easy it is fast and it is safe too.

<span style="background-color:Red;padding:2px 8px">Question :</span> hey , wait a minute "it's safe too" how is that?

<span style="background-color:#2bc0b5;padding:2px 8px">Answer :</span> Actually jsx prevents injection attects to prevent Cross site scripiting(CSS).

<span style="background-color:Red;padding:2px 8px">Question :</span> okay, fine but how do it do that?

<span style="background-color:#2bc0b5;padding:2px 8px">Answer :</span> it is because before rendering content to the web page it converts everything to string then renders it.For Example look at this code--->

```javascript
const Test = () => {
  const danger = `<script src="https://example.com/melicious_attect.js/">alert("this is a injection atteck:")</script>`;

  return (
    <>
      <h1>{danger}</h1>
    </>
  );
};
export default Test;
```

when you run this component you will notice that the script is itself converted to a string and that's why no injection attects would be affective because of jsx.

<span style="background-color:Yellow;color:Red;padding:2px 8px"> NOTE</span> : whenever you run this code do not forget to change it's name to your file name or you can create a .jsx file of name "Test" too.

Now I hope it's clear to you.

## How Browsers Understand JSX

Actually browsers can not understand JSX because it is not pure javascript.
So to make the browser understand we need a transpiler which would convert JSX to javascript.
And for that Bable is most famous.

for example see this code

```javascript
const Test = () => {
  const danger = `<script src="https://example.com/melicious_attect.js/">alert("this is a injection atteck:")</script>`;

  return (
    <>
      <h1>{danger}</h1>
    </>
  );
};
export default Test;
```

this react code above

will be converted to this code below

```javascript
var Test = function Test() {
  var danger =
    '<script src="https://example.com/melicious_attect.js/">alert("this is a injection atteck:")</script>';

  return React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, danger)
  );
};

exports.default = Test;
```

this is how browser undestand JSX.

## Components in React

components are of two types

1. Functional Component
2. Class Bases Components <span style="color:blue">(deprecated)</span>

### 1. Functiona Components

functional components are just a normal javascript Function which returns JSX that's it.

- always start the components name with a capital latter
- use camel casing in naming the functional component

example :

all the functional components can be written like these ,I assume that you know how import and export works in javascript

```javascript
export function Type1() {
  return <>Type 1</>;
}

export const Type2 = () => {
  return <>Type 2</>;
};

export const Type3 = () => <>Type 4</>;

export const Type4 = () => (
  <>
    Type4
    <p>yes this is a type</p>
  </>
);
```

## how to use Components or call the Components

😂yasssss, we can use a component and we can even call a component

for example

```javascript
export const CallingAComponent = () => {
  return <>Component is called</>;
};
```

and the component can be called like this

```javascript
import ReactDOM from "react-dom/client";
import { CallingAComponent } from "./components/WaysToWriteComponets";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CallingAComponent />
    {CallingAComponent()}
  </>
);
```

we can do that because of one thing Components are just javascript Functions
