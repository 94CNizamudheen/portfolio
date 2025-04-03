const NavbarLinks = ({ isMobile }) => {
  const links = [
    {link: "About Me", section: "about"},
    {link: "Skills", section: "skills"},
    {link: "Experience", section: "experience"},
    {link: "Projects", section: "project"},
    {link: "Contact", section: "contact"},
  ];
  
  return (
    <ul className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 text-white font-body text-center ${isMobile ? 'w-full' : ''}`}>
      {links.map((link, index) => {
        return (
          <li key={index} className='group'>
            <a 
              href={`#${link.section}`} 
              className='cursor-pointer text-white hover:text-cyan transition-all duration-500'
            >
              {link.link}
            </a>
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarLinks;