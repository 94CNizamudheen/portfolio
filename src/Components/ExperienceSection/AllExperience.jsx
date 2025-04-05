import React from 'react'
import SingleExperiences from './SingleExperiences'
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion"
import { fadeIn } from '../../FramerMotion/varients'

const experiences = [
    { job: "front End Developer", compony: "abc", date: "2024 -present", responsibilities: ["sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf", "sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf", "sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf"] },
    { job: "Back End Developer", compony: "abc", date: "2024 -present", responsibilities: ["sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf", "sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf", "sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf"] },
    { job: "Full stack Developer", compony: "abc", date: "2024 -present", responsibilities: ["sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf", "sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf", "sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf"] },
]

const AllExperience = () => {
    return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between '>
            {experiences.map((exp, index) => (
                <div key={index} className='flex items-center'>
                    <SingleExperiences experience={exp} />
                    {index < 2 && <motion.div variants={fadeIn("right", 0.2)} initial='hidden' whileInView='show' viewport={{ once: false, amount: 0.7 }} 
                    ><FaArrowRight className='text-6xl text-orange lg:block sm:hidden ' /></motion.div> }
                </div>
            ))}

        </div>
    )
}

export default AllExperience
