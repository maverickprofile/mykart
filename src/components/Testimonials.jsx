import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    review: "Top-notch quality cartridges and super fast delivery. Works like a charm in my printer!",
    rating: 5,
  },
  {
    name: "Neha Verma",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "I found genuine products here for a much better price than local shops. Highly recommend!",
    rating: 4,
  },
  {
    name: "Rakesh Mehta",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    review: "Excellent customer service and packaging. The toner worked perfectly with my Samsung printer.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    photo: "https://randomuser.me/api/portraits/women/58.jpg",
    review: "Received the product on time and in perfect condition. Highly satisfied!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">What Our Customers Say</h2>
        <p className="text-gray-600 mt-4">Real experiences from satisfied buyers</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Arrow Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 z-10"
        >
          <FaChevronLeft />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full p-6 bg-gray-100 rounded-xl  flex flex-col items-center"
              >
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-600 mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                <div className="flex justify-center text-yellow-500 mt-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 italic max-w-md text-center">
                  "{testimonial.review}"
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 z-10"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
