import React, { useState } from "react";

const brands = [
  "Brady",
  "Brother",
  "Canon",
  "Dell",
  "Dymo",
  "Epson",
  "Fuji Xerox / FUJIFILM",
  "HP",
  "Konica Minolta",
  "Kyocera",
  "Lanier",
  "Lexmark",
  "OKI",
  "Panasonic",
  "Ricoh",
  "Samsung",
  "Sharp",
  "Toshiba",
  "Xerox",
];

const Sidebar = ({ selectedBrand, onFilter }) => {
  const [openBrand, setOpenBrand] = useState(null);

  return (
    <div className="w-full sm:w-64 p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Filter by Brand</h2>
      {brands.map((brand) => (
        <div key={brand} className="mb-3">
          <button
            className="w-full text-left font-medium"
            onClick={() => setOpenBrand(openBrand === brand ? null : brand)}
          >
            {brand}
          </button>
          {openBrand === brand && (
            <div className="ml-4 mt-2 space-y-2">
              <p
                className="cursor-pointer hover:underline"
                onClick={() => onFilter(brand, "ink")}
              >
                Ink Cartridges
              </p>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => onFilter(brand, "toner")}
              >
                Toner Cartridges
              </p>
              {brand === "Samsung" && (
                <p
                  className="cursor-pointer hover:underline"
                  onClick={() => onFilter(brand, "drum")}
                >
                  Drum Units
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;