import React from 'react'

const Toggglebutton = ({setopen}) => {
  return (
    <button onClick={()=>setopen(prev=>!prev)}>Button</button>
  )
}

export default Toggglebutton