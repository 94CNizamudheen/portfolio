import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='#' Icon={FaLinkedin}/>
        <SingleContactSocial link='#' Icon={FaGithub}/>
        <SingleContactSocial link='#' Icon={SiLeetcode}/>
        
    </div>
  )
}

export default ContactSocial
