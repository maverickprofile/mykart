import React from "react";
import { useNavigate } from "react-router-dom";

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
  {
    name: "Xerox",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2844Wc7R1-jGCK6-r341qt-Q-WvJj3vM_wg&s",
  },
];

const BrandList = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-10">
      {brandLogos.map((brandInfo) => (
        <div
          key={brandInfo.name}
          onClick={() => navigate(`/products?brand=${brandInfo.name}`)}
          className="cursor-pointer p-4 border rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center justify-center"
        >
          <div className="h-16 w-auto flex items-center justify-center">
            <img
              src={brandInfo.url}
              alt={brandInfo.name}
              className="max-h-16 max-w-full object-contain"
            />
          </div>
          <p className="text-center mt-2 font-semibold">{brandInfo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BrandList;