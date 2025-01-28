import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Loader from "../../components/loader";

function FetchApi() {
  const [loading, setLoading] = useState(false);
  const [officeFurniture, setOfficeFurniture] = useState([]);
  const [homeFurniture, setHomeFurniture] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [secondHandItems, setSecondHandItems] = useState([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("/get-all-products"); 
      if (response.data.success) {
        const fetchedProducts = Array.isArray(response.data.allProducts)
          ? response.data.allProducts
          : [];

        setOfficeFurniture(
          fetchedProducts.filter((p) => p.category === "Office Furniture")
        );
        setHomeFurniture(
          fetchedProducts.filter((p) => p.category === "Home Furniture")
        );
        setElectronics(
          fetchedProducts.filter((p) => p.category === "Electronics")
        );
        setAccessories(
          fetchedProducts.filter((p) => p.category === "Accessories")
        );
        setSecondHandItems(
          fetchedProducts.filter((p) => p.category === "Second-Hand Items")
        );
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {loading && <Loader />}
      <h2>Fetched Data</h2>
      <div>
        <h4>Office Furniture</h4>
        {officeFurniture.map((item, index) => (
          <div key={index}>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <img src={item.image[0]} alt={item.name} width="100" />
            <p>Price: ${item.price}</p>
          </div>
        ))}

        <h4>Home Furniture</h4>
        {homeFurniture.map((item, index) => (
          <div key={index}>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <img src={item.image[0]} alt={item.name} width="100" />
            <p>Price: ${item.price}</p>
          </div>
        ))}

        <h4>Electronics</h4>
        {electronics.map((item, index) => (
          <div key={index}>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <img src={item.image[0]} alt={item.name} width="100" />
            <p>Price: ${item.price}</p>
          </div>
        ))}

        <h4>Second-Hand Items</h4>
        {secondHandItems.map((item, index) => (
          <div key={index}>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <img src={item.image[0]} alt={item.name} width="100" />
            <p>Price: ${item.price}</p>
          </div>
        ))}

        <h4>Accessories</h4>
        {accessories.map((item, index) => (
          <div key={index}>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <img src={item.image[0]} alt={item.name} width="100" />
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FetchApi;
