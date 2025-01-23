import React from "react";

function SecondHandItems() {
  const data = [
    {
      id: 1,
      name: "Used Samsung 40' LED TV",
      image: "", // Add image URL here
      price: "Ksh. 29,900",
      condition: "Good",
      description: "Used for 2 years, minor scratches on the screen",
    },
    {
      id: 2,
      name: "Second Hand IKEA Sofa",
      image: "", // Add image URL here
      price: "Ksh. 19,900",
      condition: "Fair",
      description: "Used for 5 years, some stains on the fabric",
    },
    {
      id: 3,
      name: "Refurbished Dell Inspiron 15 Laptop",
      image: "", // Add image URL here
      price: "Ksh. 49,900",
      condition: "Excellent",
      description: "Refurbished with new hard drive and RAM",
    },
    {
      id: 4,
      name: "Used Canon EOS Rebel T6 Camera",
      image: "", // Add image URL here
      price: "Ksh. 39,900",
      condition: "Good",
      description: "Used for 3 years, minor scratches on the body",
    },
    {
      id: 5,
      name: "Second Hand Sony PlayStation 4 Console",
      image: "", // Add image URL here
      price: "Ksh. 29,900",
      condition: "Fair",
      description: "Used for 4 years, some scratches on the console",
    },
    {
      id: 6,
      name: "Used LG 27' LED Monitor",
      image: "", // Add image URL here
      price: "Ksh. 14,900",
      condition: "Good",
      description: "Used for 2 years, minor scratches on the screen",
    },
    {
      id: 7,
      name: "Refurbished Apple iPhone 7",
      image: "", // Add image URL here
      price: "Ksh. 29,900",
      condition: "Excellent",
      description: "Refurbished with new battery and screen",
    },
    {
      id: 8,
      name: "Used HP Envy 5055 All-in-One Printer",
      image: "", // Add image URL here
      price: "Ksh. 9,900",
      condition: "Fair",
      description: "Used for 3 years, some scratches on the printer",
    },
    {
      id: 9,
      name: "Second Hand Bose QuietComfort 35 Headphones",
      image: "", // Add image URL here
      price: "Ksh. 19,900",
      condition: "Good",
      description: "Used for 2 years, minor scratches on the headphones",
    },
    {
      id: 10,
      name: "Used Dell Inspiron 15 Laptop Bag",
      image: "", // Add image URL here
      price: "Ksh. 4,900",
      condition: "Fair",
      description: "Used for 2 years, some scratches on the bag",
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

export default SecondHandItems;
