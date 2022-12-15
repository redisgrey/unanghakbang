import React from 'react';

import ReactDOM from 'react-dom';

// import './index.css';

// import App from './App';

// * How to render an element
// * Step 1: create a root that will pass to DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(

//   <React.StrictMode>
    
//   </React.StrictMode>, element, document.getElementById('root')

// );


// * Step 2: Pass the element to render
// const name = "John Smith"

// const element = <h1>Hello, { name }</h1>
// JSX Javascript XML
// it allows us to write HTML elements inside the javascript
// place them inside the DOM (Document Object Model) without using createElement() and appendChild()


// * Step 3: Rendering the element
// ReactDOM.render(

//   element, document.getElementById('root')

// );

// Exercise
const fullName = {

  "firstName": "Dahl",

  "lastName": "Tamares"

}

// const joinedName = 

const joinedName = () => {

  return <h1>Hello, I am {fullName.firstName} {fullName.lastName}</h1>

}

ReactDOM.render(

  joinedName(), document.getElementById('root')

);