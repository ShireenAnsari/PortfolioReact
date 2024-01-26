import React, { useRef } from 'react'
import './services.scss'
import { motion,useInView } from 'framer-motion'
const Services = () => {
    // const ref=useRef();
    // const isinview=useInView(ref,{margin:'-100px'});
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
   <div className="services" variants={variants} initial='initial'
//    animate={isinview &&'animate'}
    whileInView={'animate'}
    // ref={ref}
    >
    <motion.div className="textcontainer" variants={variants} >
        <motion.p>
            I focus on helping your websites look extremely <br/> user friendly
        </motion.p>
        <hr/>
    </motion.div>
    <motion.div className="titlecontainer" variants={variants} >
        <div className="title">
            <img src="/people.webp" alt="" srcset="" />
            <h1>
                <motion.b whileHover={{color:'orange',cursor:'pointer'}}>Unique </motion.b>
             Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color:'orange',cursor:'pointer'}}>For your </motion.b>Buisness</h1>
            <motion.button whileHover={{backgroundColor:'black',color:'orange',cursor:'pointer'}}>What we do?</motion.button>
        </div>
    </motion.div>
    <motion.div className="listcontainer" variants={variants} >
        <motion.div className="box"  whileHover={{backgroundColor:'lightgray',color:'black',cursor:'pointer'}} >
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati asperiores, modi at soluta nihil accusantium architecto, deserunt nobis laborum dolor iste. Delectus quaerat corrupti at nulla vel optio nobis!</p>
            <button>Go</button>
        </motion.div>
        <motion.div  className="box" whileHover={{backgroundColor:'lightgray',color:'black',cursor:'pointer'}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati asperiores, modi at soluta nihil accusantium architecto, deserunt nobis laborum dolor iste. Delectus quaerat corrupti at nulla vel optio nobis!</p>
            <button>Go</button>
        </motion.div>
        <motion.div  className="box" whileHover={{backgroundColor:'lightgray',color:'black',cursor:'pointer'}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati asperiores, modi at soluta nihil accusantium architecto, deserunt nobis laborum dolor iste. Delectus quaerat corrupti at nulla vel optio nobis!</p>
            <button>Go</button>
        </motion.div>
        <motion.div  className="box" whileHover={{backgroundColor:'lightgray',color:'black',cursor:'pointer'}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati asperiores, modi at soluta nihil accusantium architecto, deserunt nobis laborum dolor iste. Delectus quaerat corrupti at nulla vel optio nobis!</p>
            <button>Go</button>
        </motion.div>
    </motion.div>
   </div>
  )
}

export default Services