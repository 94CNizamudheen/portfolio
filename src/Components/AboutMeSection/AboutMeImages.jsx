import React from 'react'

const AboutMeImages = () => {
  return (
    <div className='h-auto max-h-[500px] w-[80%] sm:w-[90%] md:w-[300px] relative'>
      <div className='h-full w-full rounded-[100px] absolute overflow-hidden'>
        <img src="/images/steps.jpg" alt="" className='h-full w-full object-cover'/>
      </div>
      <div className='h-[90%] w-[250px] bg-orange absolute bottom-4 left-4 rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-0'></div>
    </div>
  )
}


export default AboutMeImages
