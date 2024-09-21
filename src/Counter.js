import { useState } from "react"

const Counter=()=>{
    const[change,changenum]=useState(0)

    const handleChange=()=>{
        changenum(change+1)

        
    }
    const handleDecrement=()=>{
        changenum(change-1)
    }
    return(
      <div className="container">
        <div className="counter">
        <h1 style={{textDecoration:"underline"}}>Counter App</h1>  
        <h1 style={{color:"yellow",marginColor:"black"}} >{change}</h1>
        <button style={{backgroundColor:"#141516",color:"#CED4E2", border:`solid #CED4E2 1px`}} className="Btn1" onClick={handleChange}>Increase</button>
        <button style={{backgroundColor:"#141516",color:"#CED4E2", border:`solid #CED4E2 1px`}} className="Btn2" onClick={handleDecrement}>Decrease</button>
        </div>
       
        
      </div>
      

    )
}
export default Counter