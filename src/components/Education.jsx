import React from 'react';

function Education() {
  return (
    <section id="education" className="p-8 md:p-16 bg-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Education</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 transition transform hover:scale-105 duration-300">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Bachelor of Science in Computer Science and Engineering</h3>
            <p className="text-lg md:text-xl mb-2">East West University</p>
            <p className="text-md md:text-lg text-gray-600">Graduated in 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;