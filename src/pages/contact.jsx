import React from 'react';

const ContactForm = () => {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
