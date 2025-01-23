import React from "react";

function SecondHandItems() {
  const data = [
    {
      id: 1,
      name: "Used Samsung 40' LED TV",
      image:
        "https://images.pexels.com/photos/6148453/pexels-photo-6148453.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "Ksh. 29,900",
      condition: "Good",
      description: "Used for 2 years, minor scratches on the screen",
    },
    {
      id: 2,
      name: "Second Hand IKEA Sofa",
      image:
        "data:image/webp;base64,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",
      price: "Ksh. 19,900",
      condition: "Fair",
      description: "Used for 5 years, some stains on the fabric",
    },
    {
      id: 3,
      name: "Refurbished Dell Inspiron 15 Laptop",
      image:
        "data:image/webp;base64,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",
      price: "Ksh. 49,900",
      condition: "Excellent",
      description: "Refurbished with new hard drive and RAM",
    },
    {
      id: 4,
      name: "Used Canon EOS Rebel T6 Camera",
      image: "https://i.imgur.com/2Kq6xLH.jpg",
      price: "Ksh. 39,900",
      condition: "Good",
      description: "Used for 3 years, minor scratches on the body",
    },
    {
      id: 5,
      name: "Second Hand Sony PlayStation 4 Console",
      image: "https://i.imgur.com/5Kq6xLH.jpg",
      price: "Ksh. 29,900",
      condition: "Fair",
      description: "Used for 4 years, some scratches on the console",
    },
    {
      id: 6,
      name: "Used LG 27' LED Monitor",
      image: "https://i.imgur.com/1Kq6xLH.jpg",
      price: "Ksh. 14,900",
      condition: "Good",
      description: "Used for 2 years, minor scratches on the screen",
    },
    {
      id: 7,
      name: "Refurbished Apple iPhone 7",
      image: "https://i.imgur.com/9Kq6xLH.jpg",
      price: "Ksh. 29,900",
      condition: "Excellent",
      description: "Refurbished with new battery and screen",
    },
    {
      id: 8,
      name: "Used HP Envy 5055 All-in-One Printer",
      image: "https://i.imgur.com/7Kq6xLH.jpg",
      price: "Ksh. 9,900",
      condition: "Fair",
      description: "Used for 3 years, some scratches on the printer",
    },
    {
      id: 9,
      name: "Second Hand Bose QuietComfort 35 Headphones",
      image: "https://i.imgur.com/3Kq6xLH.jpg",
      price: "Ksh. 19,900",
      condition: "Good",
      description: "Used for 2 years, minor scratches on the headphones",
    },
    {
      id: 10,
      name: "Used Dell Inspiron 15 Laptop Bag",
      image: "https://i.imgur.com/6Kq6xLH.jpg",
      price: "Ksh. 4,900",
      condition: "Fair",
      description: "Used for 2 years, some scratches on the bag",
    },
  ];
  return (
    <>
      <div className="product-page-container">
        <h1 className="product-page-title">Second Hand Items</h1>
        <div className="product-page-list">
          {data.map((d) => (
            <div key={d.id} className="product-page-card">
              <img src={d.image} alt={d.name} className="product-page-image" />
              <div className="product-page-info">
                <h3 className="product-page-name">{d.name}</h3>
                <p className="product-page-price">{d.price}</p>
                <p className="product-page-condition">
                  Condition: {d.condition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SecondHandItems;
