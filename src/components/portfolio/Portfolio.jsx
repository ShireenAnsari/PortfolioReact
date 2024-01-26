import './portfolio.scss'
import React, { useRef } from 'react'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
const items=[
    {
        id:1,
        title:'React Project',
        img:"/Portfolio.jpg",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel fugit. Voluptatibus accusamus maiores numquam ex enim pariatur suscipit, ipsam animi reiciendis impedit doloribus adipisci est quibusdam asperiores in quis?"
    }, {
      id:2,
      title:'Next js Project',
      img:"/Ticket-System.jpg",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel fugit. Voluptatibus accusamus maiores numquam ex enim pariatur suscipit, ipsam animi reiciendis impedit doloribus adipisci est quibusdam asperiores in quis?"
  }, {
    id:3,
    title:'Tailwind CSS Project',
    img:"/Portfolio.jpg",
    description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel fugit. Voluptatibus accusamus maiores numquam ex enim pariatur suscipit, ipsam animi reiciendis impedit doloribus adipisci est quibusdam asperiores in quis?"
}, {
  id:4,
  title:'Javascript Project',
  img:"/Portfolio.jpg",
  description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, vel fugit. Voluptatibus accusamus maiores numquam ex enim pariatur suscipit, ipsam animi reiciendis impedit doloribus adipisci est quibusdam asperiores in quis?"
}
];
const Single=({items})=>{

  const ref=useRef();
  const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});
 const y=useTransform(scrollYProgress,[0,1],[-100,100]);
  return<section>
    <div className="container">
      <div className="wrapper">
        <div className="imagecontainer" ref={ref}>
        <img src={items.img} alt="" />
        </div>
        <motion.div className="textcontainer" style={{y}}>
        <h2 >{items.title}</h2>
        <p>{items.description} </p>
        <button>See Demo</button>
      </motion.div>
      </div>
     
     
    </div>
    </section>
}
const Portfolio = () => {
  const ref=useRef();
  const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"],});
  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,

  })
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}}   className="progressBar"></motion.div>
      </div>
      {items.map(item=><Single items={item} key={item.id}/>)}
    </div>
  )
}

export default Portfolio