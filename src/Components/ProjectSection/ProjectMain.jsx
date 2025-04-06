import React from 'react'
import ProjectText from './ProjectText'
import Singleproject from './Singleproject'
import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'



const projects = [
  {
    name: 'E-commerce',
    skill: 'EJS,node.js,Express.js,MongoDb,',
    align: 'right',
    video: 'https://res.cloudinary.com/dfcujxopi/video/upload/v1743927311/For%20portfolio/v7aec8wlx2fdjrzzogsf.mp4',
    link: 'https://github.com/94CNizamudheen/Dry-store.git'
  },
  {
    name: 'Olx-clone',
    skill: 'React,TypeScript,FireBase,Tailwind',
    align: 'left',
    video: 'https://res.cloudinary.com/dfcujxopi/video/upload/v1743927320/For%20portfolio/xobzswpjai80yqvcnk1r.mp4',
    link: 'https://github.com/94CNizamudheen/Olx-clone_React-TS-FIREBASE.git'
  },
  {
    name: 'NetFlix-clone',
    skill: 'React,FireBase,',
    align: 'right',
    video: 'https://res.cloudinary.com/dfcujxopi/video/upload/v1743927304/For%20portfolio/hnquwv4hrzcgs88bqhrz.mp4',
    link: 'https://github.com/94CNizamudheen/Netflix_clone_React.git'
  },
  {
    name: 'Zomato-clone',
    skill: 'HTML,CSS',
    align: 'left',
    video: 'https://res.cloudinary.com/dfcujxopi/video/upload/v1743927310/For%20portfolio/wdufsfspuxg9ebuwe30q.mp4',
    link: 'https://github.com/94CNizamudheen/ZomatoClone.git'
  }
];

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
                <Singleproject key={index} name={project.name} skill={project.skill} align={project.align} video={project.video} link={project.link}/>
              </motion.div>
            ) 
        })}
      </div>
    </div>
  )
}

export default ProjectMain
