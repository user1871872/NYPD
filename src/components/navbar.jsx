import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleclickAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    const handleclickServices = () => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const handleclickContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <nav className="bg-blue-500 p-4 w-full fixed top-0 z-50 cursor-pointer">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">New Young Pilipino Defenders</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between text-white">
            <li className="lg:mx-4 my-2 lg:my-0 hover:text-gray-300" onClick={scrolltoTop}>Home</li>
            <li className="lg:mx-4 my-2 lg:my-0 hover:text-gray-300" onClick={handleclickAbout}>About</li>
            <li className="lg:mx-4 my-2 lg:my-0 hover:text-gray-300" onClick={handleclickServices}>Service </li>
            <li className="lg:mx-4 my-2 lg:my-0 hover:text-gray-300" onClick={handleclickContact}>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
