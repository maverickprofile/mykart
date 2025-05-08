import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import products from "../data/products";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialBrand = searchParams.get("brand") || "";
  const initialModelSearch = searchParams.get("model") || "";
  const initialCartridgeSearch = searchParams.get("cartridge") || "";
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brand, setBrand] = useState(initialBrand);
  const [searchTerms, setSearchTerms] = useState({
    printerModel: initialModelSearch,
    cartridge: initialCartridgeSearch,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [openMobileFilter, setOpenMobileFilter] = useState(false);
  const [selectedMobileBrand, setSelectedMobileBrand] = useState(null);
  const [expandedProductId, setExpandedProductId] = useState(null); // New state

  // Extract unique brands from the products data
  const availableBrands = [...new Set(products.map(product => product.brand).filter(Boolean))];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleFilter = (selectedBrand, type) => {
    const results = products.filter(
      (item) =>
        item.brand &&
        item.type &&
        item.brand.toLowerCase() === selectedBrand.toLowerCase() &&
        item.type.toLowerCase() === type.toLowerCase() &&
        (!searchTerms.printerModel ||
          item.printerModel?.toLowerCase().includes(searchTerms.printerModel.toLowerCase())) &&
        (!searchTerms.cartridge ||
          item.cartridge?.some((cart) =>
            cart?.toLowerCase().includes(searchTerms.cartridge.toLowerCase())
          ))
    );
    setBrand(selectedBrand);
    setFilteredProducts(results);
    if (isMobile) {
      setOpenMobileFilter(false);
    }
  };

  useEffect(() => {
    let initialFilter = [...products];
    if (initialBrand) {
      initialFilter = initialFilter.filter(
        (item) => item.brand?.toLowerCase() === initialBrand.toLowerCase()
      );
      setBrand(initialBrand);
    }
    if (searchTerms.printerModel) {
      initialFilter = initialFilter.filter(
        (item) => item.printerModel?.toLowerCase().includes(searchTerms.printerModel.toLowerCase())
      );
    }
    if (searchTerms.cartridge) {
      initialFilter = initialFilter.filter(
        (item) => item.cartridge?.some((cart) =>
          cart?.toLowerCase().includes(searchTerms.cartridge.toLowerCase())
        )
      );
    }
    setFilteredProducts(initialFilter);
  }, [initialBrand, searchTerms]);

  const handleNavbarSearch = (search) => {
    setSearchTerms(prevSearchTerms => {
      if (prevSearchTerms.printerModel === search.printerModel && prevSearchTerms.cartridge === search.cartridge) {
        return prevSearchTerms;
      }
      return search;
    });
  };

  const toggleMobileFilter = () => {
    setOpenMobileFilter(!openMobileFilter);
  };

  const handleCardToggle = (productId) => {
    setExpandedProductId(prevId => (prevId === productId ? null : productId));
  };

  return (
    <div>
      <Navbar setFilteredProducts={handleNavbarSearch} />
      <div className="flex flex-col sm:flex-row">
        {isMobile ? (
          <div className="w-full p-4">
            <button
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
              onClick={toggleMobileFilter}
            >
              Filter by Brand
            </button>

            {openMobileFilter && (
              <div className="border rounded-lg p-4 shadow-md">
                <h2 className="text-xl font-bold mb-4">Select Brand</h2>
                <select
                  className="w-full border rounded py-2 px-3 mb-3"
                  value={selectedMobileBrand || ""}
                  onChange={(e) => setSelectedMobileBrand(e.target.value)}
                >
                  <option value="">All Brands</option>
                  {availableBrands.map((brandName) => (
                    <option key={brandName} value={brandName}>
                      {brandName}
                    </option>
                  ))}
                </select>

                {selectedMobileBrand && (
                  <div className="mt-4 space-y-2">
                    <button
                      className="w-full text-left font-medium py-2"
                      onClick={() => handleFilter(selectedMobileBrand, "ink")}
                    >
                      Ink Cartridges
                    </button>
                    <button
                      className="w-full text-left font-medium py-2"
                      onClick={() => handleFilter(selectedMobileBrand, "toner")}
                    >
                      Toner Cartridges
                    </button>
                    {selectedMobileBrand === "Samsung" && (
                      <button
                        className="w-full text-left font-medium py-2"
                        onClick={() => handleFilter(selectedMobileBrand, "drum")}
                      >
                        Drum Units
                      </button>
                    )}
                  </div>
                )}

                {selectedMobileBrand && (
                  <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    onClick={() => {
                      setBrand(selectedMobileBrand);
                      setOpenMobileFilter(false);
                    }}
                  >
                    Apply Filter
                  </button>
                )}

                {!selectedMobileBrand && (
                  <button
                    className="w-full bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    onClick={() => setOpenMobileFilter(false)}
                  >
                    Close Filter
                  </button>
                )}
              </div>
            )}
          </div>
        ) : (
          <Sidebar selectedBrand={brand} onFilter={handleFilter} />
        )}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id || index}
              product={product}
              isDetailsVisible={expandedProductId === (product.id || index)}
              onToggleDetails={handleCardToggle}
            />
          ))}
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Products;