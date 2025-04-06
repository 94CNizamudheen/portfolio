import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <motion.h2 
        variants={fadeIn("down", 0.2)} 
        initial='hidden' 
        whileInView='show' 
        viewport={{ once: false, amount: 0 }}
        className='lg:text-2xl sm:text-xl uppercase text-lightGrey flex items-center gap-2'
      >
        <span className='flex items-center'>
          <img 
            src="/images/mern-stack-01.webp" 
            alt="MERN Stack" 
            className="h-[100px] w-auto mr-2 mb-8" 
          />
        </span>
        Stack Developer
      </motion.h2>
      
      <motion.h1 
        variants={fadeIn("left", 0.4)} 
        initial='hidden' 
        whileInView='show' 
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Nizamudheen <br className="sm:hidden md:block" /> Cholakkal
      </motion.h1>
      
      <motion.p 
        variants={fadeIn("up", 0.6)} 
        initial='hidden' 
        whileInView='show' 
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        I’m a self-taught developer passionate about designing and building modern, responsive websites.
        With a keen interest in front-end and back-end technologies, I enjoy turning ideas into interactive and visually appealing web experiences.
      </motion.p>
    </div>
  )
}

export default HeroText