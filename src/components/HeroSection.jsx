import React from 'react';

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Cartridge World</h1>
        <p className="text-lg">Your one-stop shop for Ink & Toner Cartridges</p>
      </div>
    </section>
  );
};

export default HeroSection;
