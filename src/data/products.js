const products = [
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: true,
    imgSrc: "brother DCP-330C DCP330C", // You'll likely want to update this to a proper image URL
    printerModel: "DCP-330C",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-3360C DCP3360C", // Update image URL
    printerModel: "DCP-3360C",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: true,
    imgSrc: "brother DCP-350C DCP350C", // Update image URL
    printerModel: "DCP-350C",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-375CW DCP375CW", // Update image URL
    printerModel: "DCP-375CW",
    cartridge: [
      "Brother LC-38 Black Ink Cartridge LC-38BK",
      "Brother LC-38 Cyan Ink Cartridge LC-38C",
      "Brother LC-38 Magenta Ink Cartridge LC-38M",
      "Brother LC-38 Yellow Ink Cartridge LC-38Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-385C DCP385C", // Update image URL
    printerModel: "DCP-385C",
    cartridge: [
      "Brother LC-67 Black Ink Cartridge LC-67BK",
      "Brother LC-67 Cyan Ink Cartridge LC-67C",
      "Brother LC-67 Magenta Ink Cartridge LC-67M",
      "Brother LC-67 Yellow Ink Cartridge LC-67Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-395CN DCP395CN", // Update image URL
    printerModel: "DCP-395CN",
    cartridge: [
      "Brother LC-67 Black Ink Cartridge LC-67BK",
      "Brother LC-67 Cyan Ink Cartridge LC-67C",
      "Brother LC-67 Magenta Ink Cartridge LC-67M",
      "Brother LC-67 Yellow Ink Cartridge LC-67Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-465CN DCP465CN", // Update image URL
    printerModel: "DCP-465CN",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-540CN DCP540CN", // Update image URL
    printerModel: "DCP-540CN",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-5460CN DCP5460CN", // Update image URL
    printerModel: "DCP-5460CN",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-560CN DCP560CN", // Update image URL
    printerModel: "DCP-560CN",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-585CW DCP585CW", // Update image URL
    printerModel: "DCP-585CW",
    cartridge: [
      "Brother LC-67 Black Ink Cartridge LC-67BK",
      "Brother LC-67 Cyan Ink Cartridge LC-67C",
      "Brother LC-67 Magenta Ink Cartridge LC-67M",
      "Brother LC-67 Yellow Ink Cartridge LC-67Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-5860CN DCP5860CN", // Update image URL
    printerModel: "DCP-5860CN",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-6690CW DCP6690CW", // Update image URL
    printerModel: "DCP-6690CW",
    cartridge: [
      "Brother LC-67 Black Ink Cartridge LC-67BK",
      "Brother LC-67 Cyan Ink Cartridge LC-67C",
      "Brother LC-67 Magenta Ink Cartridge LC-67M",
      "Brother LC-67 Yellow Ink Cartridge LC-67Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-685CW DCP685CW", // Update image URL
    printerModel: "DCP-685CW",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-885CW DCP885CW", // Update image URL
    printerModel: "DCP-885CW",
    cartridge: [
      "Brother LC-57 Black Ink Cartridge LC-57BK",
      "Brother LC-57 Cyan Ink Cartridge LC-57C",
      "Brother LC-57 Magenta Ink Cartridge LC-57M",
      "Brother LC-57 Yellow Ink Cartridge LC-57Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J125 DCPJ125", // Update image URL
    printerModel: "DCP-J125",
    cartridge: [
      "Brother LC-39 Black Ink Cartridge LC-39BK",
      "Brother LC-39 Cyan Ink Cartridge LC-39C",
      "Brother LC-39 Magenta Ink Cartridge LC-39M",
      "Brother LC-39 Yellow Ink Cartridge LC-39Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J140W DCPJ140W", // Update image URL
    printerModel: "DCP-J140W",
    cartridge: [
      "Brother LC-39 Black Ink Cartridge LC-39BK",
      "Brother LC-39 Cyan Ink Cartridge LC-39C",
      "Brother LC-39 Magenta Ink Cartridge LC-39M",
      "Brother LC-39 Yellow Ink Cartridge LC-39Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J152W DCPJ152W", // Update image URL
    printerModel: "DCP-J152W",
    cartridge: [
      "Brother LC-133 Black Ink Cartridge LC-133BK",
      "Brother LC-133 Cyan Ink Cartridge LC-133C",
      "Brother LC-133 Magenta Ink Cartridge LC-133M",
      "Brother LC-133 Yellow Ink Cartridge LC-133Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J172W DCPJ172W", // Update image URL
    printerModel: "DCP-J172W",
    cartridge: [
      "Brother LC-133 Black Ink Cartridge LC-133BK",
      "Brother LC-133 Cyan Ink Cartridge LC-133C",
      "Brother LC-133 Magenta Ink Cartridge LC-133M",
      "Brother LC-133 Yellow Ink Cartridge LC-133Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J315W DCPJ315W", // Update image URL
    printerModel: "DCP-J315W",
    cartridge: [
      "Brother LC-39 Black Ink Cartridge LC-39BK",
      "Brother LC-39 Cyan Ink Cartridge LC-39C",
      "Brother LC-39 Magenta Ink Cartridge LC-39M",
      "Brother LC-39 Yellow Ink Cartridge LC-39Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J4110DW DCPJ4110DW", // Update image URL
    printerModel: "DCP-J4110DW",
    cartridge: [
      "Brother LC-133 Black Ink Cartridge LC-133BK",
      "Brother LC-133 Cyan Ink Cartridge LC-133C",
      "Brother LC-133 Magenta Ink Cartridge LC-133M",
      "Brother LC-133 Yellow Ink Cartridge LC-133Y",
      "Brother LC-137XL Black Ink Cartridge LC-137XLBK",
      "Brother LC-135XL Cyan Ink Cartridge LC-135XLC",
      "Brother LC-135XL Magenta Ink Cartridge LC-135XLM",
      "Brother LC-135XL Yellow Ink Cartridge LC-135XLY"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J4120DW DCPJ4120DW", // Update image URL
    printerModel: "DCP-J4120DW",
    cartridge: [
      "Brother LC-133 Black Ink Cartridge LC-133BK",
      "Brother LC-133 Cyan Ink Cartridge LC-133C",
      "Brother LC-133 Magenta Ink Cartridge LC-133M",
      "Brother LC-133 Yellow Ink Cartridge LC-133Y",
      "Brother LC-137XL Black Ink Cartridge LC-137XLBK",
      "Brother LC-135XL Cyan Ink Cartridge LC-135XLC",
      "Brother LC-135XL Magenta Ink Cartridge LC-135XLM",
      "Brother LC-135XL Yellow Ink Cartridge LC-135XLY"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J515W DCPJ515W", // Update image URL
    printerModel: "DCP-J515W",
    cartridge: [
      "Brother LC-39 Black Ink Cartridge LC-39BK",
      "Brother LC-39 Cyan Ink Cartridge LC-39C",
      "Brother LC-39 Magenta Ink Cartridge LC-39M",
      "Brother LC-39 Yellow Ink Cartridge LC-39Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J525DW DCPJ525DW", // Update image URL
    printerModel: "DCP-J525DW",
    cartridge: [
      "Brother LC-73 Black Ink Cartridge LC-73BK",
      "Brother LC-73 Cyan Ink Cartridge LC-73C",
      "Brother LC-73 Magenta Ink Cartridge LC-73M",
      "Brother LC-73 Yellow Ink Cartridge LC-73Y"
    ]
  },
  {
    brand: "Brother",
    type: "ink",
    series: "dcpSeries",
    populor: false,
    imgSrc: "brother DCP-J525W DCPJ525W", // Update image URL
    printerModel: "DCP-J525W",
    cartridge: [
      "Brother LC-73 Black Ink Cartridge LC-73BK",
    "Brother LC-73 Cyan Ink Cartridge LC-73C",
    "Brother LC-73 Magenta Ink Cartridge LC-73M",
    "Brother LC-73 Yellow Ink Cartridge LC-73Y"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-J552DW DCPJ552DW", // Update image URL
  printerModel: "DCP-J552DW",
  cartridge: [
    "Brother LC-133 Black Ink Cartridge LC-133BK",
    "Brother LC-133 Cyan Ink Cartridge LC-133C",
    "Brother LC-133 Magenta Ink Cartridge LC-133M",
    "Brother LC-133 Yellow Ink Cartridge LC-133Y"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-J562DW DCPJ562DW", // Update image URL
  printerModel: "DCP-J562DW",
  cartridge: [
    "Brother LC-233 Black Ink Cartridge LC-233BK",
    "Brother LC-233 Cyan Ink Cartridge LC-233C",
    "Brother LC-233 Magenta Ink Cartridge LC-233M",
    "Brother LC-233 Yellow Ink Cartridge LC-233Y"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-J615W DCPJ615W", // Update image URL
  printerModel: "DCP-J615W",
  cartridge: [
    "Brother LC-67 Black Ink Cartridge LC-67BK",
    "Brother LC-67 Cyan Ink Cartridge LC-67C",
    "Brother LC-67 Magenta Ink Cartridge LC-67M",
    "Brother LC-67 Yellow Ink Cartridge LC-67Y"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-J715W DCPJ715W", // Update image URL
  printerModel: "DCP-J715W",
  cartridge: [
    "Brother LC-67 Black Ink Cartridge LC-67BK",
    "Brother LC-67 Cyan Ink Cartridge LC-67C",
    "Brother LC-67 Magenta Ink Cartridge LC-67M",
    "Brother LC-67 Yellow Ink Cartridge LC-67Y"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-J725DW DCPJ725DW", // Update image URL
  printerModel: "DCP-J725DW",
  cartridge: [
    "Brother LC-73 Black Ink Cartridge LC-73BK",
    "Brother LC-73 Cyan Ink Cartridge LC-73C",
    "Brother LC-73 Magenta Ink Cartridge LC-73M",
    "Brother LC-73 Yellow Ink Cartridge LC-73Y"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-J752DW DCPJ752DW", // Update image URL
  printerModel: "DCP-J752DW",
  cartridge: [
    "Brother LC-133 Black Ink Cartridge LC-133BK",
    "Brother LC-133 Cyan Ink Cartridge LC-133C",
    "Brother LC-133 Magenta Ink Cartridge LC-133M",
    "Brother LC-133 Yellow Ink Cartridge LC-133Y"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-J925DW DCPJ925DW", // Update image URL
  printerModel: "DCP-J925DW",
  cartridge: [
    "Brother LC-73 Black Ink Cartridge LC-73BK",
    "Brother LC-73 Cyan Ink Cartridge LC-73C",
    "Brother LC-73 Magenta Ink Cartridge LC-73M",
    "Brother LC-73 Yellow Ink Cartridge LC-73Y"
  ]
},
// ... Continue this pattern for all ink cartridges in dcpSeries, mfcSeries, etc. ...

// Toner Cartridges - dcpSeries
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: true,
  imgSrc: "brother DCP-1510 DCP1510", // Update image URL
  printerModel: "DCP-1510",
  cartridge: [
    "Brother TN-1070 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-7040 DCP7040", // Update image URL
  printerModel: "DCP-7040",
  cartridge: [
    "Brother TN-2150 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: true,
  imgSrc: "brother DCP-7055 DCP7055", // Update image URL
  printerModel: "DCP-7055",
  cartridge: [
    "Brother TN-2030 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-7060D DCP7060D", // Update image URL
  printerModel: "DCP-7060D",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-7065DN DCP7065DN", // Update image URL
  printerModel: "DCP-7065DN",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-8020 DCP8020", // Update image URL
  printerModel: "DCP-8020",
  cartridge: [
    "Brother TN-7600 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-8025D DCP8025D", // Update image URL
  printerModel: "DCP-8025D",
  cartridge: [
    "Brother TN-7600 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-8155DN DCP8155DN", // Update image URL
  printerModel: "DCP-8155DN",
  cartridge: [
    "Brother TN-3340 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-9010CN DCP9010CN", // Update image URL
  printerModel: "DCP-9010CN",
  cartridge: [
    "Brother TN-240BK Black Toner Cartridge",
    "Brother TN-240C Cyan Toner Cartridge",
    "Brother TN-240M Magenta Toner Cartridge",
    "Brother TN-240Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-9015CDW DCP9015CDW", // Update image URL
  printerModel: "DCP-9015CDW",
  cartridge: [
    "Brother TN-251BK Black Toner Cartridge",
    "Brother TN-255C Cyan Toner Cartridge",
    "Brother TN-255M Magenta Toner Cartridge",
    "Brother TN-255Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-9040CN DCP9040CN", // Update image URL
  printerModel: "DCP-9040CN",
  cartridge: [
    "Brother TN-155BK Black Toner Cartridge",
    "Brother TN-155C Cyan Toner Cartridge",
    "Brother TN-155M Magenta Toner Cartridge",
    "Brother TN-155Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-9042CDN DCP9042CDN", // Update image URL
  printerModel: "DCP-9042CDN",
  cartridge: [
    "Brother TN-155BK Black Toner Cartridge",
    "Brother TN-155C Cyan Toner Cartridge",
    "Brother TN-155M Magenta Toner Cartridge",
    "Brother TN-155Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-9055CDN DCP9055CDN", // Update image URL
  printerModel: "DCP-9055CDN",
  cartridge: [
    "Brother TN-348BK Black Toner Cartridge High Yield",
    "Brother TN-348C Cyan Toner Cartridge High Yield",
    "Brother TN-348M Magenta Toner Cartridge High Yield",
    "Brother TN-348Y Yellow Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: "brother DCP-L3510CDW DCPL3510CDW", // Update image URL
  printerModel: "DCP-L3510CDW",
  cartridge: [
    "Brother TN-253BK Black Toner Cartridge",
    "Brother TN-257C Cyan Toner Cartridge",
    "Brother TN-257M Magenta Toner Cartridge",
    "Brother TN-257Y Yellow Toner Cartridge"
  ]
},
// Toner Cartridges - hlSeries
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: false,
  imgSrc: "brother HL-2130 HL2130", // Update image URL
  printerModel: "HL-2130",
  cartridge: [
    "Brother TN-2030 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2132 HL2132", // Update image URL
  printerModel: "HL-2132",
  cartridge: [
    "Brother TN-2030 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: false,
  imgSrc: "brother HL-2135W HL2135W", // Update image URL
  printerModel: "HL-2135W",
  cartridge: [
    "Brother TN-2030 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: false,
  imgSrc: "brother HL-2140 HL2140", // Update image URL
  printerModel: "HL-2140",
  cartridge: [
    "Brother TN-2150 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2142 HL2142", // Update image URL
  printerModel: "HL-2142",
  cartridge: [
    "Brother TN-2150 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2150N HL2150N", // Update image URL
  printerModel: "HL-2150N",
  cartridge: [
    "Brother TN-2150 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2170W HL2170W", // Update image URL
  printerModel: "HL-2170W",
  cartridge: [
    "Brother TN-2150 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2240D HL2240D", // Update image URL
  printerModel: "HL-2240D",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2242D HL2242D", // Update image URL
  printerModel: "HL-2242D",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2250DN HL2250DN", // Update image URL
  printerModel: "HL-2250DN",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2270DW HL2270DW", // Update image URL
  printerModel: "HL-2270DW",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-2400C HL2400C", // Update image URL
  printerModel: "HL-2400C",
  cartridge: [
    "Brother TN-01BK Black Toner Cartridge",
    "Brother TN-01C Cyan Toner Cartridge",
    "Brother TN-01M Magenta Toner Cartridge",
  "Brother TN-01Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-3040CN HL3040CN", // Update image URL
  printerModel: "HL-3040CN",
  cartridge: [
    "Brother TN-230BK Black Toner Cartridge",
    "Brother TN-230C Cyan Toner Cartridge",
    "Brother TN-230M Magenta Toner Cartridge",
    "Brother TN-230Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-3045CN HL3045CN", // Update image URL
  printerModel: "HL-3045CN",
  cartridge: [
    "Brother TN-230BK Black Toner Cartridge",
    "Brother TN-230C Cyan Toner Cartridge",
    "Brother TN-230M Magenta Toner Cartridge",
    "Brother TN-230Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-3070CW HL3070CW", // Update image URL
  printerModel: "HL-3070CW",
  cartridge: [
    "Brother TN-230BK Black Toner Cartridge",
    "Brother TN-230C Cyan Toner Cartridge",
    "Brother TN-230M Magenta Toner Cartridge",
    "Brother TN-230Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-3075CW HL3075CW", // Update image URL
  printerModel: "HL-3075CW",
  cartridge: [
    "Brother TN-230BK Black Toner Cartridge",
    "Brother TN-230C Cyan Toner Cartridge",
    "Brother TN-230M Magenta Toner Cartridge",
    "Brother TN-230Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-L2300D HLL2300D", // Update image URL
  printerModel: "HL-L2300D",
  cartridge: [
    "Brother TN-2320 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-L2340DW HLL2340DW", // Update image URL
  printerModel: "HL-L2340DW",
  cartridge: [
    "Brother TN-2320 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-L2360DN HLL2360DN", // Update image URL
  printerModel: "HL-L2360DN",
  cartridge: [
    "Brother TN-2320 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-L2365DW HLL2365DW", // Update image URL
  printerModel: "HL-L2365DW",
  cartridge: [
    "Brother TN-2320 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-L3210CW HLL3210CW", // Update image URL
  printerModel: "HL-L3210CW",
  cartridge: [
    "Brother TN-253BK Black Toner Cartridge",
    "Brother TN-257C Cyan Toner Cartridge",
    "Brother TN-257M Magenta Toner Cartridge",
    "Brother TN-257Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: "brother HL-L3230CDW HLL3230CDW", // Update image URL
  printerModel: "HL-L3230CDW",
  cartridge: [
    "Brother TN-253BK Black Toner Cartridge",
    "Brother TN-257C Cyan Toner Cartridge",
    "Brother TN-257M Magenta Toner Cartridge",
    "Brother TN-257Y Yellow Toner Cartridge"
  ]
},
// Toner Cartridges - mfcSeries
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-7360N MFC7360N", // Update image URL
  printerModel: "MFC-7360N",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-7460DN MFC7460DN", // Update image URL
  printerModel: "MFC-7460DN",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-7860DW MFC7860DW", // Update image URL
  printerModel: "MFC-7860DW",
  cartridge: [
    "Brother TN-2250 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-8510DN MFC8510DN", // Update image URL
  printerModel: "MFC-8510DN",
  cartridge: [
    "Brother TN-3340 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-8512DN MFC8512DN", // Update image URL
  printerModel: "MFC-8512DN",
  cartridge: [
    "Brother TN-3340 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-8520DN MFC8520DN", // Update image URL
  printerModel: "MFC-8520DN",
  cartridge: [
    "Brother TN-3340 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-8810DW MFC8810DW", // Update image URL
  printerModel: "MFC-8810DW",
  cartridge: [
    "Brother TN-3340 Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-9120CN MFC9120CN", // Update image URL
  printerModel: "MFC-9120CN",
  cartridge: [
    "Brother TN-240BK Black Toner Cartridge",
    "Brother TN-240C Cyan Toner Cartridge",
    "Brother TN-240M Magenta Toner Cartridge",
    "Brother TN-240Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-9130CW MFC9130CW", // Update image URL
  printerModel: "MFC-9130CW",
  cartridge: [
    "Brother TN-251BK Black Toner Cartridge",
    "Brother TN-255C Cyan Toner Cartridge",
    "Brother TN-255M Magenta Toner Cartridge",
    "Brother TN-255Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-9140CDN MFC9140CDN", // Update image URL
  printerModel: "MFC-9140CDN",
  cartridge: [
    "Brother TN-251BK Black Toner Cartridge",
    "Brother TN-255C Cyan Toner Cartridge",
    "Brother TN-255M Magenta Toner Cartridge",
    "Brother TN-255Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-9320CW MFC9320CW", // Update image URL
  printerModel: "MFC-9320CW",
  cartridge: [
    "Brother TN-240BK Black Toner Cartridge",
    "Brother TN-240C Cyan Toner Cartridge",
    "Brother TN-240M Magenta Toner Cartridge",
    "Brother TN-240Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-9330CDW MFC9330CDW", // Update image URL
  printerModel: "MFC-9330CDW",
  cartridge: [
    "Brother TN-251BK Black Toner Cartridge",
    "Brother TN-255C Cyan Toner Cartridge",
    "Brother TN-255M Magenta Toner Cartridge",
    "Brother TN-255Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L2700DW MFCL2700DW", // Update image URL
  printerModel: "MFC-L2700DW",
  cartridge: [
    "Brother TN-2320 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L2701DW MFCL2701DW", // Update image URL
  printerModel: "MFC-L2701DW",
  cartridge: [
    "Brother TN-2320 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L2703DW MFCL2703DW", // Update image URL
  printerModel: "MFC-L2703DW",
  cartridge: [
    "Brother TN-2320 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L2710DW MFCL2710DW", // Update image URL
  printerModel: "MFC-L2710DW",
  cartridge: [
    "Brother TN-2450 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L2713DW MFCL2713DW", // Update image URL
  printerModel: "MFC-L2713DW",
  cartridge: [
    "Brother TN-2450 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L2730DW MFCL2730DW", // Update image URL
  printerModel: "MFC-L2730DW",
  cartridge: [
    "Brother TN-2450 Toner Cartridge High Yield"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L3710CW MFCL3710CW", // Update image URL
  printerModel: "MFC-L3710CW",
  cartridge: [
    "Brother TN-253BK Black Toner Cartridge",
    "Brother TN-257C Cyan Toner Cartridge",
    "Brother TN-257M Magenta Toner Cartridge",
    "Brother TN-257Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L3730CDW MFCL3730CDW", // Update image URL
  printerModel: "MFC-L3730CDW",
  cartridge: [
    "Brother TN-253BK Black Toner Cartridge",
    "Brother TN-257C Cyan Toner Cartridge",
    "Brother TN-257M Magenta Toner Cartridge",
    "Brother TN-257Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L3750CDW MFCL3750CDW", // Update image URL
  printerModel: "MFC-L3750CDW",
  cartridge: [
    "Brother TN-253BK Black Toner Cartridge",
    "Brother TN-257C Cyan Toner Cartridge",
    "Brother TN-257M Magenta Toner Cartridge",
    "Brother TN-257Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: "brother MFC-L3770CDW MFCL3770CDW", // Update image URL
  printerModel: "MFC-L3770CDW",
  cartridge: [
    "Brother TN-253BK Black Toner Cartridge",
    "Brother TN-257C Cyan Toner Cartridge",
    "Brother TN-257M Magenta Toner Cartridge",
    "Brother TN-257Y Yellow Toner Cartridge"
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-J410 MFCJ410', // Update image URL
  printerModel: 'MFC-J410',
  cartridge: [
    'Brother LC-39 Black Ink Cartridge LC-39BK',
    'Brother LC-39 Cyan Ink Cartridge LC-39C',
    'Brother LC-39 Magenta Ink Cartridge LC-39M',
    'Brother LC-39 Yellow Ink Cartridge LC-39Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J415W MFCJ415W', // Update image URL
  printerModel: 'MFC-J415W',
  cartridge: [
    'Brother LC-39 Black Ink Cartridge LC-39BK',
    'Brother LC-39 Cyan Ink Cartridge LC-39C',
    'Brother LC-39 Magenta Ink Cartridge LC-39M',
    'Brother LC-39 Yellow Ink Cartridge LC-39Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-J430W MFCJ430W', // Update image URL
  printerModel: 'MFC-J430W',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J432W MFCJ432W', // Update image URL
  printerModel: 'MFC-J432W',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J4410DW MFCJ4410DW', // Update image URL
  printerModel: 'MFC-J4410DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J4510DW MFCJ4510DW', // Update image URL
  printerModel: 'MFC-J4510DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y',
    'Brother LC-137XL Black Ink Cartridge LC-137XLBK',
    'Brother LC-135XL Cyan Ink Cartridge LC-135XLC',
    'Brother LC-135XL Magenta Ink Cartridge LC-135XLM',
    'Brother LC-135XL Yellow Ink Cartridge LC-135XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J4620DW MFCJ4620DW', // Update image URL
  printerModel: 'MFC-J4620DW',
  cartridge: [
    'Brother LC-233 Black Ink Cartridge LC-233BK',
    'Brother LC-233 Cyan Ink Cartridge LC-233C',
    'Brother LC-233 Magenta Ink Cartridge LC-233M',
    'Brother LC-233 Yellow Ink Cartridge LC-233Y',
    'Brother LC-237XL Black Ink Cartridge LC-237XLBK',
    'Brother LC-235XL Cyan Ink Cartridge LC-235XLC',
    'Brother LC-235XL Magenta Ink Cartridge LC-235XLM',
    'Brother LC-235XL Yellow Ink Cartridge LC-235XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J470DW MFCJ470DW', // Update image URL
  printerModel: 'MFC-J470DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J4710DW MFCJ4710DW', // Update image URL
  printerModel: 'MFC-J4710DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y',
    'Brother LC-137XL Black Ink Cartridge LC-137XLBK',
    'Brother LC-135XL Cyan Ink Cartridge LC-135XLC',
    'Brother LC-135XL Magenta Ink Cartridge LC-135XLM',
    'Brother LC-135XL Yellow Ink Cartridge LC-135XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J475DW MFCJ475DW', // Update image URL
  printerModel: 'MFC-J475DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J480DW MFCJ480DW', // Update image URL
  printerModel: 'MFC-J480DW',
  cartridge: [
    'Brother LC-233 Black Ink Cartridge LC-233BK',
    'Brother LC-233 Cyan Ink Cartridge LC-233C',
    'Brother LC-233 Magenta Ink Cartridge LC-233M',
    'Brother LC-233 Yellow Ink Cartridge LC-233Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J5320DW MFCJ5320DW', // Update image URL
  printerModel: 'MFC-J5320DW',
  cartridge: [
    'Brother LC-233 Black Ink Cartridge LC-233BK',
    'Brother LC-233 Cyan Ink Cartridge LC-233C',
    'Brother LC-233 Magenta Ink Cartridge LC-233M',
    'Brother LC-233 Yellow Ink Cartridge LC-233Y',
    'Brother LC-235XL Cyan Ink Cartridge LC-235XLC',
    'Brother LC-235XL Magenta Ink Cartridge LC-235XLM',
    'Brother LC-235XL Yellow Ink Cartridge LC-235XLY',
    'Brother LC-239XL Black Ink Cartridge LC-239XLBK'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J5330DW MFCJ5330DW', // Update image URL
  printerModel: 'MFC-J5330DW',
  cartridge: [
    'Brother LC-3317 Black Ink Cartridge LC-3317BK',
    'Brother LC-3317 Cyan Ink Cartridge LC-3317C',
    'Brother LC-3317 Magenta Ink Cartridge LC-3317M',
    'Brother LC-3317 Yellow Ink Cartridge LC-3317Y',
    'Brother LC-3319XL Black Ink Cartridge LC-3319XLBK',
    'Brother LC-3319XL Cyan Ink Cartridge LC-3319XLC',
    'Brother LC-3319XL Magenta Ink Cartridge LC-3319XLM',
    'Brother LC-3319XL Yellow Ink Cartridge LC-3319XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J5720DW MFCJ5720DW', // Update image URL
  printerModel: 'MFC-J5720DW',
  cartridge: [
    'Brother LC-233 Black Ink Cartridge LC-233BK',
    'Brother LC-233 Cyan Ink Cartridge LC-233C',
    'Brother LC-233 Magenta Ink Cartridge LC-233M',
    'Brother LC-233 Yellow Ink Cartridge LC-233Y',
    'Brother LC-235XL Cyan Ink Cartridge LC-235XLC',
    'Brother LC-235XL Magenta Ink Cartridge LC-235XLM',
    'Brother LC-235XL Yellow Ink Cartridge LC-235XLY',
    'Brother LC-239XL Black Ink Cartridge LC-239XLBK'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J5730DW MFCJ5730DW', // Update image URL
  printerModel: 'MFC-J5730DW',
  cartridge: [
    'Brother LC-3317 Black Ink Cartridge LC-3317BK',
    'Brother LC-3317 Cyan Ink Cartridge LC-3317C',
    'Brother LC-3317 Magenta Ink Cartridge LC-3317M',
    'Brother LC-3317 Yellow Ink Cartridge LC-3317Y',
    'Brother LC-3319XL Black Ink Cartridge LC-3319XLBK',
    'Brother LC-3319XL Cyan Ink Cartridge LC-3319XLC',
    'Brother LC-3319XL Magenta Ink Cartridge LC-3319XLM',
    'Brother LC-3319XL Yellow Ink Cartridge LC-3319XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J5910DW MFCJ5910DW', // Update image URL
  printerModel: 'MFC-J5910DW',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y',
    'Brother LC-77XL Black Ink Cartridge LC-77XLBK',
    'Brother LC-77XL Cyan Ink Cartridge LC-77XLC',
    'Brother LC-77XL Magenta Ink Cartridge LC-77XLM',
    'Brother LC-77XL Yellow Ink Cartridge LC-77XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J5930DW MFCJ5930DW', // Update image URL
  printerModel: 'MFC-J5930DW',
  cartridge: [
    'Brother LC-3319XL Black Ink Cartridge LC-3319XLBK',
    'Brother LC-3319XL Cyan Ink Cartridge LC-3319XLC',
    'Brother LC-3319XL Magenta Ink Cartridge LC-3319XLM',
    'Brother LC-3319XL Yellow Ink Cartridge LC-3319XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J625DW MFCJ625DW', // Update image URL
  printerModel: 'MFC-J625DW',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J650DW MFCJ650DW', // Update image URL
  printerModel: 'MFC-J650DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6510DW MFCJ6510DW', // Update image URL
  printerModel: 'MFC-J6510DW',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y',
    'Brother LC-77XL Black Ink Cartridge LC-77XLBK',
    'Brother LC-77XL Cyan Ink Cartridge LC-77XLC',
    'Brother LC-77XL Magenta Ink Cartridge LC-77XLM',
    'Brother LC-77XL Yellow Ink Cartridge LC-77XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6520DW MFCJ6520DW', // Update image URL
  printerModel: 'MFC-J6520DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y',
    'Brother LC-135XL Cyan Ink Cartridge LC-135XLC',
    'Brother LC-135XL Magenta Ink Cartridge LC-135XLM',
    'Brother LC-135XL Yellow Ink Cartridge LC-135XLY',
    'Brother LC-139XL Black Ink Cartridge LC-139XLBK'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6530DW MFCJ6530DW', // Update image URL
  printerModel: 'MFC-J6530DW',
  cartridge: [
    'Brother LC-3317 Black Ink Cartridge LC-3317BK',
    'Brother LC-3317 Cyan Ink Cartridge LC-3317C',
    'Brother LC-3317 Magenta Ink Cartridge LC-3317M',
    'Brother LC-3317 Yellow Ink Cartridge LC-3317Y',
    'Brother LC-3319XL Black Ink Cartridge LC-3319XLBK',
    'Brother LC-3319XL Cyan Ink Cartridge LC-3319XLC',
    'Brother LC-3319XL Magenta Ink Cartridge LC-3319XLM',
    'Brother LC-3319XL Yellow Ink Cartridge LC-3319XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6710DW MFCJ6710DW', // Update image URL
  printerModel: 'MFC-J6710DW',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y',
    'Brother LC-77XL Black Ink Cartridge LC-77XLBK',
    'Brother LC-77XL Cyan Ink Cartridge LC-77XLC',
    'Brother LC-77XL Magenta Ink Cartridge LC-77XLM',
    'Brother LC-77XL Yellow Ink Cartridge LC-77XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6720DW MFCJ6720DW', // Update image URL
  printerModel: 'MFC-J6720DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y',
    'Brother LC-135XL Cyan Ink Cartridge LC-135XLC',
    'Brother LC-135XL Magenta Ink Cartridge LC-135XLM',
    'Brother LC-135XL Yellow Ink Cartridge LC-135XLY',
    'Brother LC-139XL Black Ink Cartridge LC-139XLBK'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6730DW MFCJ6730DW', // Update image URL
  printerModel: 'MFC-J6730DW',
  cartridge: [
    'Brother LC-3317 Black Ink Cartridge LC-3317BK',
    'Brother LC-3317 Cyan Ink Cartridge LC-3317C',
    'Brother LC-3317 Magenta Ink Cartridge LC-3317M',
    'Brother LC-3317 Yellow Ink Cartridge LC-3317Y',
    'Brother LC-3319XL Black Ink Cartridge LC-3319XLBK',
    'Brother LC-3319XL Cyan Ink Cartridge LC-3319XLC',
    'Brother LC-3319XL Magenta Ink Cartridge LC-3319XLM',
    'Brother LC-3319XL Yellow Ink Cartridge LC-3319XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J680DW MFCJ680DW', // Update image URL
  printerModel: 'MFC-J680DW',
  cartridge: [
    'Brother LC-233 Black Ink Cartridge LC-233BK',
    'Brother LC-233 Cyan Ink Cartridge LC-233C',
    'Brother LC-233 Magenta Ink Cartridge LC-233M',
    'Brother LC-233 Yellow Ink Cartridge LC-233Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6910DW MFCJ6910DW', // Update image URL
  printerModel: 'MFC-J6910DW',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y',
    'Brother LC-77XL Black Ink Cartridge LC-77XLBK',
    'Brother LC-77XL Cyan Ink Cartridge LC-77XLC',
    'Brother LC-77XL Magenta Ink Cartridge LC-77XLM',
    'Brother LC-77XL Yellow Ink Cartridge LC-77XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6920DW MFCJ6920DW', // Update image URL
  printerModel: 'MFC-J6920DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y',
    'Brother LC-135XL Cyan Ink Cartridge LC-135XLC',
    'Brother LC-135XL Magenta Ink Cartridge LC-135XLM',
    'Brother LC-135XL Yellow Ink Cartridge LC-135XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6930DW MFCJ6930DW', // Update image URL
  printerModel: 'MFC-J6930DW',
  cartridge: [
    'Brother LC-3317 Black Ink Cartridge LC-3317BK',
    'Brother LC-3317 Cyan Ink Cartridge LC-3317C',
    'Brother LC-3317 Magenta Ink Cartridge LC-3317M',
    'Brother LC-3317 Yellow Ink Cartridge LC-3317Y',
    'Brother LC-3319XL Black Ink Cartridge LC-3319XLBK',
    'Brother LC-3319XL Cyan Ink Cartridge LC-3319XLC',
    'Brother LC-3319XL Magenta Ink Cartridge LC-3319XLM',
    'Brother LC-3319XL Yellow Ink Cartridge LC-3319XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J6935DW MFCJ6935DW', // Update image URL
  printerModel: 'MFC-J6935DW',
  cartridge: [
    'Brother LC-3329XL Black Ink Cartridge LC-3329XLBK',
    'Brother LC-3329XL Cyan Ink Cartridge LC-3329XLC',
    'Brother LC-3329XL Magenta Ink Cartridge LC-3329XLM',
    'Brother LC-3329XL Yellow Ink Cartridge LC-3329XLY'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J825DW MFCJ825DW', // Update image URL
  printerModel: 'MFC-J825DW',
  cartridge: [
    'Brother LC-73 Black Ink Cartridge LC-73BK',
    'Brother LC-73 Cyan Ink Cartridge LC-73C',
    'Brother LC-73 Magenta Ink Cartridge LC-73M',
    'Brother LC-73 Yellow Ink Cartridge LC-73Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J870DW MFCJ870DW', // Update image URL
  printerModel: 'MFC-J870DW',
  cartridge: [
    'Brother LC-133 Black Ink Cartridge LC-133BK',
    'Brother LC-133 Cyan Ink Cartridge LC-133C',
    'Brother LC-133 Magenta Ink Cartridge LC-133M',
    'Brother LC-133 Yellow Ink Cartridge LC-133Y'
  ]
},
{
  brand: "Brother",
  type: "ink",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-J880DW MFCJ880DW', // Update image URL
  printerModel: 'MFC-J880DW',
  cartridge: [
    'Brother LC-233 Black Ink Cartridge LC-233BK',
    'Brother LC-233 Cyan Ink Cartridge LC-233C',
    'Brother LC-233 Magenta Ink Cartridge LC-233M',
    'Brother LC-233 Yellow Ink Cartridge LC-233Y'
  ]
},
// Toner Cartridges - dcpSeries
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: true,
  imgSrc: 'Brother DCP-1510 DCP1510', // Update image URL
  printerModel: 'DCP-1510',
  cartridge: [
    'Brother TN-1070 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-7040 DCP7040', // Update image URL
  printerModel: 'DCP-7040',
  cartridge: [
    'Brother TN-2150 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: true,
  imgSrc: 'Brother DCP-7055 DCP7055', // Update image URL
  printerModel: 'DCP-7055',
  cartridge: [
    'Brother TN-2030 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-7060D DCP7060D', // Update image URL
  printerModel: 'DCP-7060D',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-7065DN DCP7065DN', // Update image URL
  printerModel: 'DCP-7065DN',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-8020 DCP8020', // Update image URL
  printerModel: 'DCP-8020',
  cartridge: [
    'Brother TN-7600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-8025D DCP8025D', // Update image URL
  printerModel: 'DCP-8025D',
  cartridge: [
    'Brother TN-7600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-8155DN DCP8155DN', // Update image URL
  printerModel: 'DCP-8155DN',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-9010CN DCP9010CN', // Update image URL
  printerModel: 'DCP-9010CN',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-9015CDW DCP9015CDW', // Update image URL
  printerModel: 'DCP-9015CDW',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-9040CN DCP9040CN', // Update image URL
  printerModel: 'DCP-9040CN',
  cartridge: [
    'Brother TN-155BK Black Toner Cartridge',
    'Brother TN-155C Cyan Toner Cartridge',
    'Brother TN-155M Magenta Toner Cartridge',
    'Brother TN-155Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-9042CDN DCP9042CDN', // Update image URL
  printerModel: 'DCP-9042CDN',
  cartridge: [
    'Brother TN-155BK Black Toner Cartridge',
    'Brother TN-155C Cyan Toner Cartridge',
    'Brother TN-155M Magenta Toner Cartridge',
    'Brother TN-155Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-9055CDN DCP9055CDN', // Update image URL
  printerModel: 'DCP-9055CDN',
  cartridge: [
    'Brother TN-348BK Black Toner Cartridge High Yield',
    'Brother TN-348C Cyan Toner Cartridge High Yield',
    'Brother TN-348M Magenta Toner Cartridge High Yield',
    'Brother TN-348Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "dcpSeries",
  populor: false,
  imgSrc: 'Brother DCP-L3510CDW DCPL3510CDW', // Update image URL
  printerModel: 'DCP-L3510CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
// Toner Cartridges - hlSeries
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: false,
  imgSrc: 'Brother HL-2130 HL2130', // Update image URL
  printerModel: 'HL-2130',
  cartridge: [
    'Brother TN-2030 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2132 HL2132', // Update image URL
  printerModel: 'HL-2132',
  cartridge: [
    'Brother TN-2030 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: false,
  imgSrc: 'Brother HL-2135W HL2135W', // Update image URL
  printerModel: 'HL-2135W',
  cartridge: [
    'Brother TN-2030 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: false,
  imgSrc: 'Brother HL-2140 HL2140', // Update image URL
  printerModel: 'HL-2140',
  cartridge: [
    'Brother TN-2150 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2142 HL2142', // Update image URL
  printerModel: 'HL-2142',
  cartridge: [
    'Brother TN-2150 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2150N HL2150N', // Update image URL
  printerModel: 'HL-2150N',
  cartridge: [
    'Brother TN-2150 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2170W HL2170W', // Update image URL
  printerModel: 'HL-2170W',
  cartridge: [
    'Brother TN-2150 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2240D HL2240D', // Update image URL
  printerModel: 'HL-2240D',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2242D HL2242D', // Update image URL
  printerModel: 'HL-2242D',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2250DN HL2250DN', // Update image URL
  printerModel: 'HL-2250DN',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2270DW HL2270DW', // Update image URL
  printerModel: 'HL-2270DW',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2400C HL2400C', // Update image URL
  printerModel: 'HL-2400C',
  cartridge: [
    'Brother TN-01BK Black Toner Cartridge',
    'Brother TN-01C Cyan Toner Cartridge',
    'Brother TN-01M Magenta Toner Cartridge',
    'Brother TN-01Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2400Ce HL2400Ce', // Update image URL
  printerModel: 'HL-2400Ce',
  cartridge: [
    'Brother TN-01BK Black Toner Cartridge',
    'Brother TN-01C Cyan Toner Cartridge',
    'Brother TN-01M Magenta Toner Cartridge',
    'Brother TN-01Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-2700CN HL2700CN', // Update image URL
  printerModel: 'HL-2700CN',
  cartridge: [
    'Brother TN-04BK Black Toner Cartridge',
    'Brother TN-04C Cyan Toner Cartridge',
    'Brother TN-04M Magenta Toner Cartridge',
    'Brother TN-04Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-3040CN HL3040CN', // Update image URL
  printerModel: 'HL-3040CN',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-3045CN HL3045CN', // Update image URL
  printerModel: 'HL-3045CN',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-3070CW HL3070CW', // Update image URL
  printerModel: 'HL-3070CW',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-3075CW HL3075CW', // Update image URL
  printerModel: 'HL-3075CW',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-3150CDN HL3150CDN', // Update image URL
  printerModel: 'HL-3150CDN',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-3170CDW HL3170CDW', // Update image URL
  printerModel: 'HL-3170CDW',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-4040CN HL4040CN', // Update image
  Src: 'Brother HL-4040CN HL4040CN', // Update image URL
  printerModel: 'HL-4040CN',
  cartridge: [
    'Brother TN-155BK Black Toner Cartridge',
    'Brother TN-155C Cyan Toner Cartridge',
    'Brother TN-155M Magenta Toner Cartridge',
    'Brother TN-155Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'HL-4050CDN HL4050CDN', // Update image URL
  printerModel: 'HL-4050CDN',
  cartridge: [
    'Brother TN-155BK Black Toner Cartridge',
    'Brother TN-155C Cyan Toner Cartridge',
    'Brother TN-155M Magenta Toner Cartridge',
    'Brother TN-155Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-4150CDN HL4150CDN', // Update image URL
  printerModel: 'HL-4150CDN',
  cartridge: [
    'Brother TN-348BK Black Toner Cartridge High Yield',
    'Brother TN-348C Cyan Toner Cartridge High Yield',
    'Brother TN-348M Magenta Toner Cartridge High Yield',
    'Brother TN-348Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-4200CN HL4200CN', // Update image URL
  printerModel: 'HL-4200CN',
  cartridge: [
    'Brother TN-12BK Black Toner Cartridge',
    'Brother TN-12C Cyan Toner Cartridge',
    'Brother TN-12M Magenta Toner Cartridge',
    'Brother TN-12Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-4570CDW HL4570CDW', // Update image URL
  printerModel: 'HL-4570CDW',
  cartridge: [
    'Brother TN-325BK Black Toner Cartridge High Yield',
    'Brother TN-325C Cyan Toner Cartridge High Yield',
    'Brother TN-325M Magenta Toner Cartridge High Yield',
    'Brother TN-325Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2300D HLL2300D', // Update image URL
  printerModel: 'HL-L2300D',
  cartridge: [
    'Brother TN-2320 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2340DW HLL2340DW', // Update image URL
  printerModel: 'HL-L2340DW',
  cartridge: [
    'Brother TN-2320 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2360DN HLL2360DN', // Update image URL
  printerModel: 'HL-L2360DN',
  cartridge: [
    'Brother TN-2320 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2365DW HLL2365DW', // Update image URL
  printerModel: 'HL-L2365DW',
  cartridge: [
    'Brother TN-2320 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L3210CW HLL3210CW', // Update image URL
  printerModel: 'HL-L3210CW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L3230CDW HLL3230CDW', // Update image URL
  printerModel: 'HL-L3230CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
// Toner Cartridges - mfcSeries (already converted)
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-7360N MFC7360N', // Update image URL
  printerModel: 'MFC-7360N',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-7460DN MFC7460DN', // Update image URL
  printerModel: 'MFC-7460DN',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-7860DW MFC7860DW', // Update image URL
  printerModel: 'MFC-7860DW',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8510DN MFC8510DN', // Update image URL
  printerModel: 'MFC-8510DN',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8512DN MFC8512DN', // Update image URL
  printerModel: 'MFC-8512DN',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8520DN MFC8520DN', // Update image URL
  printerModel: 'MFC-8520DN',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8810DW MFC8810DW', // Update image URL
  printerModel: 'MFC-8810DW',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9120CN MFC9120CN', // Update image URL
  printerModel: 'MFC-9120CN',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9130CW MFC9130CW', // Update image URL
  printerModel: 'MFC-9130CW',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9140CDN MFC9140CDN', // Update image URL
  printerModel: 'MFC-9140CDN',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9320CW MFC9320CW', // Update image URL
  printerModel: 'MFC-9320CW',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9330CDW MFC9330CDW', // Update image URL
  printerModel: 'MFC-9330CDW',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2700DW MFCL2700DW', // Update image URL
  printerModel: 'MFC-L2700DW',
  cartridge: [
    'Brother TN-2320 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2701DW MFCL2701DW', // Update image URL
  printerModel: 'MFC-L2701DW',
  cartridge: [
    'Brother TN-2320 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2703DW MFCL2703DW', // Update image URL
  printerModel: 'MFC-L2703DW',
  cartridge: [
    'Brother TN-2320 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2710DW MFCL2710DW', // Update image URL
  printerModel: 'MFC-L2710DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2713DW MFCL2713DW', // Update image URL
  printerModel: 'MFC-L2713DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2730DW MFCL2730DW', // Update image URL
  printerModel: 'MFC-L2730DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L3710CW MFCL3710CW', // Update image URL
  printerModel: 'MFC-L3710CW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L3730CDW MFCL3730CDW', // Update image URL
  printerModel: 'MFC-L3730CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L3750CDW MFCL3750CDW', // Update image URL
  printerModel: 'MFC-L3750CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L3770CDW MFCL3770CDW', // Update image URL
  printerModel: 'MFC-L3770CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
// ... continue for the remaining MFC series ink cartridges
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-4570CDW HL4570CDW', // Update image URL
  printerModel: 'HL-4570CDW',
  cartridge: [
    'Brother TN-348BK Black Toner Cartridge High Yield',
    'Brother TN-348C Cyan Toner Cartridge High Yield',
    'Brother TN-348M Magenta Toner Cartridge High Yield',
    'Brother TN-348Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5040 HL5040', // Update image URL
  printerModel: 'HL-5040',
  cartridge: [
    'Brother TN-7600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5050 HL5050', // Update image URL
  printerModel: 'HL-5050',
  cartridge: [
    'Brother TN-7600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5070N HL5070N', // Update image URL
  printerModel: 'HL-5070N',
  cartridge: [
    'Brother TN-7600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother Brother HL-5140 HL5140', // Update image URL
  printerModel: 'HL-5140',
  cartridge: [
    'Brother TN-3060 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5150D HL5150D', // Update image URL
  printerModel: 'HL-5150D',
  cartridge: [
    'Brother TN-3060 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5170DN HL5170DN', // Update image URL
  printerModel: 'HL-5170DN',
  cartridge: [
    'Brother TN-3060 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5240 HL5240', // Update image URL
  printerModel: 'HL-5240',
  cartridge: [
    'Brother TN-3185 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5250DN HL5250DN', // Update image URL
  printerModel: 'HL-5250DN',
  cartridge: [
    'Brother TN-3185 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5270DN HL5270DN', // Update image URL
  printerModel: 'HL-5270DN',
  cartridge: [
    'Brother TN-3185 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5340D HL5340D', // Update image URL
  printerModel: 'HL-5340D',
  cartridge: [
    'Brother TN-3290 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5350DN HL5350DN', // Update image URL
  printerModel: 'HL-5350DN',
  cartridge: [
    'Brother TN-3290 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5370DW HL5370DW', // Update image URL
  printerModel: 'HL-5370DW',
  cartridge: [
    'Brother TN-3290 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5380DN HL5380DN', // Update image URL
  printerModel: 'HL-5380DN',
  cartridge: [
    'Brother TN-3290 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5440D HL5440D', // Update image URL
  printerModel: 'HL-5440D',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5450DN HL5450DN', // Update image URL
  printerModel: 'HL-5450DN',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-5470DW HL5470DW', // Update image URL
  printerModel: 'HL-5470DW',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-6050D HL6050D', // Update image URL
  printerModel: 'HL-6050D',
  cartridge: [
    'Brother TN-4100 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-6050DN HL6050DN', // Update image URL
  printerModel: 'HL-6050DN',
  cartridge: [
    'Brother TN-4100 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-6180DW HL6180DW', // Update image URL
  printerModel: 'HL-6180DW',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-7050 HL7050', // Update image URL
  printerModel: 'HL-7050',
  cartridge: [
    'Brother TN-5500 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-7050N HL7050N', // Update image URL
  printerModel: 'HL-7050N',
  cartridge: [
    'Brother TN-5500 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-730 HL730', // Update image URL
  printerModel: 'HL-730',
  cartridge: [
    'Brother TN-200 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-730Plus HL730Plus', // Update image URL
  printerModel: 'HL-730Plus',
  cartridge: [
    'Brother TN-200 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-8050N HL8050N', // Update image URL
  printerModel: 'HL-8050N',
  cartridge: [
    'Brother TN-1700 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2300D HLL2300D', // Update image URL
  printerModel: 'HL-L2300D',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2305W HLL2305W', // Update image URL
  printerModel: 'HL-L2305W',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2340DW HLL2340DW', // Update image URL
  printerModel: 'HL-L2340DW',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2350DW HLL2350DW', // Update image URL
  printerModel: 'HL-L2350DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield - With CHIP'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2365DW HLL2365DW', // Update image URL
  printerModel: 'HL-L2365DW',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2375DW HLL2375DW', // Update image URL
  printerModel: 'HL-L2375DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield - With CHIP'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2380DW HLL2380DW', // Update image URL
  printerModel: 'HL-L2380DW',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother HL-L2395DW HLL2395DW', // Update image URL
  printerModel: 'HL-L2395DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield - With CHIP'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L3230CDW HLL3230CDW', // Update image URL
  printerModel: 'HL-L3230CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
}, {
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L3270CDW HLL3270CDW', // Update image URL
  printerModel: 'HL-L3270CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L5100DN HLL5100DN', // Update image URL
  printerModel: 'HL-L5100DN',
  cartridge: [
    'Brother TN-3440 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L5200DW HLL5200DW', // Update image URL
  printerModel: 'HL-L5200DW',
  cartridge: [
    'Brother TN-3440 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L6200DW HLL6200DW', // Update image URL
  printerModel: 'HL-L6200DW',
  cartridge: [
    'Brother TN-3440 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L6400DW HLL6400DW', // Update image URL
  printerModel: 'HL-L6400DW',
  cartridge: [
    'Brother TN-3440 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L8250CDN HLL8250CDN', // Update image URL
  printerModel: 'HL-L8250CDN',
  cartridge: [
    'Brother TN-346BK Black Toner Cartridge High Yield',
    'Brother TN-346C Cyan Toner Cartridge High Yield',
    'Brother TN-346M Magenta Toner Cartridge High Yield',
    'Brother TN-346Y Yellow Toner Cartridge High Yield'
  ]
}, {
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L8260CDW HLL8260CDW', // Update image URL
  printerModel: 'HL-L8260CDW',
  cartridge: [
    'Brother TN-443BK Black Toner Cartridge High Yield',
    'Brother TN-443C Cyan Toner Cartridge High Yield',
    'Brother TN-443M Magenta Toner Cartridge High Yield',
    'Brother TN-443Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L8350CDW HLL8350CDW', // Update image URL
  printerModel: 'HL-L8350CDW',
  cartridge: [
    'Brother TN-346BK Black Toner Cartridge High Yield',
    'Brother TN-346C Cyan Toner Cartridge High Yield',
    'Brother TN-346M Magenta Toner Cartridge High Yield',
    'Brother TN-346Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L8360CDW HLL8360CDW', // Update image URL
  printerModel: 'HL-L8360CDW',
  cartridge: [
    'Brother TN-443BK Black Toner Cartridge High Yield',
    'Brother TN-443C Cyan Toner Cartridge High Yield',
    'Brother TN-443M Magenta Toner Cartridge High Yield',
    'Brother TN-443Y Yellow Toner Cartridge High Yield',
    'Brother TN-446BK Black Toner Cartridge Super High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L9200CDW HLL9200CDW', // Update image URL
  printerModel: 'HL-L9200CDW',
  cartridge: [
    'Brother TN-349BK Black Toner Cartridge Super High Yield',
    'Brother TN-349C Cyan Toner Cartridge Super High Yield',
    'Brother TN-349M Magenta Toner Cartridge Super High Yield',
    'Brother TN-349Y Yellow Toner Cartridge Super High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-L9310CDW HLL9310CDW', // Update image URL
  printerModel: 'HL-L9310CDW',
  cartridge: [
    'Brother TN-446BK Black Toner Cartridge Super High Yield',
    'Brother TN-446C Cyan Toner Cartridge Super High Yield',
    'Brother TN-446M Magenta Toner Cartridge Super High Yield',
    'Brother TN-446Y Yellow Toner Cartridge Super High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-P2000 HLP2000', // Update image URL
  printerModel: 'HL-P2000',
  cartridge: [
    'Brother TN-300 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "hlSeries",
  populor: true,
  imgSrc: 'Brother  HL-P2500 HLP2500', // Update image URL
  printerModel: 'HL-P2500',
  cartridge: [
    'Brother TN-6600 Toner Cartridge'
  ]
},
// Toner Cartridges - mfcSeries
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-7840 MFC7840', // Update image URL
  printerModel: 'MFC-7840',
  cartridge: [
    'Brother TN-2150 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-7860DW MFC7860DW', // Update image URL
  printerModel: 'MFC-7860DW',
  cartridge: [
    'Brother TN-2250 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: true,
  imgSrc: 'Brother MFC-8220 MFC8220', // Update image URL
  printerModel: 'MFC-8220',
  cartridge: [
    'Brother TN-3060 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8370DN MFC8370DN', // Update image URL
  printerModel: 'MFC-8370DN',
  cartridge: [
    'Brother TN-3290 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8440 MFC8440', // Update image URL
  printerModel: 'MFC-8440',
  cartridge: [
    'Brother TN-3060 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8460N MFC8460N', // Update image URL
  printerModel: 'MFC-8460N',
  cartridge: [
    'Brother TN-3185 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8510DN MFC8510DN', // Update image URL
  printerModel: 'MFC-8510DN',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8600 MFC8600', // Update image URL
  printerModel: 'MFC-8600',
  cartridge: [
    'Brother TN-6600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8820D MFC8820D', // Update image URL
  printerModel: 'MFC-8820D',
  cartridge: [
    'Brother TN-7600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8840D MFC8840D', // Update image URL
  printerModel: 'MFC-8840D',
  cartridge: [
    'Brother TN-3060 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8860DN MFC8860DN', // Update image URL
  printerModel: 'MFC-8860DN',
  cartridge: [
    'Brother TN-3185 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8880DN MFC8880DN', // Update image URL
  printerModel: 'MFC-8880DN',
  cartridge: [
    'Brother TN-3290 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8890DW MFC8890DW', // Update image URL
  printerModel: 'MFC-8890DW',
  cartridge: [
    'Brother TN-3290 Toner Cartridge'
  ]
}, {
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8910DW MFC8910DW', // Update image URL
  printerModel: 'MFC-8910DW',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-8950DW MFC8950DW', // Update image URL
  printerModel: 'MFC-8950DW',
  cartridge: [
    'Brother TN-3340 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9120CN MFC9120CN', // Update image URL
  printerModel: 'MFC-9120CN',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9125CN MFC9125CN', // Update image URL
  printerModel: 'MFC-9125CN',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9140CDN MFC9140CDN', // Update image URL
  printerModel: 'MFC-9140CDN',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9160 MFC9160', // Update image URL
  printerModel: 'MFC-9160',
  cartridge: [
    'Brother TN-8000 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9180 MFC9180', // Update image URL
  printerModel: 'MFC-9180',
  cartridge: [
    'Brother TN-8000 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9320CW MFC9320CW', // Update image URL
  printerModel: 'MFC-9320CW',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9325CW MFC9325CW', // Update image URL
  printerModel: 'MFC-9325CW',
  cartridge: [
    'Brother TN-240BK Black Toner Cartridge',
    'Brother TN-240C Cyan Toner Cartridge',
    'Brother TN-240M Magenta Toner Cartridge',
    'Brother TN-240Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9330CDW MFC9330CDW', // Update image URL
  printerModel: 'MFC-9330CDW',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9335CDW MFC9335CDW', // Update image URL
  printerModel: 'MFC-9335CDW',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9340CDW MFC9340CDW', // Update image URL
  printerModel: 'MFC-9340CDW',
  cartridge: [
    'Brother TN-251BK Black Toner Cartridge',
    'Brother TN-255C Cyan Toner Cartridge',
    'Brother TN-255M Magenta Toner Cartridge',
    'Brother TN-255Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9420CN MFC9420CN', // Update image URL
  printerModel: 'MFC-9420CN',
  cartridge: [
    'Brother TN-04BK Black Toner Cartridge',
    'Brother TN-04C Cyan Toner Cartridge',
    'Brother TN-04M Magenta Toner Cartridge',
    'Brother TN-04Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9440CN MFC9440CN', // Update image URL
  printerModel: 'MFC-9440CN',
  cartridge: [
    'Brother TN-155BK Black Toner Cartridge',
    'Brother TN-155C Cyan Toner Cartridge',
    'Brother TN-155M Magenta Toner Cartridge',
    'Brother TN-155Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9450CDN MFC9450CDN', // Update image URL
  printerModel: 'MFC-9450CDN',
  cartridge: [
    'Brother TN-155BK Black Toner Cartridge',
    'Brother TN-155C Cyan Toner Cartridge',
    'Brother TN-155M Magenta Toner Cartridge',
    'Brother TN-155Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9460CDN MFC9460CDN', // Update image URL
  printerModel: 'MFC-9460CDN',
  cartridge: [
    'Brother TN-348BK Black Toner Cartridge High Yield',
    'Brother TN-348C Cyan Toner Cartridge High Yield',
    'Brother TN-348M Magenta Toner Cartridge High Yield',
    'Brother TN-348Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9500 MFC9500', // Update image URL
  printerModel: 'MFC-9500',
  cartridge: [
    'Brother TN-200 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9600 MFC9600', // Update image URL
  printerModel: 'MFC-9600',
  cartridge: [
    'Brother TN-6600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9660 MFC9660', // Update image URL
  printerModel: 'MFC-9660',
  cartridge: [
    'Brother TN-6600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9840CDW MFC9840DW', // Update image URL
  printerModel: 'MFC-9840CDW',
  cartridge: [
    'Brother TN-155BK Black Toner Cartridge',
    'Brother TN-155C Cyan Toner Cartridge',
    'Brother TN-155M Magenta Toner Cartridge',
    'Brother TN-155Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9880 MFC9880', // Update image URL
  printerModel: 'MFC-9880',
  cartridge: [
    'Brother TN-6600 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-9970CDW MFC9970CDW', // Update image URL
  printerModel: 'MFC-9970CDW',
  cartridge: [
    'Brother TN-348BK Black Toner Cartridge High Yield',
    'Brother TN-348C Cyan Toner Cartridge High Yield',
    'Brother TN-348M Magenta Toner Cartridge High Yield',
    'Brother TN-348Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2700DW MFCL2700DW', // Update image URL
  printerModel: 'MFC-L2700DW',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2703DW MFCL2703DW', // Update image URL
  printerModel: 'MFC-L2703DW',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2710DW MFCL2710DW', // Update image URL
  printerModel: 'MFC-L2710DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield - With CHIP'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2713DW MFCL2713DW', // Update image URL
  printerModel: 'MFC-L2713DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield - With CHIP'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2720DW MFCL2720DW', // Update image URL
  printerModel: 'MFC-L2720DW',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2730DW MFCL2730DW', // Update image URL
  printerModel: 'MFC-L2730DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield - With CHIP'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2740DW MFCL2740DW', // Update image URL
  printerModel: 'MFC-L2740DW',
  cartridge: [
    'Brother TN-2350 Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L2750DW MFCL2750DW', // Update image URL
  printerModel: 'MFC-L2750DW',
  cartridge: [
    'Brother TN-2450 Toner Cartridge High Yield - With CHIP'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L3745CDW MFCL3745CDW', // Update image URL
  printerModel: 'MFC-L3745CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L3750CDW MFCL3750CDW', // Update image URL
  printerModel: 'MFC-L3750CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L3770CDW MFCL3770CDW', // Update image URL
  printerModel: 'MFC-L3770CDW',
  cartridge: [
    'Brother TN-253BK Black Toner Cartridge',
    'Brother TN-257C Cyan Toner Cartridge',
    'Brother TN-257M Magenta Toner Cartridge',
    'Brother TN-257Y Yellow Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L5755DW MFCL5755DW', // Update image URL
  printerModel: 'MFC-L5755DW',
  cartridge: [
    'Brother TN-3440 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L6700DW MFCL6700DW', // Update image URL
  printerModel: 'MFC-L6700DW',
  cartridge: [
    'Brother TN-3440 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L6900DW MFCL6900DW', // Update image URL
  printerModel: 'MFC-L6900DW',
  cartridge: [
    'Brother TN-3440 Toner Cartridge'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L8600CDW MFCL8600CDW', // Update image URL
  printerModel: 'MFC-L8600CDW',
  cartridge: [
    'Brother TN-346BK Black Toner Cartridge High Yield',
    'Brother TN-346C Cyan Toner Cartridge High Yield',
    'Brother TN-346M Magenta Toner Cartridge High Yield',
    'Brother TN-346Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L8690CDW MFCL8690CDW', // Update image URL
  printerModel: 'MFC-L8690CDW',
  cartridge: [
    'Brother TN-443BK Black Toner Cartridge High Yield',
    'Brother TN-443C Cyan Toner Cartridge High Yield',
    'Brother TN-443M Magenta Toner Cartridge High Yield',
    'Brother TN-443Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L8850CDW MFCL8850CDW', // Update image URL
  printerModel: 'MFC-L8850CDW',
  cartridge: [
    'Brother TN-346BK Black Toner Cartridge High Yield',
    'Brother TN-346C Cyan Toner Cartridge High Yield',
    'Brother TN-346M Magenta Toner Cartridge High Yield',
    'Brother TN-346Y Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L8900CDW MFCL8900CDW', // Update image URL
  printerModel: 'MFC-L8900CDW',
  cartridge: [
    'Brother TN-443BK Black Toner Cartridge High Yield',
    'Brother TN-443C Cyan Toner Cartridge High Yield',
    'Brother TN-443M Magenta Toner Cartridge High Yield',
    'Brother TN-443Y Yellow Toner Cartridge High Yield',
    'Brother TN-446BK Black Toner Cartridge Super High Yield',
    'Brother TN-446C Cyan Toner Cartridge Super High Yield',
    'Brother TN-446M Magenta Toner Cartridge Super High Yield',
    'Brother TN-446Y Yellow Toner Cartridge Super High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L9550CDW MFCL9550CDW', // Update image URL
  printerModel: 'MFC-L9550CDW',
  cartridge: [
    'Brother TN-349BK Black Toner Cartridge Super High Yield',
    'Brother TN-349C Cyan Toner Cartridge Super High Yield',
    'Brother TN-349M Magenta Toner Cartridge Super High Yield',
    'Brother TN-349Y Yellow Toner Cartridge Super High Yield'
  ]
},
{
  brand: "Brother",
  type: "toner",
  series: "mfcSeries",
  populor: false,
  imgSrc: 'Brother MFC-L9570CDW MFCL9570CDW', // Update image URL
  printerModel: 'MFC-L9570CDW',
  cartridge: [
    'Brother TN-446BK Black Toner Cartridge Super High Yield',
    'Brother TN-446C Cyan Toner Cartridge Super High Yield',
    'Brother TN-446M Magenta Toner Cartridge Super High Yield',
    'Brother TN-446Y Yellow Toner Cartridge Super High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFPROSeries",
  populor: true,
  imgSrc: 'Canon imagePROGRAF PRO2000', // Update image URL
  printerModel: 'imagePROGRAF PRO2000',
  cartridge: [
    'Canon PFI-1100C Cyan Ink Cartridge',
    'Canon PFI-1100M Magenta Ink Cartridge',
    'Canon PFI-1100Y Yellow Ink Cartridge',
    'Canon PFI-1100MBK Matte Black Ink Cartridge',
    'Canon PFI-1100PBK Photo Black Ink Cartridge',
    'Canon PFI-1100GY Grey Ink Cartridge',
    'Canon PFI-1100PC Photo Cyan Ink Cartridge',
    'Canon PFI-1100PM Photo Magenta Ink Cartridge',
    'Canon PFI-1100PGY Photo Grey Ink Cartridge',
    'Canon PFI-1100CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1100R Red Ink Cartridge',
    'Canon PFI-1100B Blue Ink Cartridge',
    'Canon PFI-1300C Cyan Ink Cartridge',
    'Canon PFI-1300M Magenta Ink Cartridge',
    'Canon PFI-1300Y Yellow Ink Cartridge',
    'Canon PFI-1300MBK Matte Black Ink Cartridge',
    'Canon PFI-1300PBK Photo Black Ink Cartridge',
    'Canon PFI-1300GY Grey Ink Cartridge',
    'Canon PFI-1300PC Photo Cyan Ink Cartridge',
    'Canon PFI-1300PM Photo Magenta Ink Cartridge',
    'Canon PFI-1300PGY Photo Grey Ink Cartridge',
    'Canon PFI-1300CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1300R Red Ink Cartridge',
    'Canon PFI-1300B Blue Ink Cartridge',
    'Canon PFI-1700C Cyan Ink Cartridge',
    'Canon PFI-1700M Magenta Ink Cartridge',
    'Canon PFI-1700Y Yellow Ink Cartridge',
    'Canon PFI-1700MBK Matte Black Ink Cartridge',
    'And More....'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFPROSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF PRO4000', // Update image URL
  printerModel: 'imagePROGRAF PRO4000',
  cartridge: [
    'Canon PFI-1100C Cyan Ink Cartridge',
    'Canon PFI-1100M Magenta Ink Cartridge',
    'Canon PFI-1100Y Yellow Ink Cartridge',
    'Canon PFI-1100MBK Matte Black Ink Cartridge',
    'Canon PFI-1100PBK Photo Black Ink Cartridge',
    'Canon PFI-1100GY Grey Ink Cartridge',
    'Canon PFI-1100PC Photo Cyan Ink Cartridge',
    'Canon PFI-1100PM Photo Magenta Ink Cartridge',
    'Canon PFI-1100PGY Photo Grey Ink Cartridge',
    'Canon PFI-1100CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1100R Red Ink Cartridge',
    'Canon PFI-1100B Blue Ink Cartridge',
    'Canon PFI-1300C Cyan Ink Cartridge',
    'Canon PFI-1300M Magenta Ink Cartridge',
    'Canon PFI-1300Y Yellow Ink Cartridge',
    'Canon PFI-1300MBK Matte Black Ink Cartridge',
    'Canon PFI-1300PBK Photo Black Ink Cartridge',
    'Canon PFI-1300GY Grey Ink Cartridge',
    'Canon PFI-1300PC Photo Cyan Ink Cartridge',
    'Canon PFI-1300PM Photo Magenta Ink Cartridge',
    'Canon PFI-1300PGY Photo Grey Ink Cartridge',
    'Canon PFI-1300CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1300R Red Ink Cartridge',
    'Canon PFI-1300B Blue Ink Cartridge',
    'Canon PFI-1700C Cyan Ink Cartridge',
    'Canon PFI-1700M Magenta Ink Cartridge',
    'Canon PFI-1700Y Yellow Ink Cartridge',
    'Canon PFI-1700MBK Matte Black Ink Cartridge',
    'And More....'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFPROSeries",
  populor: true,
  imgSrc: 'Canon imagePROGRAF PRO4000S', // Update image URL
  printerModel: 'imagePROGRAF PRO4000S',
  cartridge: [
    'Canon PFI-1100C Cyan Ink Cartridge',
    'Canon PFI-1100M Magenta Ink Cartridge',
    'Canon PFI-1100Y Yellow Ink Cartridge',
    'Canon PFI-1100MBK Matte Black Ink Cartridge',
    'Canon PFI-1100PBK Photo Black Ink Cartridge',
    'Canon PFI-1100GY Grey Ink Cartridge',
    'Canon PFI-1100PC Photo Cyan Ink Cartridge',
    'Canon PFI-1100PM Photo Magenta Ink Cartridge',
    'Canon PFI-1100PGY Photo Grey Ink Cartridge',
    'Canon PFI-1100CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1100R Red Ink Cartridge',
    'Canon PFI-1100B Blue Ink Cartridge',
    'Canon PFI-1300C Cyan Ink Cartridge',
    'Canon PFI-1300M Magenta Ink Cartridge',
    'Canon PFI-1300Y Yellow Ink Cartridge',
    'Canon PFI-1300MBK Matte Black Ink Cartridge',
    'Canon PFI-1300PBK Photo Black Ink Cartridge',
    'Canon PFI-1300GY Grey Ink Cartridge',
    'Canon PFI-1300PC Photo Cyan Ink Cartridge',
    'Canon PFI-1300PM Photo Magenta Ink Cartridge',
    'Canon PFI-1300PGY Photo Grey Ink Cartridge',
    'Canon PFI-1300CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1300R Red Ink Cartridge',
    'Canon PFI-1300B Blue Ink Cartridge',
    'Canon PFI-1700C Cyan Ink Cartridge',
    'Canon PFI-1700M Magenta Ink Cartridge',
    'Canon PFI-1700Y Yellow Ink Cartridge',
    'Canon PFI-1700MBK Matte Black Ink Cartridge',
    'And More....'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFPROSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF PRO6000', // Update image URL
  printerModel: 'imagePROGRAF PRO6000',
  cartridge: [
    'Canon PFI-1100C Cyan Ink Cartridge',
    'Canon PFI-1100M Magenta Ink Cartridge',
    'Canon PFI-1100Y Yellow Ink Cartridge',
    'Canon PFI-1100MBK Matte Black Ink Cartridge',
    'Canon PFI-1100PBK Photo Black Ink Cartridge',
    'Canon PFI-1100GY Grey Ink Cartridge',
    'Canon PFI-1100PC Photo Cyan Ink Cartridge',
    'Canon PFI-1100PM Photo Magenta Ink Cartridge',
    'Canon PFI-1100PGY Photo Grey Ink Cartridge',
    'Canon PFI-1100CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1100R Red Ink Cartridge',
    'Canon PFI-1100B Blue Ink Cartridge',
    'Canon PFI-1300C Cyan Ink Cartridge',
    'Canon PFI-1300M Magenta Ink Cartridge',
    'Canon PFI-1300Y Yellow Ink Cartridge',
    'Canon PFI-1300MBK Matte Black Ink Cartridge',
    'Canon PFI-1300PBK Photo Black Ink Cartridge',
    'Canon PFI-1300GY Grey Ink Cartridge',
    'Canon PFI-1300PC Photo Cyan Ink Cartridge',
    'Canon PFI-1300PM Photo Magenta Ink Cartridge',
    'Canon PFI-1300PGY Photo Grey Ink Cartridge',
    'Canon PFI-1300CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1300R Red Ink Cartridge',
    'Canon PFI-1300B Blue Ink Cartridge',
    'Canon PFI-1700C Cyan Ink Cartridge',
    'Canon PFI-1700M Magenta Ink Cartridge',
    'Canon PFI-1700Y Yellow Ink Cartridge',
    'Canon PFI-1700MBK Matte Black Ink Cartridge',
    'And More....'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFPROSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF PRO6000S', // Update image URL
  printerModel: 'imagePROGRAF PRO6000S',
  cartridge: [
    'Canon PFI-1100C Cyan Ink Cartridge',
    'Canon PFI-1100M Magenta Ink Cartridge',
    'Canon PFI-1100Y Yellow Ink Cartridge',
    'Canon PFI-1100MBK Matte Black Ink Cartridge',
    'Canon PFI-1100PBK Photo Black Ink Cartridge',
    'Canon PFI-1100GY Grey Ink Cartridge',
    'Canon PFI-1100PC Photo Cyan Ink Cartridge',
    'Canon PFI-1100PM Photo Magenta Ink Cartridge',
    'Canon PFI-1100PGY Photo Grey Ink Cartridge',
    'Canon PFI-1100CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1100R Red Ink Cartridge',
    'Canon PFI-1100B Blue Ink Cartridge',
    'Canon PFI-1300C Cyan Ink Cartridge',
    'Canon PFI-1300M Magenta Ink Cartridge',
    'Canon PFI-1300Y Yellow Ink Cartridge',
    'Canon PFI-1300MBK Matte Black Ink Cartridge',
    'Canon PFI-1300PBK Photo Black Ink Cartridge',
    'Canon PFI-1300GY Grey Ink Cartridge',
    'Canon PFI-1300PC Photo Cyan Ink Cartridge',
    'Canon PFI-1300PM Photo Magenta Ink Cartridge',
    'Canon PFI-1300PGY Photo Grey Ink Cartridge',
    'Canon PFI-1300CO Chroma Optimizer Ink Cartridge',
    'Canon PFI-1300R Red Ink Cartridge',
    'Canon PFI-1300B Blue Ink Cartridge',
    'Canon PFI-1700C Cyan Ink Cartridge',
    'Canon PFI-1700M Magenta Ink Cartridge',
    'Canon PFI-1700Y Yellow Ink Cartridge',
    'Canon PFI-1700MBK Matte Black Ink Cartridge',
    'And More....'
  ]
},
// Ink Cartridges - imagePROGRAFTMSeries
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFTMSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF TM200', // Update image URL
  printerModel: 'imagePROGRAF TM200',
  cartridge: [
    'Canon PFI-120BK Black Ink Cartridge',
    'Canon PFI-120MBK Matte Black Ink Cartridge',
    'Canon PFI-120C Cyan Ink Cartridge',
    'Canon PFI-120M Magenta Ink Cartridge',
    'Canon PFI-120Y Yellow Ink Cartridge',
    'Canon PFI-320BK Black Ink Cartridge',
    'Canon PFI-320MBK Matte Black Ink Cartridge',
    'Canon PFI-320C Cyan Ink Cartridge',
    'Canon PFI-320M Magenta Ink Cartridge',
    'Canon PFI-320Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFTMSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF TM205', // Update image URL
  printerModel: 'imagePROGRAF TM205',
  cartridge: [
    'Canon PFI-120BK Black Ink Cartridge',
    'Canon PFI-120MBK Matte Black Ink Cartridge',
    'Canon PFI-120C Cyan Ink Cartridge',
    'Canon PFI-120M Magenta Ink Cartridge',
    'Canon PFI-120Y Yellow Ink Cartridge',
    'Canon PFI-320BK Black Ink Cartridge',
    'Canon PFI-320MBK Matte Black Ink Cartridge',
    'Canon PFI-320C Cyan Ink Cartridge',
    'Canon PFI-320M Magenta Ink Cartridge',
    'Canon PFI-320Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFTMSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF TM300', // Update image URL
  printerModel: 'imagePROGRAF TM300',
  cartridge: [
    'Canon PFI-120BK Black Ink Cartridge',
    'Canon PFI-120MBK Matte Black Ink Cartridge',
    'Canon PFI-120C Cyan Ink Cartridge',
    'Canon PFI-120M Magenta Ink Cartridge',
    'Canon PFI-120Y Yellow Ink Cartridge',
    'Canon PFI-320BK Black Ink Cartridge',
    'Canon PFI-320MBK Matte Black Ink Cartridge',
    'Canon PFI-320C Cyan Ink Cartridge',
    'Canon PFI-320M Magenta Ink Cartridge',
    'Canon PFI-320Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFTMSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF TM305', // Update image URL
  printerModel: 'imagePROGRAF TM305',
  cartridge: [
    'Canon PFI-120BK Black Ink Cartridge',
    'Canon PFI-120MBK Matte Black Ink Cartridge',
    'Canon PFI-120C Cyan Ink Cartridge',
    'Canon PFI-120M Magenta Ink Cartridge',
    'Canon PFI-120Y Yellow Ink Cartridge',
    'Canon PFI-320BK Black Ink Cartridge',
    'Canon PFI-320MBK Matte Black Ink Cartridge',
    'Canon PFI-320C Cyan Ink Cartridge',
    'Canon PFI-320M Magenta Ink Cartridge',
    'Canon PFI-320Y Yellow Ink Cartridge'
  ]
},
// Ink Cartridges - imagePROGRAFTXSeries
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFTXSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF TX2000', // Update image URL
  printerModel: 'imagePROGRAF TX2000',
  cartridge: [
    'Canon PFI-110BK Black Ink Cartridge',
    'Canon PFI-110MBK Matte Black Ink Cartridge',
    'Canon PFI-110C Cyan Ink Cartridge',
    'Canon PFI-110M Magenta Ink Cartridge',
    'Canon PFI-110Y Yellow Ink Cartridge',
    'Canon PFI-310BK Black Ink Cartridge',
    'Canon PFI-310MBK Matte Black Ink Cartridge',
    'Canon PFI-310C Cyan Ink Cartridge',
    'Canon PFI-310M Magenta Ink Cartridge',
    'Canon PFI-310Y Yellow Ink Cartridge',
    'Canon PFI-710BK Black Ink Cartridge',
    'Canon PFI-710MBK Matte Black Ink Cartridge',
    'Canon PFI-710C Cyan Ink Cartridge',
    'Canon PFI-710M Magenta Ink Cartridge',
    'Canon PFI-710Y Yellow Ink Cartridge',
    'Canon MC-30 Maintenance Cartridge',
    'Canon PF-06 Ink Printhead'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFTXSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF TX3000', // Update image URL
  printerModel: 'imagePROGRAF TX3000',
  cartridge: [
    'Canon PFI-110BK Black Ink Cartridge',
    'Canon PFI-110MBK Matte Black Ink Cartridge',
    'Canon PFI-110C Cyan Ink Cartridge',
    'Canon PFI-110M Magenta Ink Cartridge',
    'Canon PFI-110Y Yellow Ink Cartridge',
    'Canon PFI-310BK Black Ink Cartridge',
    'Canon PFI-310MBK Matte Black Ink Cartridge',
    'Canon PFI-310C Cyan Ink Cartridge',
    'Canon PFI-310M Magenta Ink Cartridge',
    'Canon PFI-310Y Yellow Ink Cartridge',
    'Canon PFI-710BK Black Ink Cartridge',
    'Canon PFI-710MBK Matte Black Ink Cartridge',
    'Canon PFI-710C Cyan Ink Cartridge',
    'Canon PFI-710M Magenta Ink Cartridge',
    'Canon PFI-710Y Yellow Ink Cartridge',
    'Canon MC-30 Maintenance Cartridge',
    'Canon PF-06 Ink Printhead'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "imagePROGRAFTXSeries",
  populor: false,
  imgSrc: 'Canon imagePROGRAF TX4000', // Update image URL
  printerModel: 'imagePROGRAF TX4000',
  cartridge: [
    'Canon PFI-110BK Black Ink Cartridge',
    'Canon PFI-110MBK Matte Black Ink Cartridge',
    'Canon PFI-110C Cyan Ink Cartridge',
    'Canon PFI-110M Magenta Ink Cartridge',
    'Canon PFI-110Y Yellow Ink Cartridge',
    'Canon PFI-310BK Black Ink Cartridge',
    'Canon PFI-310MBK Matte Black Ink Cartridge',
    'Canon PFI-310C Cyan Ink Cartridge',
    'Canon PFI-310M Magenta Ink Cartridge',
    'Canon PFI-310Y Yellow Ink Cartridge',
    'Canon PFI-710BK Black Ink Cartridge',
    'Canon PFI-710MBK Matte Black Ink Cartridge',
    'Canon PFI-710C Cyan Ink Cartridge',
    'Canon PFI-710M Magenta Ink Cartridge',
    'Canon PFI-710Y Yellow Ink Cartridge',
    'Canon MC-30 Maintenance Cartridge',
    'Canon PF-06 Ink Printhead'
  ]
},
// Ink Cartridges - ipSeries
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: false,
  imgSrc: 'Canon IP-3300 IP3300', // Update image URL
  printerModel: 'IP-3300',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-3500 IP3500', // Update image URL
  printerModel: 'IP-3500',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: false,
  imgSrc: 'Canon IP-3600 IP3600', // Update image URL
  printerModel: 'IP-3600',
  cartridge: [
    'Canon PGI-520BK Black Ink Cartridge',
    'Canon CLI-521BK Photo Black Ink Cartridge',
    'Canon CLI-521C Cyan Ink Cartridge',
    'Canon CLI-521M Magenta Ink Cartridge',
    'Canon CLI-521Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4000 IP4000', // Update image URL
  printerModel: 'IP-4000',
  cartridge: [
    'Canon BCI-3eBK Black Ink Cartridge',
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4000R IP4000R', // Update image URL
  printerModel: 'IP-4000R',
  cartridge: [
    'Canon BCI-3eBK Black Ink Cartridge',
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4200 IP4200', // Update image URL
  printerModel: 'IP-4200',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4300 IP4300', // Update image URL
  printerModel: 'IP-4300',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4500 IP4500', // Update image URL
  printerModel: 'IP-4500',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4600 IP4600', // Update image URL
  printerModel: 'IP-4600',
  cartridge: [
    'Canon PGI-520BK Black Ink Cartridge',
    'Canon CLI-521BK Photo Black Ink Cartridge',
    'Canon CLI-521C Cyan Ink Cartridge',
    'Canon CLI-521M Magenta Ink Cartridge',
    'Canon CLI-521Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4700 IP4700', // Update image URL
  printerModel: 'IP-4700',
  cartridge: [
    'Canon PGI-520BK Black Ink Cartridge',
    'Canon CLI-521BK Photo Black Ink Cartridge',
    'Canon CLI-521C Cyan Ink Cartridge',
    'Canon CLI-521M Magenta Ink Cartridge',
    'Canon CLI-521Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4800 IP4800', // Update image URL
  printerModel: 'IP-4800',
  cartridge: [
    'Canon PGI-525BK Black Ink Cartridge',
    'Canon CLI-526BK Photo Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4850 IP4850', // Update image URL
  printerModel: 'IP-4850',
  cartridge: [
    'Canon PGI-525BK Black Ink Cartridge',
    'Canon CLI-526BK Photo Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-4950 IP4950', // Update image URL
  printerModel: 'IP-4950',
  cartridge: [
    'Canon PGI-525BK Black Ink Cartridge',
    'Canon CLI-526BK Photo Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-5000 IP5000', // Update image URL
  printerModel: 'IP-5000',
  cartridge: [
    'Canon BCI-3eBK Black Ink Cartridge',
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-5200 IP5200', // Update image URL
  printerModel: 'IP-5200',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-5200R IP5200R', // Update image URL
  printerModel: 'IP-5200R',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-5300 IP5300', // Update image URL
  printerModel: 'IP-5300',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6000D IP6000D', // Update image URL
  printerModel: 'IP-6000D',
  cartridge: [
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge',
    'Canon BCI-6PC Photo Cyan Ink Cartridge',
    'Canon BCI-6PM Photo Magenta Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6210D IP6210D', // Update image URL
  printerModel: 'IP-6210D',
  cartridge: [
    'Canon CL-41 Colour Ink Cartridge'
  ]
}, {
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6220D IP6220D', // Update image URL
  printerModel: 'IP-6220D',
  cartridge: [
    'Canon CL-41 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6230D IP6230D', // Update image URL
  printerModel: 'IP-6230D',
  cartridge: [
    'Canon CL-41 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6320D IP6320D', // Update image URL
  printerModel: 'IP-6320D',
  cartridge: [
    'Canon CL-51 Colour Ink Cartridge',
    'Canon CL-52 Photo Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6550 IP6550', // Update image URL
  printerModel: 'IP-6550',
  cartridge: [
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge',
    'Canon BCI-6PC Photo Cyan Ink Cartridge',
    'Canon BCI-6PM Photo Magenta Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6600D IP6600D', // Update image URL
  printerModel: 'IP-6600D',
  cartridge: [
    'Canon PGI-9BK Black Ink Cartridge',
    'Canon CLI-9C Cyan Ink Cartridge',
    'Canon CLI-9M Magenta Ink Cartridge',
    'Canon CLI-9Y Yellow Ink Cartridge',
    'Canon CLI-9PC Photo Cyan Ink Cartridge',
    'Canon CLI-9PM Photo Magenta Ink Cartridge',
    'Canon CLI-9R Red Ink Cartridge',
    'Canon CLI-9G Green Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6700D IP6700D', // Update image URL
  printerModel: 'IP-6700D',
  cartridge: [
    'Canon PGI-9BK Black Ink Cartridge',
    'Canon CLI-9C Cyan Ink Cartridge',
    'Canon CLI-9M Magenta Ink Cartridge',
    'Canon CLI-9Y Yellow Ink Cartridge',
    'Canon CLI-9PC Photo Cyan Ink Cartridge',
    'Canon CLI-9PM Photo Magenta Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7120 IP7120', // Update image URL
  printerModel: 'IP-7120',
  cartridge: [
    'Canon PGI-270BK Black Ink Cartridge',
    'Canon CLI-271BK Black Ink Cartridge',
    'Canon CLI-271C Cyan Ink Cartridge',
    'Canon CLI-271M Magenta Ink Cartridge',
    'Canon CLI-271Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7200 IP7200', // Update image URL
  printerModel: 'IP-7200',
  cartridge: [
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7240 IP7240', // Update image URL
  printerModel: 'IP-7240',
  cartridge: [
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7250 IP7250', // Update image URL
  printerModel: 'IP-7250',
  cartridge: [
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-8500 IP8500', // Update image URL
  printerModel: 'IP-8500',
  cartridge: [
    'Canon BCI-3eBK Black Ink Cartridge',
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge',
    'Canon BCI-6PC Photo Cyan Ink Cartridge',
    'Canon BCI-6PM Photo Magenta Ink Cartridge'
  ]
},
// Ink Cartridges - ixSeries
{
  brand: "Canon",
  type: "ink",
  series: "ixSeries",
  populor: true,
  imgSrc: 'Canon IX-6550 IX6550', // Update image URL
  printerModel: 'IX-6550',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ixSeries",
  populor: true,
  imgSrc: 'Canon IX-6850 IX6850', // Update image URL
  printerModel: 'IX-6850',
  cartridge: [
    'Canon PGI-550PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
// Ink Cartridges - mgSeries
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-2100 MG2100', // Update image URL
  printerModel: 'MG-2100',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-2200 MG2200', // Update image URL
  printerModel: 'MG-2200',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-2550S MG2550S', // Update image URL
  printerModel: 'MG-2550S',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3050 MG3050', // Update image URL
  printerModel: 'MG-3050',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3051 MG3051', // Update image URL
  printerModel: 'MG-3051',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3052 MG3052', // Update image URL
  printerModel: 'MG-3052',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3053 MG3053', // Update image URL
  printerModel: 'MG-3053',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3100 MG3100', // Update image URL
  printerModel: 'MG-3100',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3200 MG3200', // Update image URL
  printerModel: 'MG-3200',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3500 MG3500', // Update image URL
  printerModel: 'MG-3500',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3600 MG3600', // Update image URL
  printerModel: 'MG-3600',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3650 MG3650', // Update image URL
  printerModel: 'MG-3650',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3650S MG3650S', // Update image URL
  printerModel: 'MG-3650S',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3750 MG3750', // Update image URL
  printerModel: 'MG-3750',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-4100 MG4100', // Update image URL
  printerModel: 'MG-4100',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-4200 MG4200', // Update image URL
  printerModel: 'MG-4200',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5100 MG5100', // Update image URL
  printerModel: 'MG-5100',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
  ],
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6550 IP6550', // Update image URL
  printerModel: 'IP-6550',
  cartridge: [
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge',
    'Canon BCI-6PC Photo Cyan Ink Cartridge',
    'Canon BCI-6PM Photo Magenta Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6600D IP6600D', // Update image URL
  printerModel: 'IP-6600D',
  cartridge: [
    'Canon PGI-9BK Black Ink Cartridge',
    'Canon CLI-9C Cyan Ink Cartridge',
    'Canon CLI-9M Magenta Ink Cartridge',
    'Canon CLI-9Y Yellow Ink Cartridge',
    'Canon CLI-9PC Photo Cyan Ink Cartridge',
    'Canon CLI-9PM Photo Magenta Ink Cartridge',
    'Canon CLI-9R Red Ink Cartridge',
    'Canon CLI-9G Green Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6700D IP6700D', // Update image URL
  printerModel: 'IP-6700D',
  cartridge: [
    'Canon PGI-9BK Black Ink Cartridge',
    'Canon CLI-9C Cyan Ink Cartridge',
    'Canon CLI-9M Magenta Ink Cartridge',
    'Canon CLI-9Y Yellow Ink Cartridge',
    'Canon CLI-9PC Photo Cyan Ink Cartridge',
    'Canon CLI-9PM Photo Magenta Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7120 IP7120', // Update image URL
  printerModel: 'IP-7120',
  cartridge: [
    'Canon PGI-270BK Black Ink Cartridge',
    'Canon CLI-271BK Black Ink Cartridge',
    'Canon CLI-271C Cyan Ink Cartridge',
    'Canon CLI-271M Magenta Ink Cartridge',
    'Canon CLI-271Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7200 IP7200', // Update image URL
  printerModel: 'IP-7200',
  cartridge: [
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7240 IP7240', // Update image URL
  printerModel: 'IP-7240',
  cartridge: [
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7250 IP7250', // Update image URL
  printerModel: 'IP-7250',
  cartridge: [
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-8500 IP8500', // Update image URL
  printerModel: 'IP-8500',
  cartridge: [
    'Canon BCI-3eBK Black Ink Cartridge',
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge',
    'Canon BCI-6PC Photo Cyan Ink Cartridge',
    'Canon BCI-6PM Photo Magenta Ink Cartridge'
  ]
},
// Ink Cartridges - ixSeries
{
  brand: "Canon",
  type: "ink",
  series: "ixSeries",
  populor: true,
  imgSrc: 'Canon IX-6550 IX6550', // Update image URL
  printerModel: 'IX-6550',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ixSeries",
  populor: true,
  imgSrc: 'Canon IX-6850 IX6850', // Update image URL
  printerModel: 'IX-6850',
  cartridge: [
    'Canon PGI-550PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
// Ink Cartridges - mgSeries
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-2100 MG2100', // Update image URL
  printerModel: 'MG-2100',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-2200 MG2200', // Update image URL
  printerModel: 'MG-2200',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-2550S MG2550S', // Update image URL
  printerModel: 'MG-2550S',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3050 MG3050', // Update image URL
  printerModel: 'MG-3050',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3051 MG3051', // Update image URL
  printerModel: 'MG-3051',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3052 MG3052', // Update image URL
  printerModel: 'MG-3052',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3053 MG3053', // Update image URL
  printerModel: 'MG-3053',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3100 MG3100', // Update image URL
  printerModel: 'MG-3100',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3200 MG3200', // Update image URL
  printerModel: 'MG-3200',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3500 MG3500', // Update image URL
  printerModel: 'MG-3500',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3600 MG3600', // Update image URL
  printerModel: 'MG-3600',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3650 MG3650', // Update image URL
  printerModel: 'MG-3650',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3650S MG3650S', // Update image URL
  printerModel: 'MG-3650S',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-3750 MG3750', // Update image URL
  printerModel: 'MG-3750',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-4100 MG4100', // Update image URL
  printerModel: 'MG-4100',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-4200 MG4200', // Update image URL
  printerModel: 'MG-4200',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5100 MG5100', // Update image URL
  printerModel: 'MG-5100',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5150 MG5150', // Update image URL
  printerModel: 'MG-5150',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5200 MG5200', // Update image URL
  printerModel: 'MG-5200',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5250 MG5250', // Update image URL
  printerModel: 'MG-5250',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5300 MG5300', // Update image URL
  printerModel: 'MG-5300',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5350 MG5350', // Update image URL
  printerModel: 'MG-5350',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5450 MG5450', // Update image URL
  printerModel: 'MG-5450',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5550 MG5550', // Update image URL
  printerModel: 'MG-5550',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5650 MG5650', // Update image URL
  printerModel: 'MG-5650',
  cartridge: [
    'Canon PGI-560PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-561BK XL Black Ink Cartridge High Yield',
    'Canon CLI-561C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-561M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-561Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-560PGBK Pigment Black Ink Cartridge',
    'Canon CLI-561BK Black Ink Cartridge',
    'Canon CLI-561C Cyan Ink Cartridge',
    'Canon CLI-561M Magenta Ink Cartridge',
    'Canon CLI-561Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5750 MG5750', // Update image URL
  printerModel: 'MG-5750',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6100 MG6100', // Update image URL
  printerModel: 'MG-6100',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6150 MG6150', // Update image URL
  printerModel: 'MG-6150',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6200 MG6200', // Update image URL
  printerModel: 'MG-6200',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6250 MG6250', // Update image URL
  printerModel: 'MG-6250',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6350 MG6350', // Update image URL
  printerModel: 'MG-6350',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6450 MG6450', // Update image URL
  printerModel: 'MG-6450',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6600 MG6600', // Update image URL
  printerModel: 'MG-6600',
  cartridge: [
    'Canon PGI-560PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-561BK XL Black Ink Cartridge High Yield',
    'Canon CLI-561C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-561M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-561Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-561GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-560PGBK Pigment Black Ink Cartridge',
    'Canon CLI-561BK Black Ink Cartridge',
    'Canon CLI-561C Cyan Ink Cartridge',
    'Canon CLI-561M Magenta Ink Cartridge',
    'Canon CLI-561Y Yellow Ink Cartridge',
    'Canon CLI-561GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6650 MG6650', // Update image URL
  printerModel: 'MG-6650',
  cartridge: [
    'Canon PGI-560PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-561BK XL Black Ink Cartridge High Yield',
    'Canon CLI-561C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-561M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-561Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-561GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-560PGBK Pigment Black Ink Cartridge',
    'Canon CLI-561BK Black Ink Cartridge',
    'Canon CLI-561C Cyan Ink Cartridge',
    'Canon CLI-561M Magenta Ink Cartridge',
    'Canon CLI-561Y Yellow Ink Cartridge',
    'Canon CLI-561GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6700 MG6700', // Update image URL
  printerModel: 'MG-6700',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6750 MG6750', // Update image URL
  printerModel: 'MG-6750',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6850 MG6850', // Update image URL
  printerModel: 'MG-6850',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6950 MG6950', // Update image URL
  printerModel: 'MG-6950',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-7100 MG7100', // Update image URL
  printerModel: 'MG-7100',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-7150 MG7150', // Update image URL
  printerModel: 'MG-7150',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-7550 MG7550', // Update image URL
  printerModel: 'MG-7550',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-7700 MG7700', // Update image URL
  printerModel: 'MG-7700',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-7750 MG7750', // Update image URL
  printerModel: 'MG-7750',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-7751 MG7751', // Update image URL
  printerModel: 'MG-7751',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-7752 MG7752', // Update image URL
  printerModel: 'MG-7752',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-8100 MG8100', // Update image URL
  printerModel: 'MG-8100',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-8120 MG8120', // Update image URL
  printerModel: 'MG-8120',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-8150 MG8150', // Update image URL
  printerModel: 'MG-8150',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-8170 MG8170', // Update image URL
  printerModel: 'MG-8170',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-526GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-8200 MG8200', // Update image URL
  printerModel: 'MG-8200',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-8220 MG8220', // Update image URL
  printerModel: 'MG-8220',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-551GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge',
    'Canon CLI-551GY Grey Ink Cartridge'
  ]
},
// Ink Cartridges - mxSeries
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-375 MX375', // Update image URL
  printerModel: 'MX-375',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-395 MX395', // Update image URL
  printerModel: 'MX-395',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-435 MX435', // Update image URL
  printerModel: 'MX-435',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-455 MX455', // Update image URL
  printerModel: 'MX-455',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-475 MX475', // Update image URL
  printerModel: 'MX-475',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-495 MX495', // Update image URL
  printerModel: 'MX-495',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-515 MX515', // Update image URL
  printerModel: 'MX-515',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-525 MX525', // Update image URL
  printerModel: 'MX-525',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-535 MX535', // Update image URL
  printerModel: 'MX-535',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-715 MX715', // Update image URL
  printerModel: 'MX-715',
  cartridge: [
    'Canon PGI-525PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-526BK XL Black Ink Cartridge High Yield',
    'Canon CLI-526C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-526M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-526Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-525PGBK Black Ink Cartridge',
    'Canon CLI-526BK Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-725 MX725', // Update image URL
  printerModel: 'MX-725',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mxSeries",
  populor: true,
  imgSrc: 'Canon MX-925 MX925', // Update image URL
  printerModel: 'MX-925',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
// Ink Cartridges - pixmaGSeries
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G1010', // Update image URL
  printerModel: 'PIXMA G1010',
  cartridge: [
    'Canon GI-190 Black Ink Bottle',
    'Canon GI-190 Cyan Ink Bottle',
    'Canon GI-190 Magenta Ink Bottle',
    'Canon GI-190 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G1410', // Update image URL
  printerModel: 'PIXMA G1410',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G1411', //Update image URL
  printerModel: 'PIXMA G1411',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G2010', // Update image URL
  printerModel: 'PIXMA G2010',
  cartridge: [
    'Canon GI-190 Black Ink Bottle',
    'Canon GI-190 Cyan Ink Bottle',
    'Canon GI-190 Magenta Ink Bottle',
    'Canon GI-190 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G2410', // Update image URL
  printerModel: 'PIXMA G2410',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G2411', // Update image URL
  printerModel: 'PIXMA G2411',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G3000', // Update image URL
  printerModel: 'PIXMA G3000',
  cartridge: [
    'Canon GI-190 Black Ink Bottle',
    'Canon GI-190 Cyan Ink Bottle',
    'Canon GI-190 Magenta Ink Bottle',
    'Canon GI-190 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G3410', // Update image URL
  printerModel: 'PIXMA G3410',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G3411', // Update image URL
  printerModel: 'PIXMA G3411',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G3420', // Update image URL
  printerModel: 'PIXMA G3420',
  cartridge: [
    'Canon GI-41 Black Ink Bottle',
    'Canon GI-41 Cyan Ink Bottle',
    'Canon GI-41 Magenta Ink Bottle',
    'Canon GI-41 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G3460', // Update image URL
  printerModel: 'PIXMA G3460',
  cartridge: [
    'Canon GI-41 Black Ink Bottle',
    'Canon GI-41 Cyan Ink Bottle',
    'Canon GI-41 Magenta Ink Bottle',
    'Canon GI-41 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G4010', // Update image URL
  printerModel: 'PIXMA G4010',
  cartridge: [
    'Canon GI-190 Black Ink Bottle',
    'Canon GI-190 Cyan Ink Bottle',
    'Canon GI-190 Magenta Ink Bottle',
    'Canon GI-190 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G4410', // Update image URL
  printerModel: 'PIXMA G4410',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA G4411', // Update image URL
  printerModel: 'PIXMA G4411',
  cartridge: [
    'Canon GI-490 Black Ink Bottle',
    'Canon GI-490 Cyan Ink Bottle',
    'Canon GI-490 Magenta Ink Bottle',
    'Canon GI-490 Yellow Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA GM2040', // Update image URL
  printerModel: 'PIXMA GM2040',
  cartridge: [
    'Canon GI-40 Black Ink Bottle'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA GM4040', // Update image URL
  printerModel: 'PIXMA GM4040',
  cartridge: [
    'Canon GI-40 Black Ink Bottle'
  ]
},
// Ink Cartridges - pixmaIPSeries
{
  brand: "Canon",
  type: "ink",
  series: "pixmaIPSeries",
  populor: true,
  imgSrc: 'Canon PIXMA iP100', // Update image URL
  printerModel: 'PIXMA iP100',
  cartridge: [
    'Canon BCI-15 Black Ink Cartridge',
    'Canon BCI-16 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaIPSeries",
  populor: true,
  imgSrc: 'Canon PIXMA iP110', // Update image URL
  printerModel: 'PIXMA iP110',
  cartridge: [
    'Canon PGI-35 Black Ink Cartridge',
    'Canon CLI-36 Colour Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaIPSeries",
  populor: true,
  imgSrc: 'Canon PIXMA iP2700', // Update image URL
  printerModel: 'PIXMA iP2700',
  cartridge: [
    'Canon PG-510 Black Ink Cartridge',
    'Canon CL-511 Colour Ink Cartridge',
    'Canon PG-512 Black Ink Cartridge High Yield',
    'Canon CL-513 Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaIPSeries",
  populor: true,
  imgSrc: 'Canon PIXMA iP2850', // Update image URL
  printerModel: 'PIXMA iP2850',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
// Ink Cartridges - pixmaIXSeries
{
  brand: "Canon",
  type: "ink",
  series: "pixmaIXSeries",
  populor: true,
  imgSrc: 'Canon PIXMA iX6850', // Update image URL
  printerModel: 'PIXMA iX6850',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
// Ink Cartridges - pixmaMGSeries
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MG2550S', // Update image URL
  printerModel: 'PIXMA MG2550S',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MG3650S', // Update image URL
  printerModel: 'PIXMA MG3650S',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MG5750', // Update image URL
  printerModel: 'PIXMA MG5750',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MG6850', // Update image URL
  printerModel: 'PIXMA MG6850',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMGSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MG7750', // Update image URL
  printerModel: 'PIXMA MG7750',
  cartridge: [
    'Canon PGI-570PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield',
    'Canon CLI-571GY XL Grey Ink Cartridge High Yield',
    'Canon PGI-570PGBK Pigment Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon CLI-571GY Grey Ink Cartridge'
  ]
},
// Ink Cartridges - pixmaMXSeries
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMXSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MX495', // Update image URL
  printerModel: 'PIXMA MX495',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMXSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MX535', // Update image URL
  printerModel: 'PIXMA MX535',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMXSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MX725', // Update image URL
  printerModel: 'PIXMA MX725',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaMXSeries",
  populor: true,
  imgSrc: 'Canon PIXMA MX925', // Update image URL
  printerModel: 'PIXMA MX925',
  cartridge: [
    'Canon PGI-550PGBK XL Pigment Black Ink Cartridge High Yield',
    'Canon CLI-551BK XL Black Ink Cartridge High Yield',
    'Canon CLI-551C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-551M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-551Y XL Yellow Ink Cartridge High Yield',
    'Canon PGI-550PGBK Pigment Black Ink Cartridge',
    'Canon CLI-551BK Black Ink Cartridge',
    'Canon CLI-551C Cyan Ink Cartridge',
    'Canon CLI-551M Magenta Ink Cartridge',
    'Canon CLI-551Y Yellow Ink Cartridge'
  ]
},
// Ink Cartridges - pixmaTSSeries
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS305', // Update image URL
  printerModel: 'PIXMA TS305',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3150', // Update image URL
  printerModel: 'PIXMA TS3150',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3151', // Update image URL
  printerModel: 'PIXMA TS3151',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3350', // Update image URL
  printerModel: 'PIXMA TS3350',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3351', // Update image URL
  printerModel: 'PIXMA TS3351',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3352', // Update image URL
  printerModel: 'PIXMA TS3352',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3450', // Update image URL
  printerModel: 'PIXMA TS3450',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3451', // Update image URL
  printerModel: 'PIXMA TS3451',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS3550i', // Update image URL
  printerModel: 'PIXMA TS3550i',
  cartridge: [
    'Canon PG-545 Black Ink Cartridge',
    'Canon CL-546 Colour Ink Cartridge',
    'Canon PG-545XL Black Ink Cartridge High Yield',
    'Canon CL-546XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5050', // Update image URL
  printerModel: 'PIXMA TS5050',
  cartridge: [
    'Canon PGI-570PGBK Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon PGI-570PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5051', // Update image URL
  printerModel: 'PIXMA TS5051',
  cartridge: [
    'Canon PGI-570PGBK Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon PGI-570PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5055', // Update image URL
  printerModel: 'PIXMA TS5055',
  cartridge: [
    'Canon PGI-570PGBK Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon PGI-570PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5150', // Update image URL
  printerModel: 'PIXMA TS5150',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5151', // Update image URL
  printerModel: 'PIXMA TS5151',
  cartridge: [
    'Canon PG-540 Black Ink Cartridge',
    'Canon CL-541 Colour Ink Cartridge',
    'Canon PG-540XL Black Ink Cartridge High Yield',
    'Canon CL-541XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5350', // Update image URL
  printerModel: 'PIXMA TS5350',
  cartridge: [
    'Canon PG-560 Black Ink Cartridge',
    'Canon CL-561 Colour Ink Cartridge',
    'Canon PG-560XL Black Ink Cartridge High Yield',
    'Canon CL-561XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5351', // Update image URL
  printerModel: 'PIXMA TS5351',
  cartridge: [
    'Canon PG-560 Black Ink Cartridge',
    'Canon CL-561 Colour Ink Cartridge',
    'Canon PG-560XL Black Ink Cartridge High Yield',
    'Canon CL-561XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS5352', // Update image URL
  printerModel: 'PIXMA TS5352',
  cartridge: [
    'Canon PG-560 Black Ink Cartridge',
    'Canon CL-561 Colour Ink Cartridge',
    'Canon PG-560XL Black Ink Cartridge High Yield',
    'Canon CL-561XL Colour Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS6050', // Update image URL
  printerModel: 'PIXMA TS6050',
  cartridge: [
    'Canon PGI-570PGBK Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon PGI-570PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS6051', // Update image URL
  printerModel: 'PIXMA TS6051',
  cartridge: [
    'Canon PGI-570PGBK Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon PGI-570PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "pixmaTSSeries",
  populor: true,
  imgSrc: 'Canon PIXMA TS6052', // Update image URL
  printerModel: 'PIXMA TS6052',
  cartridge: [
    'Canon PGI-570PGBK Black Ink Cartridge',
    'Canon CLI-571BK Black Ink Cartridge',
    'Canon CLI-571C Cyan Ink Cartridge',
    'Canon CLI-571M Magenta Ink Cartridge',
    'Canon CLI-571Y Yellow Ink Cartridge',
    'Canon PGI-570PGBK XL Black Ink Cartridge High Yield',
    'Canon CLI-571BK XL Black Ink Cartridge High Yield',
    'Canon CLI-571C XL Cyan Ink Cartridge High Yield',
    'Canon CLI-571M XL Magenta Ink Cartridge High Yield',
    'Canon CLI-571Y XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6600D IP6600D', // Update image URL
  printerModel: 'IP-6600D',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge',
    'Canon CLI-8PC Photo Cyan Ink Cartridge',
    'Canon CLI-8PM Photo Magenta Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-6700D IP6700D', // Update image URL
  printerModel: 'IP-6700D',
  cartridge: [
    'Canon PGI-5BK Black Ink Cartridge',
    'Canon CLI-8C Cyan Ink Cartridge',
    'Canon CLI-8M Magenta Ink Cartridge',
    'Canon CLI-8Y Yellow Ink Cartridge',
    'Canon CLI-8PC Photo Cyan Ink Cartridge',
    'Canon CLI-8PM Photo Magenta Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-7260 IP7260', // Update image URL
  printerModel: 'IP-7260',
  cartridge: [
    'Canon PGI-650XLBK Black Ink Cartridge',
    'Canon CLI-651XLBK Photo Black Ink Cartridge',
    'Canon CLI-651XLC Cyan Ink Cartridge',
    'Canon CLI-651XLM Magenta Ink Cartridge',
    'Canon CLI-651XLY Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-8500 IP8500', // Update image URL
  printerModel: 'IP-8500',
  cartridge: [
    'Canon BCI-6BK Black Ink Cartridge',
    'Canon BCI-6C Cyan Ink Cartridge',
    'Canon BCI-6M Magenta Ink Cartridge',
    'Canon BCI-6Y Yellow Ink Cartridge',
    'Canon BCI-6PC Photo Cyan Ink Cartridge',
    'Canon BCI-6PM Photo Magenta Ink Cartridge',
    'Canon BCI-6R Red Ink Cartridge',
    'Canon BCI-6G Green Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-8760 IP8760', // Update image URL
  printerModel: 'IP-8760',
  cartridge: [
    'Canon PGI-650XLBK Black Ink Cartridge',
    'Canon CLI-651XLBK Photo Black Ink Cartridge',
    'Canon CLI-651XLC Cyan Ink Cartridge',
    'Canon CLI-651XLM Magenta Ink Cartridge',
    'Canon CLI-651XLY Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-90 IP90', // Update image URL
  printerModel: 'IP-90',
  cartridge: [
    'Canon BCI-15BK Black Ink Cartridge',
    'Canon BCI-16C Colour Ink Cartridge Twin Pack'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipSeries",
  populor: true,
  imgSrc: 'Canon IP-90V IP90V', // Update image URL
  printerModel: 'IP-90V',
  cartridge: [
    'Canon BCI-15BK Black Ink Cartridge',
    'Canon BCI-16C Colour Ink Cartridge Twin Pack'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipfSeries",
  populor: false,
  imgSrc: 'Canon IPF-510 IPF510', // Update image URL
  printerModel: 'IPF-510',
  cartridge: [
    'Canon PFI-102BK Black Ink Cartridge',
    'Canon PFI-102MBK Matte Black Ink Cartridge',
    'Canon PFI-102C Cyan Ink Cartridge',
    'Canon PFI-102M Magenta Ink Cartridge',
    'Canon PFI-102Y Yellow Ink Cartridge',
    'Canon MC-05 Maintenance Cartridge',
    'Canon PF-03 Ink Printhead'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "ipfSeries",
  populor: false,
  imgSrc: 'Canon IPF-610 IPF610', // Update image URL
  printerModel: 'IPF-610',
  cartridge: [
    'Canon PFI-102BK Black Ink Cartridge',
    'Canon PFI-102MBK Matte Black Ink Cartridge',
    'Canon PFI-102C Cyan Ink Cartridge',
    'Canon PFI-102M Magenta Ink Cartridge',
    'Canon PFI-102Y Yellow Ink Cartridge',
    'Canon MC-05 Maintenance Cartridge',
    'Canon PF-03 Ink Printhead'
  ]
},

{
  brand: "Canon",
  type: "ink",
  series: "mbSeries",
  populor: false,
  imgSrc: 'Canon MB-5060 MB5060', // Update image URL
  printerModel: 'MB-5060',
  cartridge: [
    'Canon PGI-2600XLBK Black Ink Cartridge High Yield',
    'Canon PGI-2600XLC Cyan Ink Cartridge High Yield',
    'Canon PGI-2600XLM Magenta Ink Cartridge High Yield',
    'Canon PGI-2600XLY Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mbSeries",
  populor: true,
  imgSrc: 'Canon MB-5160 MB5160', // Update image URL
  printerModel: 'MB-5160',
  cartridge: [
    'Canon PGI-2600XLBK Black Ink Cartridge High Yield',
    'Canon PGI-2600XLC Cyan Ink Cartridge High Yield',
    'Canon PGI-2600XLM Magenta Ink Cartridge High Yield',
    'Canon PGI-2600XLY Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mbSeries",
  populor: false,
  imgSrc: 'Canon MB-5360 MB5360', // Update image URL
  printerModel: 'MB-5360',
  cartridge: [
    'Canon PGI-2600XLBK Black Ink Cartridge High Yield',
    'Canon PGI-2600XLC Cyan Ink Cartridge High Yield',
    'Canon PGI-2600XLM Magenta Ink Cartridge High Yield',
    'Canon PGI-2600XLY Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mbSeries",
  populor: true,
  imgSrc: 'Canon MB-5460 MB5460', // Update image URL
  printerModel: 'MB-5460',
  cartridge: [
    'Canon PGI-2600XLBK Black Ink Cartridge High Yield',
    'Canon PGI-2600XLC Cyan Ink Cartridge High Yield',
    'Canon PGI-2600XLM Magenta Ink Cartridge High Yield',
    'Canon PGI-2600XLY Yellow Ink Cartridge High Yield'
  ]
}
,

{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: false,
  imgSrc: 'Canon MG-5765 MG5765', // Update image URL
  printerModel: 'MG-5765',
  cartridge: [
    'Canon PGI-670XLBK Black Ink Cartridge',
    'Canon CLI-671XLBK Photo Black Ink Cartridge',
    'Canon CLI-671XLC Cyan Ink Cartridge',
    'Canon CLI-671XLM Magenta Ink Cartridge',
    'Canon CLI-671XLY Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-5766 MG5766', // Update image URL
  printerModel: 'MG-5766',
  cartridge: [
    'Canon PGI-670XLBK Black Ink Cartridge',
    'Canon CLI-671XLBK Photo Black Ink Cartridge',
    'Canon CLI-671XLC Cyan Ink Cartridge',
    'Canon CLI-671XLM Magenta Ink Cartridge',
    'Canon CLI-671XLY Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: false,
  imgSrc: 'Canon MG-6150 MG6150', // Update image URL
  printerModel: 'MG-6150',
  cartridge: [
    'Canon PGI-525BK Black Ink Cartridge',
    'Canon CLI-526BK Photo Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6250 MG6250', // Update image URL
  printerModel: 'MG-6250',
  cartridge: [
    'Canon PGI-525BK Black Ink Cartridge',
    'Canon CLI-526BK Photo Black Ink Cartridge',
    'Canon CLI-526C Cyan Ink Cartridge',
    'Canon CLI-526M Magenta Ink Cartridge',
    'Canon CLI-526Y Yellow Ink Cartridge',
    'Canon CLI-526GY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6360 MG6360', // Update image URL
  printerModel: 'MG-6360',
  cartridge: [
    'Canon PGI-650XLBK Black Ink Cartridge',
    'Canon CLI-651XLBK Photo Black Ink Cartridge',
    'Canon CLI-651XLC Cyan Ink Cartridge',
    'Canon CLI-651XLM Magenta Ink Cartridge',
    'Canon CLI-651XLY Yellow Ink Cartridge',
    'Canon CLI-651XLGY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6460 MG6460', // Update image URL
  printerModel: 'MG-6460',
  cartridge: [
    'Canon PGI-650XLBK Black Ink Cartridge',
    'Canon CLI-651XLBK Photo Black Ink Cartridge',
    'Canon CLI-651XLC Cyan Ink Cartridge',
    'Canon CLI-651XLM Magenta Ink Cartridge',
    'Canon CLI-651XLY Yellow Ink Cartridge',
    'Canon CLI-651XLGY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6660 MG6660', // Update image URL
  printerModel: 'MG-6660',
  cartridge: [
    'Canon PGI-650XLBK Black Ink Cartridge',
    'Canon CLI-651XLBK Photo Black Ink Cartridge',
    'Canon CLI-651XLC Cyan Ink Cartridge',
    'Canon CLI-651XLM Magenta Ink Cartridge',
    'Canon CLI-651XLY Yellow Ink Cartridge',
    'Canon CLI-651XLGY Grey Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6860 MG6860', // Update image URL
  printerModel: 'MG-6860',
  cartridge: [
    'Canon PGI-670XLBK Black Ink Cartridge',
    'Canon CLI-671XLBK Photo Black Ink Cartridge',
    'Canon CLI-671XLC Cyan Ink Cartridge',
    'Canon CLI-671XLM Magenta Ink Cartridge',
    'Canon CLI-671XLY Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6865 MG6865', // Update image URL
  printerModel: 'MG-6865',
  cartridge: [
    'Canon PGI-670XLBK Black Ink Cartridge',
    'Canon CLI-671XLBK Photo Black Ink Cartridge',
    'Canon CLI-671XLC Cyan Ink Cartridge',
    'Canon CLI-671XLM Magenta Ink Cartridge',
    'Canon CLI-671XLY Yellow Ink Cartridge'
  ]
},
{
  brand: "Canon",
  type: "ink",
  series: "mgSeries",
  populor: true,
  imgSrc: 'Canon MG-6866 MG6866', // Update image URL
  printerModel: 'MG-6866',
  cartridge: [
    'Canon PGI-670XLBK Black Ink Cartridge',
    'Canon CLI-671XLBK Photo Black Ink Cartridge',
    'Canon CLI-671XLC Cyan Ink Cartridge',
    'Canon CLI-671XLM Magenta Ink Cartridge',
    'Canon CLI-671XLY Yellow Ink Cartridge'
  ]},
  {
    brand: "Canon",
    type: "ink",
    series: "mgSeries",
    populor: true,
    imgSrc: 'Canon MG-7160 MG7160', // Update image URL
    printerModel: 'MG-7160',
    cartridge: [
      'Canon PGI-650XLBK Black Ink Cartridge',
      'Canon CLI-651XLBK Photo Black Ink Cartridge',
      'Canon CLI-651XLC Cyan Ink Cartridge',
      'Canon CLI-651XLM Magenta Ink Cartridge',
      'Canon CLI-651XLY Yellow Ink Cartridge',
      'Canon CLI-651XLGY Grey Ink Cartridge'
    ]
  },
  {
    brand: "Canon",
    type: "ink",
    series: "mgSeries",
    populor: true,
    imgSrc: 'Canon MG-7560 MG7560', // Update image URL
    printerModel: 'MG-7560',
    cartridge: [
      'Canon PGI-650XLBK Black Ink Cartridge',
      'Canon CLI-651XLBK Photo Black Ink Cartridge',
      'Canon CLI-651XLC Cyan Ink Cartridge',
      'Canon CLI-651XLM Magenta Ink Cartridge',
      'Canon CLI-651XLY Yellow Ink Cartridge',
      'Canon CLI-651XLGY Grey Ink Cartridge'
    ]
  },
  {
    brand: "Canon",
    type: "ink",
    series: "mgSeries",
    populor: true,
    imgSrc: 'Canon MG-7760 MG7760', // Update image URL
    printerModel: 'MG-7760',
    cartridge: [
      'Canon PGI-670XLBK Black Ink Cartridge',
      'Canon CLI-671XLBK Photo Black Ink Cartridge',
      'Canon CLI-671XLC Cyan Ink Cartridge',
      'Canon CLI-671XLM Magenta Ink Cartridge',
      'Canon CLI-671XLY Yellow Ink Cartridge'
    ]
  },
  {
    brand: "Canon",
    type: "ink",
    series: "mgSeries",
    populor: true,
    imgSrc: 'Canon MG-7765 MG7765', // Update image URL
    printerModel: 'MG-7765',
    cartridge: [
      'Canon PGI-670XLBK Black Ink Cartridge',
      'Canon CLI-671XLBK Photo Black Ink Cartridge',
      'Canon CLI-671XLC Cyan Ink Cartridge',
      'Canon CLI-671XLM Magenta Ink Cartridge',
      'Canon CLI-671XLY Yellow Ink Cartridge'
    ]
  },
  {
    brand: "Canon",
    type: "ink",
    series: "mgSeries",
    populor: true,
    imgSrc: 'Canon MG-7766 MG7766', // Update image URL
    printerModel: 'MG-7766',
    cartridge: [
      'Canon PGI-670XLBK Black Ink Cartridge',
      'Canon CLI-671XLBK Photo Black Ink Cartridge',
      'Canon CLI-671XLC Cyan Ink Cartridge',
      'Canon CLI-671XLM Magenta Ink Cartridge',
      'Canon CLI-671XLY Yellow Ink Cartridge'
    ]
  },
  {
    brand: "Canon",
    type: "ink",
    series: "mgSeries",
    populor: true,
    imgSrc: 'Canon MG-8150 MG8150', // Update image URL
    printerModel: 'MG-8150',
    cartridge: [
      'Canon PGI-525BK Black Ink Cartridge',
      'Canon CLI-526BK Photo Black Ink Cartridge',
      'Canon CLI-526C Cyan Ink Cartridge',
      'Canon CLI-526M Magenta Ink Cartridge',
      'Canon CLI-526Y Yellow Ink Cartridge',
      'Canon CLI-526GY Grey Ink Cartridge'
    ]
  },
  {
    brand: "Canon",
    type: "ink",
    series: "mgSeries",
    populor: true,
    imgSrc: 'Canon MG-8250 MG8250', // Update image URL
    printerModel: 'MG-8250',
    cartridge: [
      'Canon PGI-525BK Black Ink Cartridge',
      'Canon CLI-526BK Photo Black Ink Cartridge',
      'Canon CLI-526C Cyan Ink Cartridge',
      'Canon CLI-526M Magenta Ink Cartridge',
      'Canon CLI-526Y Yellow Ink Cartridge',
      'Canon CLI-526GY Grey Ink Cartridge'
    ]
  },
  
    {
      brand: "Canon",
      type: "ink",
      series: "trSeries",
      populor: false,
      imgSrc: 'Canon TR-4560 TR4560',
      printerModel: 'TR-4560',
      cartridge: [
        'Canon PG-645XL Black Ink Cartridge High Yield',
        'Canon CL-646XL Colour Ink Cartridge High Yield',
        'Canon PG-645 Black Ink Cartridge Standard Yield ',
        'Canon CL-646 Colour Ink Cartridge Standard Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "trSeries",
      populor: true,
      imgSrc: 'Canon TR-7560 TR7560',
      printerModel: 'TR-7560',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "trSeries",
      populor: false,
      imgSrc: 'Canon TTR-8560 TR8560S3166',
      printerModel: 'TR-8560',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: false,
      imgSrc: 'Canon TS-3160 TS3160',
      printerModel: 'TS-3160',
      cartridge: [
        'Canon PG-645XL Black Ink Cartridge High Yield',
        'Canon CL-646XL Colour Ink Cartridge High Yield',
        'Canon PG-645 Black Ink Cartridge Standard Yield ',
        'Canon CL-646 Colour Ink Cartridge Standard Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-3165 TS3165',
      printerModel: 'TS-3165',
      cartridge: [
        'Canon PG-645XL Black Ink Cartridge High Yield',
        'Canon CL-646XL Colour Ink Cartridge High Yield',
        'Canon PG-645 Black Ink Cartridge Standard Yield ',
        'Canon CL-646 Colour Ink Cartridge Standard Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-3166 TS3166',
      printerModel: 'TS-3166',
      cartridge: [
        'Canon PG-645XL Black Ink Cartridge High Yield',
        'Canon CL-646XL Colour Ink Cartridge High Yield',
        'Canon PG-645 Black Ink Cartridge Standard Yield ',
        'Canon CL-646 Colour Ink Cartridge Standard Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-5060 TS5060',
      printerModel: 'TS-5060',
      cartridge: [
        'Canon PGI-670XLBK Black Ink Cartridge ',
        'Canon PGI-670XLBK Black Ink Cartridge',
        'Canon CLI-671XLBK Photo Black Ink Cartridge ',
        'Canon CLI-671XLC Cyan Ink Cartridge ',
        'Canon CLI-671XLM Magenta Ink Cartridge',
        'Canon CLI-671XLY Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-5160 TS5160',
      printerModel: 'TS-5160',
      cartridge: [
        'Canon PG-640XL Black Ink Cartridge'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-6060 TS6060',
      printerModel: 'TS-6060',
      cartridge: [
        'Canon PGI-670XLBK Black Ink Cartridge ',
        'Canon PGI-670XLBK Black Ink Cartridge',
        'Canon CLI-671XLBK Photo Black Ink Cartridge ',
        'Canon CLI-671XLC Cyan Ink Cartridge ',
        'Canon CLI-671XLM Magenta Ink Cartridge',
        'Canon CLI-671XLY Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-6160 TS6160',
      printerModel: 'TS-6160',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-6260 TS6260',
      printerModel: 'TS-6260',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-706 TS706',
      printerModel: 'TS-706',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-8060 TS8060',
      printerModel: 'TS-8060',
      cartridge: [
        'Canon PGI-670XLBK Black Ink Cartridge ',
        'Canon PGI-670XLBK Black Ink Cartridge',
        'Canon CLI-671XLBK Photo Black Ink Cartridge ',
        'Canon CLI-671XLC Cyan Ink Cartridge ',
        'Canon CLI-671XLM Magenta Ink Cartridge',
        'Canon CLI-671XLY Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-8160 TS8160',
      printerModel: 'TS-8160',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-8260 TS8260',
      printerModel: 'TS-8260',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-9060 TS9060',
      printerModel: 'TS-9060',
      cartridge: [
        'Canon PGI-670XLBK Black Ink Cartridge ',
        'Canon PGI-670XLBK Black Ink Cartridge',
        'Canon CLI-671XLBK Photo Black Ink Cartridge ',
        'Canon CLI-671XLC Cyan Ink Cartridge ',
        'Canon CLI-671XLM Magenta Ink Cartridge',
        'Canon CLI-671XLY Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-9160 TS9160',
      printerModel: 'TS-9160',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-9560 TS9560',
      printerModel: 'TS-9560',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "tsSeries",
      populor: true,
      imgSrc: 'Canon TS-9565 TS9565',
      printerModel: 'TS-9565',
      cartridge: [
        'Canon PGI-680XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLBK Black Ink Cartridge Extra High Yield ',
        'Canon CLI-681XXLC Cyan Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLM Magenta Ink Cartridge Extra High Yield',
        'Canon CLI-681XXLY Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "wSeries",
      populor: false,
      imgSrc: 'Canon W-6200 W6200',
      printerModel: 'W-6200',
      cartridge: [
        'Canon BCI-1431BK Black Ink Cartridge ',
        'Canon BCI-1431C Cyan Ink Cartridge ',
        'Canon BCI-1431M Magenta Ink Cartridge',
        'Canon BCI-1431PC Photo Cyan Ink Cartridge ',
        'Canon BCI-1431PM Photo Magenta Ink Cartridge ',
        'Canon BCI-1431Y Yellow Ink Cartridge '
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "wSeries",
      populor: true,
      imgSrc: 'Canon W-6400 W6400',
      printerModel: 'W-6400',
      cartridge: [
        'Canon BCI-1431BK Black Ink Cartridge ',
        'Canon BCI-1431C Cyan Ink Cartridge ',
        'Canon BCI-1431M Magenta Ink Cartridge',
        'Canon BCI-1431PC Photo Cyan Ink Cartridge ',
        'Canon BCI-1431PM Photo Magenta Ink Cartridge ',
        'Canon BCI-1431Y Yellow Ink Cartridge '
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "wSeries",
      populor: true,
      imgSrc: 'Canon W-8200 W8200',
      printerModel: 'W-8200',
      cartridge: [
        'Canon BCI-1421BK Black Ink Cartridge ',
        'Canon BCI-1421C Cyan Ink Cartridge ',
        'Canon BCI-1421M Magenta Ink Cartridge ',
        'Canon BCI-1421PC Photo Cyan Ink Cartridge ',
        'Canon BCI-1421PM Photo Magenta Ink Cartridge ',
        'Canon BCI-1421Y Yellow Ink Cartridge '
      ]
    },
    {
      brand: "Canon",
      type: "ink",
      series: "wSeries",
      populor: true,
      imgSrc: 'Canon W-8400 W8400',
      printerModel: 'W-8400',
      cartridge: [
        'Canon BCI-1421BK Black Ink Cartridge ',
        'Canon BCI-1421C Cyan Ink Cartridge ',
        'Canon BCI-1421M Magenta Ink Cartridge ',
        'Canon BCI-1421PC Photo Cyan Ink Cartridge ',
        'Canon BCI-1421PM Photo Magenta Ink Cartridge ',
        'Canon BCI-1421Y Yellow Ink Cartridge '
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: true,
      imgSrc: 'Dell 3115cn',
      printerModel: '3115cn',
      cartridge: [
        'Dell 3110 3110cn 3115 3115cn Black Toner Cartridge',
        'Dell 3110 3110cn 3115 3115cn Cyan Toner Cartridge',
        'Dell 3110 3110cn 3115 3115cn Magenta Toner Cartridge',
        'Dell 3110 3110cn 3115 3115cn Yellow Toner Cartridge',
        'Dell 3110 3110cn 3115 3115cn Yellow Toner Cartridge Low Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell Dell 3130cn',
      printerModel: '3130cn',
      cartridge: [
        'Dell 3130 3130cn Black Toner Cartridge High Yield',
        'Dell 3130 3130cn Cyan Toner Cartridge High Yield',
        'Dell 3130 3130cn Magenta Toner Cartridge High Yield',
        'Dell 3130 3130cn Yellow Toner Cartridge High Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: true,
      imgSrc: 'Dell 5110cn',
      printerModel: '5110cn',
      cartridge: [
        'Dell 5110cn Black Toner Cartridge High Yield',
        'Dell 5110cn Cyan Toner Cartridge High Yield',
        'Dell 5110cn Magenta Toner Cartridge High Yield',
        'Dell 5110cn Yellow Toner Cartridge High Yield',
        'Dell 5110cn Black Toner Cartridge',
        'Dell 5110cn Cyan Toner Cartridge',
        'Dell 5110cn Magenta Toner Cartridge',
        'Dell 5110cn Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell 5130CDN',
      printerModel: '5130CDN',
      cartridge: [
        'Dell 5130CDN Black Toner Cartridge High Yield',
        'Dell 5130CDN Cyan Toner Cartridge High Yield',
        'Dell 5130CDN Magenta Toner Cartridge High Yield',
        'Dell 5130CDN Yellow Toner Cartridge High Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C1660',
      printerModel: 'C1660',
      cartridge: [
        'Dell C1660 C1660w Black Toner Cartridge',
        'Dell C1660 C1660w Cyan Toner Cartridge',
        'Dell C1660 C1660w Magenta Toner Cartridge',
        'Dell C1660 C1660w Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C1660w',
      printerModel: 'C1660w',
      cartridge: [
        'Dell C1660 C1660w Black Toner Cartridge',
        'Dell C1660 C1660w Cyan Toner Cartridge',
        'Dell C1660 C1660w Magenta Toner Cartridge',
        'Dell C1660 C1660w Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C1760',
      printerModel: 'C1760',
      cartridge: [
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Black Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Cyan Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Magenta Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C1760nw',
      printerModel: 'C1760nw',
      cartridge: [
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Black Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Cyan Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Magenta Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C1765',
      printerModel: 'C1765',
      cartridge: [
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Black Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Cyan Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Magenta Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C1765nf',
      printerModel: 'C1765nf',
      cartridge: [
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Black Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Cyan Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Magenta Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C1765nfw',
      printerModel: 'C1765nfw',
      cartridge: [
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Black Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Cyan Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Magenta Toner Cartridge',
        'Dell 1250c 1350cnw 1355cn C1760nw C1765nf C1765nfw Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C2660',
      printerModel: 'C2660',
      cartridge: [
        'Dell C2660dn C2665dnf Black Toner Cartridge',
        'Dell C2660dn C2665dnf Cyan Toner Cartridge',
        'Dell C2660dn C2665dnf Magenta Toner Cartridge',
        'Dell C2660dn C2665dnf Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C2660dn',
      printerModel: 'C2660dn',
      cartridge: [
        'Dell C2660dn C2665dnf Black Toner Cartridge',
        'Dell C2660dn C2665dnf Cyan Toner Cartridge',
        'Dell C2660dn C2665dnf Magenta Toner Cartridge',
        'Dell C2660dn C2665dnf Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C2665dnf',
      printerModel: 'C2665dnf',
      cartridge: [
        'Dell C2660dn C2665dnf Black Toner Cartridge',
        'Dell C2660dn C2665dnf Cyan Toner Cartridge',
        'Dell C2660dn C2665dnf Magenta Toner Cartridge',
        'Dell C2660dn C2665dnf Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C3760',
      printerModel: 'C3760',
      cartridge: [
        'Dell C2660dn C2665dnf Black Toner Cartridge',
        'Dell C2660dn C2665dnf Cyan Toner Cartridge',
        'Dell C2660dn C2665dnf Magenta Toner Cartridge',
        'Dell C2660dn C2665dnf Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C3760dn',
      printerModel: 'C3760dn',
      cartridge: [
        'Dell C2660dn C2665dnf Black Toner Cartridge',
        'Dell C2660dn C2665dnf Cyan Toner Cartridge',
        'Dell C2660dn C2665dnf Magenta Toner Cartridge',
        'Dell C2660dn C2665dnf Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C3765',
      printerModel: 'C3765',
      cartridge: [
        'Dell C2660dn C2665dnf Black Toner Cartridge',
        'Dell C2660dn C2665dnf Cyan Toner Cartridge',
        'Dell C2660dn C2665dnf Magenta Toner Cartridge',
        'Dell C2660dn C2665dnf Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C3765dnf',
      printerModel: 'C3765dnf',
      cartridge: [
        'Dell C5765 C5765dn Black Toner Cartridge High Yield',
        'Dell C5765 C5765dn Cyan Toner Cartridge High Yield',
        'Dell C5765 C5765dn Magenta Toner Cartridge High Yield',
        'Dell C5765 C5765dn Yellow Toner Cartridge High Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C5765',
      printerModel: 'C5765',
      cartridge: [
        'Dell 5130CDN Black Toner Cartridge High Yield',
        'Dell 5130CDN Cyan Toner Cartridge High Yield',
        'Dell 5130CDN Magenta Toner Cartridge High Yield',
        'Dell 5130CDN Yellow Toner Cartridge High Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C5765dn',
      printerModel: 'C5765dn',
      cartridge: [
        'Dell C5765 C5765dn Black Toner Cartridge High Yield',
        'Dell C5765 C5765dn Cyan Toner Cartridge High Yield',
        'Dell C5765 C5765dn Magenta Toner Cartridge High Yield',
        'Dell C5765 C5765dn Yellow Toner Cartridge High Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C7765',
      printerModel: 'C7765',
      cartridge: [
        'Dell C7765 C7765dn Black Toner Cartridge High Yield',
        'Dell C7765 C7765dn Cyan Toner Cartridge High Yield',
        'Dell C7765 C7765dn Magenta Toner Cartridge High Yield',
        'Dell C7765 C7765dn Yellow Toner Cartridge High Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell C7765dn',
      printerModel: 'C7765dn',
      cartridge: [
        'Dell C7765 C7765dn Black Toner Cartridge High Yield',
        'Dell C7765 C7765dn Cyan Toner Cartridge High Yield',
        'Dell C7765 C7765dn Magenta Toner Cartridge High Yield',
        'Dell C7765 C7765dn Yellow Toner Cartridge High Yield'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell E525',
      printerModel: 'E525',
      cartridge: [
        'Dell E525 E525w Black Toner Cartridge',
        'Dell E525 E525w Cyan Toner Cartridge',
        'Dell E525 E525w Magenta Toner Cartridge',
        'Dell E525 E525w Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell E525w',
      printerModel: 'E525w',
      cartridge: [
        'Dell E525 E525w Black Toner Cartridge',
        'Dell E525 E525w Cyan Toner Cartridge',
        'Dell E525 E525w Magenta Toner Cartridge',
        'Dell E525 E525w Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell H625',
      printerModel: 'H625',
      cartridge: [
        'Dell H625 H825 S2825 Black Toner Cartridge',
        'Dell H625 H825 S2825 Cyan Toner Cartridge',
        'Dell H625 H825 S2825 Magenta Toner Cartridge',
        'Dell H625 H825 S2825 Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell H625cdw',
      printerModel: 'H625cdw',
      cartridge: [
        'Dell H625 H825 S2825 Black Toner Cartridge',
        'Dell H625 H825 S2825 Cyan Toner Cartridge',
        'Dell H625 H825 S2825 Magenta Toner Cartridge',
        'Dell H625 H825 S2825 Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell H825',
      printerModel: 'H825',
      cartridge: [
        'Dell H625 H825 S2825 Black Toner Cartridge',
        'Dell H625 H825 S2825 Cyan Toner Cartridge',
        'Dell H625 H825 S2825 Magenta Toner Cartridge',
        'Dell H625 H825 S2825 Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell H825cdw',
      printerModel: 'H825cdw',
      cartridge: [
        'Dell H625 H825 S2825 Black Toner Cartridge',
        'Dell H625 H825 S2825 Cyan Toner Cartridge',
        'Dell H625 H825 S2825 Magenta Toner Cartridge',
        'Dell H625 H825 S2825 Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell S2825',
      printerModel: 'S2825',
      cartridge: [
        'Dell H625 H825 S2825 Black Toner Cartridge',
        'Dell H625 H825 S2825 Cyan Toner Cartridge',
        'Dell H625 H825 S2825 Magenta Toner Cartridge',
        'Dell H625 H825 S2825 Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "colourlaserSeries",
      populor: false,
      imgSrc: 'Dell S2825cdn',
      printerModel: 'S2825cdn',
      cartridge: [
        'Dell H625 H825 S2825 Black Toner Cartridge',
        'Dell H625 H825 S2825 Cyan Toner Cartridge',
        'Dell H625 H825 S2825 Magenta Toner Cartridge',
        'Dell H625 H825 S2825 Yellow Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell B3460dn',
      printerModel: 'B3460dn',
      cartridge: [
        'Dell B2360d B2360dn B3460dn B3465dnf Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell B3465dnf',
      printerModel: 'B3465dnf',
      cartridge: [
        'Dell B2360d B2360dn B3460dn B3465dnf Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: true,
      imgSrc: 'Dell B5460dn',
      printerModel: 'B5460dn',
      cartridge: [
        'Dell B5460dn B5465dnf Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: true,
      imgSrc: 'Dell B5465dnf',
      printerModel: 'B5465dnf',
      cartridge: [
        'Dell B5460dn B5465dnf Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell E310',
      printerModel: 'E310',
      cartridge: [
        'Dell E310 E514 E515 Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell E310dw',
      printerModel: 'E310dw',
      cartridge: [
        'Dell E310 E514 E515 Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell E514',
      printerModel: 'E514',
      cartridge: [
        'Dell E310 E514 E515 Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell E514dw',
      printerModel: 'E514dw',
      cartridge: [
        'Dell E310 E514 E515 Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell E515',
      printerModel: 'E515',
      cartridge: [
        'Dell E310 E514 E515 Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell E515dn',
      printerModel: 'E515dn',
      cartridge: [
        'Dell E310 E514 E515 Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell H815',
      printerModel: 'H815',
      cartridge: [
        'Dell S2810dn S2815dn H815dw Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell H815dw',
      printerModel: 'H815dw',
      cartridge: [
        'Dell S2810dn S2815dn H815dw Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell S2810',
      printerModel: 'S2810',
      cartridge: [
        'Dell S2810dn S2815dn H815dw Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell S2810dn',
      printerModel: 'S2810dn',
      cartridge: [
        'Dell S2810dn S2815dn H815dw Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell S2815',
      printerModel: 'S2815',
      cartridge: [
        'Dell S2810dn S2815dn H815dw Toner Cartridge'
      ]
    },
    {
      brand: "Dell",
      type: "toner",
      series: "monolaserSeries",
      populor: false,
      imgSrc: 'Dell S2815dn',
      printerModel: 'S2815dn',
      cartridge: [
        'Dell S2810dn S2815dn H815dw Toner Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus NX230',
      printerModel: 'Stylus NX230',
      cartridge: [
        'Epson T1331 133 Black Ink Cartridge',
        'Epson T1331 133 Cyan Ink Cartridge',
        'Epson T1331 133 Magenta Ink Cartridge',
        'Epson T1331 133 Yellow Ink Cartridge',
        'Epson T1381 138 Black Ink Cartridge High Yield',
        'Epson T1381 138 Cyan Ink Cartridge High Yield',
        'Epson T1381 138 Magenta Ink Cartridge High Yield',
        'Epson T1381 138 Yellow Ink Cartridge High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: true,
      imgSrc: 'Epson Stylus Office T1100',
      printerModel: 'Stylus Office T1100',
      cartridge: [
        'Epson 73HN Black Ink Cartridge Twin Pack High Yield',
        'Epson T1032 103 Cyan Ink Cartridge Extra High Yield',
        'Epson T1033 103 Magenta Ink Cartridge Extra High Yield',
        'Epson T1034 103 Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus Office T30',
      printerModel: 'Stylus Office T30',
      cartridge: [
        'Epson 73HN Black Ink Cartridge Twin Pack High Yield',
        'Epson T0731 T1051 73N Black Ink Cartridge',
        'Epson T0732 T1052 73N Cyan Ink Cartridge',
        'Epson T0733 T1053 73N Magenta Ink Cartridge',
        'Epson T0734 T1054 73N Yellow Ink Cartridge',
        'Epson T1032 103 Cyan Ink Cartridge Extra High Yield',
        'Epson T1033 103 Magenta Ink Cartridge Extra High Yield',
        'Epson T1034 103 Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus Office T40W',
      printerModel: 'Stylus Office T40W',
      cartridge: [
        'Epson 73HN Black Ink Cartridge Twin Pack High Yield',
        'Epson T0731 T1051 73N Black Ink Cartridge',
        'Epson T0732 T1052 73N Cyan Ink Cartridge',
        'Epson T0733 T1053 73N Magenta Ink Cartridge',
        'Epson T0734 T1054 73N Yellow Ink Cartridge',
        'Epson T1032 103 Cyan Ink Cartridge Extra High Yield',
        'Epson T1033 103 Magenta Ink Cartridge Extra High Yield',
        'Epson T1034 103 Yellow Ink Cartridge Extra High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus Photo R250',
      printerModel: 'Stylus Photo R250',
      cartridge: [
        'Epson T0561 Black Ink Cartridge',
        'Epson T0561 Cyan Ink Cartridge',
        'Epson T0561 Magenta Ink Cartridge',
        'Epson T0561 Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus Photo RX430',
      printerModel: 'Stylus Photo RX430',
      cartridge: [
        'Epson T0561 Black Ink Cartridge',
        'Epson T0561 Cyan Ink Cartridge',
        'Epson T0561 Magenta Ink Cartridge',
        'Epson T0561 Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus T20',
      printerModel: 'Stylus T20',
      cartridge: [
        'Epson T0731 T1051 73N Black Ink Cartridge',
        'Epson T0732 T1052 73N Cyan Ink Cartridge',
        'Epson T0733 T1053 73N Magenta Ink Cartridge',
        'Epson T0734 T1054 73N Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus T21',
      printerModel: 'Stylus T21',
      cartridge: [
        'Epson T0731 T1051 73N Black Ink Cartridge',
        'Epson T0732 T1052 73N Cyan Ink Cartridge',
        'Epson T0733 T1053 73N Magenta Ink Cartridge',
        'Epson T0734 T1054 73N Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus TX110',
      printerModel: 'Stylus TX110',
      cartridge: [
        'Epson T0731 T1051 73N Black Ink Cartridge',
        'Epson T0732 T1052 73N Cyan Ink Cartridge',
        'Epson T0733 T1053 73N Magenta Ink Cartridge',
        'Epson T0734 T1054 73N Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus TX210',
      printerModel: 'Stylus TX210',
      cartridge: [
        'Epson 73HN Black Ink Cartridge Twin Pack High Yield',
        'Epson T0731 T1051 73N Black Ink Cartridge',
        'Epson T0732 T1052 73N Cyan Ink Cartridge',
        'Epson T0732 T1052 73N Magenta Ink Cartridge',
        'Epson T0732 T1052 73N Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Stylus TX410',
      printerModel: 'Stylus TX410',
      cartridge: [
        'Epson 73HN Black Ink Cartridge Twin Pack High Yield',
        'Epson T0731 T1051 73N Black Ink Cartridge',
        'Epson T0732 T1052 73N Cyan Ink Cartridge',
        'Epson T0732 T1052 73N Magenta Ink Cartridge',
        'Epson T0732 T1052 73N Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson SureColor T3160',
      printerModel: 'SureColor T3160',
      cartridge: [
        'Epson UltraChrome XD2 50ml Black Ink Cartridge',
        'Epson UltraChrome XD2 26ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 26ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 26ml Yellow Ink Cartridge',
        'Epson UltraChrome XD2 80ml Black Ink Cartridge',
        'Epson UltraChrome XD2 50ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 50ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 50ml Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson SureColor T3460',
      printerModel: 'SureColor T3460',
      cartridge: [
        'Epson UltraChrome XD2 110ml Black Ink Cartridge',
        'Epson UltraChrome XD2 110ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 110ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 110ml Yellow Ink Cartridge',
        'Epson UltraChrome XD2 350ml Black Ink Cartridge',
        'Epson UltraChrome XD2 350ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 350ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 350ml Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson SureColor T5160',
      printerModel: 'SureColor T5160',
      cartridge: [
        'Epson UltraChrome XD2 50ml Black Ink Cartridge',
        'Epson UltraChrome XD2 26ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 26ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 26ml Yellow Ink Cartridge',
        'Epson UltraChrome XD2 80ml Black Ink Cartridge',
        'Epson UltraChrome XD2 50ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 50ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 50ml Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson SureColor T5460',
      printerModel: 'SureColor T5460',
      cartridge: [
        'Epson UltraChrome XD2 110ml Black Ink Cartridge',
        'Epson UltraChrome XD2 110ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 110ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 110ml Yellow Ink Cartridge',
        'Epson UltraChrome XD2 350ml Black Ink Cartridge',
        'Epson UltraChrome XD2 350ml Cyan Ink Cartridge',
        'Epson UltraChrome XD2 350ml Magenta Ink Cartridge',
        'Epson UltraChrome XD2 350ml Yellow Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson WorkForce 60',
      printerModel: 'WorkForce 60',
      cartridge: [
        'Epson T1381 138 Black Ink Cartridge High Yield',
        'Epson T1381 138 Cyan Ink Cartridge High Yield',
        'Epson T1381 138 Magenta Ink Cartridge High Yield',
        'Epson T1381 138 Yellow Ink Cartridge High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson WorkForce 7010',
      printerModel: 'WorkForce 7010',
      cartridge: [
        'Epson T1381 138 Black Ink Cartridge High Yield',
        'Epson T1381 138 Cyan Ink Cartridge High Yield',
        'Epson T1381 138 Magenta Ink Cartridge High Yield',
        'Epson T1381 138 Yellow Ink Cartridge High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson WorkForce Pro WFR5190',
      printerModel: 'WorkForce Pro WFR5190',
      cartridge: [
        'Epson R12X Black Ink Pack',
        'Epson R12X Cyan Ink Pack',
        'Epson R12X Magenta Ink Pack',
        'Epson R12X Black Ink Pack',
        'Epson R14X Black Ink Pack High Yield',
        'Epson R14X Cyan Ink Pack High Yield',
        'Epson R14X Magenta Ink Pack High Yield',
        'Epson R14X Yellow Ink Pack High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson WorkForce Pro WFR5690',
      printerModel: 'WorkForce Pro WFR5690',
      cartridge: [
        'Epson R12X Black Ink Pack',
        'Epson R12X Cyan Ink Pack',
        'Epson R12X Magenta Ink Pack',
        'Epson R12X Black Ink Pack',
        'Epson R14X Black Ink Pack High Yield',
        'Epson R14X Cyan Ink Pack High Yield',
        'Epson R14X Magenta Ink Pack High Yield',
        'Epson R14X Yellow Ink Pack High Yield'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson WorkForce WF-100 WF100',
      printerModel: 'WorkForce WF-100 WF100',
      cartridge: [
        'Epson 215 Black Ink Cartridge',
        'Epson 215 Colour Ink Cartridge'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Expression ET-2500 ET2500',
      printerModel: 'Expression ET-2500 ET2500',
      cartridge: [
        'Epson T664 Black Ink Bottle',
        'Epson T664 Cyan Ink Bottle',
        'Epson T664 Magenta Ink Bottle',
        'Epson T664 Yellow Ink Bottle'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Expression ET-2550 ET2550',
      printerModel: 'Expression ET-2550 ET2550',
      cartridge: [
        'Epson T664 Black Ink Bottle',
        'Epson T664 Cyan Ink Bottle',
        'Epson T664 Magenta Ink Bottle',
        'Epson T664 Yellow Ink Bottle'
      ]
    },
    {
      brand: "Epson",
      type: "ink",
      series: "colourInkjetSeries",
      populor: false,
      imgSrc: 'Epson Expression ET-2610 ET2610',
  printerModel: 'Expression ET-2610 ET2610',
  cartridge: [
    'Epson T664 Black Ink Bottle',
    'Epson T664 Cyan Ink Bottle',
    'Epson T664 Magenta Ink Bottle',
    'Epson T664 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression ET-2650 ET2650',
  printerModel: 'Expression ET-2650 ET2650',
  cartridge: [
    'Epson T664 Black Ink Bottle',
    'Epson T664 Cyan Ink Bottle',
    'Epson T664 Magenta Ink Bottle',
    'Epson T664 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression ET-2700 ET2700',
  printerModel: 'Expression ET-2700 ET2700',
  cartridge: [
    'Epson T502 Black Ink Bottle',
    'Epson T502 Cyan Ink Bottle',
    'Epson T502 Magenta Ink Bottle',
    'Epson T502 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression ET-2710 ET2710',
  printerModel: 'Expression ET-2710 ET2710',
  cartridge: [
    'Epson T522 Black Ink Bottle',
    'Epson T522 Cyan Ink Bottle',
    'Epson T522 Magenta Ink Bottle',
    'Epson T522 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression ET-2750 ET2750',
  printerModel: 'Expression ET-2750 ET2750',
  cartridge: [
    'Epson T502 Black Ink Bottle',
    'Epson T502 Cyan Ink Bottle',
    'Epson T502 Magenta Ink Bottle',
    'Epson T502 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression ET-3600 ET3600',
  printerModel: 'Expression ET-3600 ET3600',
  cartridge: [
    'Epson T664 Black Ink Bottle',
    'Epson T664 Cyan Ink Bottle',
    'Epson T664 Magenta Ink Bottle',
    'Epson T664 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression ET-3700 ET3700',
  printerModel: 'Expression ET-3700 ET3700',
  cartridge: [
    'Epson T502 Black Ink Bottle',
    'Epson T502 Cyan Ink Bottle',
    'Epson T502 Magenta Ink Bottle',
    'Epson T502 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression ET-3750 ET3750',
  printerModel: 'Expression ET-3750 ET3750',
  cartridge: [
    'Epson T502 Black Ink Bottle',
    'Epson T502 Cyan Ink Bottle',
    'Epson T502 Magenta Ink Bottle',
    'Epson T502 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP100',
  printerModel: 'Expression Home XP100',
  cartridge: [
    'Epson 200XL Black Ink Cartridge High Yield',
    'Epson 200XL Cyan Ink Cartridge High Yield',
    'Epson 200XL Magenta Ink Cartridge High Yield',
    'Epson 200XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP320',
  printerModel: 'Expression Home XP320',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP324',
  printerModel: 'Expression Home XP324',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP-340 XP340',
  printerModel: 'Expression Home XP-340 XP340',
  cartridge: [
    'Epson 288XL Black Ink Cartridge High Yield',
    'Epson 288XL Cyan Ink Cartridge High Yield',
    'Epson 288XL Magenta Ink Cartridge High Yield',
    'Epson 288XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP344',
  printerModel: 'Expression Home XP344',
  cartridge: [
    'Epson 288XL Black Ink Cartridge High Yield',
    'Epson 288XL Cyan Ink Cartridge High Yield',
    'Epson 288XL Magenta Ink Cartridge High Yield',
    'Epson 288XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP400',
  printerModel: 'Expression Home XP400',
  cartridge: [
    'Epson 200XL Black Ink Cartridge High Yield',
    'Epson 200XL Cyan Ink Cartridge High Yield',
    'Epson 200XL Magenta Ink Cartridge High Yield',
    'Epson 200XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP-410 XP410',
  printerModel: 'Expression Home XP-410 XP410',
  cartridge: [
    'Epson 200XL Black Ink Cartridge High Yield',
    'Epson 200XL Cyan Ink Cartridge High Yield',
    'Epson 200XL Magenta Ink Cartridge High Yield',
    'Epson 200XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP420',
  printerModel: 'Expression Home XP420',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP432',
  printerModel: 'Expression Home XP432',
  cartridge: [
    'Epson 29XL Black Ink Cartridge High Yield',
    'Epson 29XL Cyan Ink Cartridge High Yield',
    'Epson 29XL Magenta Ink Cartridge High Yield',
    'Epson 29XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP440',
  printerModel: 'Expression Home XP440',
  cartridge: [
    'Epson 288XL Black Ink Cartridge High Yield',
    'Epson 288XL Cyan Ink Cartridge High Yield',
    'Epson 288XL Magenta Ink Cartridge High Yield',
    'Epson 288XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP442',
  printerModel: 'Expression Home XP442',
  cartridge: [
    'Epson 29XL Black Ink Cartridge High Yield',
    'Epson 29XL Cyan Ink Cartridge High Yield',
    'Epson 29XL Magenta Ink Cartridge High Yield',
    'Epson 29XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Home XP5100',
  printerModel: 'Expression Home XP5100',
  cartridge: [
    'Epson 202 Black Ink Cartridge Standard Yield',
    'Epson 202 Cyan Ink Cartridge Standard Yield',
    'Epson 202 Magenta Ink Cartridge Standard Yield',
    'Epson 202 Yellow Ink Cartridge Standard Yield',
    'Epson 202XL Black Ink Cartridge High Yield',
    'Epson 202XL Cyan Ink Cartridge High Yield',
    'Epson 202XL Magenta Ink Cartridge High Yield',
    'Epson 202XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus CX1500',
  printerModel: 'Stylus CX1500',
  cartridge: [
    'Epson T038 Black Ink Cartridge',
    'Epson T039 Colour Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce 840',
  printerModel: 'WorkForce 840',
  cartridge: [
    'Epson T1381 138 Black Ink Cartridge High Yield',
    'Epson T1382 138 Cyan Ink Cartridge High Yield',
    'Epson T1383 138 Magenta Ink Cartridge High Yield',
    'Epson T1384 138 Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce 845',
  printerModel: 'WorkForce 845',
  cartridge: [
    'Epson T1381 138 Black Ink Cartridge High Yield',
    'Epson T1382 138 Cyan Ink Cartridge High Yield',
    'Epson T1383 138 Magenta Ink Cartridge High Yield',
    'Epson T1384 138 Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce ET-16500 ET16500',
  printerModel: 'WorkForce ET-16500 ET16500',
  cartridge: [
    'Epson T664 Black Ink Bottle',
    'Epson T664 Cyan Ink Bottle',
    'Epson T664 Magenta Ink Bottle',
    'Epson T664 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce ET-4500 ET4500',
  printerModel: 'WorkForce ET-4500 ET4500',
  cartridge: [
    'Epson T664 Black Ink Bottle',
    'Epson T664 Cyan Ink Bottle',
    'Epson T664 Magenta Ink Bottle',
    'Epson T664 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce ET-4550 ET4550',
  printerModel: 'WorkForce ET-4550 ET4550',
  cartridge: [
    'Epson T664 Black Ink Bottle',
    'Epson T664 Cyan Ink Bottle',
    'Epson T664 Magenta Ink Bottle',
    'Epson T664 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce ET-4750 ET4750',
  printerModel: 'WorkForce ET-4750 ET4750',
  cartridge: [
    'Epson T502 Black Ink Bottle',
    'Epson T502 Cyan Ink Bottle',
    'Epson T502 Magenta Ink Bottle',
    'Epson T502 Yellow Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-3720 WF3720',
  printerModel: 'WorkForce Pro WF-3720 WF3720',
  cartridge: [
    'Epson 702XL Black Ink Cartridge High Yield',
    'Epson 702XL Cyan Ink Cartridge High Yield',
    'Epson 702XL Magenta Ink Cartridge High Yield',
    'Epson 702XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-3725 WF3725',
  printerModel: 'WorkForce Pro WF-3725 WF3725',
  cartridge: [
    'Epson 702XL Black Ink Cartridge High Yield',
    'Epson 702XL Cyan Ink Cartridge High Yield',
    'Epson 702XL Magenta Ink Cartridge High Yield',
    'Epson 702XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-4640 WF4640',
  printerModel: 'WorkForce Pro WF-4640 WF4640',
  cartridge: [
    'Epson 786XL Black Ink Cartridge High Yield',
    'Epson 786XL Cyan Ink Cartridge High Yield',
    'Epson 786XL Magenta Ink Cartridge High Yield',
    'Epson 786XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-4720 WF4720',
  printerModel: 'WorkForce Pro WF-4720 WF4720',
  cartridge: [
    'Epson 802XL Black Ink Cartridge High Yield',
    'Epson 802XL Cyan Ink Cartridge High Yield',
    'Epson 802XL Magenta Ink Cartridge High Yield',
    'Epson 802XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-4740 WF4740',
  printerModel: 'WorkForce Pro WF-4740 WF4740',
  cartridge: [
    'Epson 802XL Black Ink Cartridge High Yield',
    'Epson 802XL Cyan Ink Cartridge High Yield',
    'Epson 802XL Magenta Ink Cartridge High Yield',
    'Epson 802XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-4745 WF4745',
  printerModel: 'WorkForce Pro WF-4745 WF4745',
  cartridge: [
    'Epson 802XL Black Ink Cartridge High Yield',
    'Epson 802XL Cyan Ink Cartridge High Yield',
    'Epson 802XL Magenta Ink Cartridge High Yield',
    'Epson 802XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-5190 WF5190',
  printerModel: 'WorkForce Pro WF-5190 WF5190',
  cartridge: [
    'Epson 788XXL Black Ink Cartridge',
    'Epson 788XXL Cyan Ink Cartridge',
    'Epson 788XXL Magenta Ink Cartridge',
    'Epson 788XXL Yellow Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson  WorkForce Pro WF-5690 WF5690',
  printerModel: 'WorkForce Pro WF-5690 WF5690',
  cartridge: [
    'Epson 788XXL Black Ink Cartridge',
    'Epson 788XXL Cyan Ink Cartridge',
    'Epson 788XXL Magenta Ink Cartridge',
    'Epson 788XXL Yellow Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-C5290 WFC5290',
  printerModel: 'WorkForce Pro WF-C5290 WFC5290',
  cartridge: [
    'Epson 902 Black Ink Pack',
    'Epson 902 Cyan Ink Pack',
    'Epson 902 Magenta Ink Pack',
    'Epson 902 Yellow Ink Pack',
    'Epson 902XL Black Ink Pack High Yield',
    'Epson 902XL Cyan Ink Pack High Yield',
    'Epson 902XL Magenta Ink Pack High Yield',
    'Epson 902XL Yellow Ink Pack High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-C5790 WFC5790',
  printerModel: 'WorkForce Pro WF-C5790 WFC5790',
  cartridge: [
    'Epson 902 Black Ink Pack',
    'Epson 902 Cyan Ink Pack',
    'Epson 902 Magenta Ink Pack',
    'Epson 902 Yellow Ink Pack',
    'Epson 902XL Black Ink Pack High Yield',
    'Epson 902XL Cyan Ink Pack High Yield',
    'Epson 902XL Magenta Ink Pack High Yield',
    'Epson 902XL Yellow Ink Pack High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WP-4530 WP4530',
  printerModel: 'WorkForce Pro WP-4530 WP4530',
  cartridge: [
    'Epson 676XL Black Ink Cartridge High Yield',
    'Epson 676XL Cyan Ink Cartridge High Yield',
    'Epson 676XL Magenta Ink Cartridge High Yield',
    'Epson 676XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WP-4540 WP4540',
  printerModel: 'WorkForce Pro WP-4540 WP4540',
  cartridge: [
    'Epson 676XL Black Ink Cartridge High Yield',
    'Epson 676XL Cyan Ink Cartridge High Yield',
    'Epson 676XL Magenta Ink Cartridge High Yield',
    'Epson 676XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2510 WF2510',
  printerModel: 'WorkForce WF-2510 WF2510',
  cartridge: [
    'Epson 200XL Black Ink Cartridge High Yield',
    'Epson 200XL Cyan Ink Cartridge High Yield',
    'Epson 200XL Magenta Ink Cartridge High Yield',
    'Epson 200XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2520 WF2520',
  printerModel: 'WorkForce WF-2520 WF2520',
  cartridge: [
    'Epson 200XL Black Ink Cartridge High Yield',
    'Epson 200XL Cyan Ink Cartridge High Yield',
    'Epson 200XL Magenta Ink Cartridge High Yield',
    'Epson 200XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2530 WF2530',
  printerModel: 'WorkForce WF-2530 WF2530',
  cartridge: [
    'Epson 200XL Black Ink Cartridge High Yield',
    'Epson 200XL Cyan Ink Cartridge High Yield',
    'Epson 200XL Magenta Ink Cartridge High Yield',
    'Epson 200XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2540 WF2540',
  printerModel: 'WorkForce WF-2540 WF2540',
  cartridge: [
    'Epson 200XL Black Ink Cartridge High Yield',
    'Epson 200XL Cyan Ink Cartridge High Yield',
    'Epson 200XL Magenta Ink Cartridge High Yield',
    'Epson 200XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2630 WF2630',
  printerModel: 'WorkForce WF-2630 WF2630',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2650 WF2650',
  printerModel: 'WorkForce WF-2650 WF2650',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2660 WF2660',
  printerModel: 'WorkForce WF-2660 WF2660',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2750 WF2750',
  printerModel: 'WorkForce WF-2750 WF2750',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2760 WF2760',
  printerModel: 'WorkForce WF-2760 WF2760',
  cartridge: [
    'Epson 220XL Black Ink Cartridge High Yield',
    'Epson 220XL Cyan Ink Cartridge High Yield',
    'Epson 220XL Magenta Ink Cartridge High Yield',
    'Epson 220XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-2860 WF2860',
  printerModel: 'WorkForce WF-2860 WF2860',
  cartridge: [
    'Epson 202 Black Ink Cartridge Standard Yield',
    'Epson 202 Cyan Ink Cartridge Standard Yield',
    'Epson 202 Magenta Ink Cartridge Standard Yield',
    'Epson 202 Yellow Ink Cartridge Standard Yield',
    'Epson 202XL Black Ink Cartridge High Yield',
    'Epson 202XL Cyan Ink Cartridge High Yield',
    'Epson 202XL Magenta Ink Cartridge High Yield',
    'Epson 202XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-3520 WF3520',
  printerModel: 'WorkForce WF-3520 WF3520',
  cartridge: [
    'Epson T1381 138 Black Ink Cartridge High Yield',
    'Epson T1381 138 Cyan Ink Cartridge High Yield',
    'Epson T1381 138 Magenta Ink Cartridge High Yield',
    'Epson T1381 138 Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-3530 WF3530',
  printerModel: 'WorkForce WF-3530 WF3530',
  cartridge: [
    'Epson T1381 138 Black Ink Cartridge High Yield',
    'Epson T1381 138 Cyan Ink Cartridge High Yield',
    'Epson T1381 138 Magenta Ink Cartridge High Yield',
    'Epson T1381 138 Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-3540 WF3540',
  printerModel: 'WorkForce WF-3540 WF3540',
  cartridge: [
    'Epson T1381 138 Black Ink Cartridge High Yield',
    'Epson T1381 138 Cyan Ink Cartridge High Yield',
    'Epson T1381 138 Magenta Ink Cartridge High Yield',
    'Epson T1381 138 Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-3620 WF3620',
  printerModel: 'WorkForce WF-3620 WF3620',
  cartridge: [
    'Epson 252XL Black Ink Cartridge High Yield',
    'Epson 252XL Cyan Ink Cartridge High Yield',
    'Epson 252XL Magenta Ink Cartridge High Yield',
    'Epson 252XL Yellow Ink Cartridge High Yield',
    'Epson 254XL Black Ink Cartridge Extra High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-3640 WF3640',
  printerModel: 'WorkForce WF-3640 WF3640',
  cartridge: [
    'Epson 252XL Black Ink Cartridge High Yield',
    'Epson 252XL Cyan Ink Cartridge High Yield',
    'Epson 252XL Magenta Ink Cartridge High Yield',
    'Epson 252XL Yellow Ink Cartridge High Yield',
    'Epson 254XL Black Ink Cartridge Extra High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-7610 WF7610',
  printerModel: 'WorkForce WF-7610 WF7610',
  cartridge: [
    'Epson 252XL Black Ink Cartridge High Yield',
    'Epson 252XL Cyan Ink Cartridge High Yield',
    'Epson 252XL Magenta Ink Cartridge High Yield',
    'Epson 252XL Yellow Ink Cartridge High Yield',
    'Epson 254XL Black Ink Cartridge Extra High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-7620 WF7620',
  printerModel: 'WorkForce WF-7620 WF7620',
  cartridge: [
    'Epson 252XL Black Ink Cartridge High Yield',
    'Epson 252XL Cyan Ink Cartridge High Yield',
    'Epson 252XL Magenta Ink Cartridge High Yield',
    'Epson 252XL Yellow Ink Cartridge High Yield',
    'Epson 254XL Black Ink Cartridge Extra High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-7710 WF7710',
  printerModel: 'WorkForce WF-7710 WF7710',
  cartridge: [
    'Epson 252XL Black Ink Cartridge High Yield',
    'Epson 252XL Cyan Ink Cartridge High Yield',
    'Epson 252XL Magenta Ink Cartridge High Yield',
    'Epson 252XL Yellow Ink Cartridge High Yield',
    'Epson 254XL Black Ink Cartridge Extra High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-7720 WF7720',
  printerModel: 'WorkForce WF-7720 WF7720',
  cartridge: [
    'Epson 252XL Black Ink Cartridge High Yield',
    'Epson 252XL Cyan Ink Cartridge High Yield',
    'Epson 252XL Magenta Ink Cartridge High Yield',
    'Epson 252XL Yellow Ink Cartridge High Yield',
    'Epson 254XL Black Ink Cartridge Extra High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce WF-7725 WF7725',
  printerModel: 'WorkForce WF-7725 WF7725',
  cartridge: [
    'Epson 252XL Black Ink Cartridge High Yield',
    'Epson 252XL Cyan Ink Cartridge High Yield',
    'Epson 252XL Magenta Ink Cartridge High Yield',
    'Epson 252XL Yellow Ink Cartridge High Yield',
    'Epson 254XL Black Ink Cartridge Extra High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-610 XP610',
  printerModel: 'Expression Premium XP-610 XP610',
  cartridge: [
    'Epson 273XL Black Ink Cartridge High Yield',
    'Epson 273XL Photo Black Ink Cartridge High Yield',
    'Epson 273XL Cyan Ink Cartridge High Yield',
    'Epson 273XL Magenta Ink Cartridge High Yield',
    'Epson 273XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-6100 XP6100',
  printerModel: 'Expression Premium XP-6100 XP6100',
  cartridge: [
    'Epson 302XL Black Ink Cartridge High Yield',
    'Epson 302XL Photo Black Ink Cartridge High Yield',
    'Epson 302XL Cyan Ink Cartridge High Yield',
    'Epson 302XL Magenta Ink Cartridge High Yield',
    'Epson 302XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-620 XP620',
  printerModel: 'Expression Premium XP-620 XP620',
  cartridge: [
    'Epson 273XL Black Ink Cartridge High Yield',
    'Epson 273XL Photo Black Ink Cartridge High Yield',
    'Epson 273XL Cyan Ink Cartridge High Yield',
    'Epson 273XL Magenta Ink Cartridge High Yield',
    'Epson 273XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-630 XP630',
  printerModel: 'Expression Premium XP-630 XP630',
  cartridge: [
    'Epson 410XL Black Ink Cartridge High Yield',
    'Epson 410XL Photo Black Ink Cartridge High Yield',
    'Epson 410XL Cyan Ink Cartridge High Yield',
    'Epson 410XL Magenta Ink Cartridge High Yield',
    'Epson 410XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-640 XP640',
  printerModel: 'Expression Premium XP-640 XP640',
  cartridge: [
    'Epson 410XL Black Ink Cartridge High Yield',
    'Epson 410XL Photo Black Ink Cartridge High Yield',
    'Epson 410XL Cyan Ink Cartridge High Yield',
    'Epson 410XL Magenta Ink Cartridge High Yield',
    'Epson 410XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-700 XP700',
  printerModel: 'Expression Premium XP-700 XP700',
  cartridge: [
    'Epson 273XL Black Ink Cartridge High Yield',
    'Epson 273XL Photo Black Ink Cartridge High Yield',
    'Epson 273XL Cyan Ink Cartridge High Yield',
    'Epson 273XL Magenta Ink Cartridge High Yield',
    'Epson 273XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-710 XP710',
  printerModel: 'Expression Premium XP-710 XP710',
  cartridge: [
    'Epson 273XL Black Ink Cartridge High Yield',
    'Epson 273XL Photo Black Ink Cartridge High Yield',
    'Epson 273XL Cyan Ink Cartridge High Yield',
    'Epson 273XL Magenta Ink Cartridge High Yield',
    'Epson 273XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-720 XP720',
  printerModel: 'Expression Premium XP-720 XP720',
  cartridge: [
    'Epson 273XL Black Ink Cartridge High Yield',
    'Epson 273XL Photo Black Ink Cartridge High Yield',
    'Epson 273XL Cyan Ink Cartridge High Yield',
    'Epson 273XL Magenta Ink Cartridge High Yield',
    'Epson 273XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-800 XP800',
  printerModel: 'Expression Premium XP-800 XP800',
  cartridge: [
    'Epson 273XL Black Ink Cartridge High Yield',
    'Epson 273XL Photo Black Ink Cartridge High Yield',
    'Epson 273XL Cyan Ink Cartridge High Yield',
    'Epson 273XL Magenta Ink Cartridge High Yield',
    'Epson 273XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-820 XP820',
  printerModel: 'Expression Premium XP-820 XP820',
  cartridge: [
    'Epson 273XL Black Ink Cartridge High Yield',
    'Epson 273XL Photo Black Ink Cartridge High Yield',
    'Epson 273XL Cyan Ink Cartridge High Yield',
    'Epson 273XL Magenta Ink Cartridge High Yield',
    'Epson 273XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Expression Premium XP-900 XP900',
  printerModel: 'Expression Premium XP-900 XP900',
  cartridge: [
    'Epson 410XL Black Ink Cartridge High Yield',
    'Epson 410XL Photo Black Ink Cartridge High Yield',
    'Epson 410XL Cyan Ink Cartridge High Yield',
    'Epson 410XL Magenta Ink Cartridge High Yield',
    'Epson 410XL Yellow Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo RX630',
  printerModel: 'Stylus Photo RX630',
  cartridge: [
    'Epson T0491 Black Ink Cartridge',
    'Epson T0492 Cyan Ink Cartridge',
    'Epson T0493 Magenta Ink Cartridge',
    'Epson T0494 Yellow Ink Cartridge',
    'Epson T0495 Light Cyan Ink Cartridge',
    'Epson T0496 Light Magenta Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo RX650',
  printerModel: 'Stylus Photo RX650',
  cartridge: [
    'Epson T0491 Black Ink Cartridge',
    'Epson T0492 Cyan Ink Cartridge',
    'Epson T0493 Magenta Ink Cartridge',
    'Epson T0494 Yellow Ink Cartridge',
    'Epson T0495 Light Cyan Ink Cartridge',
    'Epson T0496 Light Magenta Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo RX690',
  printerModel: 'Stylus Photo RX690',
  cartridge: [
    'Epson T0811 T1111 81N Black Ink Cartridge High Yield',
    'Epson T0812 T1111 81N Cyan Ink Cartridge High Yield',
    'Epson T0813 T1111 81N Megenta Ink Cartridge High Yield',
    'Epson T0814 T1111 81N Yellow Ink Cartridge High Yield',
    'Epson T0815 T1115 81N Light Cyan Ink Cartridge High Yield',
    'Epson T0816 T1116 81N Light Magenta Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo RX700',
  printerModel: 'Stylus Photo RX700',
  cartridge: [
    'Epson T5591 Black Ink Cartridge',
    'Epson T5592 Cyan Ink Cartridge',
    'Epson T5593 Magenta Ink Cartridge',
    'Epson T5594 Yellow Ink Cartridge',
    'Epson T5595 Light Cyan Ink Cartridge',
    'Epson T5596 Light Magenta Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo TX700W',
  printerModel: 'Stylus Photo TX700W',
  cartridge: [
    'Epson T0811 T1111 81N Black Ink Cartridge High Yield',
    'Epson T0812 T1111 81N Cyan Ink Cartridge High Yield',
    'Epson T0813 T1111 81N Megenta Ink Cartridge High Yield',
    'Epson T0814 T1111 81N Yellow Ink Cartridge High Yield',
    'Epson T0815 T1115 81N Light Cyan Ink Cartridge High Yield',
    'Epson T0816 T1116 81N Light Magenta Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo TX710W',
  printerModel: 'Stylus Photo TX710W',
  cartridge: [
    'Epson T0811 T1111 81N Black Ink Cartridge High Yield',
    'Epson T0812 T1111 81N Cyan Ink Cartridge High Yield',
    'Epson T0813 T1111 81N Megenta Ink Cartridge High Yield',
    'Epson T0814 T1111 81N Yellow Ink Cartridge High Yield',
    'Epson T0815 T1115 81N Light Cyan Ink Cartridge High Yield',
    'Epson T0816 T1116 81N Light Magenta Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo TX800FW',
  printerModel: 'Stylus Photo TX800FW',
  cartridge: [
    'Epson T0811 T1111 81N Black Ink Cartridge High Yield',
    'Epson T0812 T1111 81N Cyan Ink Cartridge High Yield',
    'Epson T0813 T1111 81N Megenta Ink Cartridge High Yield',
    'Epson T0814 T1111 81N Yellow Ink Cartridge High Yield',
    'Epson T0815 T1115 81N Light Cyan Ink Cartridge High Yield',
    'Epson T0816 T1116 81N Light Magenta Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Photo TX810FW',
  printerModel: 'Stylus Photo TX810FW',
  cartridge: [
    'Epson T0811 T1111 81N Black Ink Cartridge High Yield',
    'Epson T0812 T1111 81N Cyan Ink Cartridge High Yield',
    'Epson T0813 T1111 81N Megenta Ink Cartridge High Yield',
    'Epson T0814 T1111 81N Yellow Ink Cartridge High Yield',
    'Epson T0815 T1115 81N Light Cyan Ink Cartridge High Yield',
    'Epson T0816 T1116 81N Light Magenta Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus TX650',
  printerModel: 'Stylus TX650',
  cartridge: [
    'Epson T0811 T1111 81N Black Ink Cartridge High Yield',
    'Epson T0812 T1111 81N Cyan Ink Cartridge High Yield',
    'Epson T0813 T1111 81N Megenta Ink Cartridge High Yield',
    'Epson T0814 T1111 81N Yellow Ink Cartridge High Yield',
    'Epson T0815 T1115 81N Light Cyan Ink Cartridge High Yield',
    'Epson T0816 T1116 81N Light Magenta Ink Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Pro 9700',
  printerModel: 'Stylus Pro 9700',
  cartridge: [
    'Epson PRO7700 PRO7900 350ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Matte Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Matte Black Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Pro 9890',
  printerModel: 'Stylus Pro 9890',
  cartridge: [
    'Epson PRO7700 PRO7900 350ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Matte Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Matte Black Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Pro 9900',
  printerModel: 'Stylus Pro 9900',
  cartridge: [
    'Epson PRO7700 PRO7900 350ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Matte Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Matte Black Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson Stylus Pro WT7900',
  printerModel: 'Stylus Pro WT7900',
  cartridge: [
    'Epson PRO7700 PRO7900 350ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 350ml Matte Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Photo Black Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Cyan Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Vivid Magenta Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Yellow Ink Cartridge',
    'Epson PRO7700 PRO7900 700ml Matte Black Ink Cartridge'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson EcoTank ET-M1100 ETM1100',
  printerModel: 'EcoTank ET-M1100 ETM1100',
  cartridge: [
    'Epson T532 Black Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson EcoTank ET-M1120 ETM1120',
  printerModel: 'EcoTank ET-M1120 ETM1120',
  cartridge: [
    'Epson T532 Black Ink Bottle'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-M5299 WFM5299',
  printerModel: 'WorkForce Pro WF-M5299 WFM5299',
  cartridge: [
    'Epson T958 Black Ink Pack',
    'Epson T957 Black Ink Pack'
  ]
},
{
  brand: "Epson",
  type: "ink",
  series: "colourInkjetSeries",
  populor: false,
  imgSrc: 'Epson WorkForce Pro WF-M5799 WFM5799',
  printerModel: 'WorkForce Pro WF-M5799 WFM5799',
  cartridge: [
    'Epson T958 Black Ink Pack',
    'Epson T957 Black Ink Pack'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson AcuLaser C4100',
  printerModel: 'AcuLaser C4100',
  cartridge: [
    'Epson AcuLaser C4100 Black Toner Cartridge',
    'Epson AcuLaser C4100 Cyan Toner Cartridge',
    'Epson AcuLaser C4100 Magenta Toner Cartridge',
    'Epson AcuLaser C4100 Yellow Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson AcuLaser C4200DN',
  printerModel: 'AcuLaser C4200DN',
  cartridge: [
    'Epson AcuLaser C4200N Black Toner Cartridge',
    'Epson AcuLaser C4200N Cyan Toner Cartridge',
    'Epson AcuLaser C4200N Magenta Toner Cartridge',
    'Epson AcuLaser C4200N Yellow Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson dfdAcuLaser C900f',
  printerModel: 'dfdAcuLaser C900f',
  cartridge: [
    'Epson AcuLaser C900 C1900 Black Toner Cartridge High Yield',
    'Epson AcuLaser C900 C1900 Cyan Toner Cartridge High Yield',
    'Epson AcuLaser C900 C1900 Magenta Toner Cartridge High Yield',
    'Epson AcuLaser C900 C1900 Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson AcuLaser C9100',
  printerModel: 'AcuLaser C9100',
  cartridge: [
    'Epson AcuLaser C9100 Black Toner Cartridge',
    'Epson AcuLaser C9100 Cyan Toner Cartridge',
    'Epson AcuLaser C9100 Magenta Toner Cartridge',
    'Epson AcuLaser C9100 Yellow Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson AcuLaser CX11N',
  printerModel: 'AcuLaser CX11N',
  cartridge: [
    'Epson AcuLaser C1100 CX11N CX11NF Black Toner Cartridge High Yield',
    'Epson AcuLaser C1100 CX11N CX11NF Cyan Toner Cartridge High Yield',
    'Epson AcuLaser C1100 CX11N CX11NF Magenta Toner Cartridge High Yield',
    'Epson AcuLaser C1100 CX11N CX11NF Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson AcuLaser CX11NF',
  printerModel: 'AcuLaser CX11NF',
  cartridge: [
    'Epson AcuLaser C1100 CX11N CX11NF Black Toner Cartridge High Yield',
    'Epson AcuLaser C1100 CX11N CX11NF Cyan Toner Cartridge High Yield',
    'Epson AcuLaser C1100 CX11N CX11NF Magenta Toner Cartridge High Yield',
    'Epson AcuLaser C1100 CX11N CX11NF Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-5900 EPL5900',
  printerModel: 'EPL-5900 EPL5900',
  cartridge: [
    'Epson EPL-5900 EPL-5900L EPL-6100 EPL-6100L Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-5900L EPL5900L',
  printerModel: 'EPL-5900L EPL5900L',
  cartridge: [
    'Epson EPL-5900 EPL-5900L EPL-6100 EPL-6100L Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-6100 EPL6100',
  printerModel: 'EPL-6100 EPL6100',
  cartridge: [
    'Epson EPL-5900 EPL-5900L EPL-6100 EPL-6100L Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-6100L EPL6100L',
  printerModel: 'EPL-6100L EPL6100L',
  cartridge: [
    'Epson EPL-5900 EPL-5900L EPL-6100 EPL-6100L Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-6200 EPL6200',
  printerModel: 'EPL-6200 EPL6200',
  cartridge: [
    'Epson EPL-6200 EPL-6200L Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-6200L EPL6200L',
  printerModel: 'EPL-6200L EPL6200L',
  cartridge: [
    'Epson EPL-6200 EPL-6200L Toner Cartridge High Yield'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-8000 EPL8000',
  printerModel: 'EPL-8000 EPL8000',
  cartridge: []
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-9000 EPL9000',
  printerModel: 'EPL-9000 EPL9000',
  cartridge: []
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N1200 EPLN1200',
  printerModel: 'EPL-N1200 EPLN1200',
  cartridge: [
    'Epson EPL-5600 EPL-N1200 Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N1600 EPLN1600',
  printerModel: 'EPL-N1600 EPLN1600',
  cartridge: [
    'Epson EPL-N1600 Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N2000 EPLN2000',
  printerModel: 'EPL-N2000 EPLN2000',
  cartridge: [
    'Epson EPL-N2000 Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N2050 EPLN2050',
  printerModel: 'EPL-N2050 EPLN2050',
  cartridge: [
    'Epson EPL-N2050 EPL-N2050+ Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N2050+ EPLN2050+',
  printerModel: 'EPL-N2050+ EPLN2050+',
  cartridge: [
    'Epson EPL-N2050 EPL-N2050+ Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N2700 EPLN2700',
  printerModel: 'EPL-N2700 EPLN2700',
  cartridge: []
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N3000 EPLN3000',
  printerModel: 'EPL-N3000 EPLN3000',
  cartridge: [
    'Epson EPL-N3000 Toner Cartridge'
  ]
},
{
  brand: "Epson",
  type: "toner",
  series: "colourlaserSeries",
  populor: true,
  imgSrc: 'Epson EPL-N4000+ EPLN4000+',
  printerModel: 'EPL-N4000+ EPLN4000+',
  cartridge: []
},
{
  brand: "HP",
  type: "ink",
  series: "businessInkjetSeries",
  populor: true,
  imgSrc: 'Hp Business Inkjet 3000',
  printerModel: 'Business Inkjet 3000',
  cartridge: [
    'HP 10 Black Ink Cartridge C4844AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "businessInkjetSeries",
  populor: false,
  imgSrc: 'Hp Business Inkjet 3000dtn',
  printerModel: 'Business Inkjet 3000dtn',
  cartridge: [
    'HP 10 Black Ink Cartridge C4844AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "businessInkjetSeries",
  populor: true,
  imgSrc: 'Hp Business Inkjet 3000n',
  printerModel: 'Business Inkjet 3000n',
  cartridge: [
    'HP 10 Black Ink Cartridge C4844AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z5600',
  printerModel: 'Designjet Z5600',
  cartridge: [
    'HP 745 Matte Black Ink Cartridge F9J99A',
    'HP 745 Cyan Ink Cartridge F9J97A',
    'HP 745 Magenta Ink Cartridge F9J95A',
    'HP 745 Yellow Ink Cartridge F9J96A',
    'HP 745 Photo Black Ink Cartridge F9J98A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z6100',
  printerModel: 'Designjet Z6100',
  cartridge: [
    'HP 91 Magenta Ink Cartridge C9468A',
    'HP 91 Cyan Ink Cartridge C9467A',
    'HP 91 Light Magenta Ink Cartridge C9471A',
    'HP 91 Light Grey Ink Cartridge C9466A',
    'HP 91 Light Cyan Ink Cartridge C9470A',
    'HP 91 Photo Black Ink Cartridge C9465A',
    'HP 91 Yellow Ink Cartridge C9469A',
    'HP 91 Matte Black Ink Cartridge C9464A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z6100PS',
  printerModel: 'Designjet Z6100PS',
  cartridge: [
    'HP 91 Light Grey Ink Cartridge C9466A',
    'HP 91 Light Cyan Ink Cartridge C9470A',
    'HP 91 Photo Black Ink Cartridge C9465A',
    'HP 91 Yellow Ink Cartridge C9469A',
    'HP 91 Matte Black Ink Cartridge C9464A',
    'HP 91 Magenta Ink Cartridge C9468A',
    'HP 91 Cyan Ink Cartridge C9467A',
    'HP 91 Light Magenta Ink Cartridge C9471A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z6200',
  printerModel: 'Designjet Z6200',
  cartridge: [
    'HP 771 Photo Black Ink Cartridge CE043A',
    'HP 771 Chromatic Red Ink Cartridge CE038A',
    'HP 771 Light Cyan Ink Cartridge CE042A',
    'HP 771 Matte Black Ink Cartridge CE037A',
    'HP 771 Light Magenta Ink Cartridge CE041A',
    'HP 771 Yellow Ink Cartridge CE040A',
    'HP 771 Light Grey Ink Cartridge CE044A',
    'HP 771 Magenta Ink Cartridge CE039A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z6600',
  printerModel: 'Designjet Z6600',
  cartridge: [
    'HP 771 Photo Black Ink Cartridge CE043A',
    'HP 771 Chromatic Red Ink Cartridge CE038A',
    'HP 771 Light Cyan Ink Cartridge CE042A',
    'HP 771 Matte Black Ink Cartridge CE037A',
    'HP 771 Light Magenta Ink Cartridge CE041A',
    'HP 771 Yellow Ink Cartridge CE040A',
    'HP 771 Light Grey Ink Cartridge CE044A',
    'HP 771 Magenta Ink Cartridge CE039A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z6610',
  printerModel: 'Designjet Z6610',
  cartridge: [
    'HP 771 Photo Black Ink Cartridge CE043A',
    'HP 771 Chromatic Red Ink Cartridge CE038A',
    'HP 771 Light Cyan Ink Cartridge CE042A',
    'HP 771 Matte Black Ink Cartridge CE037A',
    'HP 771 Light Magenta Ink Cartridge CE041A',
    'HP 771 Yellow Ink Cartridge CE040A',
    'HP 771 Light Grey Ink Cartridge CE044A',
    'HP 771 Magenta Ink Cartridge CE039A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z6800',
  printerModel: 'Designjet Z6800',
  cartridge: [
    'HP 771 Photo Black Ink Cartridge CE043A',
    'HP 771 Chromatic Red Ink Cartridge CE038A',
    'HP 771 Light Cyan Ink Cartridge CE042A',
    'HP 771 Matte Black Ink Cartridge CE037A',
    'HP 771 Light Magenta Ink Cartridge CE041A',
    'HP 771 Yellow Ink Cartridge CE040A',
    'HP 771 Light Grey Ink Cartridge CE044A',
    'HP 771 Magenta Ink Cartridge CE039A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "designjetSeries",
  populor: false,
  imgSrc: 'Hp Designjet Z6810',
  printerModel: 'Designjet Z6810',
  cartridge: [
    'HP 771 Photo Black Ink Cartridge CE043A',
    'HP 771 Chromatic Red Ink Cartridge CE038A',
    'HP 771 Light Cyan Ink Cartridge CE042A',
    'HP 771 Matte Black Ink Cartridge CE037A',
    'HP 771 Light Magenta Ink Cartridge CE041A',
    'HP 771 Yellow Ink Cartridge CE040A',
    'HP 771 Light Grey Ink Cartridge CE044A',
    'HP 771 Magenta Ink Cartridge CE039A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: false,
  imgSrc: 'Hp Deskjet D2360',
  printerModel: 'Deskjet D2360',
  cartridge: [
    'HP 21XL Black Ink Cartridge C9351CA',
    'HP 22XL Colour Ink Cartridge C9352CA',
    'HP 58 Photo Ink Cartridge C6658AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: true,
  imgSrc: 'Hp Deskjet D2400',
  printerModel: 'Deskjet D2400',
  cartridge: [
    'HP 21XL Black Ink Cartridge C9351CA',
    'HP 22XL Colour Ink Cartridge C9352CA',
    'HP 58 Photo Ink Cartridge C6658AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: false,
  imgSrc: 'Hp Deskjet D2460',
  printerModel: 'Deskjet D2460',
  cartridge: [
    'HP 21XL Black Ink Cartridge C9351CA',
    'HP 22XL Colour Ink Cartridge C9352CA',
    'HP 58 Photo Ink Cartridge C6658AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: true,
  imgSrc: 'Hp Deskjet D2560',
  printerModel: 'Deskjet D2560',
  cartridge: [
    'HP 60XL Black Ink Cartridge CC641WA',
    'HP 60XL Colour Ink Cartridge CC644WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: true,
  imgSrc: 'Hp Deskjet D2563',
  printerModel: 'Deskjet D2563',
  cartridge: [
    'HP 60XL Black Ink Cartridge CC641WA',
    'HP 60XL Colour Ink Cartridge CC644WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: true,
  imgSrc: 'Hp Deskjet D2566',
  printerModel: 'Deskjet D2566',
  cartridge: [
    'HP 60XL Black Ink Cartridge CC641WA',
    'HP 60XL Colour Ink Cartridge CC644WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: true,
  imgSrc: 'Hp Deskjet D2568',
  printerModel: 'Deskjet D2568',
  cartridge: [
    'HP 60XL Black Ink Cartridge CC641WA',
    'HP 60XL Colour Ink Cartridge CC644WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "deskjetSeries",
  populor: true,
  imgSrc: 'Hp Deskjet D2600',
  printerModel: 'Deskjet D2600',
  cartridge: []
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: false,
  imgSrc: 'Hp ENVY 5540',
  printerModel: 'ENVY 5540',
  cartridge: [
    'HP 62XL Black Ink Cartridge C2P05AA',
    'HP 62XL Colour Ink Cartridge C2P07AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY 5542',
  printerModel: 'ENVY 5542',
  cartridge: [
    'HP 62XL Black Ink Cartridge C2P05AA',
    'HP 62XL Colour Ink Cartridge C2P07AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: false,
  imgSrc: 'Hp ENVY 5640',
  printerModel: 'ENVY 5640',
  cartridge: [
    'HP 62XL Black Ink Cartridge C2P05AA',
    'HP 62XL Colour Ink Cartridge C2P07AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY 7640',
  printerModel: 'ENVY 7640',
  cartridge: [
    'HP 62XL Black Ink Cartridge C2P05AA',
    'HP 62XL Colour Ink Cartridge C2P07AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY Photo 6220',
  printerModel: 'ENVY Photo 6220',
  cartridge: [
    'HP 804 Black Ink Cartridge T6N10AA',
    'HP 804 Colour Ink Cartridge T6N09AA',
    'HP 804XL Black Ink Cartridge T6N12AA',
    'HP 804XL Colour Ink Cartridge T6N11AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY Photo 6222',
  printerModel: 'ENVY Photo 6222',
  cartridge: [
    'HP 804 Black Ink Cartridge T6N10AA',
    'HP 804 Colour Ink Cartridge T6N09AA',
    'HP 804XL Black Ink Cartridge T6N12AA',
    'HP 804XL Colour Ink Cartridge T6N11AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY Photo 7120',
  printerModel: 'ENVY Photo 7120',
  cartridge: [
    'HP 804 Black Ink Cartridge T6N10AA',
    'HP 804 Colour Ink Cartridge T6N09AA',
    'HP 804XL Black Ink Cartridge T6N12AA',
    'HP 804XL Colour Ink Cartridge T6N11AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY Photo 7820',
  printerModel: 'ENVY Photo 7820',
  cartridge: [
    'HP 804 Black Ink Cartridge T6N10AA',
    'HP 804 Colour Ink Cartridge T6N09AA',
    'HP 804XL Black Ink Cartridge T6N12AA',
    'HP 804XL Colour Ink Cartridge T6N11AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY Photo 7822',
  printerModel: 'ENVY Photo 7822',
  cartridge: [
    'HP 804 Black Ink Cartridge T6N10AA',
    'HP 804 Colour Ink Cartridge T6N09AA',
    'HP 804XL Black Ink Cartridge T6N12AA',
    'HP 804XL Colour Ink Cartridge T6N11AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "envySeries",
  populor: true,
  imgSrc: 'Hp ENVY 5530',
  printerModel: 'ENVY 5530',
  cartridge: [
    'HP 61XL Black Ink Cartridge CH563WA',
    'HP 61XL Colour Ink Cartridge CH564WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6315',
  printerModel: 'Officejet 6315',
  cartridge: [
    'HP 92 Black Ink Cartridge C9362WA',
    'HP 93 Colour Ink Cartridge C9361WA',
    'HP 95 Colour Ink Cartridge C8766WA',
    'HP 98 Black Ink Cartridge C9364WA',
    'HP 99 Photo Ink Cartridge C9369WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: true,
  imgSrc: 'Hp Officejet 6500',
  printerModel: 'Officejet 6500',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6500-E709a',
  printerModel: 'Officejet 6500-E709a',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6500-E709c',
  printerModel: 'Officejet 6500-E709c',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6500-E709n',
  printerModel: 'Officejet 6500-E709n',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6500A',
  printerModel: 'Officejet 6500A',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6500A E710a',
  printerModel: 'Officejet 6500A E710a',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6500A Plus E710n',
  printerModel: 'Officejet 6500A Plus E710n',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6600-H711a',
  printerModel: 'Officejet 6600-H711a',
  cartridge: [
    'HP 932XL Black Ink Cartridge CN053AA',
    'HP 933XL Cyan Ink Cartridge CN054AA',
    'HP 933XL Magenta Ink Cartridge CN055AA',
    'HP 933XL Yellow Ink Cartridge CN056AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6700-H711n',
  printerModel: 'Officejet 6700-H711n',
  cartridge: [
    'HP 932XL Black Ink Cartridge CN053AA',
    'HP 933XL Cyan Ink Cartridge CN054AA',
    'HP 933XL Magenta Ink Cartridge CN055AA',
    'HP 933XL Yellow Ink Cartridge CN056AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 6820',
  printerModel: 'Officejet 6820',
  cartridge: [
    'HP 934XL Black Ink Cartridge C2P23AA',
    'HP 935XL Cyan Ink Cartridge C2P24AA',
    'HP 935XL Magenta Ink Cartridge C2P25AA',
    'HP 935XL Yellow Ink Cartridge C2P26AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 7000',
  printerModel: 'Officejet 7000',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 7000-E809a',
  printerModel: 'Officejet 7000-E809a',
  cartridge: [
    'HP 920XL Black Ink Cartridge CD975AA',
    'HP 920XL Cyan Ink Cartridge CD975AA',
    'HP 920XL Magenta Ink Cartridge CD975AA',
    'HP 920XL Yellow Ink Cartridge CD975AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 7110-H812a',
  printerModel: 'Officejet 7110-H812a',
  cartridge: [
    'HP 932XL Black Ink Cartridge CN053AA',
    'HP 933XL Cyan Ink Cartridge CN054AA',
    'HP 933XL Magenta Ink Cartridge CN055AA',
    'HP 933XL Yellow Ink Cartridge CN056AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 7140xi',
  printerModel: 'Officejet 7140xi',
  cartridge: [
    'HP 14 Black Ink Cartridge C5011DA',
    'HP 14 Colour Ink Cartridge C5010DA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 720',
  printerModel: 'Officejet 720',
  cartridge: [
    'HP 29 Black Ink Cartridge 51629AA',
    'HP 49 Colour Ink Cartridge 51649AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 8000-A811a',
  printerModel: 'Officejet 8000-A811a',
  cartridge: [
    'HP 940XL Black Ink Cartridge C4906AA',
    'HP 940XL Cyan Ink Cartridge C4906AA',
    'HP 940XL Magenta Ink Cartridge C4906AA',
    'HP 940XL Yellow Ink Cartridge C4906AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 8500-A909a',
  printerModel: 'Officejet 8500-A909a',
  cartridge: [
    'HP 940XL Black Ink Cartridge C4906AA',
    'HP 940XL Cyan Ink Cartridge C4906AA',
    'HP 940XL Magenta Ink Cartridge C4906AA',
    'HP 940XL Yellow Ink Cartridge C4906AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 8500-A909g',
  printerModel: 'Officejet 8500-A909g',
  cartridge: [
    'HP 940XL Black Ink Cartridge C4906AA',
    'HP 940XL Cyan Ink Cartridge C4906AA',
    'HP 940XL Magenta Ink Cartridge C4906AA',
    'HP 940XL Yellow Ink Cartridge C4906AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 8500A-A910a',
  printerModel: 'Officejet 8500A-A910a',
  cartridge: [
    'HP 940XL Black Ink Cartridge C4906AA',
    'HP 940XL Cyan Ink Cartridge C4906AA',
    'HP 940XL Magenta Ink Cartridge C4906AA',
    'HP 940XL Yellow Ink Cartridge C4906AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 8500A-A910g',
  printerModel: 'Officejet 8500A-A910g',
  cartridge: [
    'HP 940XL Black Ink Cartridge C4906AA',
    'HP 940XL Cyan Ink Cartridge C4906AA',
    'HP 940XL Magenta Ink Cartridge C4906AA',
    'HP 940XL Yellow Ink Cartridge C4906AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet 8500A-A910n',
  printerModel: 'Officejet 8500A-A910n',
  cartridge: [
    'HP 940XL Black Ink Cartridge C4906AA',
    'HP 940XL Cyan Ink Cartridge C4906AA',
    'HP 940XL Magenta Ink Cartridge C4906AA',
    'HP 940XL Yellow Ink Cartridge C4906AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet K8600',
  printerModel: 'Officejet K8600',
  cartridge: [
    'HP 88XL Black Ink Cartridge C9396A',
    'HP 88XL Cyan Ink Cartridge C9391A',
    'HP 88XL Yellow Ink Cartridge C9393A',
    'HP 88XL Magenta Ink Cartridge C9392A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet K8600dn',
  printerModel: 'Officejet K8600dn',
  cartridge: [
    'HP 88XL Black Ink Cartridge C9396A',
    'HP 88XL Cyan Ink Cartridge C9391A',
    'HP 88XL Yellow Ink Cartridge C9393A',
    'HP 88XL Magenta Ink Cartridge C9392A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet L7380',
  printerModel: 'Officejet L7380',
  cartridge: [
    'HP 18 Black Ink Cartridge C4936A',
    'HP 18 Cyan Ink Cartridge C4937A',
    'HP 18 Magenta Ink Cartridge C4938A',
    'HP 18 Yellow Ink Cartridge C4939A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet L7580',
  printerModel: 'Officejet L7580',
  cartridge: [
    'HP 88XL Black Ink Cartridge C9396A',
    'HP 88XL Cyan Ink Cartridge C9391A',
    'HP 88XL Yellow Ink Cartridge C9393A',
    'HP 88XL Magenta Ink Cartridge C9392A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet PRO 276dw',
  printerModel: 'Officejet PRO 276dw',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
}, {
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 6230',
  printerModel: 'Officejet Pro 6230',
  cartridge: [
    'HP 934XL Black Ink Cartridge C2P23AA',
    'HP 935XL Cyan Ink Cartridge C2P24AA',
    'HP 935XL Magenta Ink Cartridge C2P25AA',
    'HP 935XL Yellow Ink Cartridge C2P26AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 6830',
  printerModel: 'Officejet Pro 6830',
  cartridge: [
    'HP 934XL Black Ink Cartridge C2P23AA',
    'HP 935XL Cyan Ink Cartridge C2P24AA',
    'HP 935XL Magenta Ink Cartridge C2P25AA',
    'HP 935XL Yellow Ink Cartridge C2P26AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 6950',
  printerModel: 'Officejet Pro 6950',
  cartridge: [
    'HP 905XL Black Ink Cartridge T6M17AA',
    'HP 905XL Cyan Ink Cartridge T6M05AA',
    'HP 905XL Magenta Ink Cartridge T6M09AA',
    'HP 905XL Yellow Ink Cartridge T6M13AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8100 N811',
  printerModel: 'Officejet Pro 8100 N811',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8100 N811a',
  printerModel: 'Officejet Pro 8100 N811a',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8210',
  printerModel: 'Officejet Pro 8210',
  cartridge: [
    'HP 955XL Black Ink Cartridge L0S72AA',
    'HP 955XL Cyan Ink Cartridge L0S63AA',
    'HP 955XL Magenta Ink Cartridge L0S66AA',
    'HP 955XL Yellow Ink Cartridge L0S69AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8216',
  printerModel: 'Officejet Pro 8216',
  cartridge: [
    'HP 955XL Black Ink Cartridge L0S72AA',
    'HP 955XL Cyan Ink Cartridge L0S63AA',
    'HP 955XL Magenta Ink Cartridge L0S66AA',
    'HP 955XL Yellow Ink Cartridge L0S69AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8600 N911a',
  printerModel: 'Officejet Pro 8600 N911a',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8600 Plus N911g',
  printerModel: 'Officejet Pro 8600 Plus N911g',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
}, {
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8610',
  printerModel: 'Officejet Pro 8610',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8620',
  printerModel: 'Officejet Pro 8620',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8630',
  printerModel: 'Officejet Pro 8630',
  cartridge: [
    'HP 950XL Black Ink Cartridge CN045AA',
    'HP 951XL Cyan Ink Cartridge CN046AA',
    'HP 951XL Magenta Ink Cartridge CN047AA',
    'HP 951XL Yellow Ink Cartridge CN048AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8710',
  printerModel: 'Officejet Pro 8710',
  cartridge: [
    'HP 955XL Black Ink Cartridge L0S72AA',
    'HP 955XL Cyan Ink Cartridge L0S63AA',
    'HP 955XL Magenta Ink Cartridge L0S66AA',
    'HP 955XL Yellow Ink Cartridge L0S69AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8720',
  printerModel: 'Officejet Pro 8720',
  cartridge: [
    'HP 955XL Black Ink Cartridge L0S72AA',
    'HP 955XL Cyan Ink Cartridge L0S63AA',
    'HP 955XL Magenta Ink Cartridge L0S66AA',
    'HP 955XL Yellow Ink Cartridge L0S69AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8730',
  printerModel: 'Officejet Pro 8730',
  cartridge: [
    'HP 955XL Black Ink Cartridge L0S72AA',
    'HP 955XL Cyan Ink Cartridge L0S63AA',
    'HP 955XL Magenta Ink Cartridge L0S66AA',
    'HP 955XL Yellow Ink Cartridge L0S69AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8740',
  printerModel: 'Officejet Pro 8740',
  cartridge: [
    'HP 955XL Black Ink Cartridge L0S72AA',
    'HP 955XL Cyan Ink Cartridge L0S63AA',
    'HP 955XL Magenta Ink Cartridge L0S66AA',
    'HP 955XL Yellow Ink Cartridge L0S69AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro 8745',
  printerModel: 'Officejet Pro 8745',
  cartridge: [
    'HP 955XL Black Ink Cartridge L0S72AA',
    'HP 955XL Cyan Ink Cartridge L0S63AA',
    'HP 955XL Magenta Ink Cartridge L0S66AA',
    'HP 955XL Yellow Ink Cartridge L0S69AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro K8600',
  printerModel: 'Officejet Pro K8600',
  cartridge: [
    'HP 88XL Black Ink Cartridge C9396A',
    'HP 88XL Cyan Ink Cartridge C9391A',
    'HP 88XL Magenta Ink Cartridge C9392A',
    'HP 88XL Yellow Ink Cartridge C9393A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro K8600dn',
  printerModel: 'Officejet Pro K8600dn',
  cartridge: [
    'HP 88XL Black Ink Cartridge C9396A',
    'HP 88XL Cyan Ink Cartridge C9391A',
    'HP 88XL Magenta Ink Cartridge C9392A',
    'HP 88XL Yellow Ink Cartridge C9393A'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro X451dw',
  printerModel: 'Officejet Pro X451dw',
  cartridge: [
    'HP 970XL Black Ink Cartridge CN625AA',
    'HP 971XL Cyan Ink Cartridge CN626AA',
    'HP 971XL Magenta Ink Cartridge CN627AA',
    'HP 971XL Yellow Ink Cartridge CN628AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro X476dw',
  printerModel: 'Officejet Pro X476dw',
  cartridge: [
    'HP 970XL Black Ink Cartridge CN625AA',
    'HP 971XL Cyan Ink Cartridge CN626AA',
    'HP 971XL Magenta Ink Cartridge CN627AA',
    'HP 971XL Yellow Ink Cartridge CN628AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro X551dw',
  printerModel: 'Officejet Pro X551dw',
  cartridge: [
    'HP 970XL Black Ink Cartridge CN625AA',
    'HP 971XL Cyan Ink Cartridge CN626AA',
    'HP 971XL Magenta Ink Cartridge CN627AA',
    'HP 971XL Yellow Ink Cartridge CN628AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "officejetSeries",
  populor: false,
  imgSrc: 'Hp Officejet Pro X576dw',
  printerModel: 'Officejet Pro X576dw',
  cartridge: [
    'HP 970XL Black Ink Cartridge CN625AA',
    'HP 971XL Cyan Ink Cartridge CN626AA',
    'HP 971XL Magenta Ink Cartridge CN627AA',
    'HP 971XL Yellow Ink Cartridge CN628AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: false,
  imgSrc: 'Hp Photosmart C5383',
  printerModel: 'Photosmart C5383',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C5388',
  printerModel: 'Photosmart C5388',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: false,
  imgSrc: 'Hp Photosmart C5390',
  printerModel: 'Photosmart C5390',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C5393',
  printerModel: 'Photosmart C5393',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C5580',
  printerModel: 'Photosmart C5580',
  cartridge: [
    'HP 74XL Black Ink Cartridge CB336WA',
    'HP 75XL Colour Ink Cartridge CB338WA',
    'HP 99 Photo Ink Cartridge C9369WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C6180',
  printerModel: 'Photosmart C6180',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C6270',
  printerModel: 'Photosmart C6270',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C6280',
  printerModel: 'Photosmart C6280',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C6324',
  printerModel: 'Photosmart C6324',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C6375',
  printerModel: 'Photosmart C6375',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C6380',
  printerModel: 'Photosmart C6380',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C7180',
  printerModel: 'Photosmart C7180',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C7280',
  printerModel: 'Photosmart C7280',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C8180',
  printerModel: 'Photosmart C8180',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart C8188',
  printerModel: 'Photosmart C8188',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5156',
  printerModel: 'Photosmart D5156',
  cartridge: [
    'HP 95 Colour Ink Cartridge C8766WA',
    'HP 98 Black Ink Cartridge C9364WA',
    'HP 99 Photo Ink Cartridge C9369WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5160',
  printerModel: 'Photosmart D5160',
  cartridge: [
    'HP 95 Colour Ink Cartridge C8766WA',
    'HP 98 Black Ink Cartridge C9364WA',
    'HP 99 Photo Ink Cartridge C9369WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5360',
  printerModel: 'Photosmart D5360',
  cartridge: [
    'HP 74XL Black Ink Cartridge CB336WA',
    'HP 75XL Colour Ink Cartridge CB338WA',
    'HP 99 Photo Ink Cartridge C9369WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5363',
  printerModel: 'Photosmart D5363',
  cartridge: [
    'HP 74XL Black Ink Cartridge CB336WA',
    'HP 75XL Colour Ink Cartridge CB338WA',
    'HP 99 Photo Ink Cartridge C9369WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5368',
  printerModel: 'Photosmart D5368',
  cartridge: [
    'HP 74XL Black Ink Cartridge CB336WA',
    'HP 75XL Colour Ink Cartridge CB338WA',
    'HP 99 Photo Ink Cartridge C9369WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5460',
  printerModel: 'Photosmart D5460',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5463',
  printerModel: 'Photosmart D5463',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D5468',
  printerModel: 'Photosmart D5468',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D6100',
  printerModel: 'Photosmart D6100',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D6160',
  printerModel: 'Photosmart D6160',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D6163',
  printerModel: 'Photosmart D6163',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D6168',
  printerModel: 'Photosmart D6168',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7160',
  printerModel: 'Photosmart D7160',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7200',
  printerModel: 'Photosmart D7200',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7260',
  printerModel: 'Photosmart D7260',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7360',
  printerModel: 'Photosmart D7360',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7400',
  printerModel: 'Photosmart D7400',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7460',
  printerModel: 'Photosmart D7460',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7468',
  printerModel: 'Photosmart D7468',
  cartridge: [
    'HP 02 Black Ink Cartridge C8721WA',
    'HP 02 Cyan Ink Cartridge C8771WA',
    'HP 02 Magenta Ink Cartridge C8772WA',
    'HP 02 Yellow Ink Cartridge C8773WA',
    'HP 02 Light Cyan Ink Cartridge C8774WA',
    'HP 02 Light Magenta Ink Cartridge C8775WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart D7560',
  printerModel: 'Photosmart D7560',
  cartridge: [
    'HP 564XL Black Ink Cartridge CN684WA',
    'HP 564XL Photo Black Ink Cartridge CB322WA',
    'HP 564XL Cyan Ink Cartridge CB323WA',
    'HP 564XL Magenta Ink Cartridge CB324WA',
    'HP 564XL Yellow Ink Cartridge CB325WA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart P1000',
  printerModel: 'Photosmart P1000',
  cartridge: [
    'HP 45 Black Ink Cartridge 51645AA',
    'HP 78 Colour Ink Cartridge C6578DA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart P1100',
  printerModel: 'Photosmart P1100',
  cartridge: [
    'HP 45 Black Ink Cartridge 51645AA',
    'HP 78 Colour Ink Cartridge C6578DA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart P1100xi',
  printerModel: 'Photosmart P1100xi',
  cartridge: [
    'HP 45 Black Ink Cartridge 51645AA',
    'HP 78 Colour Ink Cartridge C6578DA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart P1115',
  printerModel: 'Photosmart P1115',
  cartridge: [
    'HP 45 Black Ink Cartridge 51645AA',
    'HP 78 Colour Ink Cartridge C6578DA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart P1215',
  printerModel: 'Photosmart P1215',
  cartridge: [
    'HP 45 Black Ink Cartridge 51645AA',
    'HP 78 Colour Ink Cartridge C6578DA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "photosmartSeries",
  populor: true,
  imgSrc: 'Hp Photosmart P1218',
  printerModel: 'Photosmart P1218',
  cartridge: [
    'HP 45 Black Ink Cartridge 51645AA',
    'HP 78 Colour Ink Cartridge C6578DA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "smartTankSeries",
  populor: false,
  imgSrc: 'Hp Smart Tank 450',
  printerModel: 'Smart Tank 450',
  cartridge: [
    'HP 30 Black Ink Bottle 1VU29AA',
    'HP 31 Cyan Ink Bottle 1VU26AA',
    'HP 31 Magenta Ink Bottle 1VU27AA',
    'HP 31 Yellow Ink Bottle 1VU28AA'
  ]
},
{
  brand: "HP",
  type: "ink",
  series: "smartTankSeries",
  populor: false,
  imgSrc: 'Hp Smart Tank 455',
  printerModel: 'Smart Tank 455',
  cartridge: [
    'HP 30 Black Ink Bottle 1VU29AA',
    'HP 31 Cyan Ink Bottle 1VU26AA',
    'HP 31 Magenta Ink Bottle 1VU27AA',
    'HP 31 Yellow Ink Bottle 1VU28AA'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet CP5221',
  printerModel: 'Color LaserJet CP5221',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5221dn',
  printerModel: 'Color LaserJet CP5221dn',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet CP5221n',
  printerModel: 'Color LaserJet CP5221n',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5223',
  printerModel: 'Color LaserJet CP5223',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5223dn',
  printerModel: 'Color LaserJet CP5223dn',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5223n',
  printerModel: 'Color LaserJet CP5223n',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5225',
  printerModel: 'Color LaserJet CP5225',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5225dn',
  printerModel: 'Color LaserJet CP5225dn',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5225n',
  printerModel: 'Color LaserJet CP5225n',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5227',
  printerModel: 'Color LaserJet CP5227',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5227dn',
  printerModel: 'Color LaserJet CP5227dn',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5227n',
  printerModel: 'Color LaserJet CP5227n',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5229',
  printerModel: 'Color LaserJet CP5229',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5229dn',
  printerModel: 'Color LaserJet CP5229dn',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5229n',
  printerModel: 'Color LaserJet CP5229n',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5525',
  printerModel: 'Color LaserJet CP5525',
  cartridge: [
    'HP CE270A Black Toner Cartridge 650A',
    'HP CE271A Cyan Toner Cartridge 650A',
    'HP CE273A Magenta Toner Cartridge 650A',
    'HP CE272A Yellow Toner Cartridge 650A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5525dn',
  printerModel: 'Color LaserJet CP5525dn',
  cartridge: [
    'HP CE270A Black Toner Cartridge 650A',
    'HP CE271A Cyan Toner Cartridge 650A',
    'HP CE273A Magenta Toner Cartridge 650A',
    'HP CE272A Yellow Toner Cartridge 650A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5525n',
  printerModel: 'Color LaserJet CP5525n',
  cartridge: [
    'HP CE270A Black Toner Cartridge 650A',
    'HP CE271A Cyan Toner Cartridge 650A',
    'HP CE273A Magenta Toner Cartridge 650A',
    'HP CE272A Yellow Toner Cartridge 650A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP5525xh',
  printerModel: 'Color LaserJet CP5525xh',
  cartridge: [
    'HP CE740A Black Toner Cartridge 307A',
    'HP CE741A Cyan Toner Cartridge 307A',
    'HP CE743A Magenta Toner Cartridge 307A',
    'HP CE742A Yellow Toner Cartridge 307A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP6015',
  printerModel: 'Color LaserJet CP6015',
  cartridge: [
    'HP CB380A Black Toner Cartridge 823A',
    'HP CB381A Cyan Toner Cartridge 823A',
    'HP CB382A Yellow Toner Cartridge 823A',
    'HP CB383A Magenta Toner Cartridge 823A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP6015de',
  printerModel: 'Color LaserJet CP6015de',
  cartridge: [
    'HP CB380A Black Toner Cartridge 823A',
    'HP CB381A Cyan Toner Cartridge 823A',
    'HP CB382A Yellow Toner Cartridge 823A',
    'HP CB383A Magenta Toner Cartridge 823A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP6015dn',
  printerModel: 'Color LaserJet CP6015dn',
  cartridge: [
    'HP CB380A Black Toner Cartridge 823A',
    'HP CB381A Cyan Toner Cartridge 823A',
    'HP CB382A Yellow Toner Cartridge 823A',
    'HP CB383A Magenta Toner Cartridge 823A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP6015n',
  printerModel: 'Color LaserJet CP6015n',
  cartridge: [
    'HP CB380A Black Toner Cartridge 823A',
    'HP CB381A Cyan Toner Cartridge 823A',
    'HP CB382A Yellow Toner Cartridge 823A',
    'HP CB383A Magenta Toner Cartridge 823A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP6015x',
  printerModel: 'Color LaserJet CP6015x',
  cartridge: [
    'HP CB380A Black Toner Cartridge 823A',
    'HP CB381A Cyan Toner Cartridge 823A',
    'HP CB382A Yellow Toner Cartridge 823A',
    'HP CB383A Magenta Toner Cartridge 823A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet CP6015xh',
  printerModel: 'Color LaserJet CP6015xh',
  cartridge: [
    'HP CB380A Black Toner Cartridge 823A',
    'HP CB381A Cyan Toner Cartridge 823A',
    'HP CB382A Yellow Toner Cartridge 823A',
    'HP CB383A Magenta Toner Cartridge 823A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet M855xh',
  printerModel: 'Color LaserJet M855xh',
  cartridge: [
    'HP CF310A Black Toner Cartridge 826A',
    'HP CF311A Cyan Toner Cartridge 826A',
    'HP CF313A Magenta Toner Cartridge 826A',
    'HP CF312A Yellow Toner Cartridge 826A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro M154a',
  printerModel: 'Color LaserJet Pro M154a',
  cartridge: [
    'HP CF510A Black Toner Cartridge 204A',
    'HP CF511A Cyan Toner Cartridge 204A',
    'HP CF513A Magenta Toner Cartridge 204A',
    'HP CF512A Yellow Toner Cartridge 204A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro M154nw',
  printerModel: 'Color LaserJet Pro M154nw',
  cartridge: [
    'HP CF500X Black Toner Cartridge 202X',
    'HP CF501X Cyan Toner Cartridge 202X',
    'HP CF503X Magenta Toner Cartridge 202X',
    'HP CF502X Yellow Toner Cartridge 202X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro M254dw',
  printerModel: 'Color LaserJet Pro M254dw',
  cartridge: [
    'HP CF500X Black Toner Cartridge 202X',
    'HP CF501X Cyan Toner Cartridge 202X',
    'HP CF503X Magenta Toner Cartridge 202X',
    'HP CF502X Yellow Toner Cartridge 202X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro M254nw',
  printerModel: 'Color LaserJet Pro M254nw',
  cartridge: [
    'HP CF500X Black Toner Cartridge 202X',
    'HP CF501X Cyan Toner Cartridge 202X',
    'HP CF503X Magenta Toner Cartridge 202X',
    'HP CF502X Yellow Toner Cartridge 202X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro 300 color M351a',
  printerModel: 'Color LaserJet Pro 300 color M351a',
  cartridge: [
    'HP CE410X Black Toner Cartridge 305X',
    'HP CE411A Cyan Toner Cartridge 305A',
    'HP CE413A Magenta Toner Cartridge 305A',
    'HP CE412A Yellow Toner Cartridge 305A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro 400 color M451dn',
  printerModel: 'Color LaserJet Pro 400 color M451dn',
  cartridge: [
    'HP CE410X Black Toner Cartridge 305X',
    'HP CE411A Cyan Toner Cartridge 305A',
    'HP CE413A Magenta Toner Cartridge 305A',
    'HP CE412A Yellow Toner Cartridge 305A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro 400 color M451dw',
  printerModel: 'Color LaserJet Pro 400 color M451dw',
  cartridge: [
    'HP CE410X Black Toner Cartridge 305X',
    'HP CE411A Cyan Toner Cartridge 305A',
    'HP CE413A Magenta Toner Cartridge 305A',
    'HP CE412A Yellow Toner Cartridge 305A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro 400 color M451nw',
  printerModel: 'Color LaserJet Pro 400 color M451nw',
  cartridge: [
    'HP CE410X Black Toner Cartridge 305X',
    'HP CE411A Cyan Toner Cartridge 305A',
    'HP CE413A Magenta Toner Cartridge 305A',
    'HP CE412A Yellow Toner Cartridge 305A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M252n',
  printerModel: 'Color LaserJet Pro MFP M252n',
  cartridge: [
    'HP CF400X Black Toner Cartridge 201X',
    'HP CF401X Cyan Toner Cartridge 201X',
    'HP CF403X Magenta Toner Cartridge 201X',
    'HP CF402X Yellow Toner Cartridge 201X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp Color LaserJet Pro MFP M274n',
  printerModel: 'Color LaserJet Pro MFP M274n',
  cartridge: [
    'HP CF400X Black Toner Cartridge 201X',
    'HP CF401X Cyan Toner Cartridge 201X',
    'HP CF403X Magenta Toner Cartridge 201X',
    'HP CF402X Yellow Toner Cartridge 201X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M277',
  printerModel: 'Color LaserJet Pro MFP M277',
  cartridge: [
    'HP CF400X Black Toner Cartridge 201X',
    'HP CF401X Cyan Toner Cartridge 201X',
    'HP CF403X Magenta Toner Cartridge 201X',
    'HP CF402X Yellow Toner Cartridge 201X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M277dw',
  printerModel: 'Color LaserJet Pro MFP M277dw',
  cartridge: [
    'HP CF400X Black Toner Cartridge 201X',
    'HP CF401X Cyan Toner Cartridge 201X',
    'HP CF403X Magenta Toner Cartridge 201X',
    'HP CF402X Yellow Toner Cartridge 201X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M280nw',
  printerModel: 'Color LaserJet Pro MFP M280nw',
  cartridge: [
    'HP CF500X Black Toner Cartridge 202X',
    'HP CF501X Cyan Toner Cartridge 202X',
    'HP CF503X Magenta Toner Cartridge 202X',
    'HP CF502X Yellow Toner Cartridge 202X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M281fdn',
  printerModel: 'Color LaserJet Pro MFP M281fdn',
  cartridge: [
    'HP CF500X Black Toner Cartridge 202X',
    'HP CF501X Cyan Toner Cartridge 202X',
    'HP CF503X Magenta Toner Cartridge 202X',
    'HP CF502X Yellow Toner Cartridge 202X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M281fdw',
  printerModel: 'Color LaserJet Pro MFP M281fdw',
  cartridge: [
    'HP CF500X Black Toner Cartridge 202X',
    'HP CF501X Cyan Toner Cartridge 202X',
    'HP CF503X Magenta Toner Cartridge 202X',
    'HP CF502X Yellow Toner Cartridge 202X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M377',
  printerModel: 'Color LaserJet Pro MFP M377',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M377dw',
  printerModel: 'Color LaserJet Pro MFP M377dw',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M452',
  printerModel: 'Color LaserJet Pro MFP M452',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M452dn',
  printerModel: 'Color LaserJet Pro MFP M452dn',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M452dw',
  printerModel: 'Color LaserJet Pro MFP M452dw',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M452nw',
  printerModel: 'Color LaserJet Pro MFP M452nw',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M476dn',
  printerModel: 'Color LaserJet Pro MFP M476dn',
  cartridge: [
    'HP CF380X Black Toner Cartridge 312X',
    'HP CF381A Cyan Toner Cartridge 312A',
    'HP CF383A Magenta Toner Cartridge 312A',
    'HP CF382A Yellow Toner Cartridge 312A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M476dw',
  printerModel: 'Color LaserJet Pro MFP M476dw',
  cartridge: [
    'HP CF380X Black Toner Cartridge 312X',
    'HP CF381A Cyan Toner Cartridge 312A',
    'HP CF383A Magenta Toner Cartridge 312A',
    'HP CF382A Yellow Toner Cartridge 312A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M476nw',
  printerModel: 'Color LaserJet Pro MFP M476nw',
  cartridge: [
    'HP CF380X Black Toner Cartridge 312X',
    'HP CF381A Cyan Toner Cartridge 312A',
    'HP CF383A Magenta Toner Cartridge 312A',
    'HP CF382A Yellow Toner Cartridge 312A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M477',
  printerModel: 'Color LaserJet Pro MFP M477',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M477fdw',
  printerModel: 'Color LaserJet Pro MFP M477fdw',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro MFP M477fnw',
  printerModel: 'Color LaserJet Pro MFP M477fnw',
  cartridge: [
    'HP CF410X Black Toner Cartridge 410X',
    'HP CF411X Cyan Toner Cartridge 410X',
    'HP CF413X Magenta Toner Cartridge 410X',
    'HP CF412X Yellow Toner Cartridge 410X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 100 colour M175a',
  printerModel: 'Color LaserJet Pro 100 colour M175a',
  cartridge: [
    'HP CE310A Black Toner Cartridge 126A',
    'HP CE311A Cyan Toner Cartridge 126A',
    'HP CE313A Magenta Toner Cartridge 126A',
    'HP CE312A Yellow Toner Cartridge 126A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 100 colour M175nw',
  printerModel: 'Color LaserJet Pro 100 colour M175nw',
  cartridge: [
    'HP CE310A Black Toner Cartridge 126A',
    'HP CE311A Cyan Toner Cartridge 126A',
    'HP CE313A Magenta Toner Cartridge 126A',
    'HP CE312A Yellow Toner Cartridge 126A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 200 colour M275nw',
  printerModel: 'Color LaserJet Pro 200 colour M275nw',
  cartridge: [
    'HP CE310A Black Toner Cartridge 126A',
    'HP CE311A Cyan Toner Cartridge 126A',
    'HP CE313A Magenta Toner Cartridge 126A',
    'HP CE312A Yellow Toner Cartridge 126A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 200 colour M251nw',
  printerModel: 'Color LaserJet Pro 200 colour M251nw',
  cartridge: [
    'HP CF210X Black Toner Cartridge 131X',
    'HP CF211A Cyan Toner Cartridge 131A',
    'HP CF213A Magenta Toner Cartridge 131A',
    'HP CF212A Yellow Toner Cartridge 131A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 200 colour M276n',
  printerModel: 'Color LaserJet Pro 200 colour M276n',
  cartridge: [
    'HP CF210X Black Toner Cartridge 131X',
    'HP CF211A Cyan Toner Cartridge 131A',
    'HP CF213A Magenta Toner Cartridge 131A',
    'HP CF212A Yellow Toner Cartridge 131A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 200 colour M276nw',
  printerModel: 'Color LaserJet Pro 200 colour M276nw',
  cartridge: [
    'HP CF210X Black Toner Cartridge 131X',
    'HP CF211A Cyan Toner Cartridge 131A',
    'HP CF213A Magenta Toner Cartridge 131A',
    'HP CF212A Yellow Toner Cartridge 131A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 300 colour M375nw',
  printerModel: 'Color LaserJet Pro 300 colour M375nw',
  cartridge: [
    'HP CE410X Black Toner Cartridge 305X',
    'HP CE411A Cyan Toner Cartridge 305A',
    'HP CE413A Magenta Toner Cartridge 305A',
    'HP CE412A Yellow Toner Cartridge 305A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 400 colour M475dn',
  printerModel: 'Color LaserJet Pro 400 colour M475dn',
  cartridge: [
    'HP CE410X Black Toner Cartridge 305X',
    'HP CE411A Cyan Toner Cartridge 305A',
    'HP CE413A Magenta Toner Cartridge 305A',
    'HP CE412A Yellow Toner Cartridge 305A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "colorlaserjetmfpSeries",
  populor: true,
  imgSrc: 'Hp Color LaserJet Pro 400 colour M475dw',
  printerModel: 'Color LaserJet Pro 400 colour M475dw',
  cartridge: [
    'HP CE410X Black Toner Cartridge 305X',
    'HP CE411A Cyan Toner Cartridge 305A',
    'HP CE413A Magenta Toner Cartridge 305A',
    'HP CE412A Yellow Toner Cartridge 305A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: true,
  imgSrc: 'Hp LaserJet Pro 400 M401d',
  printerModel: 'LaserJet Pro 400 M401d',
  cartridge: [
    'HP CF280X Toner Cartridge 80X',
    'HP CF280A Toner Cartridge 80A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro 400 M401dn',
  printerModel: 'LaserJet Pro 400 M401dn',
  cartridge: [
    'HP CF280X Toner Cartridge 80X',
    'HP CF280A Toner Cartridge 80A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: true,
  imgSrc: 'Hp LaserJet Pro 400 M401dne',
  printerModel: 'LaserJet Pro 400 M401dne',
  cartridge: [
    'HP CF280X Toner Cartridge 80X',
    'HP CF280A Toner Cartridge 80A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro 400 M401dw',
  printerModel: 'LaserJet Pro 400 M401dw',
  cartridge: [
    'HP CF280X Toner Cartridge 80X',
    'HP CF280A Toner Cartridge 80A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro 400 M401n',
  printerModel: 'LaserJet Pro 400 M401n',
  cartridge: [
    'HP CF280X Toner Cartridge 80X',
    'HP CF280A Toner Cartridge 80A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M102',
  printerModel: 'LaserJet Pro M102',
  cartridge: [
    'HP CF217A Toner Cartridge 17A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M102a',
  printerModel: 'LaserJet Pro M102a',
  cartridge: [
    'HP CF217A Toner Cartridge 17A'
  ]
}, {
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M102w',
  printerModel: 'LaserJet Pro M102w',
  cartridge: [
    'HP CF217A Toner Cartridge 17A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M12',
  printerModel: 'LaserJet Pro M12',
  cartridge: [
    'HP CF279A Toner Cartridge 79A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M12a',
  printerModel: 'LaserJet Pro M12a',
  cartridge: [
    'HP CF279A Toner Cartridge 79A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M12w',
  printerModel: 'LaserJet Pro M12w',
  cartridge: [
    'HP CF279A Toner Cartridge 79A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M15',
  printerModel: 'LaserJet Pro M15',
  cartridge: [
    'HP CF248A Toner Cartridge 48A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M15a',
  printerModel: 'LaserJet Pro M15a',
  cartridge: [
    'HP CF248A Toner Cartridge 48A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M15w',
  printerModel: 'LaserJet Pro M15w',
  cartridge: [
    'HP CF248A Toner Cartridge 48A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M203',
  printerModel: 'LaserJet Pro M203',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M203d',
  printerModel: 'LaserJet Pro M203d',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M203dn',
  printerModel: 'LaserJet Pro M203dn',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M203dw',
  printerModel: 'LaserJet Pro M203dw',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M435',
  printerModel: 'LaserJet Pro M435',
  cartridge: [
    'HP CZ192A Toner Cartridge 93A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M501',
  printerModel: 'LaserJet Pro M501',
  cartridge: [
    'HP CF287A Toner Cartridge 87A',
    'HP CF287X Toner Cartridge 87X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M501dn',
  printerModel: 'LaserJet Pro M501dn',
  cartridge: [
    'HP CF287A Toner Cartridge 87A',
    'HP CF287X Toner Cartridge 87X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M501n',
  printerModel: 'LaserJet Pro M501n',
  cartridge: [
    'HP CF287A Toner Cartridge 87A',
    'HP CF287X Toner Cartridge 87X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M701',
  printerModel: 'LaserJet Pro M701',
  cartridge: [
    'HP CZ192A Toner Cartridge 93A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M706',
  printerModel: 'LaserJet Pro M706',
  cartridge: [
    'HP CZ192A Toner Cartridge 93A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro M706n',
  printerModel: 'LaserJet Pro M706n',
  cartridge: [
    'HP CZ192A Toner Cartridge 93A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M227',
  printerModel: 'LaserJet Pro MFP M227',
  cartridge: [
    'HP CF232A Imaging Drum Unit 32A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M227d',
  printerModel: 'LaserJet Pro MFP M227d',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M227fdn',
  printerModel: 'LaserJet Pro MFP M227fdn',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M227fdw',
  printerModel: 'LaserJet Pro MFP M227fdw',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M227sdn',
  printerModel: 'LaserJet Pro MFP M227sdn',
  cartridge: [
    'HP CF230X Toner Cartridge 30X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M26',
  printerModel: 'LaserJet Pro MFP M26',
  cartridge: [
    'HP CF279A Toner Cartridge 79A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M26a',
  printerModel: 'LaserJet Pro MFP M26a',
  cartridge: [
    'HP CF279A Toner Cartridge 79A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M26nw',
  printerModel: 'LaserJet Pro MFP M26nw',
  cartridge: [
    'HP CF279A Toner Cartridge 79A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M28',
  printerModel: 'LaserJet Pro MFP M28',
  cartridge: [
    'HP CF248A Toner Cartridge 48A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M28A',
  printerModel: 'LaserJet Pro MFP M28A',
  cartridge: [
    'HP CF248A Toner Cartridge 48A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M28W',
  printerModel: 'LaserJet Pro MFP M28W',
  cartridge: [
    'HP CF248A Toner Cartridge 48A'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M402',
  printerModel: 'LaserJet Pro MFP M402',
  cartridge: [
    'HP CF226A Toner Cartridge 26A',
    'HP CF226X Toner Cartridge 26X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M402dn',
  printerModel: 'LaserJet Pro MFP M402dn',
  cartridge: [
    'HP CF226A Toner Cartridge 26A',
    'HP CF226X Toner Cartridge 26X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M402dw',
  printerModel: 'LaserJet Pro MFP M402dw',
  cartridge: [
    'HP CF226A Toner Cartridge 26A',
    'HP CF226X Toner Cartridge 26X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M402n',
  printerModel: 'LaserJet Pro MFP M402n',
  cartridge: [
    'HP CF226A Toner Cartridge 26A',
    'HP CF226X Toner Cartridge 26X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M426',
  printerModel: 'LaserJet Pro MFP M426',
  cartridge: [
    'HP CF226A Toner Cartridge 26A',
    'HP CF226X Toner Cartridge 26X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M426fdn',
  printerModel: 'LaserJet Pro MFP M426fdn',
  cartridge: [
    'HP CF226A Toner Cartridge 26A',
    'HP CF226X Toner Cartridge 26X'
  ]
},
{
  brand: "HP",
  type: "toner",
  series: "laserjetmfpSeries",
  populor: false,
  imgSrc: 'Hp LaserJet Pro MFP M426fdw',
  printerModel: 'LaserJet Pro MFP M426fdw',
  cartridge: [
    'HP CF226A Toner Cartridge 26A',
    'HP CF226X Toner Cartridge 26X'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubproSeries",
  populor: true,
  imgSrc: 'Konica Minolta Bizhub Pro C550',
  printerModel: 'Bizhub Pro C550',
  cartridge: [
    'Konica Minolta Bizhub C550 C650 TN611 Black Toner Cartridge',
    'Konica Minolta Bizhub C451 C550 C650 TN611 Cyan Toner Cartridge',
    'Konica Minolta Bizhub C451 C550 C650 TN611 Magenta Toner Cartridge',
    'Konica Minolta Bizhub C451 C550 C650 TN611 Yellow Toner Cartridge'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubproSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub Pro C5501',
  printerModel: 'Bizhub Pro C5501',
  cartridge: [
    'Konica Minolta Bizhub Pro C5501 C6501 Black Toner Cartridge TN612K A0VW150',
    'Konica Minolta Bizhub Pro C5501 C6501 Cyan Toner Cartridge TN612C A0VW450',
    'Konica Minolta Bizhub Pro C5501 C6501 Magenta Toner Cartridge TN612M A0VW350',
    'Konica Minolta Bizhub Pro C5501 C6501 Yellow Toner Cartridge TN612Y A0VW250'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubproSeries",
  populor: true,
  imgSrc: 'Konica Minolta Bizhub Pro C6500',
  printerModel: 'Bizhub Pro C6500',
  cartridge: [
    'Konica Minolta Bizhub Pro C5501 C6501 Black Toner Cartridge TN612K A0VW150',
    'Konica Minolta Bizhub Pro C5501 C6501 Cyan Toner Cartridge TN612C A0VW450',
    'Konica Minolta Bizhub Pro C5501 C6501 Magenta Toner Cartridge TN612M A0VW350',
    'Konica Minolta Bizhub Pro C5501 C6501 Yellow Toner Cartridge TN612Y A0VW250'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubproSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub Pro C6501',
  printerModel: 'Bizhub Pro C6501',
  cartridge: [
    'Konica Minolta Bizhub Pro C5501 C6501 Black Toner Cartridge TN612K A0VW150',
    'Konica Minolta Bizhub Pro C5501 C6501 Cyan Toner Cartridge TN612C A0VW450',
    'Konica Minolta Bizhub Pro C5501 C6501 Magenta Toner Cartridge TN612M A0VW350',
    'Konica Minolta Bizhub Pro C5501 C6501 Yellow Toner Cartridge TN612Y A0VW250'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubproSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub Pro C65HC',
  printerModel: 'Bizhub Pro C65HC',
  cartridge: [
    'Konica Minolta Bizhub Pro C65HC Black Toner Cartridge TN614K A0VW134',
    'Konica Minolta Bizhub Pro C65HC Cyan Toner Cartridge TN614C A0VW434',
    'Konica Minolta Bizhub Pro C65HC Magenta Toner Cartridge TN614M A0VW334',
    'Konica Minolta Bizhub Pro C65HC Yellow Toner Cartridge TN614Y A0VW234'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub C650',
  printerModel: 'Bizhub C650',
  cartridge: [
    'Konica Minolta Bizhub C550 C650 TN611 Black Toner Cartridge',
    'Konica Minolta Bizhub C451 C550 C650 TN611 Cyan Toner Cartridge',
    'Konica Minolta Bizhub C451 C550 C650 TN611 Magenta Toner Cartridge',
    'Konica Minolta Bizhub C451 C550 C650 TN611 Yellow Toner Cartridge'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub C652DS',
  printerModel: 'Bizhub C652DS',
  cartridge: [
    'Konica Minolta Bizhub C552 C652 TN613 Black Toner Cartridge',
    'Konica Minolta Bizhub C452 C552 C652 TN613 Cyan Toner Cartridge',
    'Konica Minolta Bizhub C452 C552 C652 TN613 Magenta Toner Cartridge',
    'Konica Minolta Bizhub C452 C552 C652 TN613 Yellow Toner Cartridge'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: true,
  imgSrc: 'Konica Minolta Bizhub C654',
  printerModel: 'Bizhub C654',
  cartridge: [
    'Konica Minolta Bizhub C654 C754 Black Toner Cartridge TN711K A3VU150',
    'Konica Minolta Bizhub C654 C754 Cyan Toner Cartridge TN711C A3VU450',
    'Konica Minolta Bizhub C654 C754 Magenta Toner Cartridge TN711M A3VU350',
    'Konica Minolta Bizhub C654 C754 Yellow Toner Cartridge TN711Y A3VU250',
    ''
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: true,
  imgSrc: 'Konica Minolta Bizhub C658',
  printerModel: 'Bizhub C658',
  cartridge: [
    'Konica Minolta Bizhub C458 C558 C658 TN514 Black Toner Cartridge',
    'Konica Minolta Bizhub C458 C558 C658 TN514 Cyan Toner Cartridge',
    'Konica Minolta Bizhub C458 C558 C658 TN514 Magenta Toner Cartridge',
    'Konica Minolta Bizhub C458 C558 C658 TN514 Yellow Toner Cartridge'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub C754',
  printerModel: 'Bizhub C754',
  cartridge: [
    'Konica Minolta Bizhub C654 C754 Black Toner Cartridge TN711K A3VU150',
    'Konica Minolta Bizhub C654 C754 Cyan Toner Cartridge TN711C A3VU450',
    'Konica Minolta Bizhub C654 C754 Magenta Toner Cartridge TN711M A3VU350',
    'Konica Minolta Bizhub C654 C754 Yellow Toner Cartridge TN711Y A3VU250'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub Press C6000',
  printerModel: 'Bizhub Press C6000',
  cartridge: [
    'Konica Minolta Bizhub Press C6000 C7000 Black Toner Cartridge TN616K A1U9150',
    'Konica Minolta Bizhub Press C6000 C7000 Cyan Toner Cartridge TN616C A1U9450',
    'Konica Minolta Bizhub Press C6000 C7000 Magenta Toner Cartridge TN616M A1U9350',
    'Konica Minolta Bizhub Press C6000 C7000 Yellow Toner Cartridge TN616Y A1U9250'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub Press C7000',
  printerModel: 'Bizhub Press C7000',
  cartridge: [
    'Konica Minolta Bizhub Press C6000 C7000 Black Toner Cartridge TN616K A1U9150',
    'Konica Minolta Bizhub Press C6000 C7000 Cyan Toner Cartridge TN616C A1U9450',
    'Konica Minolta Bizhub Press C6000 C7000 Magenta Toner Cartridge TN616M A1U9350',
    'Konica Minolta Bizhub Press C6000 C7000 Yellow Toner Cartridge TN616Y A1U9250'
  ]
},
{
  brand: "Konica Minolta",
  type: "toner",
  series: "bizhubSeries",
  populor: false,
  imgSrc: 'Konica Minolta Bizhub Press C8000',
  printerModel: 'Bizhub Press C8000',
  cartridge: [
    'Konica Minolta Bizhub Press C8000 Black Toner Cartridge TN615K A1DY130',
    'Konica Minolta Bizhub Press C8000 Cyan Toner Cartridge TN615C A1DY430',
    'Konica Minolta Bizhub Press C8000 Magenta Toner Cartridge TN615M A1DY330',
    'Konica Minolta Bizhub Press C8000 Yellow Toner Cartridge TN615Y A1DY230'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: true,
  imgSrc: 'Kyocera FS-C1020MFP FSC1020MFP',
  printerModel: 'FS-C1020MFP',
  cartridge: [
    'Non-Genuine TK-154K Black Toner Cartridge for Kyocera FS-C1020MFP',
    'Non-Genuine TK-154C Cyan Toner Cartridge for Kyocera FS-C1020MFP',
    'Non-Genuine TK-154M Magenta Toner Cartridge for Kyocera FS-C1020MFP',
    'Non-Genuine TK-154Y Yellow Toner Cartridge for Kyocera FS-C1020MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-C2026MFP FSC2026MFP',
  printerModel: 'FS-C2026MFP',
  cartridge: [
    'Non-Genuine TK-594K Black Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594C Cyan Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594M Magenta Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594Y Yellow Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: true,
  imgSrc: 'Kyocera FS-C2126MFP FSC2126MFP',
  printerModel: 'FS-C2126MFP',
  cartridge: [
    'Non-Genuine TK-594K Black Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594C Cyan Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594M Magenta Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594Y Yellow Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-C2526MFP FSC2526MFP',
  printerModel: 'FS-C2526MFP',
  cartridge: [
    'Non-Genuine TK-594K Black Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594C Cyan Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594M Magenta Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594Y Yellow Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-C2626MFP FSC2626MFP',
  printerModel: 'FS-C2626MFP',
  cartridge: [
    'Non-Genuine TK-594K Black Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594C Cyan Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594M Magenta Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP',
    'Non-Genuine TK-594Y Yellow Toner Cartridge for Kyocera FS-C2026MFP FS-C2526MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-C8020MFP FSC8020MFP',
  printerModel: 'FS-C8020MFP',
  cartridge: [
    'Kyocera TK-899K Black Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899C Cyan Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899M Magenta Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899Y Yellow Toner Cartridge FS-C8020MFP FS-C8025MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-C8025MFP FSC8025MFP',
  printerModel: 'FS-C8025MFP',
  cartridge: [
    'Kyocera TK-899K Black Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899C Cyan Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899M Magenta Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899Y Yellow Toner Cartridge FS-C8020MFP FS-C8025MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-C8520MFP FSC8520MFP',
  printerModel: 'FS-C8520MFP',
  cartridge: [
    'Kyocera TK-899K Black Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899C Cyan Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899M Magenta Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899Y Yellow Toner Cartridge FS-C8020MFP FS-C8025MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-C8525MFP FSC8525MFP',
  printerModel: 'FS-C8525MFP',
  cartridge: [
    'Kyocera TK-899K Black Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899C Cyan Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899M Magenta Toner Cartridge FS-C8020MFP FS-C8025MFP',
    'Kyocera TK-899Y Yellow Toner Cartridge FS-C8020MFP FS-C8025MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera KM-C2520 KMC2520',
  printerModel: 'KM-C2520',
  cartridge: [
    'Kyocera TK-825K Black Toner Cartridge KM-C2520 KM-C3225',
    'Kyocera TK-825C Cyan Toner Cartridge KM-C2520 KM-C3225',
    'Kyocera TK-825M Magenta Toner Cartridge KM-C2520 KM-C3225',
    'Kyocera TK-825Y Yellow Toner Cartridge KM-C2520 KM-C3225'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera KM-C2525 KMC2525',
  printerModel: 'KM-C2525',
  cartridge: [
    'Kyocera TK-825K Black Toner Cartridge KM-C2520 KM-C3225',
    'Kyocera TK-825C Cyan Toner Cartridge KM-C2520 KM-C3225',
    'Kyocera TK-825M Magenta Toner Cartridge KM-C2520 KM-C3225',
    'Kyocera TK-825Y Yellow Toner Cartridge KM-C2520 KM-C3225'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera KM-C2630D KMC2630D',
  printerModel: 'KM-C2630D',
  cartridge: [
    'Kyocera TK-815K Black Toner Cartridge KM-C2630D',
    'Kyocera TK-815C Cyan Toner Cartridge KM-C2630D',
    'Kyocera TK-815M Magenta Toner Cartridge KM-C2630D',
    'Kyocera TK-815Y Yellow Toner Cartridge KM-C2630D'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 4551ci',
  printerModel: 'TASKalfa 4551ci',
  cartridge: [
    'Kyocera TK-8509K Black Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509C Cyan Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509M Magenta Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509Y Yellow Toner Cartridge TASKAlfa-4550ci 5550ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 500ci',
  printerModel: 'TASKalfa 500ci',
  cartridge: [
    'Kyocera TK-859K Black Toner Cartridge TASKAlfa-400ci 500ci',
    'Kyocera TK-859C Cyan Toner Cartridge TASKAlfa-400ci 500ci',
    'Kyocera TK-859M Magenta Toner Cartridge TASKAlfa-400ci 500ci',
    'Kyocera TK-859Y Yellow Toner Cartridge TASKAlfa-400ci 500ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 5052ci',
  printerModel: 'TASKalfa 5052ci',
  cartridge: [
    'Kyocera TK-8519K Black Toner Cartridge TASKAlfa-5052ci 6052ci',
    'Kyocera TK-8519C Cyan Toner Cartridge TASKAlfa-5052ci 6052ci',
    'Kyocera TK-8519M Magenta Toner Cartridge TASKAlfa-5052ci 6052ci',
    'Kyocera TK-8519Y Yellow Toner Cartridge TASKAlfa-5052ci 6052ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 522ci',
  printerModel: 'TASKalfa 522ci',
  cartridge: [
    'Kyocera TK-859K Black Toner Cartridge TASKAlfa-400ci 500ci',
    'Kyocera TK-859C Cyan Toner Cartridge TASKAlfa-400ci 500ci',
    'Kyocera TK-859M Magenta Toner Cartridge TASKAlfa-400ci 500ci',
    'Kyocera TK-859Y Yellow Toner Cartridge TASKAlfa-400ci 500ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 5500i',
  printerModel: 'TASKalfa 5500i',
  cartridge: [
    'Kyocera TK-6309 Toner Cartridge TASKalfa-3500i 4500i'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 5550ci',
  printerModel: 'TASKalfa 5550ci',
  cartridge: [
    'Kyocera TK-8509K Black Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509C Cyan Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509M Magenta Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509Y Yellow Toner Cartridge TASKAlfa-4550ci 5550ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 5551ci',
  printerModel: 'TASKalfa 5551ci',
  cartridge: [
    'Kyocera TK-8509K Black Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509C Cyan Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509M Magenta Toner Cartridge TASKAlfa-4550ci 5550ci',
    'Kyocera TK-8509Y Yellow Toner Cartridge TASKAlfa-4550ci 5550ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 6052ci',
  printerModel: 'TASKalfa 6052ci',
  cartridge: [
    'Kyocera TK-8519K Black Toner Cartridge TASKAlfa-5052ci 6052ci',
    'Kyocera TK-8519C Cyan Toner Cartridge TASKAlfa-5052ci 6052ci',
    'Kyocera TK-8519M Magenta Toner Cartridge TASKAlfa-5052ci 6052ci',
    'Kyocera TK-8519Y Yellow Toner Cartridge TASKAlfa-5052ci 6052ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 6550ci',
  printerModel: 'TASKalfa 6550ci',
  cartridge: [
    'Kyocera TK-8709K Black Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709C Cyan Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709M Magenta Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709Y Yellow Toner Cartridge TASKAlfa-6550ci 7550ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 6551ci',
  printerModel: 'TASKalfa 6551ci',
  cartridge: [
    'Kyocera TK-8709K Black Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709C Cyan Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709M Magenta Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709Y Yellow Toner Cartridge TASKAlfa-6550ci 7550ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 7052ci',
  printerModel: 'TASKalfa 7052ci',
  cartridge: [
    'Kyocera TK-8729K Black Toner Cartridge TASKAlfa-7052ci 8052ci',
    'Kyocera TK-8729C Cyan Toner Cartridge TASKAlfa-7052ci 8052ci',
    'Kyocera TK-8729M Magenta Toner Cartridge TASKAlfa-7052ci 8052ci',
    'Kyocera TK-8729Y Yellow Toner Cartridge TASKAlfa-7052ci 8052ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 7550ci',
  printerModel: 'TASKalfa 7550ci',
  cartridge: [
    'Kyocera TK-8709K Black Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709C Cyan Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709M Magenta Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709Y Yellow Toner Cartridge TASKAlfa-6550ci 7550ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 7551ci',
  printerModel: 'TASKalfa 7551ci',
  cartridge: [
    'Kyocera TK-8709K Black Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709C Cyan Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709M Magenta Toner Cartridge TASKAlfa-6550ci 7550ci',
    'Kyocera TK-8709Y Yellow Toner Cartridge TASKAlfa-6550ci 7550ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourmultifunctionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 8052ci',
  printerModel: 'TASKalfa 8052ci',
  cartridge: [
    'Kyocera TK-8729K Black Toner Cartridge TASKAlfa-7052ci 8052ci',
    'Kyocera TK-8729C Cyan Toner Cartridge TASKAlfa-7052ci 8052ci',
    'Kyocera TK-8729M Magenta Toner Cartridge TASKAlfa-7052ci 8052ci',
    'Kyocera TK-8729Y Yellow Toner Cartridge TASKAlfa-7052ci 8052ci'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P5021CDN',
  printerModel: 'P5021CDN',
  cartridge: [
    'Kyocera TK-5224K Black Toner Cartridge P5021 M5521',
    'Kyocera TK-5224C Cyan Toner Cartridge P5021 M5521',
    'Kyocera TK-5224M Magenta Toner Cartridge P5021 M5521',
    'Kyocera TK-5224Y Yellow Toner Cartridge P5021 M5521',
    'Kyocera TK-5234K Black Toner Cartridge P5021 M5521',
    'Kyocera TK-5234C Cyan Toner Cartridge P5021 M5521',
    'Kyocera TK-5234M Magenta Toner Cartridge P5021 M5521',
    'Kyocera TK-5234Y Yellow Toner Cartridge P5021 M5521'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P5021CDW',
  printerModel: 'P5021CDW',
  cartridge: [
    'Kyocera TK-5224K Black Toner Cartridge P5021 M5521',
    'Kyocera TK-5224C Cyan Toner Cartridge P5021 M5521',
    'Kyocera TK-5224M Magenta Toner Cartridge P5021 M5521',
    'Kyocera TK-5224Y Yellow Toner Cartridge P5021 M5521',
    'Kyocera TK-5234K Black Toner Cartridge P5021 M5521',
    'Kyocera TK-5234C Cyan Toner Cartridge P5021 M5521',
    'Kyocera TK-5234M Magenta Toner Cartridge P5021 M5521',
    'Kyocera TK-5234Y Yellow Toner Cartridge P5021 M5521'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: true,
  imgSrc: 'Kyocera P5026CDN',
  printerModel: 'P5026CDN',
  cartridge: [
    'Kyocera TK-5244K Black Toner Cartridge P5026 M5526',
    'Kyocera TK-5244C Cyan Toner Cartridge P5026 M5526',
    'Kyocera TK-5244M Magenta Toner Cartridge P5026 M5526',
    'Kyocera TK-5244Y Yellow Toner Cartridge P5026 M5526'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: true,
  imgSrc: 'Kyocera P5026CDW',
  printerModel: 'P5026CDW',
  cartridge: [
    'Kyocera TK-5244K Black Toner Cartridge P5026 M5526',
    'Kyocera TK-5244C Cyan Toner Cartridge P5026 M5526',
    'Kyocera TK-5244M Magenta Toner Cartridge P5026 M5526',
    'Kyocera TK-5244Y Yellow Toner Cartridge P5026 M5526'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P6021CDN',
  printerModel: 'P6021CDN',
  cartridge: [
    'Kyocera TK-584K Black Toner Cartridge FS-C5150DN',
    'Kyocera TK-584C Cyan Toner Cartridge FS-C5150DN',
    'Kyocera TK-584M Magenta Toner Cartridge FS-C5150DN',
    'Kyocera TK-584Y Yellow Toner Cartridge FS-C5150DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P6026CDN',
  printerModel: 'P6026CDN',
  cartridge: [
    'Kyocera TK-594K Black Toner Cartridge FS-C2026MFP FS-C2526MFP',
    'Kyocera TK-594C Cyan Toner Cartridge FS-C2026MFP FS-C2526MFP',
    'Kyocera TK-594Y Yellow Toner Cartridge FS-C2026MFP FS-C2526MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P6030CDN',
  printerModel: 'P6030CDN',
  cartridge: [
    'Kyocera TK-564K Black Toner Cartridge FS-C5300DN',
    'Kyocera TK-564C Cyan Toner Cartridge FS-C5300DN',
    'Kyocera TK-564M Magenta Toner Cartridge FS-C5300DN',
    'Kyocera TK-564Y Yellow Toner Cartridge FS-C5300DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P6035CDN',
  printerModel: 'P6035CDN',
  cartridge: [
    'Kyocera TK-5154K Black Toner Cartridge P6035 M6535',
    'Kyocera TK-5154C Cyan Toner Cartridge P6035 M6535',
    'Kyocera TK-5154M Magenta Toner Cartridge P6035 M6535',
    'Kyocera TK-5154Y Yellow Toner Cartridge P6035 M6535'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P6130CDN',
  printerModel: 'P6130CDN',
  cartridge: [
    'Kyocera TK-5144K Black Toner Cartridge P6130 M6030 M6530',
    'Kyocera TK-5144C Cyan Toner Cartridge P6130 M6030 M6530',
    'Kyocera TK-5144M Magenta Toner Cartridge P6130 M6030 M6530',
    'Kyocera TK-5144Y Yellow Toner Cartridge P6130 M6030 M6530'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P6230CDN',
  printerModel: 'P6230CDN',
  cartridge: [
    'Kyocera TK-5274K Black Toner Cartridge P6230 M6230 M6630',
    'Kyocera TK-5274C Cyan Toner Cartridge P6230 M6230 M6630',
    'Kyocera TK-5274M Magenta Toner Cartridge P6230 M6230 M6630',
    'Kyocera TK-5274Y Yellow Toner Cartridge P6230 M6230 M6630'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P6235CDN',
  printerModel: 'P6235CDN',
  cartridge: [
    'Kyocera TK-5284K Black Toner Cartridge P6235',
    'Kyocera TK-5284C Cyan Toner Cartridge P6235',
    'Kyocera TK-5284M Magenta Toner Cartridge P6235',
    'Kyocera TK-5284Y Yellow Toner Cartridge P6235'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P7035CDN',
  printerModel: 'P7035CDN',
  cartridge: [
    'Kyocera TK-574K Black Toner Cartridge FS-C5400DN',
    'Kyocera TK-574C Cyan Toner Cartridge FS-C5400DN',
    'Kyocera TK-574M Magenta Toner Cartridge FS-C5400DN',
    'Kyocera TK-574Y Yellow Toner Cartridge FS-C5400DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P7040CDN',
  printerModel: 'P7040CDN',
  cartridge: [
    'Kyocera TK-5164K Black Toner Cartridge P7040',
    'Kyocera TK-5164C Cyan Toner Cartridge P7040',
    'Kyocera TK-5164M Magenta Toner Cartridge P7040',
    'Kyocera TK-5164Y Yellow Toner Cartridge P7040'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P7240CDN',
  printerModel: 'P7240CDN',
  cartridge: [
    'Kyocera TK-5294K Black Toner Cartridge P7240',
    'Kyocera TK-5294C Cyan Toner Cartridge P7240',
    'Kyocera TK-5294M Magenta Toner Cartridge P7240',
    'Kyocera TK-5294Y Yellow Toner Cartridge P7240'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P8060CDN',
  printerModel: 'P8060CDN',
  cartridge: [
    'Kyocera TK-8804K Black Toner Cartridge P8060',
    'Kyocera TK-8804C Cyan Toner Cartridge P8060',
    'Kyocera TK-8804M Magenta Toner Cartridge P8060',
    'Kyocera TK-8804Y Yellow Toner Cartridge P8060'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera TASKalfa 6501i',
  printerModel: 'TASKalfa 6501i',
  cartridge: [
    'Kyocera TK-6709 Toner Cartridge TASKalfa-6500i 8000i'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1016MFP FS1016MFP',
  printerModel: 'FS-1016MFP',
  cartridge: [
    'Kyocera TK-110 Toner Cartridge FS-720 FS-820 FS-920 FS-1016MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: true,
  imgSrc: 'Kyocera FS-1028MFP FS1028MFP',
  printerModel: 'FS-1028MFP',
  cartridge: [
    'Kyocera TK-134 Toner Cartridge FS-1300D FS-1028MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: true,
  imgSrc: 'Kyocera FS-1030MFP FS1030MFP',
  printerModel: 'FS-1030MFP',
  cartridge: [
    'Kyocera TK-1134 Toner Cartridge FS-1030MFP FS-1130MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1035MFP FS1035MFP',
  printerModel: 'FS-1035MFP',
  cartridge: [
    'Kyocera TK-1144 Toner Cartridge FS-1035MFP FS-1135MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1118MFP FS1118MFP',
  printerModel: 'FS-1118MFP',
  cartridge: [
    'Kyocera TK-18H Toner Cartridge FS-1020D FS-1118MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1128MFP FS1128MFP',
  printerModel: 'FS-1128MFP',
  cartridge: [
    'Kyocera TK-134 Toner Cartridge FS-1300D FS-1028MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1130MFP FS1130MFP',
  printerModel: 'FS-1130MFP',
  cartridge: [
    'Kyocera TK-1134 Toner Cartridge FS-1030MFP FS-1130MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1135MFP FS1135MFP',
  printerModel: 'FS-1135MFP',
  cartridge: [
    'Kyocera TK-1144 Toner Cartridge FS-1035MFP FS-1135MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1320MFP FS1320MFP',
  printerModel: 'FS-1320MFP',
  cartridge: [
    'Kyocera TK-1119 Toner Cartridge FS-1041 FS-1320MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1325MFP FS1325MFP',
  printerModel: 'FS-1325MFP',
  cartridge: [
    'Kyocera TK-1129 Toner Cartridge FS-1061DN FS-1325MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-3040MFP FS3040MFP',
  printerModel: 'FS-3040MFP',
  cartridge: [
    'Kyocera TK-354 Toner Cartridge FS-3040MFP FS-3540MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-3140MFP FS3140MFP',
  printerModel: 'FS-3140MFP',
  cartridge: [
    'Kyocera TK-354 Toner Cartridge FS-3040MFP FS-3540MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-3540MFP FS3540MFP',
  printerModel: 'FS-3540MFP',
  cartridge: [
    'Kyocera TK-354 Toner Cartridge FS-3040MFP FS-3540MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-3640MFP FS3640MFP',
  printerModel: 'FS-3640MFP',
  cartridge: [
    'Kyocera TK-354 Toner Cartridge FS-3040MFP FS-3540MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-6025MFP FS6025MFP',
  printerModel: 'FS-6025MFP',
  cartridge: [
    'Kyocera TK-479 Toner Cartridge FS-6025MFP FS-6030MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-6030MFP FS6030MFP',
  printerModel: 'FS-6030MFP',
  cartridge: [
    'Kyocera TK-479 Toner Cartridge FS-6025MFP FS-6030MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-6525MFP FS6525MFP',
  printerModel: 'FS-6525MFP',
  cartridge: [
    'Kyocera TK-479 Toner Cartridge FS-6025MFP FS-6030MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera FS-6530MFP FS6530MFP',
  printerModel: 'FS-6530MFP',
  cartridge: [
    'Kyocera TK-479 Toner Cartridge FS-6025MFP FS-6030MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monomultifuntionSeries",
  populor: false,
  imgSrc: 'Kyocera KM-1505 KM1505',
  printerModel: 'KM-1505',
  cartridge: [
    'Kyocera 37029010 Toner Cartridge KM-1510 KM-1515 KM-1810'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1000 FS1000',
  printerModel: 'FS-1000',
  cartridge: [
    'Kyocera TK-17 Toner Cartridge FS-1000 FS-1010'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1010 FS1010',
  printerModel: 'FS-1010',
  cartridge: [
    'Kyocera TK-17 Toner Cartridge FS-1000 FS-1010'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: true,
  imgSrc: 'Kyocera FS-1020D FS1020D',
  printerModel: 'FS-1020D',
  cartridge: [
    'Kyocera TK-18H Toner Cartridge FS-1020D FS-1118MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: true,
  imgSrc: 'Kyocera FS-1020DN FS1020DN',
  printerModel: 'FS-1020DN',
  cartridge: [
    'Kyocera TK-18H Toner Cartridge FS-1020D FS-1118MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1030D FS1030D',
  printerModel: 'FS-1030D',
  cartridge: [
    'Kyocera TK-120 Toner Cartridge FS-1030D FS1030D'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1041 FS1041',
  printerModel: 'FS-1041',
  cartridge: [
    'Kyocera TK-1119 Toner Cartridge FS-1041 FS-1320MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1061DN FS1061DN',
  printerModel: 'FS-1061DN',
  cartridge: [
    'Kyocera TK-1129 Toner Cartridge FS-1061DN FS-1325MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1100 FS1100',
  printerModel: 'FS-1100',
  cartridge: [
    'Kyocera TK-144 Toner Cartridge FS-1100 FS1100'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1120D FS1120D',
  printerModel: 'FS-1120D',
  cartridge: [
    'Kyocera TK-164 Toner Cartridge FS-1120D FS1120D'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1200 FS1200',
  printerModel: 'FS-1200',
  cartridge: [
    'Kyocera TK-25 Toner Cartridge FS-1200'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1300D FS1300D',
  printerModel: 'FS-1300D',
  cartridge: ['']
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1300D FS1300D',
  printerModel: 'FS-1300D',
  cartridge: [
    'Kyocera TK-134 Toner Cartridge FS-1300D FS-1028MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1320D FS1320D',
  printerModel: 'FS-1320D',
  cartridge: [
    'Kyocera TK-174 Toner Cartridge FS-1320D FS-1370DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1350D FS1350D',
  printerModel: 'FS-1350D',
  cartridge: [
    'Kyocera TK-134 Toner Cartridge FS-1300D FS-1028MFP'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1370DN FS1370DN',
  printerModel: 'FS-1370DN',
  cartridge: [
    'Kyocera TK-174 Toner Cartridge FS-1320D FS-1370DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1500 FS1500',
  printerModel: 'FS-1500',
  cartridge: [
    'Kyocera TK-9 Toner Cartridge FS-1500 FS-3500'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1550 FS1550',
  printerModel: 'FS-1550',
  cartridge: []
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1600 FS1600',
  printerModel: 'FS-1600',
  cartridge: []
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1700 FS1700',
  printerModel: 'FS-1700',
  cartridge: [
    'Kyocera TK-20H Toner Cartridge FS-1700 FS-3700'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1750 FS1750',
  printerModel: 'FS-1750',
  cartridge: [
    'Kyocera TK-20H Toner Cartridge FS-1700 FS-3700'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1800 FS1800',
  printerModel: 'FS-1800',
  cartridge: [
    'Kyocera TB-60 Waste Toner Bottle FS-1800 FS-1900'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1900 FS1900',
  printerModel: 'FS-1900',
  cartridge: [
    'Kyocera TB-60 Waste Toner Bottle FS-1800 FS-1900'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-1920 FS1920',
  printerModel: 'FS-1920',
  cartridge: [
    'Kyocera TB-60 Waste Toner Bottle FS-1800 FS-1900'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-2000D FS2000D',
  printerModel: 'FS-2000D',
  cartridge: [
    'Kyocera TK-310 Toner Cartridge FS-2000D FS-3900DN FS-4000DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera FS-2020D FS2020D',
  printerModel: 'FS-2020D',
  cartridge: [
    'Kyocera TK-344 Toner Cartridge FS-2020D FS2020D'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P2035D',
  printerModel: 'P2035D',
  cartridge: [
    'Kyocera TK-164 Toner Cartridge FS-1120D FS1120D'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P2040DN',
  printerModel: 'P2040DN',
  cartridge: [
    'Kyocera TK-1164 Toner Cartridge P2040'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P2040DW',
  printerModel: 'P2040DW',
  cartridge: [
    'Kyocera TK-1164 Toner Cartridge P2040'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P2135D',
  printerModel: 'P2135D',
  cartridge: [
    'Kyocera TK-174 Toner Cartridge FS-1320D FS-1370DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P2135DN',
  printerModel: 'P2135DN',
  cartridge: [
    'Kyocera TK-174 Toner Cartridge FS-1320D FS-1370DN'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P2235DN',
  printerModel: 'P2235DN',
  cartridge: [
    'Kyocera TK-1154 Toner Cartridge P2235'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P2235DW',
  printerModel: 'P2235DW',
  cartridge: [
    'Kyocera TK-1154 Toner Cartridge P2235'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P3045DN',
  printerModel: 'P3045DN',
  cartridge: [
    'Kyocera TK-3164 Toner Cartridge P3045'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P3050DN',
  printerModel: 'P3050DN',
  cartridge: [
    'Kyocera TK-3174 Toner Cartridge P3050'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P3055DN',
  printerModel: 'P3055DN',
  cartridge: [
    'Kyocera TK-3194 Toner Cartridge P3055 P3060'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P3060DN',
  printerModel: 'P3060DN',
  cartridge: [
    'Kyocera TK-3194 Toner Cartridge P3055 P3060'
  ]
},
{
  brand: "Kyocera",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'Kyocera P4040DN',
  printerModel: 'P4040DN',
  cartridge: [
    'Kyocera TK-7304 Toner Cartridge P4040'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: true,
  imgSrc: 'Lexmark P910',
  printerModel: 'P910',
  cartridge: [
    'Lexmark #34 Black Ink Cartridge High Yield 18C0034',
    'Lexmark #35 Colour Ink Cartridge High Yield 18C0035'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: false,
  imgSrc: ' Lexmark P915',
  printerModel: 'P915',
  cartridge: [
    'Lexmark #34 Black Ink Cartridge High Yield 18C0034',
    'Lexmark #35 Colour Ink Cartridge High Yield 18C0035'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: true,
  imgSrc: 'Lexmark Pro115',
  printerModel: 'Pro115',
  cartridge: [
    'Lexmark #100XL Black Ink Cartridge High Yield 14N1068A',
    'Lexmark #100XL Cyan Ink Cartridge High Yield 14N1069A',
    'Lexmark #100XL Magenta Ink Cartridge High Yield 14N1070A',
    'Lexmark #100XL Yellow Ink Cartridge High Yield 14N1071A'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: false,
  imgSrc: 'Lexmark Pro715',
  printerModel: 'Pro715',
  cartridge: [
    'Lexmark #150XL Black Ink Cartridge High Yield 14N1614AAN',
    'Lexmark #150XL Cyan Ink Cartridge High Yield 14N1615AAN',
    'Lexmark #150XL Magenta Ink Cartridge High Yield 14N1616AAN',
    'Lexmark #150XL Yellow Ink Cartridge High Yield 14N1618AAN'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: false,
  imgSrc: 'Lexmark X8300',
  printerModel: 'X8300',
  cartridge: [
    'Lexmark #34 Black Ink Cartridge High Yield 18C0034',
    'Lexmark #35 Colour Ink Cartridge High Yield 18C0035'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: false,
  imgSrc: 'Lexmark X9575',
  printerModel: 'X9575',
  cartridge: [
    'Lexmark #41 Colour Ink Cartridge Return Program 18Y0141A'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: false,
  imgSrc: 'Lexmark X6150',
  printerModel: 'X6150',
  cartridge: [
    'Lexmark #82 Black Ink Cartridge 18L0032',
    'Lexmark #83 Colour Ink Cartridge 18L0042'
  ]
},
{
  brand: "Lexmark",
  type: "ink",
  series: "lexmarkAllInOneSupplies",
  populor: false,
  imgSrc: 'Lexmark X6675',
  printerModel: 'X6675',
  cartridge: [
    'Lexmark #31 Photo Ink Cartridge 18C0031'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkColourLaser",
  populor: true,
  imgSrc: ' Lexmark C510',
  printerModel: 'C510',
  cartridge: [
    'Lexmark C510 Black Toner Cartridge High Yield',
    'Lexmark C510 Cyan Toner Cartridge High Yield',
    'Lexmark C510 Magenta Toner Cartridge High Yield',
    'Lexmark C510 Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkColourLaser",
  populor: false,
  imgSrc: 'Lexmark C532dn',
  printerModel: 'C532dn',
  cartridge: [
    'Lexmark C522 C524 C532 C534 Black Toner Cartridge',
    'Lexmark C522 C524 C532 C534 Cyan Toner Cartridge',
    'Lexmark C522 C524 C532 C534 Magenta Toner Cartridge',
    'Lexmark C522 C524 C532 C534 Yellow Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkColourLaser",
  populor: true,
  imgSrc: 'Lexmark C534dn',
  printerModel: 'C534dn',
  cartridge: [
    'Lexmark C522 C524 C532 C534 Black Toner Cartridge',
    'Lexmark C522 C524 C532 C534 Cyan Toner Cartridge',
    'Lexmark C522 C524 C532 C534 Magenta Toner Cartridge',
    'Lexmark C522 C524 C532 C534 Yellow Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkColourLaser",
  populor: false,
  imgSrc: 'Lexmark OPTRA C1200N',
  printerModel: 'OPTRA C1200N',
  cartridge: [
    'Lexmark Optra Colour 1200 Black Toner Cartridge',
    'Lexmark Optra Colour 1200 Cyan Toner Cartridge',
    'Lexmark Optra Colour 1200 Magenta Toner Cartridge',
    'Lexmark Optra Colour 1200 Yellow Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkColourLaser",
  populor: false,
  imgSrc: 'Lexmark OPTRA C1200',
  printerModel: 'OPTRA C1200',
  cartridge: [
    'Lexmark Optra Colour 1200 Black Toner Cartridge',
    'Lexmark Optra Colour 1200 Cyan Toner Cartridge',
    'Lexmark Optra Colour 1200 Magenta Toner Cartridge',
    'Lexmark Optra Colour 1200 Yellow Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkColourLaser",
  populor: false,
  imgSrc: 'Lexmark C750fn',
  printerModel: 'C750fn',
  cartridge: [
    'Lexmark C750 Black Toner Cartridge Return Program',
    'Lexmark C750 Cyan Toner Cartridge Return Program',
    'Lexmark C750 Magenta Toner Cartridge Return Program',
    'Lexmark C750 Yellow Toner Cartridge Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkColourLaser",
  populor: false,
  imgSrc: 'Lexmark C750in',
  printerModel: 'C750in',
  cartridge: [
    'Lexmark C750 Black Toner Cartridge Return Program',
    'Lexmark C750 Cyan Toner Cartridge Return Program',
    'Lexmark C750 Magenta Toner Cartridge Return Program',
    'Lexmark C750 Yellow Toner Cartridge Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: true,
  imgSrc: ' Lexmark E260D',
  printerModel: 'E260D',
  cartridge: [
    'Lexmark E260 E360 E460 E462 Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: false,
  imgSrc: 'Lexmark E120',
  printerModel: 'E120',
  cartridge: [
    'Lexmark E120 E120N Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: true,
  imgSrc: 'Lexmark E450DN',
  printerModel: 'E450DN',
  cartridge: [
    'Lexmark E450 Toner Cartridge Return Program',
    'Lexmark E450 Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: false,
  imgSrc: 'Lexmark E360DN',
  printerModel: 'E360DN',
  cartridge: [
    'Lexmark E260 E360 E460 E462 Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: false,
  imgSrc: 'Lexmark E250DN',
  printerModel: 'E250DN',
  cartridge: [
    'Lexmark E250 E250D E250DN Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: false,
  imgSrc: ' Lexmark E232',
  printerModel: 'E232',
  cartridge: [
    'Lexmark E230 E232 E330 E332 E342 Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: false,
  imgSrc: 'Lexmark Optra S1250',
  printerModel: 'Optra S1250',
  cartridge: [
    'Lexmark Optra S Toner Cartridge Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: false,
  imgSrc: 'Lexmark Optra E310',
  printerModel: 'Optra E310',
  cartridge: [
    'Lexmark E310 E312 Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMonochromeLaser",
  populor: false,
  imgSrc: 'Lexmark Optra T610',
  printerModel: 'Optra T610',
  cartridge: [
    'Lexmark Optra T Toner Cartridge Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: true,
  imgSrc: 'Lexmark CX310',
  printerModel: 'CX310',
  cartridge: [
    'Lexmark CX310 CX410 CX510 808SK Black Toner Cartridge',
    'Lexmark CX310 CX410 CX510 808SC Cyan Toner Cartridge',
    'Lexmark CX310 CX410 CX510 808SM Magenta Toner Cartridge',
    'Lexmark CX310 CX410 CX510 808SY Yellow Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: 'Lexmark CX921',
  printerModel: 'CX921',
  cartridge: [
    'Lexmark CX921 CX922 CX923 86C0HK Black Toner Cartridge High Yield',
    'Lexmark CS932 CX921 CX922 CX923 76C0HC Cyan Toner Cartridge High Yield',
    'Lexmark CS932 CX921 CX922 CX923 76C0HM Magenta Toner Cartridge High Yield',
    'Lexmark CS932 CX921 CX922 CX923 76C0HY Yellow Toner Cartridge High Yield'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: true,
  imgSrc: 'Lexmark MX410DE',
  printerModel: 'MX410DE',
  cartridge: [
    'Lexmark MX310 MX410 MX511 MX611 603H Toner Cartridge High Yield'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: ' Lexmark MB2442adwe',
  printerModel: 'MB2442adwe',
  cartridge: [
    'Lexmark B2442 MB2442 B236000 Toner Cartridge Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: 'Lexmark XM5170',
  printerModel: 'XM5170',
  cartridge: [
    'Lexmark M5155 M5163 M5170 XM5163 XM5170 Toner Cartridge Extra High Yield'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: '  Lexmark X792DTE',
  printerModel: 'X792DTE',
  cartridge: []
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: ' Lexmark X651',
  printerModel: 'X651',
  cartridge: [
    'Lexmark X651 X652 X654 X656 X658 Toner Cartridge Return Program',
    'Lexmark X651 X652 X654 X656 X658 Toner Cartridge High Yield Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: ' Lexmark X646ef MFP',
  printerModel: 'X646ef MFP',
  cartridge: [
    'Lexmark X642 X646 Toner Cartridge Return Program',
    'Lexmark X642 X646 Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: 'Lexmark X646e MFP',
  printerModel: 'X646e MFP',
  cartridge: [
    'Lexmark X642 X646 Toner Cartridge Return Program',
    'Lexmark X642 X646 Toner Cartridge'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: 'Lexmark MX511',
  printerModel: 'MX511',
  cartridge: [
    'Lexmark MX310 MX410 MX511 MX611 603H Toner Cartridge High Yield'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: ' Lexmark MB2442adwe1',
  printerModel: 'MB2442adwe1',
  cartridge: [
    'Lexmark B2442 MB2442 B236000 Toner Cartridge Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: 'Lexmark CX860de',
  printerModel: 'CX860de',
  cartridge: [
    'Lexmark CS820 CX825 CX860 72K60K Black Toner Cartridge Return Program',
    'Lexmark CS820 CX825 CX860 72K60C Cyan Toner Cartridge Return Program',
    'Lexmark CS820 CX825 CX860 72K60M Magenta Toner Cartridge Return Program',
    'Lexmark CS820 CX825 CX860 72K60Y Yellow Toner Cartridge Return Program'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: ' Lexmark MX912',
  printerModel: 'MX912',
  cartridge: [
    'Lexmark MX910 MX911 MX912 Toner Cartridge High Yield'
  ]
},
{
  brand: "Lexmark",
  type: "toner",
  series: "lexmarkMultifunctionLaser",
  populor: false,
  imgSrc: ' Lexmark X215',
  printerModel: 'X215',
  cartridge: [
    'Lexmark X215 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "colourprinterSeries",
  populor: true,
  imgSrc: 'OKI ES3640e',
  printerModel: 'ES3640e',
  cartridge: [
    'OKI ES3640 Black Toner Cartridge',
    'OKI ES3640 Cyan Toner Cartridge',
    'OKI ES3640 Magenta Toner Cartridge',
    'OKI ES3640 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'OKI PRO6410',
  printerModel: 'PRO6410',
  cartridge: [
    'OKI PRO6410 NeonColor Black Print Cartridge',
    'OKI PRO6410 NeonColor Neon Cyan Print Cartridge',
    'OKI PRO6410 NeonColor Neon Magenta Print Cartridge',
    'OKI PRO6410 NeonColor Neon Yellow Print Cartridge',
    'OKI PRO6410 NeonColor White Print Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "colourprinterSeries",
  populor: true,
  imgSrc: 'OKI PRO9431dn',
  printerModel: 'PRO9431dn',
  cartridge: [
    'OKI PRO9431 PRO9541 PRO9542 Black Toner Cartridge',
    'OKI PRO9431 PRO9541 PRO9542 Cyan Toner Cartridge',
    'OKI PRO9431 PRO9541 PRO9542 Magenta Toner Cartridge',
    'OKI PRO9431 PRO9541 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'OKI PRO9541dn',
  printerModel: 'PRO9541dn',
  cartridge: [
    'OKI PRO9431 PRO9541 PRO9542 Black Toner Cartridge',
    'OKI PRO9431 PRO9541 PRO9542 Cyan Toner Cartridge',
    'OKI PRO9431 PRO9541 PRO9542 Magenta Toner Cartridge',
    'OKI PRO9431 PRO9541 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "colourprinterSeries",
  populor: false,
  imgSrc: 'OKI PRO9542dn',
  printerModel: 'PRO9542dn',
  cartridge: [
    'OKI PRO9431 PRO9541 PRO9542 Black Toner Cartridge',
    'OKI PRO9431 PRO9541 PRO9542 Cyan Toner Cartridge',
    'OKI PRO9431 PRO9541 PRO9542 Magenta Toner Cartridge',
    'OKI PRO9431 PRO9541 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'OKI B401',
  printerModel: 'B401',
  cartridge: [
    'OKI B401 MB451 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'OKI B401d',
  printerModel: 'B401d',
  cartridge: [
    'OKI B401 MB451 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: true,
  imgSrc: 'OKI B401dn',
  printerModel: 'B401dn',
  cartridge: [
    'OKI B401 MB451 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: true,
  imgSrc: 'OKI B410',
  printerModel: 'B410',
  cartridge: [
    'OKI B410 B430 B440 MB470 MB480 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'OKI B411',
  printerModel: 'B411',
  cartridge: [
    'OKI B411 B431 MB471 MB491 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'OKI B412',
  printerModel: 'B412',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'OKI B412dn',
  printerModel: 'B412dn',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "monoprinterSeries",
  populor: false,
  imgSrc: 'OKI B430',
  printerModel: 'B430',
  cartridge: [
    'OKI B410 B430 B440 MB470 MB480 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI C3520MFP',
  printerModel: 'C3520MFP',
  cartridge: [
    'OKI C3520 C3530 Black Toner Cartridge',
    'OKI C3520 C3530 Cyan Toner Cartridge',
    'OKI C3520 C3530 Magenta Toner Cartridge',
    'OKI C3520 C3530 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI C3530MFP',
  printerModel: 'C3530MFP',
  cartridge: [
    'OKI C3520 C3530 Black Toner Cartridge',
    'OKI C3520 C3530 Cyan Toner Cartridge',
    'OKI C3520 C3530 Magenta Toner Cartridge',
    'OKI C3520 C3530 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: true,
  imgSrc: 'OKI C5510MFP',
  printerModel: 'C5510MFP',
  cartridge: [
    'OKI C5250 C5450 C5510 C5540 Black Toner Cartridge',
    'OKI C5250 C5450 C5510 C5540 Cyan Toner Cartridge',
    'OKI C5250 C5450 C5510 C5540 Magenta Toner Cartridge',
    'OKI C5250 C5450 C5510 C5540 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: true,
  imgSrc: 'OKI C5540MFP',
  printerModel: 'C5540MFP',
  cartridge: [
    'OKI C5250 C5450 C5510 C5540 Black Toner Cartridge',
    'OKI C5250 C5450 C5510 C5540 Cyan Toner Cartridge',
    'OKI C5250 C5450 C5510 C5540 Magenta Toner Cartridge',
    'OKI C5250 C5450 C5510 C5540 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI C5550MFP',
  printerModel: 'C5550MFP',
  cartridge: [
    'OKI C5800 C5900 C5550 Black Toner Cartridge',
    'OKI C5800 C5900 C5550 Cyan Toner Cartridge',
    'OKI C5800 C5900 C5550 Magenta Toner Cartridge',
    'OKI C5800 C5900 C5550 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI ES3640eMFP',
  printerModel: 'ES3640eMFP',
  cartridge: [
    'OKI ES3640 Black Toner Cartridge',
    'OKI ES3640 Cyan Toner Cartridge',
    'OKI ES3640 Magenta Toner Cartridge',
    'OKI ES3640 Yellow Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB451',
  printerModel: 'MB451',
  cartridge: [
    'OKI B401 MB451 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB451dnw',
  printerModel: 'MB451dnw',
  cartridge: [
    'OKI B401 MB451 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB451W',
  printerModel: 'MB451W',
  cartridge: [
    'OKI B401 MB451 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB470',
  printerModel: 'MB470',
  cartridge: [
    'OKI B410 B430 B440 MB470 MB480 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB471',
  printerModel: 'MB471',
  cartridge: [
    'OKI B411 B431 MB471 MB491 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB471dn',
  printerModel: 'MB471dn',
  cartridge: [
    'OKI B411 B431 MB471 MB491 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB472',
  printerModel: 'MB472',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB472dnw',
  printerModel: 'MB472dnw',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB480',
  printerModel: 'MB480',
  cartridge: [
    'OKI B410 B430 B440 MB470 MB480 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB491',
  printerModel: 'MB491',
  cartridge: [
    'OKI B411 B431 MB471 MB491 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB491dn',
  printerModel: 'MB491dn',
  cartridge: [
    'OKI B411 B431 MB471 MB491 Toner Cartridge'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB492',
  printerModel: 'MB492',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB492dn',
  printerModel: 'MB492dn',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB562',
  printerModel: 'MB562',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield'
  ]
},
{
  brand: "OKI",
  type: "toner",
  series: "multifunctionSeries",
  populor: false,
  imgSrc: 'OKI MB562dnw',
  printerModel: 'MB562dnw',
  cartridge: [
    'OKI B412 B432 B512 MB472 MB492 MB562 Toner Cartridge High Yield']
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MB760',
    printerModel: 'MB760',
    cartridge: [
      'OKI B721 B731 MB760 MB770 Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MB760dn',
    printerModel: 'MB760dn',
    cartridge: [
      'OKI B721 B731 MB760 MB770 Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MB770',
    printerModel: 'MB770',
    cartridge: [
      'OKI B721 B731 MB760 MB770 Toner Cartridge',
      ''
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MC852dn',
    printerModel: 'MC852dn',
    cartridge: [
      'OKI MC852 Black Toner Cartridge',
      'OKI MC852 Cyan Toner Cartridge',
      'OKI MC852 Magenta Toner Cartridge',
      'OKI MC852 Yellow Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MC853',
    printerModel: 'MC853',
    cartridge: [
      'OKI MC853 MC853dn Black Toner Cartridge',
      'OKI MC853 MC853dn Cyan Toner Cartridge',
      'OKI MC853 MC853dn Magenta Toner Cartridge',
      'OKI MC853 MC853dn Yellow Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MC853dn',
    printerModel: 'MC853dn',
    cartridge: [
      'OKI MC853 MC853dn Black Toner Cartridge',
      'OKI MC853 MC853dn Cyan Toner Cartridge',
      'OKI MC853 MC853dn Magenta Toner Cartridge',
      'OKI MC853 MC853dn Yellow Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MC860',
    printerModel: 'MC860',
    cartridge: [
      'OKI MC860 Black Toner Cartridge',
      'OKI MC860 Cyan Toner Cartridge',
      'OKI MC860 Magenta Toner Cartridge',
      'OKI MC860 Yellow Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MC862',
    printerModel: 'MC862',
    cartridge: [
      'OKI MC862 Black Toner Cartridge',
      'OKI MC862 Cyan Toner Cartridge',
      'OKI MC862 Magenta Toner Cartridge',
      'OKI MC862 Yellow Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MC862cdxn',
    printerModel: 'MC862cdxn',
    cartridge: [
      'OKI MC862 Black Toner Cartridge',
      'OKI MC862 Cyan Toner Cartridge',
      'OKI MC862 Magenta Toner Cartridge',
      'OKI MC862 Yellow Toner Cartridge'
    ]
  },
  {
    brand: "OKI",
    type: "toner",
    series: "multifunctionSeries",
    populor: false,
    imgSrc: 'OKI MC862dn',
    printerModel: 'MC862dn',
    cartridge: [
      'OKI MC862 Black Toner Cartridge',
      'OKI MC862 Cyan Toner Cartridge',
      'OKI MC862 Magenta Toner Cartridge',
      'OKI MC862 Yellow Toner Cartridge'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicDPSeries",
    populor: true,
    imgSrc: 'Panasonic DP-C305 DPC305',
    printerModel: 'DP-C305',
    cartridge: [
      'Panasonic DQ-TUY28K Black Toner Cartridge DP-C265 DP-C305',
      'Panasonic DQ-TUV20C Cyan Toner Cartridge DP-C305 DP-C405',
      'Panasonic DQ-TUV20M Magenta Toner Cartridge DP-C305 DP-C405',
      'Panasonic DQ-TUV20Y Yellow Toner Cartridge DP-C305 DP-C405'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicDPSeries",
    populor: false,
    imgSrc: ' Panasonic DP-C322ST DPC322ST',
    printerModel: 'DP-C322ST',
    cartridge: [
      'Panasonic DQ-TUN28K Black Toner Cartridge DP-C262 DP-C322',
      'Panasonic DQ-TUN20C Cyan Toner Cartridge DP-C262 DP-C322',
      'Panasonic DQ-TUN20M Magenta Toner Cartridge DP-C262 DP-C322',
      'Panasonic DQ-TUN20Y Yellow Toner Cartridge DP-C262 DP-C322'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicDPSeries",
    populor: true,
    imgSrc: ' Panasonic DP-C323 DPC323',
    printerModel: 'DP-C323',
    cartridge: [
      'Panasonic DQ-TUS28K Black Toner Cartridge DP-C264 DP-C354',
      'Panasonic DQ-TUS20C Cyan Toner Cartridge DP-C264 DP-C354',
      'Panasonic DQ-TUS20M Magenta Toner Cartridge DP-C264 DP-C354',
      'Panasonic DQ-TUS20Y Yellow Toner Cartridge DP-C264 DP-C354'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicDPSeries",
    populor: false,
    imgSrc: 'Panasonic DP-C354CPS DPC354CPS',
    printerModel: 'DP-C354CPS',
    cartridge: [
      'Panasonic DQ-TUS28K Black Toner Cartridge DP-C264 DP-C354',
      'Panasonic DQ-TUS20C Cyan Toner Cartridge DP-C264 DP-C354',
      'Panasonic DQ-TUS20M Magenta Toner Cartridge DP-C264 DP-C354',
      'Panasonic DQ-TUS20Y Yellow Toner Cartridge DP-C264 DP-C354'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicDPSeries",
    populor: false,
    imgSrc: 'Panasonic DP-C405 DPC405',
    printerModel: 'DP-C405',
    cartridge: [
      'Panasonic DQ-TUW28K Black Toner Cartridge DP-C405',
      'Panasonic DQ-TUV20C Cyan Toner Cartridge DP-C305 DP-C405',
      'Panasonic DQ-TUV20M Magenta Toner Cartridge DP-C305 DP-C405',
      'Panasonic DQ-TUV20Y Yellow Toner Cartridge DP-C305 DP-C405'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: true,
    imgSrc: 'Panasonic FP-D305 FPD305',
    printerModel: 'FP-D305',
    cartridge: [
      'Panasonic FQ-TL20PU Toner Cartridge FP-D250 FP-D305 FP-D350 FP-D355'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: false,
    imgSrc: ' Panasonic FP-D350 FPD350',
    printerModel: 'FP-D350',
    cartridge: [
      'Panasonic FQ-TL20PU Toner Cartridge FP-D250 FP-D305 FP-D350 FP-D355'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: true,
    imgSrc: 'Panasonic FP-D355 FPD355',
    printerModel: 'FP-D355',
    cartridge: [
      'Panasonic FQ-TL20PU Toner Cartridge FP-D250 FP-D305 FP-D350 FP-D355'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: true,
    imgSrc: 'Panasonic FP-D450 FPD450',
    printerModel: 'FP-D450',
    cartridge: [
      'Panasonic FQ-TL24 Toner Cartridge FP-D450 FP-D455 FP-D600 FP-D605'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: true,
    imgSrc: 'Panasonic FP-D455 FPD455',
    printerModel: 'FP-D455',
    cartridge: [
      'Panasonic FQ-TL24 Toner Cartridge FP-D450 FP-D455 FP-D600 FP-D605'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: true,
    imgSrc: 'Panasonic FP-D600 FPD600',
    printerModel: 'FP-D600',
    cartridge: [
      'Panasonic FQ-TL24 Toner Cartridge FP-D450 FP-D455 FP-D600 FP-D605'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: true,
    imgSrc: 'Panasonic FP-D605 FPD605',
    printerModel: 'FP-D605',
    cartridge: [
      'Panasonic FQ-TL24 Toner Cartridge FP-D450 FP-D455 FP-D600 FP-D605'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicFPSeries",
    populor: true,
    imgSrc: 'Panasonic KX-FP225 KXFP225',
    printerModel: 'KX-FP225',
    cartridge: [
      'Panasonic KX-FA52E Replacement Film KX-FP-205 KX-FP-215 KX-FP-225 KX-FP-255'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicKXSeries",
    populor: true,
    imgSrc: 'Panasonic KX-MC6260CX KXMC6260CX',
    printerModel: 'KX-MC6260CX',
    cartridge: [
      'Panasonic KX-FATK509E Black Toner Cartridge KX-MC6260',
      'Panasonic KX-FATC506E Cyan Toner Cartridge KX-MC6260',
      'Panasonic KX-FATM507E Magenta Toner Cartridge KX-MC6260',
      'Panasonic KX-FATY508E Yellow Toner Cartridge KX-MC6260'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicKXSeries",
    populor: false,
    imgSrc: 'Panasonic KX-P6300 KXP6300',
    printerModel: 'KX-P6300',
    cartridge: [
      'Panasonic KX-P459 Toner Cartridge KX-P6500 KX-P6510'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicKXSeries",
    populor: true,
    imgSrc: ' Panasonic KX-P6500 KXP6500',
    printerModel: 'KX-P6500',
    cartridge: [
      'Panasonic KX-P459 Toner Cartridge KX-P6500 KX-P6510'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicKXSeries",
    populor: false,
    imgSrc: 'Panasonic KX-P6510 KXP6510',
    printerModel: 'KX-P6510',
    cartridge: [
      'Panasonic KX-P459 Toner Cartridge KX-P6500 KX-P6510'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicKXSeries",
    populor: false,
    imgSrc: ' Panasonic KX-P7100 KXP7100',
    printerModel: 'KX-P7100',
    cartridge: [
      'Panasonic KX-PDP8 Toner Cartridge KX-P7100'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicKXSeries",
    populor: false,
    imgSrc: 'Panasonic KX-PS600 KXPS600',
    printerModel: 'KX-PS600',
    cartridge: [
      'Panasonic KX-P459 Toner Cartridge KX-P6500 KX-P6510'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicUFSeries",
    populor: true,
    imgSrc: 'Panasonic UF-770 UF770',
    printerModel: 'UF-770',
    cartridge: [
      'Panasonic UG-3313 Toner Cartridge UF-550 UF-560'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicUFSeries",
    populor: false,
    imgSrc: 'Panasonic UF-880 UF880',
    printerModel: 'UF-880',
    cartridge: [
      'Panasonic UG-3313 Toner Cartridge UF-550 UF-560'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicUFSeries",
    populor: true,
    imgSrc: 'Panasonic UF-880AL UF880AL',
    printerModel: 'UF-880AL',
    cartridge: [
      'Panasonic UG-3313 Toner Cartridge UF-550 UF-560'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicUFSeries",
    populor: false,
    imgSrc: ' Panasonic UF-885 UF885',
    printerModel: 'UF-885',
    cartridge: [
      'Panasonic UG-3313 Toner Cartridge UF-550 UF-560'
    ]
  },
  {
    brand: "Panasonic",
    type: "toner",
    series: "panasonicUFSeries",
    populor: false,
    imgSrc: 'Panasonic UF-895 UF895',
    printerModel: 'UF-895',
    cartridge: [
      'Panasonic UG-3313 Toner Cartridge UF-550 UF-560'
    ]
  },
  {
    brand: "Ricoh",
    type: "ink",
    series: "ricohAficioGX",
    populor: true,
    imgSrc: 'Ricoh Aficio GX-5050N Aficio GX5050N',
    printerModel: 'Aficio GX-5050N',
    cartridge: [
      'Ricoh Aficio GX-2500 GX-3000 GX-3050 GX-5050 GX-7000 Black Gel Ink Cartridge GC-21K',
      'Ricoh Aficio GX-2500 GX-3000 GX-3050 GX-5050 GX-7000 Cyan Gel Ink Cartridge GC-21C',
      'Ricoh Aficio GX-2500 GX-3000 GX-3050 GX-5050 GX-7000 Magenta Gel Ink Cartridge GC-21M',
      'Ricoh Aficio GX-2500 GX-3000 GX-3050 GX-5050 GX-7000 Yellow Gel Ink Cartridge GC-21Y',
      'Ricoh Aficio GX-5050 Black Gel Ink Cartridge High Yield GC-21HYK',
      'Ricoh Aficio GX-5050 Cyan Gel Ink Cartridge High Yield GC-21HYC',
      'Ricoh Aficio GX-5050 Magenta Gel Ink Cartridge High Yield GC-21HYM',
      'Ricoh Aficio GX-5050 Yellow Gel Ink Cartridge High Yield GC-21HYY'
    ]
  },
  {
    brand: "Ricoh",
    type: "ink",
    series: "ricohAficioGX",
    populor: false,
    imgSrc: ' Ricoh Aficio GX-5550N Aficio GX5550N',
    printerModel: 'Aficio GX-5550N',
    cartridge: [
      'Ricoh Aficio GX-2600 GX-3300 GX-3350 GX-5550 GX7700 Black Gel Ink Cartridge GC-31K',
      'Ricoh Aficio GX-2600 GX-3300 GX-3350 GX-5550 GX7700 Cyan Gel Ink Cartridge GC-31C',
      'Ricoh Aficio GX-2600 GX-3300 GX-3350 GX-5550 GX7700 Magenta Gel Ink Cartridge GC-31M',
      'Ricoh Aficio GX-2600 GX-3300 GX-3350 GX-5550 GX7700 Yellow Gel Ink Cartridge GC-31Y'
    ]
  },
  {
    brand: "Ricoh",
    type: "ink",
    series: "ricohAficioSG",
    populor: false,
    imgSrc: 'Ricoh Aficio SG-3110DNW Aficio SG3110DNW',
    printerModel: 'Aficio SG-3110DNW',
    cartridge: [
      'Ricoh Aficio SG-3110 SG-3110DNW Black Gel Ink Cartridge GC-41K',
      'Ricoh Aficio SG-3110 SG-3110DNW Cyan Gel Ink Cartridge GC-41C',
      'Ricoh Aficio SG-3110 SG-3110DNW Magenta Gel Ink Cartridge GC-41M',
      'Ricoh Aficio SG-3110 SG-3110DNW Yellow Gel Ink Cartridge GC-41Y'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficio",
    populor: true,
    imgSrc: 'Ricoh Aficio 6010C',
    printerModel: 'Aficio 6010C',
    cartridge: [
      'Ricoh Aficio 6010C 6110C 6513C Black Toner Cartridge TYPE-L1B',
      'Ricoh Aficio 6010C 6110C 6513C Cyan Toner Cartridge TYPE-L1C',
      'Ricoh Aficio 6010C 6110C 6513C Magenta Toner Cartridge TYPE-L1M',
      'Ricoh Aficio 6010C 6110C 6513C Yellow Toner Cartridge TYPE-L1Y'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficio",
    populor: false,
    imgSrc: 'Ricoh Aficio 6110C',
    printerModel: 'Aficio 6110C',
    cartridge: [
      'Ricoh Aficio 6010C 6110C 6513C Black Toner Cartridge TYPE-L1B',
      'Ricoh Aficio 6010C 6110C 6513C Cyan Toner Cartridge TYPE-L1C',
      'Ricoh Aficio 6010C 6110C 6513C Magenta Toner Cartridge TYPE-L1M',
      'Ricoh Aficio 6010C 6110C 6513C Yellow Toner Cartridge TYPE-L1Y'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficio",
    populor: true,
    imgSrc: 'Ricoh Aficio 650',
    printerModel: 'Aficio 650',
    cartridge: [
      'Ricoh Aficio 550 650 Black Toner Cartridge TYPE-5200D'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficio",
    populor: false,
    imgSrc: 'Ricoh Aficio 6513C',
    printerModel: 'Aficio 6513C',
    cartridge: [
      'Ricoh Aficio 6010C 6110C 6513C Black Toner Cartridge TYPE-L1B',
      'Ricoh Aficio 6010C 6110C 6513C Cyan Toner Cartridge TYPE-L1C',
      'Ricoh Aficio 6010C 6110C 6513C Magenta Toner Cartridge TYPE-L1M',
      'Ricoh Aficio 6010C 6110C 6513C Yellow Toner Cartridge TYPE-L1Y'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficio",
    populor: false,
    imgSrc: ' Ricoh Aficio 700',
    printerModel: 'Aficio 700',
    cartridge: [
      'Ricoh Aficio 551 700 1055 Toner Cartridge TYPE-5305D'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficio",
    populor: false,
    imgSrc: 'Ricoh Aficio 850',
    printerModel: 'Aficio 850',
    cartridge: [
      'Ricoh Aficio 850 1050 Toner Cartridge TYPE-8200D'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficio",
    populor: false,
    imgSrc: 'Ricoh Aficio BP20N',
    printerModel: 'Aficio BP20N',
    cartridge: [
      'Ricoh Aficio BP20N Black Toner Cartridge BP22'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioAP",
    populor: true,
    imgSrc: 'Ricoh Aficio AP-600N Aficio AP600N',
    printerModel: 'Aficio AP-600N',
    cartridge: [
      'Ricoh Aficio AP-2600 AP-2610 AP-600 AP-610 Toner Cartridge TYPE-215'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioAP",
    populor: false,
    imgSrc: ' Ricoh Aficio AP-610N Aficio AP610N',
    printerModel: 'Aficio AP-610N',
    cartridge: [
      'Ricoh Aficio AP-2600 AP-2610 AP-600 AP-610 Toner Cartridge TYPE-215'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioAP",
    populor: true,
    imgSrc: 'Ricoh Aficio AP-900 Aficio AP900',
    printerModel: 'Aficio AP-900',
    cartridge: [
      'Ricoh Aficio MP-5500 MP-6000 MP-6500 MP-7000 Toner Cartridge TYPE-6210D'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioCL",
    populor: true,
    imgSrc: 'Ricoh Aficio CL-7100 Aficio CL7100',
    printerModel: 'Aficio CL-7100',
    cartridge: [
      'Ricoh Aficio CL-7000 CL-7100 AP-3800C Black Toner Cartridge TYPE-205B',
      'Ricoh Aficio CL-7000 CL-7100 AP-3800C Cyan Toner Cartridge TYPE-105C',
      'Ricoh Aficio CL-7000 CL-7100 AP-3800C Magenta Toner Cartridge TYPE-105M',
      'Ricoh Aficio CL-7000 CL-7100 AP-3800C Yellow Toner Cartridge TYPE-105Y'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioCL",
    populor: false,
    imgSrc: 'Ricoh Aficio CL-7200 Aficio CL7200',
    printerModel: 'Aficio CL-7200',
    cartridge: [
      'Ricoh Aficio CL-7200 CL-7300 Black Toner Cartridge TYPE-260B',
      'Ricoh Aficio CL-7200 CL-7300 Cyan Toner Cartridge TYPE-260C',
      'Ricoh Aficio CL-7200 CL-7300 Magenta Toner Cartridge TYPE-260M',
      'Ricoh Aficio CL-7200 CL-7300 Yellow Toner Cartridge TYPE-260Y'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioMP",
    populor: true,
    imgSrc: ' Ricoh Aficio MP-C6003SP Aficio MPC6003SP',
    printerModel: 'Aficio MP-C6003SP',
    cartridge: [
      'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Black Toner Cartridge TYPE-C6003SB',
      'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Cyan Toner Cartridge TYPE-C6003SC',
      'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Magenta Toner Cartridge TYPE-C6003SM',
      'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Yellow Toner Cartridge TYPE-C6003SY'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioMP",
    populor: false,
    imgSrc: ' Ricoh Aficio MP-C6501 Aficio MPC6501',
    printerModel: 'Aficio MP-C6501',
    cartridge: [
      'Ricoh Aficio MP-C6501 MP-C7501 Black Toner Cartridge TYPE-C7501SB',
      'Ricoh Aficio MP-C6501 MP-C7501 Cyan Toner Cartridge TYPE-C7501SC',
      'Ricoh Aficio MP-C6501 MP-C7501 Magenta Toner Cartridge TYPE-C7501SM',
      'Ricoh Aficio MP-C6501 MP-C7501 Yellow Toner Cartridge TYPE-C7501SY'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioMP",
    populor: true,
    imgSrc: 'Ricoh Aficio MP-C6502SP Aficio MPC6502SP',
    printerModel: 'Aficio MP-C6502SP',
    cartridge: [
      'Ricoh Aficio MP-C6502 MP-C8002 Black Toner Cartridge TYPE-C8002SB',
      'Ricoh Aficio MP-C6502 MP-C8002 Cyan Toner Cartridge TYPE-C8002SC',
      'Ricoh Aficio MP-C6502 MP-C8002 Magenta Toner Cartridge TYPE-C8002SM',
      'Ricoh Aficio MP-C6502 MP-C8002 Yellow Toner Cartridge TYPE-C8002SY'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioMP",
    populor: false,
    imgSrc: ' Ricoh Aficio MP-C7500 Aficio MPC7500',
    printerModel: 'Aficio MP-C7500',
    cartridge: [
      'Ricoh Aficio MP-C6000 MP-C7500 Black Toner Cartridge TYPE-C7500EB',
      'Ricoh Aficio MP-C6000 MP-C7500 Cyan Toner Cartridge TYPE-C7500EC',
      'Ricoh Aficio MP-C6000 MP-C7500 Magenta Toner Cartridge TYPE-C7500EM',
      'Ricoh Aficio MP-C6000 MP-C7500 Yellow Toner Cartridge TYPE-C7500EY'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioMP",
    populor: false,
    imgSrc: 'Ricoh Aficio MP-C7501 Aficio MPC7501',
    printerModel: 'Aficio MP-C7501',
    cartridge: [
      'Ricoh Aficio MP-C6501 MP-C7501 Black Toner Cartridge TYPE-C7501SB',
      'Ricoh Aficio MP-C6501 MP-C7501 Cyan Toner Cartridge TYPE-C7501SC',
      'Ricoh Aficio MP-C6501 MP-C7501 Magenta Toner Cartridge TYPE-C7501SM',
      'Ricoh Aficio MP-C6501 MP-C7501 Yellow Toner Cartridge TYPE-C7501SY'
    ]
  },
  {
    brand: "Ricoh",
    type: "toner",
    series: "ricohAficioMP",
    populor: false,
    imgSrc: ' Ricoh Aficio MP-C8002SP Aficio MPC8002SP',
    printerModel: 'Aficio MP-C8002SP',
    cartridge: [
      'Ricoh Aficio MP-C6502 MP-C8002 Black Toner Cartridge TYPE-C8002SB',
      'Ricoh Aficio MP-C6502 MP-C8002 Cyan Toner Cartridge TYPE-C8002SC',
      'Ricoh Aficio MP-C6502 MP-C8002 Magenta Toner Cartridge TYPE-C8002SM',
    'Ricoh Aficio MP-C6502 MP-C8002 Yellow Toner Cartridge TYPE-C8002SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-2554 MP2554',
  printerModel: 'MP-2554',
  cartridge: [
    'Ricoh MP3554 MP-3554 Toner Cartridge TYPE-MP3554S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-3054 MP3054',
  printerModel: 'MP-3054',
  cartridge: [
    'Ricoh MP3554 MP-3554 Toner Cartridge TYPE-MP3554S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-3554 MP3554',
  printerModel: 'MP-3554',
  cartridge: [
    'Ricoh MP3554 MP-3554 Toner Cartridge TYPE-MP3554S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-401SPF MP401SPF',
  printerModel: 'MP-401SPF',
  cartridge: [
    'Ricoh Aficio MP401SPF MP-401SPF Toner Cartridge TYPE-MP401S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: ' Ricoh MP-402SPF MP402SPF',
  printerModel: 'MP-402SPF',
  cartridge: [
    'Ricoh Aficio MP401SPF MP-401SPF Toner Cartridge TYPE-MP401S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-4054 MP4054',
  printerModel: 'MP-4054',
  cartridge: [
    'Ricoh MP4054 MP5054 MP6054 Toner Cartridge TYPE-MP4054S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: ' Ricoh MP-5054 MP5054',
  printerModel: 'MP-5054',
  cartridge: [
    'Ricoh MP4054 MP5054 MP6054 Toner Cartridge TYPE-MP4054S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-6054 MP6054',
  printerModel: 'MP-6054',
  cartridge: [
    'Ricoh MP4054 MP5054 MP6054 Toner Cartridge TYPE-MP4054S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-C2004 MPC2004',
  printerModel: 'MP-C2004',
  cartridge: [
    'Ricoh Aficio MP-C2003 MP-C2503 Black Toner Cartridge TYPE-C2503SB',
    'Ricoh Aficio MP-C2003 MP-C2503 Cyan Toner Cartridge TYPE-C2503SC',
    'Ricoh Aficio MP-C2003 MP-C2503 Magenta Toner Cartridge TYPE-C2503SM',
    'Ricoh Aficio MP-C2003 MP-C2503 Yellow Toner Cartridge TYPE-C2503SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-C2504 MPC2504',
  printerModel: 'MP-C2504',
  cartridge: [
    'Ricoh Aficio MP-C2003 MP-C2503 Black Toner Cartridge TYPE-C2503SB',
    'Ricoh Aficio MP-C2003 MP-C2503 Cyan Toner Cartridge TYPE-C2503SC',
    'Ricoh Aficio MP-C2003 MP-C2503 Magenta Toner Cartridge TYPE-C2503SM',
    'Ricoh Aficio MP-C2003 MP-C2503 Yellow Toner Cartridge TYPE-C2503SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: ' Ricoh MP-C3004 MPC3004',
  printerModel: 'MP-C3004',
  cartridge: [
    'Ricoh Aficio MP-C3003 MP-C3503 Black Toner Cartridge TYPE-C3503SB',
    'Ricoh Aficio MP-C3003 MP-C3503 Cyan Toner Cartridge TYPE-C3503SC',
    'Ricoh Aficio MP-C3003 MP-C3503 Magenta Toner Cartridge TYPE-C3503SM',
    'Ricoh Aficio MP-C3003 MP-C3503 Yellow Toner Cartridge TYPE-C3503SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-C306 MPC306',
  printerModel: 'MP-C306',
  cartridge: [
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Black Toner Cartridge TYPE-C306SB',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Cyan Toner Cartridge TYPE-C306SC',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Magenta Toner Cartridge TYPE-C306SM',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Yellow Toner Cartridge TYPE-C306SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-C307 MPC307',
  printerModel: 'MP-C307',
  cartridge: [
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Black Toner Cartridge TYPE-C306SB',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Cyan Toner Cartridge TYPE-C306SC',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Magenta Toner Cartridge TYPE-C306SM',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Yellow Toner Cartridge TYPE-C306SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: ' Ricoh MP-C3504 MPC3504',
  printerModel: 'MP-C3504',
  cartridge: [
    'Ricoh Aficio MP-C3003 MP-C3503 Black Toner Cartridge TYPE-C3503SB',
    'Ricoh Aficio MP-C3003 MP-C3503 Cyan Toner Cartridge TYPE-C3503SC',
    'Ricoh Aficio MP-C3003 MP-C3503 Magenta Toner Cartridge TYPE-C3503SM',
    'Ricoh Aficio MP-C3003 MP-C3503 Yellow Toner Cartridge TYPE-C3503SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: ' Ricoh MP-C406 MPC406',
  printerModel: 'MP-C406',
  cartridge: [
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Black Toner Cartridge TYPE-C306SB',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Cyan Toner Cartridge TYPE-C306SC',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Magenta Toner Cartridge TYPE-C306SM',
    'Ricoh Aficio MP-C306 MP-C307 MP-C406 Yellow Toner Cartridge TYPE-C306SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: 'Ricoh MP-C4504 MPC4504',
  printerModel: 'MP-C4504',
  cartridge: [
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Black Toner Cartridge TYPE-C6003SB',
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Cyan Toner Cartridge TYPE-C6003SC',
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Magenta Toner Cartridge TYPE-C6003SM',
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Yellow Toner Cartridge TYPE-C6003SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioMP",
  populor: true,
  imgSrc: ' Ricoh MP-C6004 MPC6004',
  printerModel: 'MP-C6004',
  cartridge: [
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Black Toner Cartridge TYPE-C6003SB',
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Cyan Toner Cartridge TYPE-C6003SC',
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Magenta Toner Cartridge TYPE-C6003SM',
    'Ricoh Aficio MP-C4503 MP-C5503 MP-C6003 Yellow Toner Cartridge TYPE-C6003SY'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: true,
  imgSrc: 'Ricoh Aficio SP-C811DN Aficio SPC811DN',
  printerModel: 'Aficio SP-C811DN',
  cartridge: [
    'Ricoh Aficio SP-C811 SP-C811DN Black Toner Cartridge TYPE-SPC811B',
    'Ricoh Aficio SP-C811 SP-C811DN Cyan Toner Cartridge TYPE-SPC811C',
    'Ricoh Aficio SP-C811 SP-C811DN Magenta Toner Cartridge TYPE-SPC811M',
    'Ricoh Aficio SP-C811 SP-C811DN Yellow Toner Cartridge TYPE-SPC811Y'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: ' Ricoh Aficio SP-C820DN Aficio SPC820DN',
  printerModel: 'Aficio SP-C820DN',
  cartridge: [
    'Ricoh Aficio SP-C820 SP-C821 Black Toner Cartridge TYPE-SPC820B',
    'Ricoh Aficio SP-C820 SP-C821 Cyan Toner Cartridge TYPE-SPC820C',
    'Ricoh Aficio SP-C820 SP-C821 Magenta Toner Cartridge TYPE-SPC820M',
    'Ricoh Aficio SP-C820 SP-C821 Yellow Toner Cartridge TYPE-SPC820Y'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: true,
  imgSrc: 'Ricoh Aficio SP-C821DN Aficio SPC821DN',
  printerModel: 'Aficio SP-C821DN',
  cartridge: [
    'Ricoh Aficio SP-C820 SP-C821 Black Toner Cartridge TYPE-SPC820B',
    'Ricoh Aficio SP-C820 SP-C821 Cyan Toner Cartridge TYPE-SPC820C',
    'Ricoh Aficio SP-C820 SP-C821 Magenta Toner Cartridge TYPE-SPC820M',
    'Ricoh Aficio SP-C820 SP-C821 Yellow Toner Cartridge TYPE-SPC820Y'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh Aficio SP-C830DN Aficio SPC830DN',
  printerModel: 'Aficio SP-C830DN',
  cartridge: [
    'Ricoh Aficio SP-C830 SP-C830DN Black Toner Cartridge TYPE-SPC830B',
    'Ricoh Aficio SP-C830 SP-C830DN Cyan Toner Cartridge TYPE-SPC830C',
    'Ricoh Aficio SP-C830 SP-C830DN Magenta Toner Cartridge TYPE-SPC830M',
    'Ricoh Aficio SP-C830 SP-C830DN Yellow Toner Cartridge TYPE-SPC830Y'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-100E SP100E',
  printerModel: 'SP-100E',
  cartridge: [
    'Ricoh Aficio SP-100E SP-112 Toner Cartridge TYPE-SP100LS'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: ' Ricoh SP-112 SP112',
  printerModel: 'SP-112',
  cartridge: [
    'Ricoh Aficio SP-100E SP-112 Toner Cartridge TYPE-SP100LS'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: ' Ricoh SP-213NW SP213NW',
  printerModel: 'SP-213NW',
  cartridge: [
    'Ricoh Aficio SP-201N SP-204SF Toner Cartridge TYPE-SP201HS'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-213SFNW SP213SFNW',
  printerModel: 'SP-213SFNW',
  cartridge: [
    'Ricoh Aficio SP-201N SP-204SF Toner Cartridge TYPE-SP201HS'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-311DNW SP311DNW',
  printerModel: 'SP-311DNW',
  cartridge: [
    'Ricoh Aficio SP-311DNW SP-311SFNW Toner Cartridge TYPE-SP311HS'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-311SFNW SP311SFNW',
  printerModel: 'SP-311SFNW',
  cartridge: [
    'Ricoh Aficio SP-311DNW SP-311SFNW Toner Cartridge TYPE-SP311HS'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: ' Ricoh SP-3600DN SP3600DN',
  printerModel: 'SP-3600DN',
  cartridge: [
    'Ricoh SP-3600 SP-3610 Toner Cartridge TYPE-SP3600S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-3600SF SP3600SF',
  printerModel: 'SP-3600SF',
  cartridge: [
    'Ricoh SP-3600 SP-3610 Toner Cartridge TYPE-SP3600S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-3610SF SP3610SF',
  printerModel: 'SP-3610SF',
  cartridge: [
    'Ricoh SP-3600 SP-3610 Toner Cartridge TYPE-SP3600S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-4510DN SP4510DN',
  printerModel: 'SP-4510DN',
  cartridge: [
    'Ricoh SP4510DN SP-4510DN Toner Cartridge TYPE-SP4500HS'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-4520DN SP4520DN',
  printerModel: 'SP-4520DN',
  cartridge: [
    'Ricoh Aficio MP401SPF MP-401SPF Toner Cartridge TYPE-MP401S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-6430DN SP6430DN',
  printerModel: 'SP-6430DN',
  cartridge: [
    'Ricoh SP6430DN SP-6430DN Toner Cartridge TYPE-SP6430S'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-C340DN SPC340DN',
  printerModel: 'SP-C340DN',
  cartridge: [
    'Ricoh Aficio SP-C340 SP-C340DN Cyan Toner Cartridge TYPE-SPC340SC',
    'Ricoh Aficio SP-C340 SP-C340DN Magenta Toner Cartridge TYPE-SPC340SM',
    'Ricoh Aficio SP-C340 SP-C340DN Yellow Toner Cartridge TYPE-SPC340SY',
    'Ricoh Aficio SP-C340 SP-C340DN Black Toner Cartridge TYPE-SPC340SB'
  ]
},
{
  brand: "Ricoh",
  type: "toner",
  series: "ricohAficioSP",
  populor: false,
  imgSrc: 'Ricoh SP-C440DN SPC440DN',
  printerModel: 'SP-C440DN',
  cartridge: [
    'Ricoh Aficio SP-C430 SP-C430DN Cyan Toner Cartridge TYPE-SPC430C',
    'Ricoh Aficio SP-C430 SP-C430DN Magenta Toner Cartridge TYPE-SPC430M',
    'Ricoh Aficio SP-C430 SP-C430DN Yellow Toner Cartridge TYPE-SPC430Y'
  ]
},
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX3305FN CLX-3305FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Black Toner Cartridge CLT-K406S SU120A',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Cyan Toner Cartridge CLT-C406S ST986A ',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Magenta Toner Cartridge CLT-M406S SU254A ',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Yellow Toner Cartridge CLT-Y406S SU464A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX3305FW CLX-3305FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Black Toner Cartridge CLT-K406S SU120A',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Cyan Toner Cartridge CLT-C406S ST986A ',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Magenta Toner Cartridge CLT-M406S SU254A ',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Yellow Toner Cartridge CLT-Y406S SU464A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: true,
    imgSrc: 'Samsung CLX4170 CLX-4170',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Black Toner Cartridge CLT-K504S SU160A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Cyan Toner Cartridge CLT-C504S SU027A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Magenta Toner Cartridge CLT-M504S SU294A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Yellow Toner Cartridge CLT-Y504S SU504A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: true,
    imgSrc: 'Samsung CLX4195FN CLX-4195FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Black Toner Cartridge CLT-K504S SU160A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Cyan Toner Cartridge CLT-C504S SU027A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Magenta Toner Cartridge CLT-M504S SU294A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Yellow Toner Cartridge CLT-Y504S SU504A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX4195FW CLX-4195FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Black Toner Cartridge CLT-K504S SU160A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Cyan Toner Cartridge CLT-C504S SU027A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Magenta Toner Cartridge CLT-M504S SU294A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Yellow Toner Cartridge CLT-Y504S SU504A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6200FX CLX-6200FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Black Toner Cartridge CLP-K660B ST907A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Cyan Toner Cartridge CLP-C660B ST886A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Magenta Toner Cartridge CLP-M660B ST925A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Yellow Toner Cartridge CLP-Y660B ST960A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6200ND CLX-6200ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Black Toner Cartridge CLP-K660B ST907A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Cyan Toner Cartridge CLP-C660B ST886A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Magenta Toner Cartridge CLP-M660B ST925A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Yellow Toner Cartridge CLP-Y660B ST960A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6210FX CLX-6210FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Black Toner Cartridge CLP-K660B ST907A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Cyan Toner Cartridge CLP-C660B ST886A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Magenta Toner Cartridge CLP-M660B ST925A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Yellow Toner Cartridge CLP-Y660B ST960A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6220FX CLX-6220FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Black Toner Cartridge CLT-K508L SU191A ',
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Cyan Toner Cartridge CLT-C508L SU058A',
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Magenta Toner Cartridge CLT-M508L SU325A',
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Yellow Toner Cartridge CLT-Y508L SU535A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6240FX CLX6240FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Black Toner Cartridge CLP-K660B ST907A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Cyan Toner Cartridge CLP-C660B ST886A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Magenta Toner Cartridge CLP-M660B ST925A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Yellow Toner Cartridge CLP-Y660B ST960A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6250FX CLX-6250FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Black Toner Cartridge CLT-K508L SU191A ',
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Cyan Toner Cartridge CLT-C508L SU058A',
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Magenta Toner Cartridge CLT-M508L SU325A',
      '1 x Samsung CLP-620 CLP-670 CLX-6220 CLX-6250 Yellow Toner Cartridge CLT-Y508L SU535A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6260FD CLX-6260FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Black Toner Cartridge CLP-K660B ST907A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Cyan Toner Cartridge CLP-C660B ST886A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Magenta Toner Cartridge CLP-M660B ST925A ',
      '1 x Samsung CLP-610 CLP-660 CLX-6210 CLX-6240 Yellow Toner Cartridge CLP-Y660B ST960A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6260FR CLX-6260FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-680 CLX-6260 Black Toner Cartridge High Yield CLT-K506L SU173A',
      '1 x Samsung CLP-680 CLX-6260 Cyan Toner Cartridge High Yield CLT-C506L SU040A ',
      '1 x Samsung CLP-680 CLX-6260 Magenta Toner Cartridge High Yield CLT-M506L SU307A',
      '1 x Samsung CLP-680 CLX-6260 Yellow Toner Cartridge High Yield CLT-Y506L SU517A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6260FW CLX-6260FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-680 CLX-6260 Black Toner Cartridge High Yield CLT-K506L SU173A',
      '1 x Samsung CLP-680 CLX-6260 Cyan Toner Cartridge High Yield CLT-C506L SU040A ',
      '1 x Samsung CLP-680 CLX-6260 Magenta Toner Cartridge High Yield CLT-M506L SU307A',
      '1 x Samsung CLP-680 CLX-6260 Yellow Toner Cartridge High Yield CLT-Y506L SU517A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX6260ND CLX-6260ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-680 CLX-6260 Black Toner Cartridge High Yield CLT-K506L SU173A',
      '1 x Samsung CLP-680 CLX-6260 Cyan Toner Cartridge High Yield CLT-C506L SU040A ',
      '1 x Samsung CLP-680 CLX-6260 Magenta Toner Cartridge High Yield CLT-M506L SU307A',
      '1 x Samsung CLP-680 CLX-6260 Yellow Toner Cartridge High Yield CLT-Y506L SU517A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX8385ND CLX-8385ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLX-8385 CLX-8385ND Black Toner Cartridge CLX-K8385A SU588A ',
      '1 x Samsung CLX-8385 CLX-8385ND Cyan Toner Cartridge CLX-C8385A SU580A ',
      '1 x Samsung CLX-8385 CLX-8385ND Magenta Toner Cartridge CLX-M8385A SU597A',
      '1 x Samsung CLX-8385 CLX-8385ND Yellow Toner Cartridge CLX-Y8385A SU633A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX8640 CLX-8640',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLX-8640ND CLX-8650ND Cyan Toner Cartridge CLT-C659S SU094A',
      '1 x Samsung CLX-8640ND CLX-8650ND Magenta Toner Cartridge CLT-M659S SU360A ',
      '1 x Samsung CLX-8640ND CLX-8650ND Yellow Toner Cartridge CLT-Y659S SU571A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX8640ND CLX-8640ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLX-8640ND CLX-8650ND Cyan Toner Cartridge CLT-C659S SU094A',
      '1 x Samsung CLX-8640ND CLX-8650ND Magenta Toner Cartridge CLT-M659S SU360A ',
      '1 x Samsung CLX-8640ND CLX-8650ND Yellow Toner Cartridge CLT-Y659S SU571A'
    ]
  }, {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX8650 CLX-8650',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLX-8640ND CLX-8650ND Cyan Toner Cartridge CLT-C659S SU094A',
      '1 x Samsung CLX-8640ND CLX-8650ND Magenta Toner Cartridge CLT-M659S SU360A ',
      '1 x Samsung CLX-8640ND CLX-8650ND Yellow Toner Cartridge CLT-Y659S SU571A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung CLX8650ND CLX-8650ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLX-8640ND CLX-8650ND Cyan Toner Cartridge CLT-C659S SU094A',
      '1 x Samsung CLX-8640ND CLX-8650ND Magenta Toner Cartridge CLT-M659S SU360A ',
      '1 x Samsung CLX-8640ND CLX-8650ND Yellow Toner Cartridge CLT-Y659S SU571A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "clxSeries",
    populor: false,
    imgSrc: 'Samsung MultiXpress CLX8380ND ',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLX-8380 CLX-8380ND Black Toner Cartridge CLX-K8380A',
      '1 x Samsung CLX-8380 CLX-8380ND Cyan Toner Cartridge CLX-C8380A',
      '1 x Samsung CLX-8380 CLX-8380ND Magenta Toner Cartridge CLX-M8380A',
      '1 x Samsung CLX-8380 CLX-8380ND Yellow Toner Cartridge CLX-Y8380A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2540 ML-2540',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2540 ML-2580 ML-2545 SCX-4623 Toner Cartridge High Yield MLT-D105L SU768A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2545 ML-2545',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2540 ML-2580 ML-2545 SCX-4623 Toner Cartridge High Yield MLT-D105L SU768A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: true,
    imgSrc: 'Samsung ML2550 ML-2550',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2150 ML-2151 ML-2550 ML-2551 Toner Cartridge ML-2150D8'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: true,
    imgSrc: 'Samsung ML2551N ML-2551N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2150 ML-2151 ML-2550 ML-2551 Toner Cartridge ML-2150D8 '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2552W ML-2552W',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2150 ML-2151 ML-2550 ML-2551 Toner Cartridge ML-2150D8 '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2570 ML-2570',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2010 ML-2570 Toner Cartridge ML-2010D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2571N ML-2571N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2010 ML-2570 Toner Cartridge ML-2010D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2580N ML-2580N',
    printerModel: null,
    cartridge: [
      '	1 x Samsung ML-2540 ML-2580 ML-2545 SCX-4623 Toner Cartridge High Yield MLT-D105L SU768A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2850D ML-2850D',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2850 ML-2851 Toner Cartridge ML-D2850B SU656A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2851ND ML-2851ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2850 ML-2851 Toner Cartridge ML-D2850B SU656A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2855ND ML-2855ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2950ND ML-2950ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML2955ND ML-2955ND',
    printerModel: null,
    cartridge: [
      '	1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3050 ML-3050',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3050 ML-3051 Toner Cartridge ML-D3050B'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3051N ML-3051N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3050 ML-3051 Toner Cartridge ML-D3050B'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3051ND ML-3051ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3050 ML-3051 Toner Cartridge ML-D3050B'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3310ND ML-3310ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3371ND ML-3371ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3470 ML-3471 Toner Cartridge ML-D3470B SU673A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3471ND ML-3471ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3470 ML-3471 Toner Cartridge ML-D3470B SU673A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3560 ML-3560',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3560 ML-3561 Toner Cartridge ML-3560D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3561N ML-3561N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3560 ML-3561 Toner Cartridge ML-3560D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3561ND ML-3561ND ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3560 ML-3561 Toner Cartridge ML-3560D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3710ND ML-3710ND ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML3750ND ML-3750ND ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3750 ML-3750ND Toner Cartridge MLT-D305L SV049A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML4050N ML-4050N ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550B SU689A ',
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550A SU682A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML4500 ML-4500 ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-4500 ML-4600 Toner Cartridge ML-4500D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML4550R ML-4550R ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550B SU689A ',
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550A SU682A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML4551ND ML-4551ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550B SU689A ',
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550A SU682A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML4551NDR ML-4551NDR ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550B SU689A ',
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550A SU682A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML4551NR ML-4551NR ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550B SU689A ',
      '1 x Samsung ML-4050 ML-4550 ML-4551 Toner Cartridge ML-D4550A SU682A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML4600 ML-4600 ',
    printerModel: null,
    cartridge: [
      '	1 x Samsung ML-4500 ML-4600 Toner Cartridge ML-4500D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML5000 ML-5000 ',
    printerModel: null,
    cartridge: [
      '	1 x Samsung ML-5200 Toner Cartridge ML-5200D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML5010ND ML-5010ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-5010 ML-5010ND Toner Cartridge MLT-D307L SV067A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML5050 ML-5050 ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-5200 Toner Cartridge ML-5200D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML5100 ML-5100 ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-5200 Toner Cartridge ML-5200D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML5052 ML-5052 ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-5200 Toner Cartridge ML-5200D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML5200 ML-5200 ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-5200 Toner Cartridge ML-5200D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML5510ND ML-5510ND ',
    printerModel: null,
    cartridge: [
      '	1 x Samsung ML-5510 ML-6510 ML-5510ND ML-6510ND Toner Cartridge High Yield MLT-D309L SV097A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML6040 ML-6040 ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-1450 ML-6060 Toner Cartridge ML-6060D6 '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML6060 ML-6060 ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-1450 ML-6060 Toner Cartridge ML-6060D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML6060N ML-6060N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-1450 ML-6060 Toner Cartridge ML-6060D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML6060S ML-6060S ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-1450 ML-6060 Toner Cartridge ML-6060D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromemlSeries",
    populor: false,
    imgSrc: 'Samsung ML6510ND ML-6510ND ',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-5510 ML-6510 ML-5510ND ML-6510ND Toner Cartridge High Yield MLT-D309L SV097A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM3870FW SL-M3870FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4020 SL-M4020',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: true,
    imgSrc: 'Samsung SLM4020ND SL-M4020ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: true,
    imgSrc: 'Samsung SLM4030 SL-M4030',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4030ND SL-M4030ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4070 SL-M4070',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4080 SL-M4080',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4080FX SL-M4080FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4370 SL-M4370',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4530 SL-M4530',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4530 SL-M4530ND Toner Cartridge MLT-D304E SV033A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4530ND SL-M4530ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4530 SL-M4530ND Toner Cartridge MLT-D304E SV033A '
    ]
  }, {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung  SLM4580 SL-M4580',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4580 SL-M4580FX Toner Cartridge MLT-D303E SV025A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM4580FX SL-M4580FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4580 SL-M4580FX Toner Cartridge MLT-D303E SV025A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM5370 SL-M5370',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslmSeries",
    populor: false,
    imgSrc: 'Samsung SLM5370LX SL-M5370LX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC3010 SL-C3010',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C3010 SL-C3060 Black Toner Cartridge CLT-K503L SU149A ',
      '1 x Samsung SL-C3010 SL-C3060 Cyan Toner Cartridge CLT-C503L SU016A',
      '1 x Samsung SL-C3010 SL-C3060 Magenta Toner Cartridge CLT-M503L SU283A',
      '1 x Samsung SL-C3010 SL-C3060 Yellow Toner Cartridge CLT-Y503L SU493A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC3010ND SL-C3010ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C3010 SL-C3060 Black Toner Cartridge CLT-K503L SU149A ',
      '1 x Samsung SL-C3010 SL-C3060 Cyan Toner Cartridge CLT-C503L SU016A',
      '1 x Samsung SL-C3010 SL-C3060 Magenta Toner Cartridge CLT-M503L SU283A',
      '1 x Samsung SL-C3010 SL-C3060 Yellow Toner Cartridge CLT-Y503L SU493A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: true,
    imgSrc: 'Samsung SLC3060 SL-C3060',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C3010 SL-C3060 Black Toner Cartridge CLT-K503L SU149A ',
      '1 x Samsung SL-C3010 SL-C3060 Cyan Toner Cartridge CLT-C503L SU016A',
      '1 x Samsung SL-C3010 SL-C3060 Magenta Toner Cartridge CLT-M503L SU283A',
      '1 x Samsung SL-C3010 SL-C3060 Yellow Toner Cartridge CLT-Y503L SU493A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: true,
    imgSrc: 'Samsung SLC3060FR SL-C3060FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C3010 SL-C3060 Black Toner Cartridge CLT-K503L SU149A ',
      '1 x Samsung SL-C3010 SL-C3060 Cyan Toner Cartridge CLT-C503L SU016A',
      '1 x Samsung SL-C3010 SL-C3060 Magenta Toner Cartridge CLT-M503L SU283A',
      '1 x Samsung SL-C3010 SL-C3060 Yellow Toner Cartridge CLT-Y503L SU493A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC4010 SL-C4010',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C4010 SL-C4060 Black Toner Cartridge CLT-K603L SV241A ',
      '1 x Samsung SL-C4010 SL-C4060 Cyan Toner Cartridge CLT-C603L SV232A',
      '1 x Samsung SL-C4010 SL-C4060 Magenta Toner Cartridge CLT-M603L SV247A',
      '1 x Samsung SL-C4010 SL-C4060 Yellow Toner Cartridge CLT-Y603L SV253A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC4060 SL-C4060',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C4010 SL-C4060 Black Toner Cartridge CLT-K603L SV241A ',
      '1 x Samsung SL-C4010 SL-C4060 Cyan Toner Cartridge CLT-C603L SV232A',
      '1 x Samsung SL-C4010 SL-C4060 Magenta Toner Cartridge CLT-M603L SV247A',
      '1 x Samsung SL-C4010 SL-C4060 Yellow Toner Cartridge CLT-Y603L SV253A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC410W SL-C410W',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Black Toner Cartridge CLT-K406S SU120A ',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Cyan Toner Cartridge CLT-C406S ST986A',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Magenta Toner Cartridge CLT-M406S SU254A ',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Yellow Toner Cartridge CLT-Y406S SU464A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC430 SL-C430',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C430 SL-C480 Black Toner Cartridge CLT-K404S SU113A',
      '1 x Samsung SL-C430 SL-C480 Cyan Toner Cartridge CLT-C404S ST979A ',
      '1 x Samsung SL-C430 SL-C480 Magenta Toner Cartridge CLT-M404S SU247A ',
      '1 x Samsung SL-C430 SL-C480 Yellow Toner Cartridge CLT-Y404S SU457A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC430W SL-C430W',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C430 SL-C480 Black Toner Cartridge CLT-K404S SU113A',
      '1 x Samsung SL-C430 SL-C480 Cyan Toner Cartridge CLT-C404S ST979A ',
      '1 x Samsung SL-C430 SL-C480 Magenta Toner Cartridge CLT-M404S SU247A ',
      '1 x Samsung SL-C430 SL-C480 Yellow Toner Cartridge CLT-Y404S SU457A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC460FW SL-C460FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Black Toner Cartridge CLT-K406S SU120A',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Cyan Toner Cartridge CLT-C406S ST986A ',
      '1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Magenta Toner Cartridge CLT-M406S SU254A ',
      '	1 x Samsung CLP-360 CLP-365 CLX-3300 CLX-3305 Yellow Toner Cartridge CLT-Y406S SU464A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC480 SL-C480',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C430 SL-C480 Black Toner Cartridge CLT-K404S SU113A',
      '1 x Samsung SL-C430 SL-C480 Cyan Toner Cartridge CLT-C404S ST979A ',
      '1 x Samsung SL-C430 SL-C480 Magenta Toner Cartridge CLT-M404S SU247A ',
      '1 x Samsung SL-C430 SL-C480 Yellow Toner Cartridge CLT-Y404S SU457A '
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "monochromeslcSeries",
    populor: false,
    imgSrc: 'Samsung SLC480FW SL-C480FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-C430 SL-C480 Black Toner Cartridge CLT-K404S SU113A',
      '1 x Samsung SL-C430 SL-C480 Cyan Toner Cartridge CLT-C404S ST979A ',
      '1 x Samsung SL-C430 SL-C480 Magenta Toner Cartridge CLT-M404S SU247A ',
      '1 x Samsung SL-C430 SL-C480 Yellow Toner Cartridge CLT-Y404S SU457A '
    ]
  },
    {
      brand: "Samsung",
      type: "toner",
      series: "monochromeslcSeries",
      populor: false,
      imgSrc: 'Samsung SLC480W SL-C480W',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C430 SL-C480 Black Toner Cartridge CLT-K404S SU113A',
        '1 x Samsung SL-C430 SL-C480 Cyan Toner Cartridge CLT-C404S ST979A ',
        '1 x Samsung SL-C430 SL-C480 Magenta Toner Cartridge CLT-M404S SU247A ',
        '1 x Samsung SL-C430 SL-C480 Yellow Toner Cartridge CLT-Y404S SU457A '
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4010ND SL-C4010ND',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4010 SL-C4060 Black Toner Cartridge CLT-K603L SV241A',
        '1 x Samsung SL-C4010 SL-C4060 Cyan Toner Cartridge CLT-C603L SV232A',
        '1 x Samsung SL-C4010 SL-C4060 Magenta Toner Cartridge CLT-M603L SV247A',
        '1 x Samsung SL-C4010 SL-C4060 Yellow Toner Cartridge CLT-Y603L SV253A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4060FR SL-C4060FR',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4010 SL-C4060 Black Toner Cartridge CLT-K603L SV241A',
        '1 x Samsung SL-C4010 SL-C4060 Cyan Toner Cartridge CLT-C603L SV232A',
        '1 x Samsung SL-C4010 SL-C4060 Magenta Toner Cartridge CLT-M603L SV247A',
        '1 x Samsung SL-C4010 SL-C4060 Yellow Toner Cartridge CLT-Y603L SV253A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4060FX SL-C4060FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4010 SL-C4060 Black Toner Cartridge CLT-K603L SV241A',
        '1 x Samsung SL-C4010 SL-C4060 Cyan Toner Cartridge CLT-C603L SV232A',
        '1 x Samsung SL-C4010 SL-C4060 Magenta Toner Cartridge CLT-M603L SV247A',
        '1 x Samsung SL-C4010 SL-C4060 Yellow Toner Cartridge CLT-Y603L SV253A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4062FX SL-C4062FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4062FX Black Toner Cartridge CLT-K604S SV265A',
        '1 x Samsung SL-C4062FX Cyan Toner Cartridge CLT-C604S SV256A',
        '1 x Samsung SL-C4062FX Magenta Toner Cartridge CLT-M604S SV271A',
        '1 x Samsung SL-C4062FX Yellow Toner Cartridge CLT-Y604S SV277A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4062HX SL-C4062HX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4062HX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4062HX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4062HX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4062HX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4062NX SL-C4062NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4062NX Black Toner Cartridge CLT-K604S SV265A',
        '1 x Samsung SL-C4062NX Cyan Toner Cartridge CLT-C604S SV256A',
        '1 x Samsung SL-C4062NX Magenta Toner Cartridge CLT-M604S SV271A',
        '1 x Samsung SL-C4062NX Yellow Toner Cartridge CLT-Y604S SV277A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4062WX SL-C4062WX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4062WX Black Toner Cartridge CLT-K604S SV265A',
        '1 x Samsung SL-C4062WX Cyan Toner Cartridge CLT-C604S SV256A',
        '1 x Samsung SL-C4062WX Magenta Toner Cartridge CLT-M604S SV271A',
        '1 x Samsung SL-C4062WX Yellow Toner Cartridge CLT-Y604S SV277A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4070FR SL-C4070FR',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4070FR Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4070FR Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4070FR Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4070FR Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4070FW SL-C4070FW',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4070FW Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4070FW Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4070FW Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4070FW Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4070FX SL-C4070FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4070FX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4070FX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4070FX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4070FX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4072FD SL-C4072FD',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4072FD Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4072FD Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4072FD Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4072FD Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4072FW SL-C4072FW',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4072FW Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4072FW Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4072FW Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4072FW Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4072FX SL-C4072FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4072FX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4072FX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4072FX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4072FX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4073HX SL-C4073HX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4073HX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4073HX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4073HX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4073HX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4073NX SL-C4073NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4073NX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4073NX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4073NX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4073NX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4073WX SL-C4073WX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4073WX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4073WX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4073WX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4073WX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4078FX SL-C4078FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4078FX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4078FX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4078FX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4078FX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4078HX SL-C4078HX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4078HX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4078HX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4078HX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4078HX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4078NX SL-C4078NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4078NX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4078NX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4078NX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4078NX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressc40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress C4078WX SL-C4078WX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-C4078WX Black Toner Cartridge High Yield CLT-K604L SV283A',
        '1 x Samsung SL-C4078WX Cyan Toner Cartridge High Yield CLT-C604L SV274A',
        '1 x Samsung SL-C4078WX Magenta Toner Cartridge High Yield CLT-M604L SV289A',
        '1 x Samsung SL-C4078WX Yellow Toner Cartridge High Yield CLT-Y604L SV295A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4020ND SL-M4020ND',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4020NX SL-M4020NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4030ND SL-M4030ND',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4030NX SL-M4030NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4070FR SL-M4070FR',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4070FW SL-M4070FW',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4070FX SL-M4070FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072FD SL-M4072FD',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072FW SL-M4072FW',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072FX SL-M4072FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072HN SL-M4072HN',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072HX SL-M4072HX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072NX SL-M4072NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072UW SL-M4072UW',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4072WX SL-M4072WX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4080FX SL-M4080FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4080NX SL-M4080NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4080UX SL-M4080UX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm40Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4080WX SL-M4080WX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4030 SL-M4080 Toner Cartridge High Yield MLT-D201L SU871A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4530ND SL-M4530ND',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4530 SL-M4530ND Toner Cartridge MLT-D304E SV033A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4530NX SL-M4530NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4530 SL-M4530ND Toner Cartridge MLT-D304E SV033A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4530UX SL-M4530UX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4530 SL-M4530ND Toner Cartridge MLT-D304E SV033A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4530WX SL-M4530WX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4530 SL-M4530ND Toner Cartridge MLT-D304E SV033A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4580FX SL-M4580FX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4580 SL-M4580FX Toner Cartridge MLT-D303E SV025A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4580NX SL-M4580NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4580 SL-M4580FX Toner Cartridge MLT-D303E SV025A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4580UX SL-M4580UX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4580 SL-M4580FX Toner Cartridge MLT-D303E SV025A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm45Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M4580WX SL-M4580WX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4580 SL-M4580FX Toner Cartridge MLT-D303E SV025A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm53Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M5370LX SL-M5370LX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
      ]
    },
    {
      brand: "Samsung",
      type: "toner",
      series: "proxpressm53Series",
      populor: false,
      imgSrc: 'Samsung ProXpress M5370NX SL-M5370NX',
      printerModel: null,
      cartridge: [
        '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm53Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M5370UX SL-M5370UX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm53Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M5370WX SL-M5370WX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm53Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M5360 SL-M5360',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M5360 SL-M5360DN Toner Cartridge MLT-D306L SV058A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm53Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M5360DN SL-M5360DN',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M5360 SL-M5360DN Toner Cartridge MLT-D306L SV058A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm53Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M5360DX SL-M5360DX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M5360 SL-M5360DN Toner Cartridge MLT-D306L SV058A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm53Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M5360RX SL-M5360RX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M5360 SL-M5360DN Toner Cartridge MLT-D306L SV058A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm53Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M5360WX SL-M5360WX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M5360 SL-M5360DN Toner Cartridge MLT-D306L SV058A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370FD SL-M4370FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370FX SL-M4370FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370HW SL-M4370HW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370LX SL-M4370LX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370NX SL-M4370NX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370RX SL-M4370RX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370UX SL-M4370UX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "proxpressm43Series",
    populor: false,
    imgSrc: 'Samsung ProXpress M4370WX SL-M4370WX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M4370 SL-M5370 Toner Cartridge MLT-D358S SV111A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX3400 SCX-3400',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX3405 SCX-3405',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX3405F SCX-3405F',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX3405FW SCX-3405FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX3405W SCX-3405W',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4016 SCX-4016',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4016 SCX-4116 SCX-4216 Toner Cartridge SCX-4216D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4100 SCX-4100',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4100 Toner Cartridge SCX-4100D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4116 SCX-4116',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4016 SCX-4116 SCX-4216 Toner Cartridge SCX-4216D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4200 SCX-4200',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4200 Toner Cartridge SCX-4200D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4216F SCX-4216F',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4016 SCX-4116 SCX-4216 Toner Cartridge SCX-4216D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4216 SCX-4216',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4016 SCX-4116 SCX-4216 Toner Cartridge SCX-4216D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4300 SCX-4300',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4300 Toner Cartridge SCX-4300'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4321 SCX-4321',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4321 SCX-4321NS SCX-4500 Toner Cartridge MLT-D109S SU821A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4321NS SCX-4321NS',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4321 SCX-4321NS SCX-4500 Toner Cartridge MLT-D109S SU821A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4500 SCX-4500',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4321 SCX-4321NS SCX-4500 Toner Cartridge MLT-D109S SU821A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4500W SCX-4500W',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4500W Toner Cartridge MLT-D109S'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4521F SCX-4521F',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4521F Toner Cartridge SCX-4521D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4521FR SCX-4521FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung SCX-4521F Toner Cartridge SCX-4521D3'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4600 SCX-4600',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2525 SCX-4600 SCX-4623 Toner Cartridge MLT-D1042S SU779A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4623F SCX-4623F',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2540 ML-2580 ML-2545 SCX-4623 Toner Cartridge High Yield MLT-D105L SU768A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4623FN SCX-4623FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2540 ML-2580 ML-2545 SCX-4623 Toner Cartridge High Yield MLT-D105L SU768A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4623FW SCX-4623FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2540 ML-2580 ML-2545 SCX-4623 Toner Cartridge High Yield MLT-D105L SU768A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4725FN SCX-4725FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4727FD SCX-4727FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4728FD SCX-4728FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4729FD SCX-4729FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4729FW SCX-4729FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4824FN SCX-4824FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4828FN SCX-4828FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4833FD SCX-4833FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4833FR SCX-4833FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX4833HW SCX-4833HW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX5637FR SCX-5637FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX5639FR SCX-5639FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3750 ML-3750ND Toner Cartridge MLT-D305L SV049A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX5737FW SCX-5737FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "scxSeries",
    populor: false,
    imgSrc: 'Samsung SCX5739FW SCX-5739FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3750 ML-3750ND Toner Cartridge MLT-D305L SV049A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "slcSeries",
    populor: false,
    imgSrc: 'Samsung SLC1810W SL-C1810W',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Black Toner Cartridge CLT-K504S SU160A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Cyan Toner Cartridge CLT-C504S SU027A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Magenta Toner Cartridge CLT-M504S SU294A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Yellow Toner Cartridge CLT-Y504S SU504A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "slcSeries",
    populor: false,
    imgSrc: 'Samsung SLC1860FW SL-C1860FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Black Toner Cartridge CLT-K504S SU160A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Cyan Toner Cartridge CLT-C504S SU027A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Magenta Toner Cartridge CLT-M504S SU294A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Yellow Toner Cartridge CLT-Y504S SU504A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "slcSeries",
    populor: false,
    imgSrc: 'Samsung SLC1860W SL-C1860W',
    printerModel: null,
    cartridge: [
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Black Toner Cartridge CLT-K504S SU160A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Cyan Toner Cartridge CLT-C504S SU027A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Magenta Toner Cartridge CLT-M504S SU294A',
      '1 x Samsung CLP-415 CLX-4170 CLX-4195 Yellow Toner Cartridge CLT-Y504S SU504A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2020W SL-M2020W',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2022 SL-M2022',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2022W SL-M2022W',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2070 SL-M2070',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2070F SL-M2070F',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2070FW SL-M2070FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2070W SL-M2070W',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2071 SL-M2071',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2071FH SL-M2071FH',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2071HW SL-M2071HW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm20Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2071W SL-M2071W',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2160 ML-2165 SCX-3400 SCX-3405 Toner Cartridge MLT-D101S SU810A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2625 SL-M2625',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2625D SL-M2625D',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2625F SL-M2625F',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2625FN SL-M2625FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2625N SL-M2625N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2675F SL-M2675F',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2675FN SL-M2675FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm26Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2675N SL-M2675N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2855 SCX-4824 SCX-4828 Toner Cartridge MLT-D209L SV007A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2825DW SL-M2825DW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2825ND SL-M2825ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2835DW SL-M2835DW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2835DW/XEG SL-M2835DW/XEG',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2875FD SL-M2875FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2875FW SL-M2875FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2875ND SL-M2875ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2885FW SL-M2885FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2885FW/XEG SL-M2885FW/XEG',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2885FR SL-M2885FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2885FN SL-M2885FN',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm28Series",
    populor: false,
    imgSrc: 'Samsung Xpress M2885NW SL-M2885NW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-2950 ML-2955 SCX-4729 Toner Cartridge High Yield MLT-D103L SU718A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm30Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3015DW SL-M3015DW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3050 ML-3051 Toner Cartridge ML-D3050B'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm30Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3015ND SL-M3015ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3050 ML-3051 Toner Cartridge ML-D3050B'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm30Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3065FW SL-M3065FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3050 ML-3051 Toner Cartridge ML-D3050B'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm30Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3065NW SL-M3065NW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3050 ML-3051 Toner Cartridge ML-D3050B'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm33Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3325D SL-M3325D',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm33Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3325DW SL-M3325DW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SC-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm33Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3375FD SL-M3375FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm33Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3375FW SL-M3375FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm33Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3375N SL-M3375N',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3310 ML-3710 SCX-4833 SCX-5637 SCX-5737 Toner Cartridge High Yield MLT-D205L SU965A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm35Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3570ND SL-M3570ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3560 ML-3561 Toner Cartridge ML-3560D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm35Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3570FW SL-M3570FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung ML-3560 ML-3561 Toner Cartridge ML-3560D6'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3820DW SL-M3820DW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3820ND SL-M3820ND',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3820X SL-M3820X',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3870FD SL-M3870FD',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3870FW SL-M3870FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3870FX SL-M3870FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3870HW SL-M3870HW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm38Series",
    populor: false,
    imgSrc: 'Samsung Xpress M3870X SL-M3870X',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4020D SL-M4020D',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4020DW SL-M4020DW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4020NX SL-M4020NX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4070FR SL-M4070FR',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4070FW SL-M4070FW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4070FX SL-M4070FX',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4070HW SL-M4070HW',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
  {
    brand: "Samsung",
    type: "toner",
    series: "xpressm40Series",
    populor: false,
    imgSrc: 'Samsung Xpress M4070X SL-M4070X',
    printerModel: null,
    cartridge: [
      '1 x Samsung SL-M3820 SL-M3870 SL-M4020 SL-M4070 Toner Cartridge High Yield MLT-D203L SU899A'
    ]
  },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2020',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2020W',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2022',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2022W',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2070',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2070F',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2070FW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2070W',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2071',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2071FH',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2071HW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m20Series",
      populor: false,
      imgSrc: 'Samsung M2071W',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2625',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2625D',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2625F',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2625FN',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2625N',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2675F',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2675FN',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m26Series",
      populor: false,
      imgSrc: 'Samsung M2675N',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2825DW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2825ND',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2835DW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2875FD',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2875FW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2875ND',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2885FW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2885FR',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2885FN',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m28Series",
      populor: false,
      imgSrc: 'Samsung M2885NW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m30Series",
      populor: false,
      imgSrc: 'Samsung M3015DW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m30Series",
      populor: false,
      imgSrc: 'Samsung M3015ND',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m30Series",
      populor: false,
      imgSrc: 'Samsung M3065FW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m30Series",
      populor: false,
      imgSrc: 'Samsung M3065NW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R116 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m33Series",
      populor: false,
      imgSrc: 'Samsung M3325D',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m33Series",
      populor: false,
      imgSrc: 'Samsung M3325DW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m33Series",
      populor: false,
      imgSrc: 'Samsung M3375FD',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m33Series",
      populor: false,
      imgSrc: 'Samsung M3375FW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m33Series",
      populor: false,
      imgSrc: 'Samsung M3375N',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m35Series",
      populor: false,
      imgSrc: 'Samsung M3570ND',
      printerModel: null,
      drum: [
        '1 x Samsung ML-3560 ML-3561 Drum Unit ML-D3560A'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m35Series",
      populor: false,
      imgSrc: 'Samsung M3570FW',
      printerModel: null,
      drum: [
        '1 x Samsung ML-3560 ML-3561 Drum Unit ML-D3560A'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3820DW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3820ND',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3820X',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3870FD',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3870FW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3870FX',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3870HW',
      printerModel: null,
      drum: [
        '1 x Samsung MLT-R203 Imaging Drum Unit'
      ]
    },
    {
      brand: "Samsung",
      type: "drum",
      series: "m38Series",
      populor: false,
      imgSrc: 'Samsung M3870X',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4020D',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4020DW',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4020NX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4070FR',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4070FW',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4070FX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4070HW',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m40Series",
    populor: false,
    imgSrc: 'Samsung M4070X',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R203 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370FD',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370FX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370HW',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370LX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370NX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370RX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370UX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m43Series",
    populor: false,
    imgSrc: 'Samsung M4370WX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4530ND',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R304 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4530NX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R304 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4530UX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R304 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4530WX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R304 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4580FX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4580NX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4580UX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m45Series",
    populor: false,
    imgSrc: 'Samsung M4580WX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5370LX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5370NX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5370UX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5370WX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R303 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5360',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R307 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5360DN',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R307 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5360DX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R307 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5360RX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R307 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "m53Series",
    populor: false,
    imgSrc: 'Samsung M5360WX',
    printerModel: null,
    drum: [
      '1 x Samsung MLT-R307 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c410Series",
    populor: false,
    imgSrc: 'Samsung C410W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c430Series",
    populor: false,
    imgSrc: 'Samsung C430',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c430Series",
    populor: false,
    imgSrc: 'Samsung C430W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c460Series",
    populor: false,
    imgSrc: 'Samsung C460FW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c480Series",
    populor: false,
    imgSrc: 'Samsung C480',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c480Series",
    populor: false,
    imgSrc: 'Samsung C480FW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c480Series",
    populor: false,
    imgSrc: 'Samsung C480W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c1810Series",
    populor: false,
    imgSrc: 'Samsung C1810W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c1860Series",
    populor: false,
    imgSrc: 'Samsung C1860FW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "c1860Series",
    populor: false,
    imgSrc: 'Samsung C1860W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clp360Series",
    populor: false,
    imgSrc: 'Samsung CLP360',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clp360Series",
    populor: false,
    imgSrc: 'Samsung CLP365',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx3300Series",
    populor: false,
    imgSrc: 'Samsung CLX3305',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx3300Series",
    populor: false,
    imgSrc: 'Samsung CLX3305W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx3300Series",
    populor: false,
    imgSrc: 'Samsung CLX3305FN',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx3300Series",
    populor: false,
    imgSrc: 'Samsung CLX3305FW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R406 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clp415Series",
    populor: false,
    imgSrc: 'Samsung CLP415N',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R504 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clp415Series",
    populor: false,
    imgSrc: 'Samsung CLP415NW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R504 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx4195Series",
    populor: false,
    imgSrc: 'Samsung CLX4195FN',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R504 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx4195Series",
    populor: false,
    imgSrc: 'Samsung CLX4195FW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R504 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx4195Series",
    populor: false,
    imgSrc: 'Samsung CLX4195N',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R504 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "clx4195Series",
    populor: false,
    imgSrc: 'Samsung CLX4195NW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R504 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc430Series",
    populor: false,
    imgSrc: 'Samsung SL-C430',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc430Series",
    populor: false,
    imgSrc: 'Samsung SL-C430W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc480Series",
    populor: false,
    imgSrc: 'Samsung SL-C480',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc480Series",
    populor: false,
    imgSrc: 'Samsung SL-C480FN',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc480Series",
    populor: false,
    imgSrc: 'Samsung SL-C480FW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc480Series",
    populor: false,
    imgSrc: 'Samsung SL-C480W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc1810Series",
    populor: false,
    imgSrc: 'Samsung SL-C1810W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc1860Series",
    populor: false,
    imgSrc: 'Samsung SL-C1860FW',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Samsung",
    type: "drum",
    series: "slc1860Series",
    populor: false,
    imgSrc: 'Samsung SL-C1860W',
    printerModel: null,
    drum: [
      '1 x Samsung CLT-R404 Imaging Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "hlSeries",
    populor: true,
    imgSrc: 'Brother HL-L2350DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "hlSeries",
    populor: true,
    imgSrc: 'Brother HL-L2375DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "hlSeries",
    populor: true,
    imgSrc: 'Brother HL-L2370DN',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "hlSeries",
    populor: true,
    imgSrc: 'Brother HL-L2365DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2310 Black Toner Cartridge',
      '1 x Brother TN-2320 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "dcpSeries",
    populor: true,
    imgSrc: 'Brother DCP-L2535DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "dcpSeries",
    populor: true,
    imgSrc: 'Brother DCP-L2550DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "mfcSeries",
    populor: true,
    imgSrc: 'Brother MFC-L2735DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "mfcSeries",
    populor: true,
    imgSrc: 'Brother MFC-L2750DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "toner",
    series: "mfcSeries",
    populor: true,
    imgSrc: 'Brother MFC-L2770DW',
    printerModel: null,
    cartridge: [
      '1 x Brother TN-2410 Black Toner Cartridge',
      '1 x Brother TN-2420 Black High Yield Toner Cartridge'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "hll23Series",
    populor: true,
    imgSrc: 'Brother HL-L2350DW',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "hll23Series",
    populor: true,
    imgSrc: 'Brother HL-L2375DW',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "hll23Series",
    populor: true,
    imgSrc: 'Brother HL-L2370DN',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "dcpl25Series",
    populor: true,
    imgSrc: 'Brother DCP-L2535DW',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "dcpl25Series",
    populor: true,
    imgSrc: 'Brother DCP-L2550DW',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "mfcl27Series",
    populor: true,
    imgSrc: 'Brother MFC-L2735DW',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "mfcl27Series",
    populor: true,
    imgSrc: 'Brother MFC-L2750DW',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
  {
    brand: "Brother",
    type: "drum",
    series: "mfcl27Series",
    populor: true,
    imgSrc: 'Brother MFC-L2770DW',
    printerModel: null,
    drum: [
      '1 x Brother DR-2455 Drum Unit'
    ]
  },
    {
      brand: "Sharp",
      type: "ink",
      series: "sharpUXSeries",
      populor: true,
      imgSrc: 'Sharp UX-700 UX700',
      cartridge: [
        'Sharp UXC70B Ink Cartridge UX-C70B'
      ]
    },
    {
      brand: "Sharp",
      type: "ink",
      series: "sharpFOSeries",
      populor: false,
      imgSrc: 'Sharp FO-B1600 FOB1600',
      cartridge: [
        'Sharp UXC70B Ink Cartridge UX-C70B'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpALSeries",
      populor: true,
      imgSrc: 'Sharp AL-840 AL840',
      cartridge: [
        'Sharp AL80TD Toner Cartridge AL-80TD'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpALSeries",
      populor: false,
      imgSrc: 'Sharp AL-1216 AL1216',
      cartridge: [
        'Sharp AL100T Toner Cartridge AL-100TD'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpAMSeries",
      populor: true,
      imgSrc: 'Sharp AM-400 AM400',
      cartridge: [
        'Sharp AM30DC Toner Cartridge AM-30DC'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpARSeries",
      populor: true,
      imgSrc: 'Sharp AR-C262 ARC262',
      cartridge: [
        'Sharp ARC26TBV Black Toner Cartridge AR-C26TBV',
        'Sharp ARC26TCV Cyan Toner Cartridge AR-C26TCV ',
        'Sharp ARC26TMV Magenta Toner Cartridge AR-C26TMV ',
        'Sharp ARC26TYV Yellow Toner Cartridge AR-C26TYV'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpARSeries",
      populor: false,
      imgSrc: 'Sharp AR-M451U ARM451U',
      cartridge: [
        'Sharp AR455T Toner Cartridge AR-455T'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpARSeries",
      populor: true,
      imgSrc: 'Sharp AR-5520n AR5520n',
      cartridge: [
        'Sharp AR020T Toner Cartridge AR-020T'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpARSeries",
      populor: false,
      imgSrc: 'Sharp AR-235 AR235',
      cartridge: [
        'Sharp AR270T Toner Cartridge AR-270T'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpARSeries",
      populor: false,
      imgSrc: ' Sharp AR-206 AR206',
      cartridge: [
        'Sharp AR202T Toner Cartridge AR-202T'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpDXSeries",
      populor: true,
      imgSrc: 'Sharp DX-B450P DXB450P',
      cartridge: [
        'Sharp DXB45DTH Toner Cartridge DX-B45DTH'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpFOSeries",
      populor: true,
      imgSrc: 'Sharp FO-2700M FO2700M',
      cartridge: [
        'Sharp FO26DC Toner Cartridge FO-26DC'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpFOSeries",
      populor: false,
      imgSrc: ' Sharp FO-2950M FO2950M',
      cartridge: [
        'Sharp FO29DC Toner Cartridge FO-29DC'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpFOSeries",
      populor: true,
      imgSrc: 'Sharp FO-IS115N FOIS115N',
      cartridge: [
        'Sharp FO25DC Toner Cartridge FO-25DC'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: ' Sharp MX-2010U MX2010U',
      cartridge: [
        '1 x Sharp MX23GTBA Black Toner Cartridge MX-23GTBA',
        '1 x Sharp MX23GTCA Cyan Toner Cartridge MX-23GTCA',
        '1 x Sharp MX23GTMA Magenta Toner Cartridge MX-23GTMA',
        '	1 x Sharp MX23GTYA Yellow Toner Cartridge MX-23GTYA'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: false,
      imgSrc: ' Sharp MX-5500N MX5500N',
      cartridge: [
        'Sharp MX70GTBA Black Toner Cartridge MX-70GTBA',
        '	Sharp MX70GTCA Cyan Toner Cartridge MX-70GTCA',
        'Sharp MX70GTMA Magenta Toner Cartridge MX-70GTMA',
        'Sharp MX70GTYA Yellow Toner Cartridge MX-70GTYA'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-6240N MX6240N',
      cartridge: [
        'Sharp MX62GTBA Black Toner Cartridge MX-62GTBA',
        'Sharp MX62GTCA Cyan Toner Cartridge MX-62GTCA',
        'Sharp MX62GTMA Magenta Toner Cartridge MX-62GTMA',
        'Sharp MX62GTYA Yellow Toner Cartridge MX-62GTYA '
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: false,
      imgSrc: 'Sharp MX-C380 MXC380',
      cartridge: [
        '1 x Sharp MXC38GTB Black Toner Cartridge MX-C38GTB',
        '	1 x Sharp MXC38GTC Cyan Toner Cartridge MX-C38GTC',
        '1 x Sharp MXC38GTM Magenta Toner Cartridge MX-C38GTM',
        '	1 x Sharp MXC38GTY Yellow Toner Cartridge MX-C38GTY'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-M950 MXM950',
      cartridge: [
        '	Sharp MX850GT Toner Cartridge MX-850GT '
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-C310 MXC310',
      cartridge: [
        '1 x Sharp MXC38GTB Black Toner Cartridge MX-C38GTB',
        '1 x Sharp MXC38GTC Cyan Toner Cartridge MX-C38GTC',
        '1 x Sharp MXC38GTM Magenta Toner Cartridge MX-C38GTM',
        '	1 x Sharp MXC38GTY Yellow Toner Cartridge MX-C38GTY'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: ' Sharp MX-C381 MXC381',
      cartridge: [
        '1 x Sharp MXC38GTB Black Toner Cartridge MX-C38GTB',
        '1 x Sharp MXC38GTC Cyan Toner Cartridge MX-C38GTC',
        '1 x Sharp MXC38GTM Magenta Toner Cartridge MX-C38GTM ',
        '1 x Sharp MXC38GTY Yellow Toner Cartridge MX-C38GTY'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-M365N MXM365N',
      cartridge: [
        '1 x Sharp MX560GT Toner Cartridge MX-560GT'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-M550U MXM550U',
      cartridge: [
        'Sharp AR621T Toner Cartridge AR-621T'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-M754N MXM754N',
      cartridge: [
        'Sharp MX754GT Toner Cartridge MX-754GT'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: ' Sharp MX-C301W MXC301W',
      cartridge: [
        '1 x Sharp MXC30GTB Black Toner Cartridge MX-C30GTB',
        '	1 x Sharp MXC30GTC Cyan Toner Cartridge MX-C30GTC',
        '1 x Sharp MXC30GTM Magenta Toner Cartridge MX-C30GTM',
        '1 x Sharp MXC30GTY Yellow Toner Cartridge MX-C30GTY'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-B201D MXB201D',
      cartridge: [
        '1 x Sharp MXB20GT1 Toner Cartridge MX-B20GT1'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-7000N MX7000N',
      cartridge: [
        'Sharp MX70GTBA Black Toner Cartridge MX-70GTBA',
        'Sharp MX70GTCA Cyan Toner Cartridge MX-70GTCA',
        'Sharp MX70GTMA Magenta Toner Cartridge MX-70GTMA',
        'Sharp MX70GTYA Yellow Toner Cartridge MX-70GTYA'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpMXSeries",
      populor: true,
      imgSrc: 'Sharp MX-7040N MX7040N',
      cartridge: [
        'Sharp MX62GTBA Black Toner Cartridge MX-62GTBA',
        'Sharp MX62GTCA Cyan Toner Cartridge MX-62GTCA',
        'Sharp MX62GTMA Magenta Toner Cartridge MX-62GTMA',
        'Sharp MX62GTYA Yellow Toner Cartridge MX-62GTYA'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpSFSeries",
      populor: true,
      imgSrc: 'Sharp SF-2022 SF2022',
      cartridge: [
        'Sharp SF222T1 Toner Cartridge SF-222T1'
      ]
    },
    {
      brand: "Sharp",
      type: "toner",
      series: "sharpSFSeries",
      populor: false,
      imgSrc: 'Sharp SF-2040 SF2040',
      cartridge: [
        'Sharp SF240T1 Toner Cartridge SF-240T1'
      ]
    },
      {
        brand: "Toshiba",
        type: "toner",
        series: "colourmfdsSeries",
        populor: true,
        imgSrc: 'Toshiba  e-Studio 2051c',
        cartridge: []
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "colourmfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 2505AC',
        cartridge: []
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba BD1350',
        cartridge: []
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba BD1370',
        cartridge: []
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: true,
        imgSrc: 'Toshiba DP2460',
        cartridge: []
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: true,
        imgSrc: 'Toshiba DP3580',
        cartridge: []
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: true,
        imgSrc: 'Toshiba e-Studio 165',
        cartridge: [
          '2 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '3 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '5 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '10 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D'
        ]
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 205L',
        cartridge: [
          '2 x Toshiba e-Studio 205L 255 305 355 Toner Cartridge T4530D',
          '3 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '5 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '10 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D'
        ]
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 242',
        cartridge: [
          '2 x Toshiba e-Studio 205L 255 305 355 Toner Cartridge T4530D',
          '3 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '5 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '10 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D'
        ]
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 283',
        cartridge: [
          '2 x Toshiba e-Studio 205L 255 305 355 Toner Cartridge T4530D',
          '3 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '5 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '10 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D'
        ]
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 850',
        cartridge: [
          '2 x Toshiba e-Studio 205L 255 305 355 Toner Cartridge T4530D',
          '3 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '5 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '10 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D'
        ]
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 723',
        cartridge: [
          '2 x Toshiba e-Studio 205L 255 305 355 Toner Cartridge T4530D',
          '3 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '5 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '10 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D'
        ]
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 353',
        cartridge: [
          '2 x Toshiba e-Studio 205L 255 305 355 Toner Cartridge T4530D',
          '3 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '5 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D ',
          '10 x Toshiba e-Studio 163 165 166 167 205 207 Toner Cartridge T1640D'
        ]
      },
      {
        brand: "Toshiba",
        type: "toner",
        series: "monochromemfdsSeries",
        populor: false,
        imgSrc: 'Toshiba e-Studio 45',
        cartridge: []
      },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxAble",
          populor: true,
          imgSrc: 'Xerox Able 1250',
          cartridge: ['1 x Fuji Xerox DocuCentre 250 350 400 Toner Cartridge 113R00055']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxAble",
          populor: false,
          imgSrc: 'Xerox Able 1251',
          cartridge: ['1 x Fuji Xerox DocuCentre 250 350 400 Toner Cartridge 113R00055']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxAble",
          populor: true,
          imgSrc: 'Xerox Able 1350',
          cartridge: ['1 x Fuji Xerox DocuCentre 250 350 400 Toner Cartridge 113R00055']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxAble",
          populor: false,
          imgSrc: 'Xerox Able 1351',
          cartridge: ['1 x Fuji Xerox DocuCentre 250 350 400 Toner Cartridge 113R00055']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxColourQube",
          populor: false,
          imgSrc: 'Xerox ColorQube 8570',
          cartridge: [
            '1 x Fuji Xerox ColourQube 8570 Black 4PK Soild Ink Stick 108R00945',
            '1 x Fuji Xerox ColourQube 8570 Cyan 2PK Soild Ink Stick 108R00941',
            '1 x Fuji Xerox ColourQube 8570 Magenta 2PK Soild Ink Stick 108R00942',
            '1 x Fuji Xerox ColourQube 8570 Yellow 2PK Soild Ink Stick 108R00943'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: false,
          imgSrc: 'Xerox DocuCentre 156',
          cartridge: ['1 x Fuji Xerox DocuCentre 156 186 Toner Cartridge CT200401']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: false,
          imgSrc: 'Xerox DocuCentre 186',
          cartridge: ['1 x Fuji Xerox DocuCentre 156 186 Toner Cartridge CT200401']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre 230',
          cartridge: []
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre 235',
          cartridge: []
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre 236',
          cartridge: ['1 x Fuji Xerox DocuCentre 236 286 336 Toner Cartridge CT200417']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre 245',
          cartridge: []
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre 250',
          cartridge: ['1 x Fuji Xerox DocuCentre 250 350 400 Toner Cartridge 113R00055']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre 251',
          cartridge: ['1 x Fuji Xerox DocuCentre 250 350 400 Toner Cartridge 113R00055']
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre C250',
          cartridge: [
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Black Toner Cartridge CT200539',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Cyan Toner Cartridge CT200540',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Magenta Toner Cartridge CT200541 ',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Yellow Toner Cartridge CT200542 '
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre C320',
          cartridge: [
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Black Toner Cartridge CT200206',
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Cyan Toner Cartridge CT200207 ',
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Magenta Toner Cartridge CT200208',
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Yellow Toner Cartridge CT200209'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre C360',
          cartridge: [
            '	1 x Fuji Xerox DocuCentre C250 C360 C450 Black Toner Cartridge CT200539 ',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Cyan Toner Cartridge CT200540',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Magenta Toner Cartridge CT200541',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Yellow Toner Cartridge CT200542'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre C400',
          cartridge: [
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Black Toner Cartridge CT200206',
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Cyan Toner Cartridge CT200207',
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Magenta Toner Cartridge CT200208',
            '1 x Fuji Xerox DocuCentre C240 C320 C400 Yellow Toner Cartridge CT200209'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre C450',
          cartridge: [
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Black Toner Cartridge CT200539',
            '	1 x Fuji Xerox DocuCentre C250 C360 C450 Cyan Toner Cartridge CT200540',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Magenta Toner Cartridge CT200541',
            '1 x Fuji Xerox DocuCentre C250 C360 C450 Yellow Toner Cartridge CT200542'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: ' Xerox DocuCentre C5540 I',
          cartridge: [
            '1 x Fuji Xerox DocuColour 5065 6075 Black Toner Cartridge CT200568',
            '	1 x Fuji Xerox DocuColour 5065 6075 Cyan Toner Cartridge CT200569',
            '1 x Fuji Xerox DocuColour 5065 6075 Magenta Toner Cartridge CT200570',
            '1 x Fuji Xerox DocuColour 5065 6075 Yellow Toner Cartridge CT200571'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre C6550 I',
          cartridge: [
            '1 x Fuji Xerox DocuColour 5065 6075 Black Toner Cartridge CT200568',
            '1 x Fuji Xerox DocuColour 5065 6075 Cyan Toner Cartridge CT200569',
            '	1 x Fuji Xerox DocuColour 5065 6075 Magenta Toner Cartridge CT200570',
            '1 x Fuji Xerox DocuColour 5065 6075 Yellow Toner Cartridge CT200571'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre C7550 I',
          cartridge: [
            '1 x Fuji Xerox DocuColour 5065 6075 Black Toner Cartridge CT200568',
            '	1 x Fuji Xerox DocuColour 5065 6075 Cyan Toner Cartridge CT200569',
            '1 x Fuji Xerox DocuColour 5065 6075 Magenta Toner Cartridge CT200570',
            '	1 x Fuji Xerox DocuColour 5065 6075 Yellow Toner Cartridge CT200571'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre V C7775',
          cartridge: [
            '1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Black Toner Cartridge CT201370',
            '1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Cyan Toner Cartridge CT201371',
            '1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Magenta Toner Cartridge CT201372',
            '	1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Yellow Toner Cartridge CT201373'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre V C7776',
          cartridge: [
            '1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Black Toner Cartridge CT201370',
            '1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Cyan Toner Cartridge CT201371',
            '	1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Magenta Toner Cartridge CT201372',
            '1 x Fuji Xerox DocuCentre IV C2270 C3370 C4470 C5570 Yellow Toner Cartridge CT201373'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre VI C2271',
          cartridge: [
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Black Toner Cartridge CT202634',
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Cyan Toner Cartridge CT202635',
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Magenta Toner Cartridge CT202636',
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Yellow Toner Cartridge CT202637'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre VI C3370',
          cartridge: [
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Black Toner Cartridge CT202634',
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Cyan Toner Cartridge CT202635',
            '	1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Magenta Toner Cartridge CT202636',
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Yellow Toner Cartridge CT202637'
          ]
        },
        {
          brand: "Xerox",
          type: "toner",
          series: "xeroxDocuCentre",
          populor: true,
          imgSrc: 'Xerox DocuCentre VI C3371',
          cartridge: [
            '	1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Black Toner Cartridge CT202634',
            '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Cyan Toner Cartridge CT202635',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Magenta Toner Cartridge CT202636',
      '	1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Yellow Toner Cartridge CT202637'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuCentre",
    populor: true,
    imgSrc: ' Xerox DocuCentre VI C4471',
    cartridge: [
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Black Toner Cartridge CT202634',
      '	1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Cyan Toner Cartridge CT202635',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Magenta Toner Cartridge CT202636',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Yellow Toner Cartridge CT202637'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuCentre",
    populor: true,
    imgSrc: 'Xerox DocuCentre VI C5571',
    cartridge: [
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Black Toner Cartridge CT202634',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Cyan Toner Cartridge CT202635',
      '	1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Magenta Toner Cartridge CT202636',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Yellow Toner Cartridge CT202637'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuCentre",
    populor: true,
    imgSrc: 'Xerox DocuCentre VI C6671',
    cartridge: [
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Black Toner Cartridge CT202634',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Cyan Toner Cartridge CT202635',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Magenta Toner Cartridge CT202636',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Yellow Toner Cartridge CT202637'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuCentre",
    populor: true,
    imgSrc: 'Xerox DocuCentre VI C7771',
    cartridge: [
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Black Toner Cartridge CT202634',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Cyan Toner Cartridge CT202635',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Magenta Toner Cartridge CT202636',
      '1 x Fuji Xerox DocuCentre VI C2271 C3370 C3371 C4471 C5571 C6671 C7771 Yellow Toner Cartridge CT202637'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuColour",
    populor: false,
    imgSrc: 'Xerox DocuColour 6075 II',
    cartridge: [
      '1 x Fuji Xerox DocuColour 5065 6075 Black Toner Cartridge CT200568',
      '1 x Fuji Xerox DocuColour 5065 6075 Cyan Toner Cartridge CT200569',
      '1 x Fuji Xerox DocuColour 5065 6075 Magenta Toner Cartridge CT200570',
      '1 x Fuji Xerox DocuColour 5065 6075 Yellow Toner Cartridge CT200571'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: false,
    imgSrc: 'Xerox Docuprint CM205f',
    cartridge: [
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594 '
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: false,
    imgSrc: ' Xerox Docuprint CM205fw',
    cartridge: [
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
      '	1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594 '
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint CM215b',
    cartridge: [
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
      '	1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594 '
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint CM215fw',
    cartridge: [
      '	1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
      '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint CM225fw',
    cartridge: [
      '	1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Black Toner Cartridge High Yield CT202264',
      '	1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Cyan Toner Cartridge High Yield CT202265',
      '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Magenta Toner Cartridge High Yield CT202266',
      '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Yellow Toner Cartridge High Yield CT202267'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint CM305d',
    cartridge: [
      '	1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Black Toner Cartridge CT201632',
      '	1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Cyan Toner Cartridge CT201633',
      '	1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Magenta Toner Cartridge CT201634',
      '1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Yellow Toner Cartridge CT201635'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint CM305DF',
    cartridge: [
      '	1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Black Toner Cartridge CT201632',
      '	1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Cyan Toner Cartridge CT201633',
      '1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Magenta Toner Cartridge CT201634',
      '	1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Yellow Toner Cartridge CT201635'
    ]
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: ' Xerox Docuprint CM315z',
    cartridge: [
      '1 x Fuji Xerox DocuPrint CP315dw CM315z Black Toner Cartridge CT202610',
      '1 x Fuji Xerox DocuPrint CP315dw CM315z Cyan Toner Cartridge CT202611',
      '1 x Fuji Xerox DocuPrint CP315dw CM315z Magenta Toner Cartridge CT202612',
      '1 x Fuji Xerox DocuPrint CP315dw CM315z Yellow Toner Cartridge CT202613'
    ]
  },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox DocuPrint CM405df',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP405d CM405df Black Toner Cartridge CT202033',
        '1 x Fuji Xerox DocuPrint CP405d CM405df Cyan Toner Cartridge CT202034',
        '1 x Fuji Xerox DocuPrint CP405d CM405df Magenta Toner Cartridge CT202035',
        '1 x Fuji Xerox DocuPrint CP405d CM405df Yellow Toner Cartridge CT202036'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CM415',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CM415 CM415AP Black Toner Cartridge CT202352',
        '	1 x Fuji Xerox DocuPrint CM415 CM415AP Cyan Toner Cartridge CT202353',
        '1 x Fuji Xerox DocuPrint CM415 CM415AP Magenta Toner Cartridge CT202354',
        '1 x Fuji Xerox DocuPrint CM415 CM415AP Yellow Toner Cartridge CT202355'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CM415AP',
      cartridge: [
        '	1 x Fuji Xerox DocuPrint CM415 CM415AP Black Toner Cartridge CT202352',
        '1 x Fuji Xerox DocuPrint CM415 CM415AP Cyan Toner Cartridge CT202353',
        '1 x Fuji Xerox DocuPrint CM415 CM415AP Magenta Toner Cartridge CT202354',
        '1 x Fuji Xerox DocuPrint CM415 CM415AP Yellow Toner Cartridge CT202355'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CM505',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CM505 CM505DA Black Toner Cartridge CT201680',
        '1 x Fuji Xerox DocuPrint CM505 CM505DA Cyan Toner Cartridge CT201681',
        '1 x Fuji Xerox DocuPrint CM505 CM505DA Magenta Toner Cartridge CT201682',
        '1 x Fuji Xerox DocuPrint CM505 CM505DA Yellow Toner Cartridge CT201683'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP105b',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594 '
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP115w',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Black Toner Cartridge High Yield CT202264',
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Cyan Toner Cartridge High Yield CT202265',
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Magenta Toner Cartridge High Yield CT202266',
        '	1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Yellow Toner Cartridge High Yield CT202267'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP116w',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Black Toner Cartridge High Yield CT202264',
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Cyan Toner Cartridge High Yield CT202265',
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Magenta Toner Cartridge High Yield CT202266',
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Yellow Toner Cartridge High Yield CT202267'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP205',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP205w',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
        '	1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox DocuPrint CP215w',
      cartridge: [
        '	1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Black Toner Cartridge CT201591',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Cyan Toner Cartridge CT201592',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Magenta Toner Cartridge CT201593',
        '1 x Fuji Xerox DocuPrint CP105B CP205 CP205W CM205B CM205FW Yellow Toner Cartridge CT201594'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP225w',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Black Toner Cartridge High Yield CT202264',
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Cyan Toner Cartridge High Yield CT202265',
        '	1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Magenta Toner Cartridge High Yield CT202266',
        '1 x Fuji Xerox DocuPrint CP115W CP116W CP225W CM115W CM225FW Yellow Toner Cartridge High Yield CT202267'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP305D',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Black Toner Cartridge CT201632',
        '	1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Cyan Toner Cartridge CT201633',
        '1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Magenta Toner Cartridge CT201634',
        '1 x Fuji Xerox DocuPrint CP305D CM305D CM305DF Yellow Toner Cartridge CT201635'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint CP315dw',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP315dw CM315z Black Toner Cartridge CT202610',
        '1 x Fuji Xerox DocuPrint CP315dw CM315z Cyan Toner Cartridge CT202611',
        '	1 x Fuji Xerox DocuPrint CP315dw CM315z Magenta Toner Cartridge CT202612',
        '1 x Fuji Xerox DocuPrint CP315dw CM315z Yellow Toner Cartridge CT202613'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox DocuPrint CP405d',
      cartridge: [
        '1 x Fuji Xerox DocuPrint CP405d CM405df Black Toner Cartridge CT202033',
        '1 x Fuji Xerox DocuPrint CP405d CM405df Cyan Toner Cartridge CT202034',
        '1 x Fuji Xerox DocuPrint CP405d CM405df Magenta Toner Cartridge CT202035',
        '1 x Fuji Xerox DocuPrint CP405d CM405df Yellow Toner Cartridge CT202036'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: ' Xerox Docuprint M115fw',
      cartridge: ['1 x Fuji Xerox DocuPrint P115 P115b Toner Cartridge CT202137']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: ' Xerox Docuprint M115w',
      cartridge: ['1 x Fuji Xerox DocuPrint P115 P115b Toner Cartridge CT202137']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: ' Xerox DocuPrint M205B',
      cartridge: ['	1 x Fuji Xerox DocuPrint P205B P205W M205B M205FW Toner Cartridge High Yield CT201610']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox DocuPrint M205FW',
      cartridge: ['	1 x Fuji Xerox DocuPrint P205B P205W M205B M205FW Toner Cartridge High Yield CT201610']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: ' Xerox Docuprint M215b',
      cartridge: ['	1 x Fuji Xerox DocuPrint P205B P205W M205B M205FW Toner Cartridge High Yield CT201610']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint M215fw',
      cartridge: ['1 x Fuji Xerox DocuPrint P205B P205W M205B M205FW Toner Cartridge High Yield CT201610']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint M225dw',
      cartridge: ['1 x Fuji Xerox DocuPrint P225 P265 M225 M265 Toner Cartridge High Yield CT202330']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: 'Xerox Docuprint M225z',
      cartridge: ['1 x Fuji Xerox DocuPrint P225 P265 M225 M265 Toner Cartridge High Yield CT202330']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxDocuPrint",
      populor: true,
      imgSrc: ' Xerox Docuprint M255z',
      cartridge: ['1 x Fuji Xerox DocuPrint P255DW M255Z Toner Cartridge CT201918']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint M265z',
    cartridge: ['1 x Fuji Xerox DocuPrint P225 P265 M225 M265 Toner Cartridge High Yield CT202330']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint M355df',
    cartridge: ['1 x Fuji Xerox DocuPrint P355d M355df Toner Cartridge CT201938']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint M455df',
    cartridge: ['1 x Fuji Xerox DocuPrint P455 P455d Toner Cartridge CT201949']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: ' Xerox Docuprint M465',
    cartridge: ['1 x Fuji Xerox DocuPrint M465 M465AP Toner Cartridge CT202373']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint M465AP',
    cartridge: ['1 x Fuji Xerox DocuPrint M465 M465AP Toner Cartridge CT202373']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint N17',
    cartridge: ['1 x Fuji Xerox DocuPrint 4517 N17 Toner Cartridge 113R00095']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint N2125',
    cartridge: ['1 x Fuji Xerox DocuPrint N2125 Toner Cartridge 113R00446']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint N4525',
    cartridge: ['1 x Fuji Xerox DocuPrint N4525 Toner Cartridge 113R00195']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint P115',
    cartridge: ['1 x Fuji Xerox DocuPrint P115 P115b Toner Cartridge CT202137']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint P115b',
    cartridge: ['1 x Fuji Xerox DocuPrint P115 P115b Toner Cartridge CT202137']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint P115w',
    cartridge: ['1 x Fuji Xerox DocuPrint P115 P115b Toner Cartridge CT202137']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: ' Xerox DocuPrint P1210',
    cartridge: ['1 x Fuji Xerox DocuPrint P1210 Toner Cartridge 106R00440']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: ' Xerox DocuPrint P205B',
    cartridge: ['1 x Fuji Xerox DocuPrint P205B P205W M205B M205FW Toner Cartridge High Yield CT201610']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint P205W',
    cartridge: ['1 x Fuji Xerox DocuPrint P205B P205W M205B M205FW Toner Cartridge High Yield CT201610']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint P215b',
    cartridge: ['1 x Fuji Xerox DocuPrint P205B P205W M205B M205FW Toner Cartridge High Yield CT201610']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint P225d',
    cartridge: ['1 x Fuji Xerox DocuPrint P225 P265 M225 M265 Toner Cartridge High Yield CT202330']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: ' Xerox Docuprint P255dw',
    cartridge: ['1 x Fuji Xerox DocuPrint P255DW M255Z Toner Cartridge CT201918']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: ' Xerox Docuprint P265dw',
    cartridge: ['1 x Fuji Xerox DocuPrint P225 P265 M225 M265 Toner Cartridge High Yield CT202330']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint P355d',
    cartridge: ['1 x Fuji Xerox DocuPrint P355d M355df Toner Cartridge CT201938']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox Docuprint P365dw',
    cartridge: ['1 x Fuji Xerox DocuPrint P355d M355df Toner Cartridge CT201938']
  },
  {
    brand: "Xerox",
    type: "toner",
    series: "xeroxDocuPrint",
    populor: true,
    imgSrc: 'Xerox DocuPrint P455d',
    cartridge: ['1 x Fuji Xerox DocuPrint P455 P455d Toner Cartridge CT201949']
  },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: false,
      imgSrc: 'Xerox Phaser 7700',
      cartridge: [
        '	1 x Fuji Xerox Phaser 7700 Black Toner Cartridge High Yield 016194700',
        '1 x Fuji Xerox Phaser 7700 Cyan Toner Cartridge High Yield 016194400',
        '1 x Fuji Xerox Phaser 7700 Magenta Toner Cartridge High Yield 016194500',
        '1 x Fuji Xerox Phaser 7700 Yellow Toner Cartridge High Yield 016194600'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: false,
      imgSrc: 'Xerox Phaser 7750',
      cartridge: [
        '1 x Fuji Xerox Phaser 7750 Black Toner Cartridge 106R00652',
        '1 x Fuji Xerox Phaser 7750 Cyan Toner Cartridge 106R00653',
        '	1 x Fuji Xerox Phaser 7750 Magenta Toner Cartridge 106R00654',
        '	1 x Fuji Xerox Phaser 7750 Yellow Toner Cartridge 106R00655'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: 'Xerox Phaser 7760',
      cartridge: [
        '1 x Fuji Xerox Phaser 7760 Black Toner Cartridge 106R01163',
        '	1 x Fuji Xerox Phaser 7760 Cyan Toner Cartridge 106R01160',
        '	1 x Fuji Xerox Phaser 7760 Magenta Toner Cartridge 106R01161',
        '1 x Fuji Xerox Phaser 7760 Yellow Toner Cartridge 106R01162'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: ' Xerox Phaser 7800dn',
      cartridge: [
        '1 x Fuji Xerox Phaser 7800 Black Toner Cartridge 106R01577',
        '1 x Fuji Xerox Phaser 7800 Cyan Toner Cartridge 106R01574',
        '	1 x Fuji Xerox Phaser 7800 Magenta Toner Cartridge 106R01575',
        '1 x Fuji Xerox Phaser 7800 Yellow Toner Cartridge 106R01576'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: ' Xerox Phaser 8200',
      cartridge: [
        '1 x Fuji Xerox Phaser 8200 Black 10PK Soild Ink Stick 016204400',
        '	1 x Fuji Xerox Phaser 8200 Cyan 5PK Soild Ink Stick 016204500',
        '	1 x Fuji Xerox Phaser 8200 Magenta 5PK Soild Ink Stick 016204600',
        '1 x Fuji Xerox Phaser 8200 Yellow 5PK Soild Ink Stick 016204700 '
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: 'Xerox Phaser 8400 series',
      cartridge: ['1 x Fuji Xerox Phaser 8400 Extended Maintenance Kit 108R00603']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: 'Xerox Phaser 850',
      cartridge: [
        '	1 x Fuji Xerox Phaser 850 Cyan Soild Ink Stick 016182500',
        '1 x Fuji Xerox Phaser 850 Magenta Soild Ink Stick 016182600',
        '	1 x Fuji Xerox Phaser 850 Yellow Soild Ink Stick 016182700'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: 'Xerox Phaser 8500',
      cartridge: [
        '1 x Fuji Xerox Phaser 8500 8550 Black 6PK Soild Ink Stick 108R00672',
        '1 x Fuji Xerox Phaser 8500 8550 Cyan 3PK Soild Ink Stick 108R00669',
        '	1 x Fuji Xerox Phaser 8500 8550 Magenta 3PK Soild Ink Stick 108R00670',
        '1 x Fuji Xerox Phaser 8500 8550 Yellow 3PK Soild Ink Stick 108R00671'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: 'Xerox Phaser 8550 series',
      cartridge: [
        '1 x Fuji Xerox Phaser 8500 8550 Black 6PK Soild Ink Stick 108R00672',
        '1 x Fuji Xerox Phaser 8500 8550 Cyan 3PK Soild Ink Stick 108R00669',
        '1 x Fuji Xerox Phaser 8500 8550 Magenta 3PK Soild Ink Stick 108R00670',
        '	1 x Fuji Xerox Phaser 8500 8550 Yellow 3PK Soild Ink Stick 108R00671'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: 'Xerox Phaser 8560',
      cartridge: [
        '1 x Fuji Xerox Phaser 8560 Black 6PK Soild Ink Stick 108R00727',
        '	1 x Fuji Xerox Phaser 8560 Cyan 3PK Soild Ink Stick 108R00723',
        '1 x Fuji Xerox Phaser 8560 Magenta 3PK Soild Ink Stick 108R00724',
        '1 x Fuji Xerox Phaser 8560 Yellow 3PK Soild Ink Stick 108R00725'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxPhaser",
      populor: true,
      imgSrc: 'Xerox Phaser 860',
      cartridge: [
        '1 x Fuji Xerox Phaser 860 5 x Cyan 2 x Black Soild Ink Stick 016190301',
        '1 x Fuji Xerox Phaser 860 5 x Magenta 2 x Black Soild Ink Stick 016190401',
        '1 x Fuji Xerox Phaser 860 5 x Yellow 2 x Black Soild Ink Stick 016190501'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: false,
      imgSrc: ' Xerox WorkCentre 390',
      cartridge: ['1 x Fuji Xerox WorkCentre 390 Toner Cartridge 113R00462']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: false,
      imgSrc: 'Xerox WorkCentre 4150s',
      cartridge: ['	1 x Fuji Xerox WoreCentre 4150 Toner Cartridge 006R01275']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre 4150x',
      cartridge: ['1 x Fuji Xerox WoreCentre 4150 Toner Cartridge 006R01275']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre 416',
      cartridge: ['1 x Fuji Xerox WorkCentre 416 Toner Cartridge 106R00443 ']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre 420',
      cartridge: ['1 x Fuji Xerox WorkCentre 315 320 420 Toner Cartridge Twin Pack 106R00280']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre 4250',
      cartridge: ['1 x Fuji Xerox WorkCentre 4250 Toner Cartridge 106R01548']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre 4260',
      cartridge: ['1 x Fuji Xerox WorkCentre 4250 Toner Cartridge 106R01548']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: ' Xerox WorkCentre C2424',
      cartridge: [
        '1 x Fuji Xerox WorkCentre C2424 Black 6PK Soild Ink Stick 108R00664',
        '1 x Fuji Xerox WorkCentre C2424 Cyan 3PK Soild Ink Stick 108R00660',
        '1 x Fuji Xerox WorkCentre C2424 Magenta 3PK Soild Ink Stick 108R00661',
        '1 x Fuji Xerox WorkCentre C2424 Yellow 3PK Soild Ink Stick 108R00662'
      ]
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre PE220',
      cartridge: ['1 x Fuji Xerox WorkCentre PE220 Toner Cartridge CWAA0683']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre Pro 45',
      cartridge: ['1 x Fuji Xerox WorkCentre Pro 45 55 Toner Cartridge Twin Pack 006R01046']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: 'Xerox WorkCentre Pro 55',
      cartridge: ['1 x Fuji Xerox WorkCentre Pro 45 55 Toner Cartridge Twin Pack 006R01046']
    },
    {
      brand: "Xerox",
      type: "toner",
      series: "xeroxWorkCentre",
      populor: true,
      imgSrc: ' Xerox WorkCentre XD-155DF',
      cartridge: ['1 x Fuji Xerox WorkCentre 103F 155DF Toner Cartridge 006R00915']
    }

];

export default products;
