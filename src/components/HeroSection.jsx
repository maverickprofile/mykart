import React from 'react';

const HeroSection = () => {
  const backgroundImage = 'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // Replace with the actual image link

  return (
    <section
      className="h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Cartridge World</h1>
        <p className="text-lg">Your one-stop shop for Ink & Toner Cartridges</p>
      </div>
    </section>
  );
};

export default HeroSection;