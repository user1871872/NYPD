import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          <p className="mr-4">Connect with us:</p>
          <div className="flex space-x-4">
            <Link to="/facebook" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18.5 2H5.5C4.12238 2 3 3.12238 3 4.5V19.5C3 20.8776 4.12238 22 5.5 22H12V15.5H9.75V12.25H12V10C12 7.23938 13.7896 5.5 16.5 5.5H18.5V8H16.5C15.6716 8 15 8.67157 15 9.5V12.25H18.5V15.5H15V22H18.5C19.878 22 21 20.878 21 19.5V4.5C21 3.12238 19.8776 2 18.5 2Z"></path>
              </svg>
            </Link>
            <Link to="/youtube" className="text-white hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M11.9167 4.00291C6.53667 4.00291 3.33333 5.64958 3.33333 9.12513V14.8751C3.33333 18.3497 6.53667 20.0029 11.9167 20.0029C17.2967 20.0029 20.5 18.3497 20.5 14.8751V9.12513C20.5 5.64958 17.2967 4.00291 11.9167 4.00291ZM9.8 15.4796V8.52425L15.5333 12.0029L9.8 15.4796Z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
