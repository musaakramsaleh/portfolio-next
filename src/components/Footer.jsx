import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row justify-around bg-gray-800 text-white text-neutral-content p-10">
  <aside className='text-center'>
    <h2 className="text-4xl">Contact information</h2>
    <p className="md:text-xl text-[15px] mt-2 text-center">Address: Dhaka, Bangladesh</p>
    <p className="md:text-xl text-[15px] mt-2 text-center">Email: saleh01715972188@gmail.com</p>
    <p className='flex gap-2 items-center mt-4 justify-center'><FaTelegram className="text-4xl"></FaTelegram>@Musaakramsaleh</p>
    <p className='flex gap-2 items-center mt-2 justify-center'><FaWhatsapp className="text-4xl"></FaWhatsapp>+880 01999937212</p>
  </aside>
  <nav className='text-center '>
    <h6 className="footer-title m-5 md:m-0">Social</h6>
    <div className="grid grid-flow-col place-items-center gap-4">
    <a
                    href="https://www.facebook.com/profile.php?id=100050096121271"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-4xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/musa-akram-saleh/"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="https://github.com/musaakramsaleh"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-4xl" />
                  </a>
                  <a
                    href="https://x.com/musa_saleh76239"
                    className="text-white hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-4xl" />
                  </a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;