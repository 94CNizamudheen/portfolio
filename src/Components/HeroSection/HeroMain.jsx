import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import { IoLogoReact } from "react-icons/io5";

const HeroMain = () => {
    return (
        <div className=" pt-40 pb-16">
            <div className="flex md:flex-row sm:flex-col  max-w-[1200px] mx-auto justify-between items-center relative px-4">
                <HeroText />
                <HeroPic />
            </div>
            <div className=" absolute -z-10 flex justify-center items-center animate-bounce  ">
                <IoLogoReact className=" md:h-[90%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-xl animate-[spin_20s_linear_infinite] " />
            </div>
          

        </div>
    )
}

export default HeroMain
