import React from 'react'
import './navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { GitHub, Linkedin, Mail } from 'react-feather';
const Navbar = () => {
  return (
    <div className='navbar'>
        
          {/* sidebar */}
          <Sidebar/>
          <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>Shiricodes ❤️</motion.span>
            <div className="social">
                <a href='https://pk.linkedin.com/in/shireen-ansari-216729274'>
                   <Linkedin color='blue'/>
                </a>
                <a href='https://github.com/ShireenAnsari'>
                    <GitHub color='red'/>
                </a>
                <a href='ansarishireen996@gmail.com'>
                    <Mail color='orange'/>
                </a>
            </div>
          </div>
    </div>
  )
}

export default Navbar