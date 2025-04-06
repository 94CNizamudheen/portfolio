import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://www.linkedin.com/in/nizamudheen-c-b9b64b318/' Icon={FaLinkedin}/>
        <SingleContactSocial link='https://github.com/94CNizamudheen?tab=repositories' Icon={FaGithub}/>
        <SingleContactSocial link='https://leetcode.com/u/NizamudheenC/' Icon={SiLeetcode}/>
        <SingleContactSocial link={`https://wa.me/${"8129947894"}?text=${encodeURIComponent("Hi, I'm interested in hiring you!")}` }Icon={FaWhatsapp}/>
        
    </div>
  )
}

export default ContactSocial
