import React, { useState } from 'react'
import { LuArrowDownRight } from "react-icons/lu";
import WhatsAppModal from './whatsAppModal';
const NavbarBtn = () => {
  const [isModalOpen, setisModalOpen] = useState(false);


  const openWhatsApp = () => {
    const mob = "8129947894";
    const message = "Hi, I'm interested in hiring you!";
    const whatsAppurl = `https://wa.me/${mob}?text=${encodeURIComponent(message)}`;
    window.open(whatsAppurl, '_blank');
    setisModalOpen(false);
  }


  return (
    <>
      <button onClick={() => setisModalOpen(true)} className='px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-[var(--shadow-cyanShadow)]'>
        Hire Me
        <span className='hidden sm:block'>
          <LuArrowDownRight />
        </span>
      </button>
      
        {isModalOpen && <WhatsAppModal openWhatsApp={openWhatsApp} closeModal={()=>setisModalOpen(false)} />}
     
        
    </>


  )
}

export default NavbarBtn
