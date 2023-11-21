import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

function incrementCount(){            
  setCount(x=>(x+1)); 
}

function decrementCount(){
  setCount(x=>{
      if(x===0){
          return x;
      }else{
          return --x
      }
  });
}

  return (
    <>
      <div>
      <h1 style={{textAlign:'center'}}>Counter</h1>
      <div style={{display : 'flex',width:'100%',justifyContent:'center'}}>
      <button onClick={incrementCount}  style={{margin:"0 2rem 0 2rem",padding:"1rem",fontSize:"1.5rem"}}>Increment Counter</button>
      <button onClick={decrementCount} style={{margin:"0 2rem 0 2rem",padding:"1rem",fontSize:"1.5rem"}}>Decrement Counter</button>
     
      </div>
      <div style={{textAlign:'center',margin:'2rem',backgroundColor:"",fontSize:"1.5rem",fontWeight:"bold",color:"black"}}>Count : {count}</div>
      </div>
        
    </>
  )
}

export default App
