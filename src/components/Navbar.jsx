import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the hamburger menu icon

const Navbar = ({ setFilteredProducts }) => {
  const [printerModel, setPrinterModel] = useState("");
  const [cartridge, setCartridge] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (setFilteredProducts) {
      setFilteredProducts({ printerModel, cartridge });
    } else {
      const queryParams = new URLSearchParams();
      if (printerModel) {
        queryParams.set("model", printerModel);
      }
      if (cartridge) {
        queryParams.set("cartridge", cartridge);
      }
      navigate(`/products?${queryParams.toString()}`);
    }
  };

  useEffect(() => {
    if (printerModel || cartridge) {
      handleSearch();
    }
  }, [printerModel, cartridge, setFilteredProducts, navigate]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white border-b py-4 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:justify-between sm:items-center">
        {/* Mobile View */}
        <div className="flex justify-between items-center sm:hidden">
          {/* Logo (Left) */}
          <div className="flex items-center space-x-2">
            {/* <img src="/logo.png" alt="MyKART" className="h-8" /> */}
            <span className="font-bold text-lg">MyKART</span>
          </div>

          {/* Hamburger Menu (Right) */}
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-gray-500 hover:text-gray-700"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Items (Hidden by default) */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4`}>
          {/* Search Bars (One by one) */}
          <div className="mb-2 flex border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search by printer model"
              value={printerModel}
              onChange={(e) => setPrinterModel(e.target.value)}
              className="px-3 py-2 w-full outline-none"
            />
          </div>
          <div className="mb-2 flex border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search by cartridge"
              value={cartridge}
              onChange={(e) => setCartridge(e.target.value)}
              className="px-3 py-2 w-full outline-none"
            />
          </div>
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-2 font-medium mt-4">
            <a href="/" >Home</a>
            <a href="/about">About</a>
            <a href="/products">Product</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden sm:flex justify-between items-center w-full">
          {/* Logo (Left) */}
          <div className="flex items-center space-x-4">
            {/* <img src="/logo.png" alt="MyKART" className="h-10" /> */}
            <span className="font-bold text-xl">MyKART</span>
          </div>

          {/* Search Bars (Middle, side by side) */}
          <div className="flex gap-4">
            <div className="flex border rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search by printer model"
                value={printerModel}
                onChange={(e) => setPrinterModel(e.target.value)}
                className="px-3 py-2 outline-none w-64" 
              />
            </div>
            <div className="flex border rounded overflow-hidden">
              <input
                type="text"
                placeholder="Search by cartridge"
                value={cartridge}
                onChange={(e) => setCartridge(e.target.value)}
                className="px-3 py-2 outline-none w-64"
              />
            </div>
          </div>

          {/* Navigation Links (Right) */}
          <div className="flex space-x-6 font-medium">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Product</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;