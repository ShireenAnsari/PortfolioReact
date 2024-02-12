import React from 'react'
import './Skills.scss'
import {  motion } from 'framer-motion'
const Skills = () => {
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
    <>
     <motion.div  variants={variants} initial='initial'   animate='animate' class="skills_section">
        <div class="skills_head">
            <h2>My <span>Skills</span></h2>
            <p>Here is my skills to represent my Expertise</p>
        </div>

        <div class="skills_main">
            <div class="skill_bar">
                <div class="info">
                    <p>HTML</p>
                    <p>90%</p>
                </div>
                <div class="bar">
                    <span class="html"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>CSS</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="css"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>SASS</p>
                    <p>65%</p>
                </div>
                <div class="bar">
                    <span class="sass"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Java Script</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="js"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>React js</p>
                    <p>70%</p>
                </div>
                <div class="bar">
                    <span class="react"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Bootstrap-5</p>
                    <p>65%</p>
                </div>
                <div class="bar">
                    <span class="bootstrap"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>MySQL</p>
                    <p>65%</p>
                </div>
                <div class="bar">
                    <span class="mysql"></span>
                </div>
            </div>
            <div class="skill_bar">
                <div class="info">
                    <p>Git Version control</p>
                    <p>60%</p>
                </div>
                <div class="bar">
                    <span class="git"></span>
                </div>
            </div>
        </div>
    </motion.div>


    </>
  )
}

export default Skills