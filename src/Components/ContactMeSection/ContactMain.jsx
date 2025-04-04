import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const ContactMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
      <h2 className='text-6xl text-cyan text-center mb-10'>Contact me</h2>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-16 bg-brown p-6 md:p-10 rounded-2xl'>

        <ContactLeft/>
        <ContactRight/>
      </div>
    </div>
  )
}

export default ContactMain
