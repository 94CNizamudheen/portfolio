import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImages from './AboutMeImages'
import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'
import { LiaNode } from "react-icons/lia";

const AboutMeMain = () => {
    return (
        <div id='about' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
            <motion.div variants={fadeIn("right", 0.7)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <AboutMeText />
            </motion.div>
            {/* <div className=" absolute -z-10 flex justify-center items-center animate-none ">
                <LiaNode className=" md:h-[90%] sm:h-[120%] min-h-[450px] w-auto text-blue-500 blur-md animate-[bounce_2s_linear_infinite] " />
            </div> */}
            {/* <motion.div variants={fadeIn("up", 0.7)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}>
                <AboutMeImages />
            </motion.div> */}
            <motion.div 
    variants={fadeIn("up", 0.5)} 
    initial='hidden' 
    whileInView='show' 
    viewport={{ once: true, amount: 0.3 }}
    className="relative flex justify-center items-center"
>
    <AboutMeImages />
</motion.div>



        </div>
    )
}

export default AboutMeMain
