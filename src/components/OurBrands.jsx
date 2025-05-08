import React from "react";
import "../style/ourbrand.css"; // Custom CSS for animations

const brandLogos = [
  {
    name: "Brady",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDV0WX0Qu02o-psXO2HvlOePm93T0Q1VMEJQ&s",
  },
  {
    name: "Brother",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnxl4y88AhGvAu799dgzDAjjgw986cPPKgA&s",
  },
  {
    name: "Canon",
    url: "https://static.vecteezy.com/system/resources/previews/020/335/960/non_2x/canon-logo-canon-icon-free-free-vector.jpg",
  },
  {
    name: "Dell",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png",
  },
  {
    name: "Dymo",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/DYMO_logo.svg/2560px-DYMO_logo.svg.png",
  },
  {
    name: "Epson",
    url: "https://i.pinimg.com/736x/93/19/30/9319303deca2066b2a27bde640dcff97.jpg",
  },
  {
    name: "Fuji Xerox / FUJIFILM",
    url: "https://brandlogos.net/wp-content/uploads/2014/11/fujifilm-logo_brandlogos.net_sknbf.png",
  },
  {
    name: "HP",
    url: "https://images.seeklogo.com/logo-png/20/2/hewlett-packard-company-logo-png_seeklogo-206433.png",
  },
  {
    name: "Konica Minolta",
    url: "https://logowik.com/content/uploads/images/133_konicaminolta.jpg",
  },
  {
    name: "Kyocera",
    url: "https://static.cdnlogo.com/logos/k/45/kyocera.png",
  },
  {
    name: "Lanier",
    url: "https://images.seeklogo.com/logo-png/8/2/lanier-worldwide-logo-png_seeklogo-82168.png",
  },
  {
    name: "Lexmark",
    url: "https://1000logos.net/wp-content/uploads/2020/08/Lexmark-Logo.png",
  },
  {
    name: "OKI",
    url: "https://seeklogo.com/images/O/OKI-logo-46071FA407-seeklogo.com.png",
  },
  {
    name: "Panasonic",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PHGKer8C6PmUkQhdif9EzBNbLQSjZPUAWA&s",
  },
  {
    name: "Ricoh",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZ1kp8oOTMy7O21Xy_DIWZvLRtIh5bD_bpQ&s",
  },
  {
    name: "Samsung",
    url: "https://cdn.logojoy.com/wp-content/uploads/20240909124957/Samsung-logo-1993-600x319.png",
  },
  {
    name: "Sharp",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_vD36aq5Nir-VDbK3jrxymsr7nnGfN5i6g&s",
  },
  {
    name: "Toshiba",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWVi8h1-z8xfTBK2JhVLkDGIVPuE1eoU7Qlw&s",
  },
];

const OurBrands = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black">Our Brands</h2>
        <p className="text-gray-600 mt-4">Top brands we proudly work with</p>
      </div>

      {/* Row 1: Right to Left */}
      <div className="marquee marquee-right mb-6">
        <div className="marquee-content">
          {brandLogos.concat(brandLogos).map((brand, index) => (
            <div
              key={`row1-${index}`}
              className="mx-6 flex items-center justify-center bg-white px-4 py-3 rounded-lg "
            >
              <img
                src={brand.url}
                alt={brand.name}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Left to Right */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
          {brandLogos.concat(brandLogos).map((brand, index) => (
            <div
              key={`row2-${index}`}
              className="mx-6 flex items-center justify-center bg-white px-4 py-3 rounded-lg"
            >
              <img
                src={brand.url}
                alt={brand.name}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
