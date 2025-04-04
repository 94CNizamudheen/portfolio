import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2024</p>
      <div className='flex justify-center items-center gap-4'>
        <ExperienceInfo text={"Years"} number={1} />
        <p className='font-bold text-6xl text-light-brown'></p>
        <ExperienceInfo text={12} number={"websites"} />
      </div>
      <p className='text-center'>djfgj djfkgjk fgijfdk dfjgkjkfd djkgjk  dkgjkfd djgkjdklj dfrgjkljg</p>
      <ExperienceInfo text={'Max Budget'} number={"₹ 0/-"}  />
    </div>
  )
}

export default ExperienceTopLeft
