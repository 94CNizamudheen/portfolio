import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'
//variants={fadeIn("down", 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0 }}

const HeroMain = () => {
    return (
        <div className=" pt-40 pb-16">
            <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
                <HeroText />
                <HeroPic />
            </div>

        </div>
    )
}

export default HeroMain
