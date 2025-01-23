import React from "react";

function Accessories() {
  const data = [
    {
      id: 1,
      name: "Logitech MX Master 3 Wireless Mouse",
      image: "", // Add image URL here
      price: "Ksh. 14,900",
    },
    {
      id: 2,
      name: "Razer BlackWidow Lite Mechanical Keyboard",
      image: "", // Add image URL here
      price: "Ksh. 24,900",
    },
    {
      id: 3,
      name: "SteelSeries Arctis 7 Wireless Gaming Headset",
      image: "", // Add image URL here
      price: "Ksh. 19,900",
    },
    {
      id: 4,
      name: "Corsair K95 RGB Platinum Mechanical Keyboard",
      image: "", // Add image URL here
      price: "Ksh. 39,900",
    },
    {
      id: 5,
      name: "HyperX Cloud II Gaming Headset",
      image: "", // Add image URL here
      price: "Ksh. 16,900",
    },
    {
      id: 6,
      name: "Logitech G502 Lightspeed Wireless Gaming Mouse",
      image: "", // Add image URL here
      price: "Ksh. 18,900",
    },
    {
      id: 7,
      name: "Razer DeathAdder Elite Gaming Mouse",
      image: "", // Add image URL here
      price: "Ksh. 12,900",
    },
    {
      id: 8,
      name: "Corsair M65 RGB Ultra Wireless Gaming Mouse",
      image: "", // Add image URL here
      price: "Ksh. 22,900",
    },
    {
      id: 9,
      name: "SteelSeries Rival 600 Wireless Gaming Mouse",
      image: "", // Add image URL here
      price: "Ksh. 20,900",
    },
    {
      id: 10,
      name: "Logitech G Pro X Mechanical Keyboard",
      image: "", // Add image URL here
      price: "Ksh. 29,900",
    },
  ];
  return (
    <>
      <div className="product-page-container">
        <h1 className="product-page-title">Office Furniture</h1>
        <div className="product-page-list">
          {data.map((d) => (
            <div key={d.id} className="product-page-card">
              <img src={d.image} alt={d.name} className="product-page-image" />
              <div className="product-page-info">
                <h3 className="product-page-name">{d.name}</h3>
                <p className="product-page-price">{d.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accessories;
