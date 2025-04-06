import React from 'react'

import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'

const SingleExperiences = ({experience}) => {
  return (
    <motion.div variants={fadeIn("right", 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }}
     className='md:h-[350px] md:w-[240px] sm:w-full border-2 border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan'>{experience.job}</p>
      <p className='text-orange'>{experience.company}</p>
      <p className='text-light-grey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experience.responsibilities.map((resp,index)=>{
        return <li key={index}>{resp}</li>
      })}</ul>
    </motion.div>
  )
}

export default SingleExperiences
