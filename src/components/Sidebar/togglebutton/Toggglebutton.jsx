import React from 'react'
import {Menu, X } from 'react-feather'
const Toggglebutton = ({setopen,open}) => {
  return (
    <button onClick={()=>setopen(prev=>!prev)}>{open?<X/>:<Menu/>}</button>
  )
}

export default Toggglebutton