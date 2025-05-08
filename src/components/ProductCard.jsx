import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import QuoteModal from "./QuoteModal"; // Import the modal component

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedSupply, setSelectedSupply] = useState(null);
  const universalSupplyImage = "https://www.hottoner.com.au/image/cache/products/brother/ink/COMPBRLC233BK-150x150.jpg";
  const googleFormURL = "https://docs.google.com/forms/d/16A3mlYYg-_dWQYYiE5oc2C00N2ky1WqZ6km1kpWAm7U/formResponse"; // Use /formResponse for programmatic submission
  const nameEntry = "entry.369029252";
  const emailEntry = "entry.2098858419";
  const phoneEntry = "entry.57026112";
  const messageEntry = "entry.571082482";
  const cartridgeEntryId = "entry.799177779";
  const modelEntryId = "entry.1599810766";
  const brandEntryId = "entry.453129056";

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const openQuoteModal = (supplyName) => {
    setSelectedSupply(supplyName);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setSelectedSupply(null);
  };

  return (
    <div className="border rounded-lg shadow-md transition flex flex-col overflow-hidden relative">
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">
          {product.brand} - {product.printerModel ? product.printerModel.toUpperCase() : product.imgSrc ? product.imgSrc : 'N/A'}
        </h3>
        <button
          onClick={toggleDetails}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {showDetails ? <FaChevronUp /> : <FaChevronDown />}
        </button>

        {showDetails && (
          <div className="mt-2">
            <h4 className="text-sm font-semibold mb-1">Supplies:</h4>
            <ul className="text-xs text-gray-700 pl-0 space-y-2">
              {product.cartridge && Array.isArray(product.cartridge) && product.cartridge.length > 0 ? (
                product.cartridge.map((item, index) => (
                  <li key={`cartridge-${index}`} className="flex items-center justify-between">
                    <img src={universalSupplyImage} alt="Supply" className="h-8 w-8 object-contain mr-2" />
                    <span>{item}</span>
                    <button
                      className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 text-xxs rounded"
                      onClick={() => openQuoteModal(item)}
                    >
                      Quote
                    </button>
                  </li>
                ))
              ) : null}
              {product.drum && Array.isArray(product.drum) && product.drum.length > 0 ? (
                product.drum.map((item, index) => (
                  <li key={`drum-${index}`} className="flex items-center justify-between">
                    <img src={universalSupplyImage} alt="Supply" className="h-8 w-8 object-contain mr-2" />
                    <span>{item}</span>
                    <button
                      className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-2 py-0.5 text-xxs rounded"
                      onClick={() => openQuoteModal(item)}
                    >
                      Quote
                    </button>
                  </li>
                ))
              ) : null}
              {(!product.cartridge || !Array.isArray(product.cartridge) || product.cartridge.length === 0) &&
                (!product.drum || !Array.isArray(product.drum) || product.drum.length === 0) && (
                  <li>No supplies available</li>
                )}
            </ul>
          </div>
        )}
      </div>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onRequestClose={closeQuoteModal}
        cartridge={selectedSupply}
        model={product.printerModel}
        brand={product.brand}
        googleFormURL={googleFormURL}
        nameEntry={nameEntry}
        emailEntry={emailEntry}
        phoneEntry={phoneEntry}
        messageEntry={messageEntry}
        cartridgeEntryId={cartridgeEntryId}
        modelEntryId={modelEntryId}
        brandEntryId={brandEntryId}
      />
    </div>
  );
};

export default ProductCard;