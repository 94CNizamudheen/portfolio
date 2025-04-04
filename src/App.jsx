import React from 'react'
import NavbarMain from './Components/Navbar/NavbarMain'
import HeroMain from './Components/HeroSection/HeroMain'
import HeroGradient from './Components/HeroSection/HeroGradient'
import SubHeroSection from './Components/HeroSection/SubHeroSection'
import AboutMeMain from './Components/AboutMeSection/AboutMeMain'
import HelperSection from './Components/HelperSection'
import SkillMain from './Components/SkillSection/SkillMain'
import Subskills from './Components/SkillSection/Subskills'
import ExperienceMain from './Components/ExperienceSection/ExperienceMain'

const App = () => {
  return (
   <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillMain/>
    <Subskills/>
    <ExperienceMain/>
    <HelperSection/>
   </main>
  )
}

export default App
