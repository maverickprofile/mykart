import React, { useState } from 'react';
import { FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar'; // Assuming your Navbar component is here
import Footer from '../components/Footer'; // Assuming your Footer component is here
import { motion } from 'framer-motion';

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
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-grow py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8 md:p-12">
            {/* Top Textual Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="mb-8 text-center"
            >
              <h2 className="text-3xl font-bold text-indigo-600 mb-4">We'd Love to Hear From You!</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your feedback, questions, and suggestions are invaluable to us. Whether you need assistance with an order, have a product inquiry, or just want to share your experience, please don't hesitate to reach out. Our dedicated team is ready to provide you with the support you need.
              </p>
            </motion.div>

            {/* Contact Form */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agree" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 underline">
                      terms and conditions
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Bottom Textual Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
              className="text-center text-gray-600 text-sm"
            >
              <p className="mb-2">
                Alternatively, you can reach us directly via the following:
              </p>
              <div className="flex items-center justify-center gap-4 mb-2">
                <FaMapMarkerAlt className="text-indigo-500" />
                <span>Our Address: 123 Main Street, Anytown, CA 91234</span> {/* Replace with your actual address */}
              </div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <FaPhone className="text-indigo-500" />
                <span>Phone: +1 (555) 123-4567</span> {/* Replace with your actual phone number */}
              </div>
              <div className="flex items-center justify-center gap-4">
                <FaEnvelope className="text-indigo-500" />
                <span>Email: support@mykart.com</span> {/* Replace with your actual email address */}
              </div>
              <p className="mt-4">
                We aim to respond to all inquiries within 24-48 business hours. Thank you for contacting myKart!
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default ContactUs;