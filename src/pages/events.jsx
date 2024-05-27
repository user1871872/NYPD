import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const Events = () => {
  // Sample data for events
  const events = [
    {
      id: 1,
      title: "Annual Gala Dinner",
      date: "2024-06-15",
      location: "Grand Ballroom, XYZ Hotel",
      description: "Join us for our annual gala dinner celebrating another successful year!",
    },
    {
      id: 2,
      title: "Community Outreach Program",
      date: "2024-07-20",
      location: "Local Community Center",
      description: "Volunteer for our community outreach program and make a difference in people's lives.",
    },
    {
      id: 3,
      title: "Fundraising Concert",
      date: "2024-08-10",
      location: "City Concert Hall",
      description: "Enjoy an evening of music and entertainment while supporting a good cause.",
    },
    {
      id: 4,
      title: "Environmental Cleanup Day",
      date: "2024-09-05",
      location: "Local Parks and Beaches",
      description: "Join us in preserving the environment by participating in a cleanup event.",
    },
    {
      id: 5,
      title: "Health and Wellness Seminar",
      date: "2024-10-15",
      location: "Community Health Center",
      description: "Learn about the importance of health and wellness in our daily lives.",
    },
    {
      id: 6,
      title: "Educational Workshop",
      date: "2024-11-20",
      location: "Local Library",
      description: "Expand your knowledge and skills at our educational workshop.",
    },
  ];

  return (
    <section className="bg-gray-200 py-12 " id="events">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Upcoming Events</h2>
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }) => {
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
      className="bg-white rounded-lg shadow-md p-6 transform transition duration-500 hover:scale-110"
    >
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-2">{event.date} | {event.location}</p>
      <p className="text-gray-700">{event.description}</p>
    </motion.div>
  );
};

export default Events;
