import './portfolio.scss'
import React, { useRef } from 'react'
import {motion,useScroll,useSpring, useTransform} from 'framer-motion'
import { ExternalLink,Lock } from 'react-feather';
const items=[
    {
        id:1,
        title:'Ticket System',
        img:"/TicketingSystem.PNG",
        description:"Currently working on ticketing system that let's client create the ticket and admin to Pick that ticket and resolve that at the specific amount of time . The backend api was given i am designing the frontend of this project to fully functional App using React-JS",
        demo:"https://drive.google.com/file/d/1du1WI9JD0-FFn4io0k7FU91N2A1GQG0H/view"
    },
    {
      id:2,
      title:'Full Stack Blog WebApp',
      img:"/Blog.PNG",
      description:"Just created the fully funtional Blog web App using React-JS and saas for frontend designing along with that i also created the backend api using node and express js mysql",demo:"https://drive.google.com/file/d/1xlAqHFWWBF-bY7cAq4IXzeU9z5Mx-s2j/view?usp=sharing"
    },
      {
    id:3,
    title:'Personal Portfolio',
    img:"/PortfolioWeb.PNG",
    description:"Just created this fully responsive and user friendly portfolio web APP using REACT-JS Saas and frammer motion.Also integrated emailJS for email service. ",demo:"#Home"
},
{
  id:4,
  title:'Flix Movie App',
  img:"/FlixMovie.PNG",
  description:"I've developed a movie app using pure vanilla JavaScript, leveraging the tmdb movie database for fetching a comprehensive list of movies. The application showcases the latest movies and TV shows, incorporating a robust search functionality for a seamless user experience. ",demo:"https://fliexmovieapp.netlify.app/",
  repo:<Lock/>
},
,
{
  id:5,
  title:'Social App',
  img:"/SocialApp.PNG",
  description:"I developed the simple frontend design of Social App using React and Material UI for enhancing user friendly interface ",demo:"https://coruscating-tulumba-c2fc3e.netlify.app/",
  repo:<Lock/>
}
];
// const redirectToSpecificLink = () => {
//   // Specify the link you want to redirect to
//   const targetLink = "https://example.com";

//   // Redirect to the specified link
//   history.push(targetLink);
// };

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
        <button
         onclick={()=>location.href=items.demo} type="button"
         ><ExternalLink/> 
          Demo</button>
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