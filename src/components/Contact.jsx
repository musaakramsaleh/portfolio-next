"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Swal from 'sweetalert2';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vznxwdv', 'template_zd85kbh', form.current, {
          publicKey: 'WvS2RaOjzLbG65jBG',
        })
        .then(
          () => {
            Swal
            .fire({
                title: "Success",
                text: "Email sent successfully",
                icon: "success"
              });
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        
    };
    return (
        <section id="contact" className="p-8 md:p-16">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Contact</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Contact Form */}
              <div className="md:w-1/2 ">
                <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md border-blue-500 border-2 rounded px-8 pt-6 pb-8 mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Get in Touch</h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
    
              {/* Contact Information */}
              <div className="md:w-1/2 flex flex-col justify-center items-center">
                <div className="text-center md:text-left mb-6">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-lg">Feel free to reach out to me via:</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100050096121271"
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-4xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/musa-akram-saleh/"
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="https://github.com/musaakramsaleh"
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-4xl" />
                  </a>
                  <a
                    href="https://x.com/musa_saleh76239"
                    className="text-gray-700 hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-4xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
};

export default Contact;