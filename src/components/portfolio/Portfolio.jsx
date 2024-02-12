import './portfolio.scss'
import React, { useRef } from 'react'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
import { Activity, ExternalLink, GitHub, Video } from 'react-feather';
const items=[
    {
        id:1,
        title:'Ticket System',
        img:"/TicketingSystem.PNG",
        description:"Currently working on ticketing system that let's client create the ticket and admin to Pick that ticket and resolve that at the specific amount of time . The backend api was given i am designing the frontend of this project to fully funtional App using React-JS",
        demo:"https://drive.google.com/file/d/1du1WI9JD0-FFn4io0k7FU91N2A1GQG0H/view",
        repo:"https://github.com/ShireenAnsari/TicketingSystem.git"
    },
    {
      id:2,
      title:'Full Stack Blog WebApp',
      img:"/Blog.PNG",
      description:"Just created the fully funtional Blog web App using React-JS and saas for frontend designing along with that i also created the backend api using node and express js mongodb",demo:"https://drive.google.com/file/d/1xlAqHFWWBF-bY7cAq4IXzeU9z5Mx-s2j/view?usp=sharing",repo:"https://github.com/ShireenAnsari/Blog_WebApp.git"
    },
      {
    id:3,
    title:'Personal Portfolio',
    img:"/PortfolioWeb.PNG",
    description:"Just created this fully responsive and user friendly portfolio web APP using REACT-JS Saas and frammer motion.Also integrated emailJS for email service. ",demo:"#Home",
    repo:"https://github.com/ShireenAnsari/PortfolioReact.git"
}, 
{
  id:4,
  title:'Social App',
  img:"/SocialApp.PNG",
  description:"Just created this fully responsive and user friendly portfolio web APP using REACT-JS Saas and materialUI for UI Design ",demo:"https://65ca01385b0470d63a9f0625--coruscating-tulumba-c2fc3e.netlify.app/",
  repo:"https://github.com/ShireenAnsari/SocialMediaApp.git"
},
];
const redirectToSpecificLink = () => {
  // Specify the link you want to redirect to
  const targetLink = "https://example.com";

  // Redirect to the specified link
  history.push(targetLink);
};

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
        <div className="linktags">
        <a href={items.demo}><ExternalLink/>  Demo</a>
        <a  href={items.repo}><GitHub/> Repo</a>
        </div>
      
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