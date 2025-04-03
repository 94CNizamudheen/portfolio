import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center sm:text-center' >
     <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
     <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem beatae dolorum, quas nam aliquam dolor quibusdam veritatis voluptatum neque debitis! Blanditiis nemo itaque et nihil excepturi, perferendis quis natus vel.</p>
     <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
    
  )
}

export default AboutMeText
