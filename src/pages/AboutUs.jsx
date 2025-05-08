import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaShoppingCart, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar'; // Assuming your Navbar component is here
import Footer from '../components/Footer'; // Assuming your Footer component is here

const teamMembers = [
  {
    name: 'Aarav Patel',
    role: 'Founder & CEO',
    imageUrl: '/images/team/aarav.jpg', // Replace with actual image path
    bio: 'A visionary leader with a passion for e-commerce and customer satisfaction. Aarav believes in creating seamless online shopping experiences.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Marketing',
    imageUrl: '/images/team/priya.jpg', // Replace with actual image path
    bio: 'Priya is a marketing expert focused on building strong brand connections and engaging with our community.',
  },
  {
    name: 'Rahul Verma',
    role: 'Lead Developer',
    imageUrl: '/images/team/rahul.jpg', // Replace with actual image path
    bio: 'Rahul leads our talented development team, ensuring a robust, user-friendly, and innovative platform.',
  },
  {
    name: 'Sneha Gupta',
    role: 'Customer Experience Manager',
    imageUrl: '/images/team/sneha.jpg', // Replace with actual image path
    bio: 'Sneha is dedicated to providing exceptional customer support and ensuring every myKart user has a positive experience.',
  },
];

const values = [
  {
    icon: FaUsers,
    title: 'Customer-Centric',
    description: 'We put our customers first, understanding their needs and striving to exceed their expectations in every interaction.',
  },
  {
    icon: FaShoppingCart,
    title: 'Seamless Experience',
    description: 'We are committed to providing a smooth, intuitive, and enjoyable online shopping journey from discovery to delivery.',
  },
  {
    icon: FaCheckCircle,
    title: 'Quality & Trust',
    description: 'We offer a curated selection of high-quality products and build trust through transparency and reliable service.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security & Privacy',
    description: 'Your security and privacy are paramount. We employ advanced measures to protect your data and ensure a safe shopping environment.',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="py-20 flex-grow"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.section
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-extrabold text-indigo-600 mb-6 tracking-tight">
              Our Story: Connecting You to Quality
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed md:leading-relaxed lg:leading-relaxed">
              Welcome to MyKart! We started with a simple vision: to create an online marketplace that not only offers a wide range of products but also prioritizes a delightful and trustworthy shopping experience. Born out of a passion for connecting buyers with quality goods and fostering a community of happy customers, MyKart has grown from a small idea into a thriving platform.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed md:leading-relaxed lg:leading-relaxed">
              We believe that online shopping should be easy, enjoyable, and secure. That's why we've built MyKart with a focus on intuitive design, robust technology, and a dedicated team committed to your satisfaction.
            </p>
          </motion.section>

          {/* Our Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeInOut' }}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-indigo-500 text-3xl mb-4">{<value.icon />}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Meet Our Team Section */}
          {/* <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Meet Our Dedicated Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeInOut' }}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <img src={member.imageUrl} alt={member.name} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-indigo-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </section> */}

          {/* Our Promise Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'backOut' }}
            className="bg-indigo-500 rounded-lg shadow-xl py-12 px-8 text-center"
          >
            <h2 className="text-3xl font-extrabold text-white mb-6 tracking-tight">
              Our Promise to You
            </h2>
            <p className="text-lg text-indigo-100 leading-relaxed md:leading-relaxed lg:leading-relaxed">
              At MyKart, we are more than just a marketplace. We are a community built on trust, quality, and a shared passion for great products. We promise to continuously strive to:
            </p>
            <ul className="mt-6 space-y-3 text-left inline-block">
              <li className="flex items-center text-indigo-100">
                <FaCheckCircle className="mr-2 text-indigo-300" /> Provide a diverse and high-quality selection of products.
              </li>
              <li className="flex items-center text-indigo-100">
                <FaCheckCircle className="mr-2 text-indigo-300" /> Ensure a secure and seamless shopping experience.
              </li>
              <li className="flex items-center text-indigo-100">
                <FaCheckCircle className="mr-2 text-indigo-300" /> Offer exceptional customer support every step of the way.
              </li>
              <li className="flex items-center text-indigo-100">
                <FaCheckCircle className="mr-2 text-indigo-300" /> Continuously innovate and improve our platform based on your feedback.
              </li>
            </ul>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Explore myKart Now
            </motion.button> */}
          </motion.section>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutUs;