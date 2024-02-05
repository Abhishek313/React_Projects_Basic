import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     
      <h1 className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("Red")}className="outline-none px-4" style={{backgroundColor:"red"}}>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("Green")} className="outline-none px-4" style={{backgroundColor:"green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("Yellow")} className="outline-none px-4" style={{backgroundColor:"yellow"}}>Yellow</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("Blue")} className="outline-none px-4" style={{backgroundColor:"blue"}}>Blue</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("Violet")} className="outline-none px-4" style={{backgroundColor:"violet"}}>Violet</button>
        </div>
        
        </div>
      
      </h1>
     
    </>
  )
}

export default App
