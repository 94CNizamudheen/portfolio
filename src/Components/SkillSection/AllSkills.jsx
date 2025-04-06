import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkill from './SingleSkill';
import { IoLogoJavascript } from "react-icons/io5";
import { SiMysql } from "react-icons/si";

import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'

const skills=[
    {skill:"HTML",icon:FaHtml5},
    {skill:"CSS",icon:FaCss3Alt},
    {skill:"JavaScript",icon:IoLogoJavascript},
    {skill:"MongoDb",icon:SiMongodb},
    {skill:"My-Sql",icon:SiMysql},
    {skill:"NodeJs",icon:FaNode},
    {skill:"React",icon:FaReact},
    {skill:"TypeScript",icon:SiTypescript},
    {skill:"TypeScript",icon:RiTailwindCssFill},
    

];
const AllSkills = () => {
  return (
    <div>
      <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto mt'>
        {skills.map((item,index)=>{
            return(
              <motion.div variants={fadeIn("up",`0.${index}`)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
              </motion.div>
            ) 
        })}
      </div>
    </div>
  )
}

export default AllSkills
