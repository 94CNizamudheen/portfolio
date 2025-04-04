import React from 'react'
import SimpleExperiences from './SimpleExperiences'
import { FaArrowRight } from "react-icons/fa";
const experiences = [
    { job: "front End Developer", compony: "abc",date:"2024 -present" ,responsibilities: ["sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf","sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf","sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf"]},
    { job: "Back End Developer", compony: "abc",date:"2024 -present" , responsibilities: ["sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf","sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf","sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf"] },
    { job: "Full stack Developer", compony: "abc",date:"2024 -present" , responsibilities: ["sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf","sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf","sample sample,vdfv dsfd grfd sdgf rsg fsbvase fsf"]},
]

const AllExperience = () => {
    return (
        <div className='flex md:flex-row sm:flex-col items-center justify-between '>
            {experiences.map((exp, index) => {
                return (
                    <>
                        <SimpleExperiences key={index} experience={exp} />
                        {index<2 ? (<FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />) :('') }
                    </>
                )


            })}
        </div>
    )
}

export default AllExperience
