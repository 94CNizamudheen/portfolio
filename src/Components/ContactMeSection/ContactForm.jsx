import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSuccess("Email Sent Successfully!");
                    setIsLoading(false);
                    setTimeout(() => setSuccess(''), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsLoading(false);
                }
            );
    };

    return (
        <div>
            <p className='text-cyan'>{success}</p>
            <form action="" className='flex flex-col gap-4' ref={form}>
                <input
                    name='from_name'
                    type="text"
                    placeholder='Your Name'
                    className='h-12 rounded-lg bg-light-brown px-2'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                <input
                    name='from_email'
                    type="email"
                    placeholder='Your Email'
                    className='h-12 rounded-lg bg-light-brown px-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <textarea
                    name='message'
                    placeholder='Message'
                    cols="50"
                    rows="9"
                    className='p-2 rounded-lg bg-light-brown'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                <button
                    onClick={sendEmail}
                    type="submit"
                    disabled={isLoading}
                    className='w-full rounded-lg border border-cyan text-white h-12 font-black hover:bg-dark-cyan bg-cyan transition-all duration-500 flex items-center justify-center'
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        'Send'
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
