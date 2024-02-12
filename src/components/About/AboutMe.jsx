import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import AutoType from '../Autotype/AutoType'
const AboutMe = () => {
  const variants={
    initial:{
       x:-500,
       y:100,
       opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,

        }
    }
}
  return (
    <motion.div   className='About' variants={variants} initial='initial' animate='animate' style={{display:'flex'}} >
          <h1>About <span style={{color:'lightcoral'}}>Me</span></h1>
        <AutoType/>
    </motion.div>
  )
}

export default AboutMe