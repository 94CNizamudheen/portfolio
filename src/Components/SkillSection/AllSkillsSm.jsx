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
const skills=[
    {skill:"HTML",icon:FaHtml5},
    {skill:"CSS",icon:FaCss3Alt},
    {skill:"JavaScript",icon:IoLogoJavascript},
    {skill:"MongoDb",icon:SiMongodb},
    {skill:"NodeJs",icon:FaNode},
    {skill:"React",icon:FaReact},
    {skill:"TypeScript",icon:SiTypescript},
    {skill:"TypeScript",icon:RiTailwindCssFill},
    

];
const AllSkillsSm = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item,index)=>{
        return <div key={index} className='flex flex-col items-center'>
            <item.icon className='text-7xl text-orange'/>
            <p className='text-center mt-4 text-white'>{item.skill}</p>
        </div>
      })}
    </div>
  )
}

export default AllSkillsSm
