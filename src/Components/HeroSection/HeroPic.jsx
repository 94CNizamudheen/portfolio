import React from 'react'
import proPic from '../../../public/images/Nizamudheen_new.png'
import { PiHexagonThin } from "react-icons/pi";
const HeroPic = () => {
  return (
    <div className=" h-full flex items-center justify-center ">
      <img src={proPic} alt=""  className="max-h-[800px] w-auto"/>
      <div className=" absolute -z-10 flex justify-center items-center animate-bounce  ">
        <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[450px] w-auto text-cyan blur-xl animate-[spin_20s_linear_infinite] " />
      </div>
      
    </div>
  )
}

export default HeroPic
