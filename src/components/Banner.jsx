import React from "react";
import { FaTruck, FaUserShield, FaThumbsUp } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-blue-500 text-4xl" />,
    title: "Free Delivery",
    desc: "Fast & Free Delivery on Every Order",
  },
  {
    icon: <FaUserShield className="text-green-500 text-4xl" />,
    title: "100% Guarantee",
    desc: "All products carry a 100% satisfaction guarantee",
  },
  {
    icon: <FaThumbsUp className="text-orange-500 text-4xl" />,
    title: "Top Quality",
    desc: "Our Product Quality is Our Identity",
  },
];

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 text-white">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-xl hover:scale-105 transition-all duration-300 ease-in-out w-full md:w-1/3"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold tracking-wide">{feature.title}</h3>
            <p className="text-gray-300 mt-2 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
