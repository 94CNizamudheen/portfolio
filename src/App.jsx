import React from 'react'
import NavbarMain from './Components/Navbar/NavbarMain'
import HeroMain from './Components/HeroSection/HeroMain'
import HeroGradient from './Components/HeroSection/HeroGradient'
import SubHeroSection from './Components/HeroSection/SubHeroSection'

const App = () => {
  return (
   <main className='font-body'>
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
   </main>
  )
}

export default App
