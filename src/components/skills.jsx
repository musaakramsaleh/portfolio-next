"use client";
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiExpress, SiPandas, SiFirebase, SiC, SiTailwindcss } from 'react-icons/si';
import { MdPeople, MdOutlineChat } from 'react-icons/md'; 

function Skills() {
  const technicalSkills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss/> },
    { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
    { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    { name: 'Pandas', icon: <SiPandas className="text-gray-800" /> },
    { name: 'C-Programming', icon: <SiC className="text-blue-800" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-black" /> },
  ];

  const softSkills = [
    { name: 'Communication', icon: <MdOutlineChat className="text-teal-500" /> },  
    { name: 'Teamwork', icon: <MdPeople className="text-purple-500" /> },
  ];

  return (
    <section id="skills" className="p-8 md:p-16  mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Skills</h2>
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center">Technical Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-5 place-items-center">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-center mt-10">Soft Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 place-items-center">
        {softSkills.map((skill, index) => (
          <div key={index} className="">
            <div className="">
              <div className="text-4xl flex">
                {skill.icon}
                <p className="ml-2 text-lg md:text-xl">{skill.name}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;