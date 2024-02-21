import React from "react";
import { useParams } from "react-router-dom";
import SecondProduct from "./SecondProduct";
import SinglePricePage from "./SinglePricePage";
import ThirdProduct from "./ThirdProduct";
import ForthProduct from "./ForthProduct";
import FifthProduct from "./FifthProduct";
function ProductDetails() {
  const { id } = useParams();

  // Implement logic to fetch product details based on the id and render the specific product component
  switch (id) {
    case "1":
      return <SinglePricePage />;
    case "2":
      return <SecondProduct />;
    case "3":
      return <ThirdProduct />;
    case "4":
      return <ForthProduct />;
    case "5":
      return <FifthProduct />;
    default:
      return <p>Product not found</p>;
  }
}

export default ProductDetails;

