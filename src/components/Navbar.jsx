import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setFilteredProducts }) => {
  const [printerModel, setPrinterModel] = useState("");
  const [cartridge, setCartridge] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (setFilteredProducts) {
      // We are on the Products page, so call the provided filtering function
      // The Products component will use its own 'products' data
      setFilteredProducts({ printerModel, cartridge });
    } else {
      // We are likely on the Home page, navigate to Products with search terms
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
    if (printerModel || cartridge) { // Only call handleSearch if there are search terms
      handleSearch();
    }
  }, [printerModel, cartridge, setFilteredProducts, navigate]);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="MyKART" className="h-10" />
        <span className="font-bold text-xl">MyKART</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 my-4 sm:my-0">
        <div className="flex border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search by printer model"
            value={printerModel}
            onChange={(e) => setPrinterModel(e.target.value)}
            className="px-3 py-2 outline-none"
          />
        </div>
        <div className="flex border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search by cartridge"
            value={cartridge}
            onChange={(e) => setCartridge(e.target.value)}
            className="px-3 py-2 outline-none"
          />
        </div>
      </div>
      <div className="hidden sm:flex space-x-6 font-medium">
        <a href="/" className="text-red-500">Home</a>
        <a href="/about">About</a>
        <a href="/products">Product</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;