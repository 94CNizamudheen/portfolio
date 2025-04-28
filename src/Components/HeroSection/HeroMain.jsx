import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'
import { IoLogoReact } from "react-icons/io5";

const HeroMain = () => {
    return (
        <div className=" pt-40 pb-16">
            <div className="flex md:flex-row sm:flex-col flex-col-reverse max-w-[1200px] mx-auto justify-between items-center relative px-4">
                <HeroText />
                <HeroPic />
            </div>
 
            {/* <div className="relative flex justify-center items-center sm:h-[300px] md:h-[400px]">
                <IoLogoReact className="md:h-[60%] sm:h-[80%] w-auto text-cyan blur-md animate-[spin_10s_linear_infinite]" />
            </div> */}



        </div>
    )
}

export default HeroMain
