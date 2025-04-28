import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

const Singleproject = ({ video, name, skill, align, link }) => {
  return (
    <div className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end`}>
      <div>
        <h3 className='md:text-3xl sm:text-2xl text-orange'>{name}</h3>
        <p className={`text-xl font-thin text-white font-special sm:text-center ${align === 'left' ? 'md:text-right' : 'md:text-left'} sm:text-balance`}>
          {skill}
        </p>

        <a href={link} className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align === "left" ? 'md:justify-self-end' : "md:justify-self-start"}`}>
          View <BiSolidRightTopArrowCircle />
        </a>
      </div>

      <div className='group max-h-[200px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
        <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 transition-all duration-500 group-hover:opacity-0'></div>
        <video src={video} autoPlay loop muted className='w-full h-full object-cover' />
      </div>

    </div>
  );
}
export default Singleproject
