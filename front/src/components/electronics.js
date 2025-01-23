import React from "react";

function Electronics() {
  const data = [
    {
      id: 1,
      name: "Samsung 4K Smart TV",
      image: "", // Add image URL here
      price: "Ksh. 249,900",
    },
    {
      id: 2,
      name: "Apple iPhone 14 Pro",
      image: "", // Add image URL here
      price: "Ksh. 149,900",
    },
    {
      id: 3,
      name: "Sony PlayStation 5 Console",
      image: "", // Add image URL here
      price: "Ksh. 69,900",
    },
    {
      id: 4,
      name: "Dell Inspiron 15 Laptop",
      image: "", // Add image URL here
      price: "Ksh. 99,900",
    },
    {
      id: 5,
      name: "Canon EOS Rebel T8i Camera",
      image: "", // Add image URL here
      price: "Ksh. 129,900",
    },
    {
      id: 6,
      name: "Bose QuietComfort 45 Headphones",
      image: "", // Add image URL here
      price: "Ksh. 29,900",
    },
    {
      id: 7,
      name: "Xbox Series X Console",
      image: "", // Add image URL here
      price: "Ksh. 79,900",
    },
    {
      id: 8,
      name: "HP Envy 5055 All-in-One Printer",
      image: "", // Add image URL here
      price: "Ksh. 19,900",
    },
    {
      id: 9,
      name: "Google Pixel 6 Pro Smartphone",
      image: "", // Add image URL here
      price: "Ksh. 179,900",
    },
    {
      id: 10,
      name: "LG 27UK850-W 27 4K Monitor",
      image: "", // Add image URL here
      price: "Ksh. 49,900",
    },
  ];
  return (
    <>
      <div className="product-page-container">
        <h1 className="product-page-title">Electronics</h1>
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

export default Electronics;
