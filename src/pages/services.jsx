import React from 'react';
import { FaShieldAlt, FaUsers, FaHandshake, FaHeart, FaBriefcase, FaMoneyBill } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Services = () => {
  return (
    <section className="bg-gray-200 py-12" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard icon={<FaShieldAlt className="text-2xl mb-2" />} title="Security" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ipsum in est venenatis." />
          <ServiceCard icon={<FaUsers className="text-2xl mb-2" />} title="Community" description="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed eu diam non purus consequat scelerisque." />
          <ServiceCard icon={<FaHandshake className="text-2xl mb-2" />} title="Partnership" description="Fusce hendrerit auctor nisi, eget dapibus libero. Sed vel tortor urna. Proin sit amet faucibus tortor, nec consequat urna." />
          <ServiceCard icon={<FaHeart className="text-2xl mb-2" />} title="Wellness" description="Sed vitae ex non magna aliquet scelerisque. Duis nec sagittis lorem. Duis efficitur nisi at elit molestie, vel ultricies odio faucibus." />
          <ServiceCard icon={<FaBriefcase className="text-2xl mb-2" />} title="Career" description="Proin sit amet faucibus tortor, nec consequat urna. Nullam sodales euismod diam, at volutpat nisi fermentum ac. Donec vitae odio nec urna aliquet mollis." />
          <ServiceCard icon={<FaMoneyBill className="text-2xl mb-2" />} title="Finance" description="Vivamus vehicula tincidunt velit non scelerisque. Fusce hendrerit auctor nisi, eget dapibus libero. Sed vel tortor urna." />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-white shadow-lg p-6 rounded-lg"
    >
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default Services;
