import React from 'react'
import {motion} from 'framer-motion'
const Test = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
const items=["item1","item2","item3","item4"]
  return (
    <div className='course'>
     <motion.ul initial='hidden' animate='visible' variants={container} >
     {items.map((item)=>(
         <motion.li key={item} variants={container}>
       {item}
         </motion.li>
     )
     )}
   
     </motion.ul>
    </div>
  )
}

export default Test