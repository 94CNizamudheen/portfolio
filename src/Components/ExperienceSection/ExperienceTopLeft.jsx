import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold  text-3xl font-special text-center'>Since 2024 Augest</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo text={"17"} number={17} />
        <p className='font-bold text-6xl text-light-brown'></p>
        <ExperienceInfo  text={"Projects"} />
      </div>
      
    </div>
  )
}

export default ExperienceTopLeft
