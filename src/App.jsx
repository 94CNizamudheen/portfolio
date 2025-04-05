import React from 'react'
import NavbarMain from './Components/Navbar/NavbarMain'
import HeroMain from './Components/HeroSection/HeroMain'
import HeroGradient from './Components/HeroSection/HeroGradient'
import SubHeroSection from './Components/HeroSection/SubHeroSection'
import AboutMeMain from './Components/AboutMeSection/AboutMeMain'
import SkillMain from './Components/SkillSection/SkillMain'
import Subskills from './Components/SkillSection/Subskills'
import ExperienceMain from './Components/ExperienceSection/ExperienceMain'
import ProjectMain from './Components/ProjectSection/ProjectMain'
import ContactMain from './Components/ContactMeSection/ContactMain'
import FooterMAin from './Components/Footer/FooterMAin'

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
    <ProjectMain/>
    <ContactMain/>
    <FooterMAin/>
    
   </main>
  )
}

export default App
