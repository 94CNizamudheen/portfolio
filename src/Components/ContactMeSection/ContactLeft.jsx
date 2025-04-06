import React from 'react'
import ContactForm from './ContactForm'

const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h2 className='text-orange text-3xl mb-4 font-bold'>Get In Touch</h2>
        <p className=''>Feel free to reach out if you'd like to collabrate
          <br />
          you are just a few clicks away
        </p>
      </div>
      <ContactForm/>
    </div>
  )
}

export default ContactLeft
