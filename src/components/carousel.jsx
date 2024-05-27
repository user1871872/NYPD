import React, { useState, useEffect } from 'react';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

function Slider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto h-96 overflow-hidden mt-14">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          <div className="absolute bottom-4 left-0 w-full flex justify-center">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full bg-gray-500 mx-2 cursor-pointer ${
                  index === currentImage ? 'bg-white' : ''
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider;
