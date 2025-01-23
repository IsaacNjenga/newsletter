import React from "react";

function HomeFurniture() {
  const data = [
    {
      id: 1,
      name: "Modern Sofa Set",
      image: "", // Add image URL here
      price: "Ksh. 129,900",
    },
    {
      id: 2,
      name: "Reclaimed Wood Coffee Table",
      image: "", // Add image URL here
      price: "Ksh. 49,900",
    },
    {
      id: 3,
      name: "Industrial Chic Dining Table",
      image: "", // Add image URL here
      price: "Ksh. 89,900",
    },
    {
      id: 4,
      name: "Mid-Century Modern Armchair",
      image: "", // Add image URL here
      price: "Ksh. 39,900",
    },
    {
      id: 5,
      name: "Rustic Wooden TV Stand",
      image: "", // Add image URL here
      price: "Ksh. 29,900",
    },
    {
      id: 6,
      name: "Minimalist Desk Lamp",
      image: "", // Add image URL here
      price: "Ksh. 9,900",
    },
    {
      id: 7,
      name: "Cozy Sectional Sofa",
      image: "", // Add image URL here
      price: "Ksh. 199,900",
    },
    {
      id: 8,
      name: "Vintage-Inspired Side Table",
      image: "", // Add image URL here
      price: "Ksh. 24,900",
    },
    {
      id: 9,
      name: "Contemporary King-Size Bed",
      image: "", // Add image URL here
      price: "Ksh. 149,900",
    },
    {
      id: 10,
      name: "Woven Seagrass Storage Ottoman",
      image: "", // Add image URL here
      price: "Ksh. 19,900",
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

export default HomeFurniture;
