import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Members = () => {
  const members = [
    {
      id: 1,
      name: "John Doe",
      position: "President",
      imageUrl: "/images/john.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Vice President",
      imageUrl: "/images/jane.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Treasurer",
      imageUrl: "/images/mike.jpg",
    },
    {
      id: 4,
      name: "Alice Brown",
      position: "Secretary",
      imageUrl: "/images/alice.jpg",
    },
    {
      id: 5,
      name: "Bob White",
      position: "Member",
      imageUrl: "/images/bob.jpg",
    },
    {
      id: 6,
      name: "Emily Green",
      position: "Member",
      imageUrl: "/images/emily.jpg",
    },
    {
      id: 7,
      name: "James Black",
      position: "Member",
      imageUrl: "/images/james.jpg",
    },
    {
      id: 8,
      name: "Linda Gray",
      position: "Member",
      imageUrl: "/images/linda.jpg",
    },
    {
      id: 9,
      name: "Michael Young",
      position: "Member",
      imageUrl: "/images/michael.jpg",
    },
    {
      id: 10,
      name: "Olivia King",
      position: "Member",
      imageUrl: "/images/olivia.jpg",
    },
    {
      id: 11,
      name: "David Lee",
      position: "Member",
      imageUrl: "/images/david.jpg",
    },
    {
      id: 12,
      name: "Sophia Adams",
      position: "Member",
      imageUrl: "/images/sophia.jpg",
    },
    {
      id: 13,
      name: "William Clark",
      position: "Member",
      imageUrl: "/images/william.jpg",
    },
    {
      id: 14,
      name: "Emma Hernandez",
      position: "Member",
      imageUrl: "/images/emma.jpg",
    },
    {
      id: 15,
      name: "Ethan Davis",
      position: "Member",
      imageUrl: "/images/ethan.jpg",
    },
    {
      id: 16,
      name: "Sophie Walker",
      position: "Member",
      imageUrl: "/images/sophie.jpg",
    },
    {
      id: 17,
      name: "Noah Martin",
      position: "Member",
      imageUrl: "/images/noah.jpg",
    },
    {
      id: 18,
      name: "Ava Martinez",
      position: "Member",
      imageUrl: "/images/ava.jpg",
    },
    {
      id: 19,
      name: "Logan Garcia",
      position: "Member",
      imageUrl: "/images/logan.jpg",
    },
    {
      id: 20,
      name: "Mia Perez",
      position: "Member",
      imageUrl: "/images/mia.jpg",
    },
    // Add more members as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Members</h2>
        <Slider {...settings}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const MemberCard = ({ member }) => {
  return (
    <div className='p-1 cursor-pointer py-6 rounded-lg transform transition duration-500 hover:scale-110'>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-2">
        <img src={member.imageUrl} alt={member.name} className="w-full h-40 object-cover object-center" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-gray-600">{member.position}</p>
        </div>
      </div>
    </div>
  );
};

export default Members;
