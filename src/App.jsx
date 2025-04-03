import React from 'react'
import NavbarMain from './Components/Navbar/NavbarMain'
import HeroMain from './Components/HeroSection/HeroMain'
import HeroGradient from './Components/HeroSection/HeroGradient'
import SubHeroSection from './Components/HeroSection/SubHeroSection'
import AboutMeMain from './Components/AboutMeSection/AboutMeMain'
import HelperSection from './Components/HelperSection'

const App = () => {
  return (
   <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <HelperSection/>
   </main>
  )
}

export default App
