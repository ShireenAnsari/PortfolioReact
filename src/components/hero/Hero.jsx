import React from 'react'
import './Hero.scss'
import { motion } from 'framer-motion'
import { X } from 'react-feather';
const Hero = () => {
 const textvariants={
    initial:{
      x:-500,opacity:0,
    },
    animate:{
      x:0,opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1,
      },
    },
    scrollButton:{
      opacity:0,
      y:10,
      transition:{
      duration:2,
      repeat:Infinity
      }
    },
  };
   const slidervariants={
    initial:{
      x:0,opacity:0,
    },
    animate:{
      x:'-220%',
      transition:{
        repeat:Infinity,
        repeatType:'mirror',
        duration:20,
        
      },
    },
  };
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div variants={textvariants} className="textcontainer">
            <motion.h2 variants={textvariants}>Shireen Ansari</motion.h2>
            <motion.h1 variants={textvariants}> React Developer</motion.h1>
            <motion.div variants={textvariants} className="buttons">
                <motion.button variants={textvariants}><a href='#Projects'>See the Latest works</a> </motion.button>
                <motion.button variants={textvariants}><a href='#ContactMe'>Contact Me</a></motion.button>
            </motion.div>
            <motion.img variants={textvariants} animate="scrollButton" src="/scroll.png" alt="" srcset="" />
        </motion.div>
        </div>
       <motion.div variants={slidervariants} animate='animate' initial='initial'  className="slidingTextContainer">
       Web Developer
       </motion.div>
        <div className="imageContainer">
            <img src="/MyProfile.png" alt="" srcset="" />
        </div>
    </div>
  )
}

export default Hero