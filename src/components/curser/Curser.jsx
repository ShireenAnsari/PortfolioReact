import React from 'react'
import './curser.scss'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useEffect } from 'react'
const Curser = () => {
    const [position,setposition]=useState({x:0,y:0})
    useEffect(()=>{
    const mouseover=(e)=>{
        setposition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",mouseover)
    return ()=>{
        window.removeEventListener("mousemove",mouseover);
    }
    },[])
  return (
    <motion.div  className='Curser' animate={{x:position.x+10,y:position.y+10}}></motion.div>
  )
}

export default Curser