import React from 'react'
import { useState } from 'react'


const Pad = ({id , color, on, toggle}) => {

   
    
  return (
    <div >
 <button onClick={()=>toggle(id)} key={id} style={{backgroundColor:color}} className={on?"opacity-0.1":"opacity-20"} id="Button" ></button>
    </div>
  )
}

export default Pad;