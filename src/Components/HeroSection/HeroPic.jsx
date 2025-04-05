import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'
import { LuBraces } from "react-icons/lu";

const HeroPic = () => {
  return (
    <motion.div variants={fadeIn("down", 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}
    className=" h-full flex items-center justify-center ">
      <img src='/images/Nizamudheen_new.png' alt=""  className="max-h-[800px] w-auto"/>
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse  ">
        <LuBraces className=" md:h-[90%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-xl animate-[spin_20s_linear_infinite] " />
      </div>
      
    </motion.div>
  )
}

export default HeroPic
