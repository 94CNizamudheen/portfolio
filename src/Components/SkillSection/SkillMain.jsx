import React from 'react'
import SkillText from './SkillText'
import AllSkills from './AllSkills'
import AllSkillsSm from './AllSkillsSm'

const SkillMain = () => {
  return (
    <div id='skills' className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden flex flex-col items-center">
        <SkillText />
        <div className="mt-20 w-full flex justify-center lg:block sm:hidden">
            <AllSkills />
        </div>
        <div className='sm:block lg:hidden'>
            <AllSkillsSm/>
        </div>
    </div>
  )
}

export default SkillMain
