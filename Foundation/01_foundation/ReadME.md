# Foundation 01

    here we will learn about Scripts how to write them and how to use them

## Scripts

    scripting is a very good way to minify the run command we have given like we run our project using
    'npx parcel index.html --port 3000'
    we can use a script for that which we will make accourding to our convinience but it is a good prectise to follow industry rules/parameters

    now how will we define our script

        'pacakge.json'

        "scripts": {
             "test": "echo \"Error: no test specified\" && exit 1",
              "dev":"parcel index.html --port 3000"
        },

      here the dev is a custome  script which we have given to it so we can run it like this

        'npm run start' or 'npm start' (but it only workds with the start keyword in our case we have "dev" so "npm dev" is not equal to "npm run dev"  but "npm start" == "npm run start" )

    it is always a good prectise to make different scripts for development and builds/production. There is no Boundation or something but these are some good industry prectises so we shoud follow that too

# React Element

    What --> React element is a object represantaion of DOM node.It is a plan old object not a DOM element.

    we can create a React element using "createElement()"

    it takes 3 props
        1. the name of the tag
        2. a object which would contain the props the the new element which we are going to create will have
        3. children of newly created element eather we can give any text of use it as a container to make elements nested

here is the example

```Javascript
const root = ReactDOM.createRoot(document.getElementByI('root'));
const heading  = React.createElement('h1',{id:'firstHeading',className:'heading'},'Hellow World From React Element !! 😊');

root.render(heading);

```

<hr>
now this above code use ReactDOM yahh yahh I know I'll explain it later just get the hang of it for now

we also used use something we know as <code>render()</code> what that render do simple what the word 'render' it means to show something Hope I'm right about it.

and the argument we are passing in is the componenet we want to show right!!

<hr>

<br><br>

# JSX

what -- > it is not html in javascript , It just have HTML like syntex right!!

YESSSSSSSSSSSSSSSS !!! it is not the React itself , JSX is a whole different thing aprat from React

How you create a jsx element

```Javascript

    // this is a jsx heading
    const jsxHeading = <h1 id="jsxHeading">Thisd is a jsx Heading 😒</h1>

    // this is a React Heading
    const heading  = React.createElement('h1',{id:'firstHeading',className:'heading'},'Hellow World From React Element !! 😊');

```

now if you try to log this heading you will see a object and this will be the same object as the react Heading object

```Javascript
// for jsx
    console.log(jsxHeading)
// for React
    console.log(heading)
```

    <!-- NOTES -->

1.  WHY jsx --> beacuse when we write code it is for a machine and a human but the priority is human that's why jsx is introduced because the syntex of jsx is more developer friendly and more human readable .
2.  Inside jsx in the paranthesis <code>{}</code> You can write any javascript code for example --->

```javascript

let number = 10;
 const jsxHeading = <h1 id="jsxHeading">Thisd is a jsx Heading 😒{
  console.log("Yes this is a javascript code buddy");
  console.log(number*20);
  document.write(number+2);
 }</h1>
```

<div >
<h2 style="color:green">WHY JSX IS AMAZING</h2>
<div style="color:yellow">
jsx is not only easy to write but it gives us a amazing feature to us what is that ......

okay okay now listen carefully

jsx automatically escapes any user input or dynamic values before rendering them to DOM. okay what that means it means if our jsx contains any dynamic data means a piece of code which required our data like it need data in any from from in our jsx. Then our true friend jsx escapes means just ignore that piece of code and do not run that on DOM because it could make big issue beause that code could be something which takes our cookies or session information and send it to someone else I hope you understand. In the mean time I'll try to write it more simply so that it could be understood by you.

</div>   
</div>

# React Component

Starts from a capital latter (yes my friend it is mendatary😒)
two types

1.  class bases
2.  functional conponents

### Class Bases Component (old)

    this was old way of component

### Functional Component (letest)

    Uses javascript functions to write it.
    What --> is just a normal javascript function.If a function is returning some piece of JSX that's a functional component.That's it khatam ho gya bass itna hi h .

    example (there are 3 ways to write a functional component if you know arrow functionnsyntex in javascript then . This just make Developers Look cool 😎) -->

```Javascript

const HeadingComponent = () => {
  return (
    <h1>
      This is a Functional component heading from react 😒 yahh there is nothing
      new about it so don't try to make your seld oversmart.😁
    </h1>
  );
};
const HeadingComponent2 = () =>  <h1>This is a Functional component heading </h1>


const HeadingComponent3 = () => (
  <h1>
    This is a Functional component heading from react 😒 yahh there is nothing
    new about it so don't try to make your seld oversmart.😁
  </h1>
);

```

        component composition ---->  nested component (component whinin component )
