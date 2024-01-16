import React, { useState } from 'react'
import './sidebar.scss';
import { motion } from 'framer-motion';
import Toggglebutton from './togglebutton/Toggglebutton';
import Links from './links/Links';
const Sidebar = () => {
    const [open,setopen]=useState(false);
    const variants={
        open:{clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"Spring",
            stiffness:20,
        }
    },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"Spring",
                stiffness:400,
                damping:40,
            },
        },
    }
  return (
    <motion.div className='sidebar' animate={open?"open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <Toggglebutton setopen={setopen}/>

    </motion.div>
  )
}

export default Sidebar