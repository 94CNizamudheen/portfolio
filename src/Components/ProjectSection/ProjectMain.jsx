import React from 'react'
import ProjectText from './ProjectText'
import Singleproject from './Singleproject'


const projects=[
    {name:'E-commerce' ,year:'2024',align:'right',image:'../../../public/images/website-img-1.jpg',link:'#'},
    {name:'E-commerce' ,year:'2024',align:'left',image:'../../../public/images/website-img-1.jpg',link:'#'},
    {name:'E-commerce' ,year:'2024',align:'right',image:'../../../public/images/website-img-1.jpg',link:'#'},
    {name:'E-commerce' ,year:'2024',align:'left',image:'../../../public/images/website-img-1.jpg',link:'#'},
]
const ProjectMain = () => {
  return (
    <div id='project' className='max-w-[1200px] mx-auto px-4 '>
      <ProjectText/>
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects.map((project,index)=>{
            return <Singleproject key={index} name={project.name} year={project.year} align={project.align} image={project.image} link={project.link}/>
        })}
      </div>
    </div>
  )
}

export default ProjectMain
