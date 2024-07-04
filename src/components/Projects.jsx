import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si';

function Projects() {
  return (
    <section id="projects" className="p-8 md:p-16">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Projects</h2>
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-2 border-blue-500 rounded-md p-3 my-4">
          <div className="md:w-1/2">
            <img
              src="/Capture-3.PNG"  // Replace with your image path
              alt="Project Image"
              className="cursor-pointer transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">PharmaEase</h3>
            <p className="text-lg md:text-xl mb-2 text-center md:text-left">a web application that serves as a marketplace for buying and selling medicinal products. It provides a platform where users can browse and purchase medicines from various categories</p>
            <p className="text-lg md:text-xl mb-2">Core Features:</p>
            <ul className="list-disc list-inside">
              <li>Here users can buy and sell their medicine product from various category of medicines</li>
              <li>Separated Dashboard for sellers, users and Admin for business management</li>
              <li>Payment gateway integrated using stripe and secured using JWT</li>
            </ul>
            <p className="md:text-2xl mb-4 mt-2 flex items-center text-xl"><span className='md:text-2xl text-[14px]'>Used Technology:</span> 
              <FaHtml5 className="text-orange-600 ml-3" />
              <FaCss3Alt className="text-blue-600 ml-3" />
              <SiTailwindcss className="ml-3"/> 
              <FaJsSquare className="text-yellow-500 ml-3" />
              <FaReact className="text-blue-400 ml-3" />
              <SiMongodb className="text-green-600 ml-3" />
              <SiExpress className="text-gray-500 ml-3" />
              <SiFirebase className="text-yellow-600 ml-3" />  
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-start mt-4">
              <a
                href="https://pharmacy-15de3.web.app/"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-600 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block"
              >
                Live Link
              </a>
              <a
                href="https://github.com/musaakramsaleh/PharmaEase-client"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Client
              </a>
              <a
                href="https://github.com/musaakramsaleh/PharmaEase-server"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Server
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-2 border-blue-500 rounded-md p-3 my-4">
          <div className="md:w-1/2">
            <img
              src="/Capture.PNG"  
              alt="Project Image"
              className="cursor-pointer transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">TastyMunch Marketplace</h3>
            <p className="text-lg md:text-xl mb-2 text-center md:text-left">TastyMunch Marketplace stands out as a comprehensive online platform that combines e-commerce functionalities with a user-friendly interface tailored for food enthusiasts.</p>
            <p className="text-lg md:text-xl mb-2">Core Features:</p>
            <ul className="list-disc list-inside">
              <li>Here users have the privilege to buy any food items or sell their made ones</li>
              <li>Food management like quantity, price, and amount sold or items bought</li>
              <li>Search option functionality for easily finding out the desired food items that user need</li>
            </ul>
            <p className="md:text-2xl mb-4 mt-2 flex items-center text-xl"><span className='md:text-2xl text-[14px]'>Used Technology:</span> 
              <FaHtml5 className="text-orange-600 ml-3" />
              <FaCss3Alt className="text-blue-600 ml-3" />
              <SiTailwindcss className="ml-3"/> 
              <FaJsSquare className="text-yellow-500 ml-3" />
              <FaReact className="text-blue-400 ml-3" />
              <SiMongodb className="text-green-600 ml-3" />
              <SiExpress className="text-gray-500 ml-3" />
              <SiFirebase className="text-yellow-600 ml-3" />  
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-start mt-4">
              <a
                href="https://restaurant-8605a.web.app/"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-600 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block"
              >
                Live Link
              </a>
              <a
                href="https://github.com/musaakramsaleh/TastyMunch-Marketplace"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Client
              </a>
              <a
                href="https://github.com/musaakramsaleh/TastyMunch-Marketplace-server"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Server
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-2 border-blue-500 rounded-md p-3 my-4">
          <div className="md:w-1/2">
            <img
              src="/Capture-2.PNG"  // Replace with your image path
              alt="Project Image"
              className="cursor-pointer transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-center md:text-left">Artistry Avenue</h3>
            <p className="text-lg md:text-xl mb-2 text-center md:text-left">Artistry Avenue is an online platform designed for buying and selling art. It provides artists and art enthusiasts a marketplace where they can showcase, buy, and sell artworks.</p>
            <p className="text-lg md:text-xl mb-2">Core Features:</p>
            <ul className="list-disc list-inside">
              <li>Firebase has been used to ensure user login and registration for both Google and GitHub</li>
              <li>CRUD functionalities have been implemented so that users can easily manage art items</li>
              <li>Sort functionality and Light-mode/Dark-mode implemented on the home page of the website</li>
            </ul>
            <p className="md:text-2xl mb-4 mt-2 flex items-center text-xl"><span className='md:text-2xl text-[14px]'>Used Technology:</span> 
              <FaHtml5 className="text-orange-600 ml-3" />
              <FaCss3Alt className="text-blue-600 ml-3" />
              <SiTailwindcss className="ml-3"/> 
              <FaJsSquare className="text-yellow-500 ml-3" />
              <FaReact className="text-blue-400 ml-3" />
              <SiMongodb className="text-green-600 ml-3" />
              <SiExpress className="text-gray-500 ml-3" />
              <SiFirebase className="text-yellow-600 ml-3" />  
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center md:items-start mt-4">
              <a
                href="https://my-art-72b96.web.app/"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-600 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block"
              >
                Live Link
              </a>
              <a
                href="https://github.com/musaakramsaleh/Artistry-avenue-client"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Client
              </a>
              <a
                href="https://github.com/musaakramsaleh/Artistry-avenue-server"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 font-bold text-center rounded-md transition duration-300 block md:inline-block mt-2 md:mt-0"
              >
                GitHub Server
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Projects;
