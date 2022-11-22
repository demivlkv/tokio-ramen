import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { validateEmail } from '../../utils/helpers';
import { ChevronRight } from 'react-feather';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;
  const formId = process.env.GATSBY_GETFORMIO_ID;
  const formUrl = "https://getform.io/f/" + formId;

  // handles form validation
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value)

      // error message for invalid email
      if (!isValid) {
        setErrorMessage("Your email is invalid.")
      } else {
        setErrorMessage("")
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage("")
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  };

  return (
    <section id="contact">
      <div className="w-full h-screen">
        <div className="h-full flex flex-col justify-center items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We'd love to hear from you!</motion.p>

          {/* CONTACT FORM */}
          <motion.form
            method="POST"
            action={formUrl}
            id="contact-form"
            className="flex flex-col justify-center w-full"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <div class="w-[75%] max-w-xl mx-auto">
              <label htmlFor="name" className="block text-[#fe4039] uppercase font-medium">
                Name:
              </label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
                className="w-full my-2 p-2 rounded bg-[#f3f3f3] border border-gray-300 font-medium focus:outline-0 focus:ring-2 focus:ring-[#222]"
              />

              <label htmlFor="email" className="block text-[#fe4039] uppercase font-medium">
                E-mail:
              </label>
              <input
                type="email"
                defaultValue={email}
                onBlur={handleChange}
                name="email"
                className="w-full my-2 p-2 rounded bg-[#f3f3f3] border border-gray-300 font-medium focus:outline-0 focus:ring-2 focus:ring-[#222]"
              />

              <label htmlFor="message" className="block text-[#fe4039] uppercase font-medium">
                Message:
              </label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="4"
                className="w-full my-2 p-2 rounded bg-[#f3f3f3] border border-gray-300 font-medium focus:outline-0 focus:ring-2 focus:ring-[#222]"
              />

              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                className="font-medium uppercase tracking-widest group w-[150px] mx-auto flex items-center my-2 pl-8 py-2 border-2 border-[#fe4039] rounded hover:bg-[#fe3f3978]"
              >
                Submit
                <span className="group-hover:ml-1 duration-300">
                  <ChevronRight className="ml-2" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
