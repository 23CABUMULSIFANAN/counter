import React, { useState } from 'react'
import { GrPowerReset } from "react-icons/gr";
import "./Home.css"

export default function Home() {
    const[val,setVal]=useState(0)
    const [err,setErr]=useState()
    const Min=0
    const Max=20
    function handle(e){
        e.preventDefault()
       const num=Number(e.target.value)
       if ( num>0 && num<20){
        setVal(num)
        setErr("")

       }
       else{
        setErr("Out of Range")
       }

    }
   const updateValue=(update)=>{
    if(update >Min && update<=Max){
        setVal(update)
        setErr("")
    }
    else{
        setErr("Maximum Limit reached")
    }
   }

  
    
  return (
    <div className='counter-app '>
          <h1 className='counter-head'>Counter App</h1>
          <div className='container'>
            <div className='row counter-main'>
                <div className='col-12 col-md-4 '>
                    <button className='count-btn' onClick={()=>{updateValue(val-1)}}>-</button>
                   
                </div>
                <div className='col-12 col-md-4'>
                    <h2 className='counter-val' style={{color:val>0?"green":"white"}}>{val}</h2>
                </div>
                <div className='col-12 col-md-4'>
                     <button className='count-btn' onClick={()=>{updateValue(val+1)}}>+</button>
                    
                </div>
            </div>

            <div className='counter-input'>
                <input placeholder='Enter a number'name="number" onChange={handle}></input>
            </div>
               

            <div className='reset'>
                <button className='reset-btn' onClick={()=>setVal(0)}><GrPowerReset /></button>
                <button className='increase-btn' onClick={()=>{updateValue(val+2)}}>+2</button>
            </div>
              {err && <p style={{color:"red", textAlign:"center"}}>{err}</p>}
          </div>
    </div>
  )
}
