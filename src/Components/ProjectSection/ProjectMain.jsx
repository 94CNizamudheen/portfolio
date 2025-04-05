import React from 'react'
import ProjectText from './ProjectText'
import Singleproject from './Singleproject'
import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'



const projects=[
    {name:'E-commerce' ,year:'2024',align:'right',image:'/images/website-img-1.jpg',link:'#'},
    {name:'E-commerce' ,year:'2024',align:'left',image:'/images/website-img-1.jpg',link:'#'},
    {name:'E-commerce' ,year:'2024',align:'right',image:'/images/website-img-1.jpg',link:'#'},
    {name:'E-commerce' ,year:'2024',align:'left',image:'/images/website-img-1.jpg',link:'#'},
]
const ProjectMain = () => {
  return (
    <div id='project' className='max-w-[1200px] mx-auto px-4 '>
      <motion.div variants={fadeIn("up", 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
        <ProjectText/>
      </motion.div>
      
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((project,index)=>{
            return(
              <motion.div variants={fadeIn("left", 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}
              >
                <Singleproject key={index} name={project.name} year={project.year} align={project.align} image={project.image} link={project.link}/>
              </motion.div>
            ) 
        })}
      </div>
    </div>
  )
}

export default ProjectMain
