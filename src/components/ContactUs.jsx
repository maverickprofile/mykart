import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('Please agree to the terms and conditions before submitting.');
      return;
    }

    const formUrl =
      'https://docs.google.com/forms/d/1RPz83Nf1XtPKp-BHIriuARHoBbKvv0tntw9HiD178vI/formResponse';

    const data = new FormData();
    data.append('entry.1810183964', formData.name);
    data.append('entry.288534426', formData.phone);
    data.append('entry.1448698921', formData.email);
    data.append('entry.1241341948', formData.message);
    data.append('entry.1443462923', 'I Agreed');

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: data,
      });

      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        agree: false,
      });
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-10 rounded-2xl shadow-xl items-center">
        {/* Left Column - Trust Content */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
          <ul className="space-y-4 text-gray-700 text-base">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" /> Trusted by thousands of customers
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" /> 24/7 Customer Support
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" /> 100% Secure and Private
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" /> Fast Response Time
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-600" /> Satisfaction Guaranteed
            </li>
          </ul>
          <p className="text-sm text-gray-500">
            We're committed to providing the best service possible. Reach out to us with your queries, and we’ll get back to you swiftly.
          </p>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600"
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-blue-600 underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
