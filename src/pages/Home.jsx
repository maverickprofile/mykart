import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BrandList from "../components/BrandList";
import OurBrands from "../components/OurBrands";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Not passing setFilteredProducts here */}
      <HeroSection />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold my-8 text-center">Top Products We Offer</h2>
        <BrandList />
      </div>
      <OurBrands />
      <Testimonials />
      <Banner />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;