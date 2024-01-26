import './parallex.scss'
import React, { useRef } from 'react'
import { motion} from 'framer-motion'
// import { useScroll,useTransform } from 'framer-motion'
const Parallex = ({type}) => {
    // const ref=useRef();
    // const {scrollByprogress}=useScroll({
    //     target:ref,
    //     offset:['start start','end start']
    // })
    // const yBg=useTransform(scrollByprogress,[0,1],["0%","500%"]);
  return (
    <div className='parallex' style={{background:type==='services'?'Linear-gradient(180deg,#111132,#0c0c1d)':'Linear-gradient(180deg,#111132,#505064)',
    }}>
        <motion.h1 >{type==='services'?'What we do':'What we did'}</motion.h1>
        <motion.div className="mountain"></motion.div>
        <motion.div className="planets"></motion.div>
        <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Parallex