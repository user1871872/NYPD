import React from 'react';
const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <img src='/images/NYPDlogo.jpg' alt="Logo" className="w-16 h-16 mr-4 rounded-full" />
          <h2 className="text-3xl font-semibold">About Us</h2>
        </div>
        <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ipsum in est venenatis, eu
            ullamcorper ex eleifend. Nulla aliquet neque eget dui tristique, id egestas purus aliquam. Phasellus
            vulputate risus vitae urna placerat convallis. Integer ac sapien vitae mi tincidunt fringilla vel a
            metus. Donec fringilla urna eget elit dapibus pharetra.
          </p>
          <p className="mt-4">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu diam non
            purus consequat scelerisque. Nam semper justo id posuere rhoncus. Sed vitae ex non magna aliquet
            scelerisque. Duis nec sagittis lorem. Duis efficitur nisi at elit molestie, vel ultricies odio faucibus.
          </p>
          <p className="mt-4">
            Fusce hendrerit auctor nisi, eget dapibus libero. Sed vel tortor urna. Proin sit amet faucibus tortor,
            nec consequat urna. Nullam sodales euismod diam, at volutpat nisi fermentum ac. Donec vitae odio nec
            urna aliquet mollis. Vivamus vehicula tincidunt velit non scelerisque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
