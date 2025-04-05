import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm'
import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'


const SkillMain = () => {
  return (
    <div id='skills'  className="max-w-[1200px] px-4 mx-auto min-h-[500px] relative overflow-hidden flex flex-col items-center">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.7}}
      >
        <SkillText />
      </motion.div>
      <div className="mt-20 w-full hidden lg:block">
        <AllSkills />
      </div>
      <div className='block lg:hidden'>
        <AllSkillsSm />
      </div>
    </div>
  )
}

export default SkillMain
