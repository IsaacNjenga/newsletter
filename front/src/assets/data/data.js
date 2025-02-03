import ergonomic from "../images/luxury.webp";
import bookshelf from "../images/bookshelf.webp";
import recliner from "../images/recliner.jpg";
import accessory from "../icons/accessory.png";
import electronics from "../icons/electronics.png";
import homeChair from "../icons/home-chair.png";
import officeChair from "../icons/office-chair.png";
import secondHand from "../icons/second-hand.png";

export const icons = [
  { icon: accessory, name: "accessory" },
  { icon: electronics, name: "electronics" },
  { icon: homeChair, name: "homeChair" },
  { icon: officeChair, name: "officeChair" },
  { icon: secondHand, name: "secondHand" },
];

export const categoryData = [
  { category: "Office Furniture", name: "Office Furniture" },
  { category: "Home Furniture", name: "Home Furniture" },
  { category: "Electronics", name: "Electronics" },
  { category: "Second-Hand Items", name: "Second-Hand Items" },
  { category: "Accessories", name: "Accessories" },
];

export const statusData = [
  { status: "Available", name: "Available" },
  { status: "Discontinued", name: "Discontinued" },
  { status: "Out of Stock", name: "Out of Stock" },
  { status: "Upcoming", name: "Upcoming" },
];

export const homeFurnitureTags = [
  "Sofas",
  "Beds",
  "Mattresses",
  "Dining tables",
  "Chairs",
  "Desks",
  "Bookshelves",
  "Wardrobes",
  "Coffee tables",
  "TV stands",
];

export const officeFurnitureTags = [
  "Office Desk",
  "Office Chair",
  "Bookshelf",
  "Filing Cabinet",
  "Meeting Table","Executive Seat"
];

export const electronicsTags = [
  "Laptop",
  "Desktop",
  "Tablet",
  "Smartphone",
  "Gaming Console",
];

export const secondHandItemsTags = [
  "Used Books",
  "Used Clothing",
  "Used Furniture",
  "Used Electronics",
];

export const accessoriesTags = [
  "Lighting fixtures",
  "Decorative items",
  "Rugs",
  "Curtains",
  "Bedding",
];

export const itemColours = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Black",
  "White",
  "Gray",
  "Brown",
  "Silver",
  "Gold",
  "Beige",
  "Maroon"
];

export const officeFurnitureData = [
  {
    id: 1,
    image: [ergonomic, recliner, officeChair],
    name: "Executive Office Chair",
    price: "Ksh. 29,900",
  },
  {
    id: 2,
    image: [ergonomic, bookshelf, recliner],
    name: "Corner Computer Desk",
    price: "Ksh. 39,900",
  },
  {
    id: 3,
    image: [ergonomic, bookshelf, recliner],
    name: "Conference Table",
    price: "Ksh. 99,900",
  },
  {
    id: 4,
    image: [ergonomic, bookshelf, recliner],
    name: "Ergonomic Office Chair",
    price: "Ksh. 49,900",
  },
  {
    id: 5,
    image: [ergonomic, bookshelf, recliner],
    name: "5-Shelf Bookcase",
    price: "Ksh. 19,900",
  },
  {
    id: 6,
    image: [ergonomic, bookshelf, recliner],
    name: "4-Drawer Filing Cabinet",
    price: "Ksh. 29,900",
  },
  {
    id: 7,
    image: [ergonomic, bookshelf, recliner],
    name: "2-Seater Office Sofa",
    price: "Ksh. 59,900",
  },
  {
    id: 8,
    image: [ergonomic, bookshelf, recliner],
    name: "Reception Desk with Storage",
    price: "Ksh. 79,900",
  },
  {
    id: 9,
    image: [ergonomic, bookshelf, recliner],
    name: "Round Meeting Table",
    price: "Ksh. 69,900",
  },
  {
    id: 10,
    image: [ergonomic, bookshelf, recliner],
    name: "Adjustable Office Stool",
    price: "Ksh. 14,900",
  },
  // Additional entries
  {
    id: 11,
    image: [ergonomic, bookshelf, recliner],
    name: "Executive Office Desk",
    price: "Ksh. 89,900",
  },
  {
    id: 12,
    image: [ergonomic, bookshelf, recliner],
    name: "L-Shaped Computer Desk",
    price: "Ksh. 44,900",
  },
  {
    id: 13,
    image: [ergonomic, bookshelf, recliner],
    name: "Standing Desk Converter",
    price: "Ksh. 19,900",
  },
  {
    id: 14,
    image: [ergonomic, bookshelf, recliner],
    name: "Leather Executive Chair",
    price: "Ksh. 59,900",
  },
  {
    id: 15,
    image: [ergonomic, bookshelf, recliner],
    name: "Folding Meeting Table",
    price: "Ksh. 24,900",
  },
  {
    id: 16,
    image: [ergonomic, bookshelf, recliner],
    name: "Metal Filing Cabinet",
    price: "Ksh. 12,900",
  },
  {
    id: 17,
    image: [ergonomic, bookshelf, recliner],
    name: "Wooden Bookshelf",
    price: "Ksh. 29,900",
  },
  {
    id: 18,
    image: [ergonomic, bookshelf, recliner],
    name: "Mesh Back Office Chair",
    price: "Ksh. 18,900",
  },
  {
    id: 19,
    image: [ergonomic, bookshelf, recliner],
    name: "Executive Chair with Ottoman",
    price: "Ksh. 79,900",
  },
  {
    id: 20,
    image: [ergonomic, bookshelf, recliner],
    name: "Reception Seating Set",
    price: "Ksh. 119,900",
  },
];

