import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";


const NavbarMain = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }

    return (
        <nav className='max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex flex-col md:flex-row gap-4 mt-2'>
            <div className='flex justify-between w-full items-center p-4 md:p-6 bg-black rounded-full border-[0.5px] border-orange'>
                <NavbarLogo />
                
                {/* Desktop Navigation */}
                <div className='hidden lg:block'>
                    <NavbarLinks />
                </div>
                
                {/* Desktop Button */}
                <div className='hidden md:block'>
                    <NavbarBtn />
                </div>
                
                {/* Mobile Menu Button */}
                <div className='block lg:hidden'>
                    <button onClick={toggleMenu} className='text-2xl p-2 border border-orange rounded-full text-white'>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>
            
            {/* Mobile Navigation */}
            {menuOpen && (
                <div className='block lg:hidden w-full mt-2 bg-black/90 backdrop-blur-lg rounded-xl border-[0.5px] border-orange py-4'>
                    <NavbarLinks isMobile={true} />
                    <div className='flex justify-center mt-4'>
                        <NavbarBtn />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavbarMain
