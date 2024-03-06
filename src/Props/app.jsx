

import FunProps from './Props/FunProps'
import ClassProps from './Props/ClassProps'
const App = () => {``
  const name="sudesh"
  const age=24
   
function clic(){
  document.body.style.backgroundColor="yellow"
} 

  return (
    <div>
      
      <FunProps name={name} age={age} />
      <FunProps name="shweta" age="23" />
      <ClassProps name="shweta" age="23" />
      <button onClick={()=>clic()}>click</button>
          </div>
  )
}

export default App


//child to parent

import React, { useState } from 'react'

const Form = (props) => {
    const[name,setName]=useState("")
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.onSubmit(name);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
      Name:<input type='text' value={name} onChange={handleChange}/>
      <button type="submit">Submit</button>
    </div>
  )
}

export default Form





import Form from "./Form";
function App() {
  const getData=(data)=>{
    console.log("coming to App",data);
  }
  return (
    <div className="App">
     <Form onSubmit={getData}></Form>
    </div>
  );
}

export default App;



//parent to child



import FunProps from './Props/FunProps'
const App = () => {
  const name="nikita"
  const age=24
  
  return (
    <div>
      
      <FunProps name={name} age={age} />
      <FunProps name="shweta" age="23" />
      
          </div>
  )
}

export default App



const FunProps = (props) => {
  return (
    <div>
      <h1>my name is {props.name} and age is{props.age}</h1>
      
    </div>
  )
}

export default FunProps



