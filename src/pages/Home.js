import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [productData, setProductData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleViewAllClick = () => {
    setShowAll(true);
  };

  const productsToShow = showAll ? productData : productData.slice(0, 5);

  return (
    <div className="container">
      <div className="wishBag">
        <p>Wishlist()</p>
        <button className="bag">Move All To Bag</button>
      </div>
      <div className="productContainer">
        {productsToShow.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {!showAll && (
        <div className="viewAllBtn_container">
          <button className="viewAllBtn" onClick={handleViewAllClick}>
            View All Products
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
