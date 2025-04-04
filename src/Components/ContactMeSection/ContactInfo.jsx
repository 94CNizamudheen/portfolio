import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import SingleInfo from './SingleInfo';
const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
      <SingleInfo text={"nisunisam2@gmail.com"} Image={HiOutlineMail}/>
      <SingleInfo text={"+91 8129 947894"} Image={MdOutlinePhoneIphone }/>
      <SingleInfo text={"Perinthalmanna, India"} Image={MdOutlineLocationOn}/>
    </div>
  )
}

export default ContactInfo