export const accessoriesData = [
  {
    id: 1,
    name: "Logitech MX Master 3 Wireless Mouse",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 14,900",
  },
  {
    id: 2,
    name: "Razer BlackWidow Lite Mechanical Keyboard",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 24,900",
  },
  {
    id: 3,
    name: "SteelSeries Arctis 7 Wireless Gaming Headset",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 19,900",
  },
  {
    id: 4,
    name: "Corsair K95 RGB Platinum Mechanical Keyboard",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 39,900",
  },
  {
    id: 5,
    name: "HyperX Cloud II Gaming Headset",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 16,900",
  },
  {
    id: 6,
    name: "Logitech G502 Lightspeed Wireless Gaming Mouse",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 18,900",
  },
  {
    id: 7,
    name: "Razer DeathAdder Elite Gaming Mouse",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 12,900",
  },
  {
    id: 8,
    name: "Corsair M65 RGB Ultra Wireless Gaming Mouse",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 22,900",
  },
  {
    id: 9,
    name: "SteelSeries Rival 600 Wireless Gaming Mouse",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 20,900",
  },
  {
    id: 10,
    name: "Logitech G Pro X Mechanical Keyboard",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 29,900",
  },
  // Additional entries
  {
    id: 11,
    name: "Apple Magic Mouse 2",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 12,900",
  },
  {
    id: 12,
    name: "SteelSeries Apex Pro Mechanical Keyboard",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 34,900",
  },
  {
    id: 13,
    name: "Razer Kraken Ultimate Gaming Headset",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 24,900",
  },
  {
    id: 14,
    name: "Corsair Void RGB Elite Wireless Headset",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 19,900",
  },
  {
    id: 15,
    name: "HyperX Alloy FPS Pro Mechanical Keyboard",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 15,900",
  },
  {
    id: 16,
    name: "Logitech G Pro Wireless Gaming Mouse",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 21,900",
  },
  {
    id: 17,
    name: "Razer Nari Ultimate Wireless Gaming Headset",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 29,900",
  },
  {
    id: 18,
    name: "Corsair K70 RGB MK.2 Mechanical Keyboard",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 33,900",
  },
  {
    id: 19,
    name: "Logitech G910 Orion Spectrum Mechanical Keyboard",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 28,900",
  },
  {
    id: 20,
    name: "SteelSeries Arctis 5 Wired Gaming Headset",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 14,900",
  },
];

export const electronicsData = [
  {
    id: 1,
    name: "Samsung 4K Smart TV",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 249,900",
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 149,900",
  },
  {
    id: 3,
    name: "Sony PlayStation 5 Console",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 69,900",
  },
  {
    id: 4,
    name: "Dell Inspiron 15 Laptop",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 99,900",
  },
  {
    id: 5,
    name: "Canon EOS Rebel T8i Camera",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 129,900",
  },
  {
    id: 6,
    name: "Bose QuietComfort 45 Headphones",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 29,900",
  },
  {
    id: 7,
    name: "Xbox Series X Console",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 79,900",
  },
  {
    id: 8,
    name: "HP Envy 5055 All-in-One Printer",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 19,900",
  },
  {
    id: 9,
    name: "Google Pixel 6 Pro Smartphone",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 179,900",
  },
  {
    id: 10,
    name: "LG 27UK850-W 27 4K Monitor",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 49,900",
  },
  // Additional entries
  {
    id: 11,
    name: "Samsung Galaxy S21 Ultra",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 199,900",
  },
  {
    id: 12,
    name: "Apple MacBook Pro 14-inch",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 249,900",
  },
  {
    id: 13,
    name: "Sony WH-1000XM4 Wireless Headphones",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 34,900",
  },
  {
    id: 14,
    name: "GoPro HERO10 Black",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 59,900",
  },
  {
    id: 15,
    name: "Dell XPS 13 Laptop",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 179,900",
  },
  {
    id: 16,
    name: "Samsung QLED 8K TV",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 499,900",
  },
  {
    id: 17,
    name: "Microsoft Surface Pro 8",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 219,900",
  },
  {
    id: 18,
    name: "Razer Blade 15 Advanced Gaming Laptop",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 299,900",
  },
  {
    id: 19,
    name: "Nikon D850 DSLR Camera",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 249,900",
  },
  {
    id: 20,
    name: "Epson EcoTank ET-7750 Printer",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 89,900",
  },
];

