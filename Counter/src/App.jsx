import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  function incrementValue(){
    counter=counter+1;
    setCounter(counter);
  }

  function decrementValue(){
    if(counter>0){
      counter=counter-1;
      setCounter(counter);
      }
  }

  return (
    <>
   
        
      <h1>Counter Project</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={incrementValue}>Increment Value</button>
      <button onClick={decrementValue}>Decrement Value</button>
      
    </>
  )
}

export default App
