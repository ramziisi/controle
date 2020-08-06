import React from 'react';

import './App.css';
import photo from './photo.jpeg'

import GetData from './GetData';
const personne=[
  {name:'ramzi',email:'ramzi@gmail.com',age:22},
  {name:'ramzi',email:'ramzi@gmail.com',age:22},
  {name:'ramzi',email:'ramzi@gmail.com',age:22} ,
  
];


function App(name,email,age,imgurl) {
  return (
    <div className="App">
      
      <GetData personne={personne } />
    </div>
  );
}

export default App;