export const homeFurnitureData = [
  {
    id: 1,
    name: "Modern Sofa Set",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 129,900",
  },
  {
    id: 2,
    name: "Reclaimed Wood Coffee Table",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 49,900",
  },
  {
    id: 3,
    name: "Industrial Chic Dining Table",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 89,900",
  },
  {
    id: 4,
    name: "Mid-Century Modern Armchair",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 39,900",
  },
  {
    id: 5,
    name: "Rustic Wooden TV Stand",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 29,900",
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 9,900",
  },
  {
    id: 7,
    name: "Cozy Sectional Sofa",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 199,900",
  },
  {
    id: 8,
    name: "Vintage-Inspired Side Table",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 24,900",
  },
  {
    id: 9,
    name: "Scandinavian Dining Chairs (Set of 4)",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 39,900",
  },
  {
    id: 10,
    name: "Faux Leather Recliner Chair",
    image: [ergonomic, bookshelf, recliner], // Add image URL here
    price: "Ksh. 49,900",
  },
  // Additional entries
  {
    id: 11,
    name: "Boho Chic Area Rug",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 29,900",
  },
  {
    id: 12,
    name: "Contemporary Glass Coffee Table",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 59,900",
  },
  {
    id: 13,
    name: "Wooden Armchair with Cushion",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 24,900",
  },
  {
    id: 14,
    name: "Fabric Ottoman with Storage",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 18,900",
  },
  {
    id: 15,
    name: "Modern Accent Chair",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 36,900",
  },
  {
    id: 16,
    name: "Luxury King Bed Frame",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 129,900",
  },
  {
    id: 17,
    name: "Mid-Century Modern Coffee Table",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 45,900",
  },
  {
    id: 18,
    name: "Elderly Care Recliner Chair",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 69,900",
  },
  {
    id: 19,
    name: "Wicker Rattan Dining Chairs (Set of 2)",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 18,900",
  },
  {
    id: 20,
    name: "Bamboo Sofa Set",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 149,900",
  },
];
export const secondHandItemsData = [
  {
    id: 1,
    name: "Used Samsung 40' LED TV",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 29,900",
    condition: "Good",
    description: "Used for 2 years, minor scratches on the screen",
  },
  {
    id: 2,
    name: "Second Hand IKEA Sofa",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 19,900",
    condition: "Fair",
    description: "Used for 5 years, some stains on the fabric",
  },
  {
    id: 3,
    name: "Refurbished Dell Inspiron 15 Laptop",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 49,900",
    condition: "Excellent",
    description: "Refurbished with new hard drive and RAM",
  },
  {
    id: 4,
    name: "Used Canon EOS Rebel T6 Camera",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 39,900",
    condition: "Good",
    description: "Used for 3 years, minor scratches on the body",
  },
  {
    id: 5,
    name: "Second Hand Sony PlayStation 4 Console",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 29,900",
    condition: "Fair",
    description: "Used for 4 years, some scratches on the console",
  },
  {
    id: 6,
    name: "Used LG 27' LED Monitor",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 14,900",
    condition: "Good",
    description: "Used for 2 years, minor scratches on the screen",
  },
  {
    id: 7,
    name: "Refurbished Apple iPhone 7",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 29,900",
    condition: "Excellent",
    description: "Refurbished with new battery and screen",
  },
  {
    id: 8,
    name: "Used HP Envy 5055 All-in-One Printer",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 9,900",
    condition: "Fair",
    description: "Used for 3 years, some scratches on the printer",
  },
  {
    id: 9,
    name: "Second Hand Bose QuietComfort 35 Headphones",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 19,900",
    condition: "Good",
    description: "Used for 2 years, minor scratches on the headphones",
  },
  {
    id: 10,
    name: "Used Dell Inspiron 15 Laptop Bag",
    image: [ergonomic, bookshelf, recliner],
    price: "Ksh. 4,900",
    condition: "Fair",
    description: "Used for 2 years, some scratches on the bag",
  },
];
