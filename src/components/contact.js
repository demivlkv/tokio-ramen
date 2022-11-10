import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { FiChevronRight } from '@react-icons/all-files/fi/FiChevronRight';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    const formId = process.env.REACT_APP_CONTACT_FORM_ID;
    const formUrl = 'https://getform.io/f/' + formId;

    // handles form validation
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            // error message for invalid email
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    return (
        <>
            <div className="w-full h-screen">
                <div className="h-full flex flex-col justify-center items-center">

                    <h2>Contact</h2>
                    <p>We'd love to hear from you!</p>

                    {/* CONTACT FORM */}
                        <form method="POST" action={formUrl} id="contact-form" className="flex flex-col justify-center max-w-[600px] w-full">
                            <div class="w-[90%] max-w-screen-md mx-auto">
                                <label className="block text-[#fe4039] uppercase font-medium">Name:</label>
                                <input type="text" defaultValue={name} onBlur={handleChange} name="name" className="w-full my-2 p-2 rounded bg-[#f3f3f3] border border-gray-300" />

                                <label className="block text-[#fe4039] uppercase font-medium">E-mail:</label>
                                <input type="email" defaultValue={email} onBlur={handleChange} name="email" className="w-full my-2 p-2 rounded bg-[#f3f3f3] border border-gray-300" />

                                <label className="block text-[#fe4039] uppercase font-medium">Message:</label>
                                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="4" className="w-full my-2 p-2 rounded bg-[#f3f3f3] border border-gray-300" />

                                {errorMessage && (
                                    <div>
                                        <p className="error-text">{errorMessage}</p>
                                    </div>
                                )}

                                <button type="submit" className="font-medium uppercase tracking-widest group w-[150px] mx-auto flex items-center my-2 pl-8 py-2 border-2 border-[#fe4039] rounded hover:bg-[#fe3f39bb] hover:text-white">
                                    Submit
                                    <span className="group-hover:ml-1 duration-300">
                                        <FiChevronRight className="ml-2" />
                                    </span>
                                </button>
                            </div>
                        </form>

                </div>
            </div>
        </>
    );
};

export default Contact;