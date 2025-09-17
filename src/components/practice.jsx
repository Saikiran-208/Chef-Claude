import React from 'react'
import { useState } from 'react'
import padsData from '../../pads'
import Pad from './pad'
const Test = () => {

    const [pads, setPads] = useState(padsData)



    const toggle= (id)=> {
        console.log(" clicked",id)
        setPads(prev => prev.map(pad => { 
            return pad.id === id?{...pad, on:!pad.on}:pad}))
       
    }

    const buttonElements = pads.map(pad => (
        <Pad id={pad.id} key={pad.id} color={pad.color} on={pad.on} toggle={toggle} />
    ))



    return (
        <>
            <div className='grid grid-cols-4 grid-rows-2 gap-2' >
                {buttonElements}
            </div>
            <button className='bg-red-400 text-white w-30 p-2'>Turn off</button>
        </>
    )
}

export default Test
