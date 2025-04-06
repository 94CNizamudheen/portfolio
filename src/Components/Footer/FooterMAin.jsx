import React from 'react'

const links = [
    {link: "About Me", section: "about"},
    {link: "Skills", section: "skills"},
    {link: "Experience", section: "experience"},
    {link: "Projects", section: "project"},
    {link: "Contact", section: "contact"},
  ];
  

const FooterMAin = () => {
  return (
    <div className='px-4'>
      <div className='w-full h-[1px] bg-light-grey mt-24 '></div>
      <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
        <p className='text-3xl text-light-grey'>Nizamudheen C</p>
        <ul className='flex gap-4 text-light-grey'>
            {links.map((link,index)=>{
                return <li key={index}><a href="#" className='hover:text-white transition-all duration-500'>{link.link}</a></li>
            })}
        </ul>
      </div>
      <p className='max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-light-brown'>©️{new Date().getFullYear()} Nizamudheen | All Rights Reserved </p>
    </div>
  )
}

export default FooterMAin
