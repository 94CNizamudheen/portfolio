import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')



    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,import.meta.env.VITE_EMAILJS_TEMPLATE_ID,  form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    setName('');
                    setEmail('')
                    setMessage('')
                    setSuccess("Email Sent Successfully!");
                    setTimeout(() => setSuccess(''), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <p className='text-cyan'>{success}</p>
            <form action="" className='flex flex-col gap-4' ref={form}>
                <input name='from_name' type="text" placeholder='Your Name' required className='h-12 rounded-lg bg-light-brown px-2'
                    value={name} onChange={(e) => setName(e.target.value)} />
                <input name='from_email' type="email" placeholder='Your email' className='h-12 rounded-lg bg-light-brown px-2'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea name='message' placeholder='Message' cols="50" rows="9" required className='p-2 rounded-lg bg-light-brown'
                    value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button onClick={sendEmail} type="submit" className='w-full rounded-lg border border-cyan text-white h-12 font-black hover:bg-dark-cyan bg-cyan transition-all duration-500' >Send</button>
            </form>
        </div>
    )
}

export default ContactForm
