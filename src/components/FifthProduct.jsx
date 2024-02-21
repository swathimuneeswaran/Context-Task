import React, { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";
import UserContext from "../context/CartContext";

const products = [
  {
    id: 5,
    title: "Huawei P30",
    description:
      "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: "Huawei",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/5/1.jpg",
      "https://i.dummyjson.com/data/products/5/2.jpg",
      "https://i.dummyjson.com/data/products/5/3.jpg",
    ],
  },
];

function FifthProduct() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(products[0].price);

  const handleClick = (isIncrement) => {
    setQuantity((prevQuantity) =>
      isIncrement ? prevQuantity + 1 : prevQuantity - 1
    );
  };

  const username = useContext(UserContext);

  return (
    <>
      <div className="front">
        <h1 className="use">
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: "gray", marginRight: "8px" }}
          />
          {username[0]}
        </h1>
        <h1 className="use1">
          <i>{username[1]}📱</i>
        </h1>
      </div>

      {products.map((product) => (
        <div
          className="container-fluid"
          style={{
            paddingLeft: "400px",
            paddingTop: "100px",
            marginBottom: "70px",
          }}
          key={product.id}
        >
          <div
            className="card new1"
            style={{ width: "40rem", height: "43rem" }}
          >
            <img
              src={product.images[1]}
              className="card-img-top inimage"
              alt="..."
            />
            <div className="card-body">
              <h4> {product.brand}</h4>
              <div className="drop">
                <b style={{ float: "right" }}>
                  <label htmlFor="quantity">Quantity: </label>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    name="quantity"
                    min="1"
                    max={product.stock}
                    readOnly
                    className="quan"
                  ></input>
                  <button onClick={() => handleClick(true)}>+</button>
                  <button onClick={() => handleClick(false)}>-</button>
                </b>
              </div>
              <h5 className="card-title">Product: {product.title}</h5>
              <p>
                <i style={{ textDecoration: "underline", color: "brown" }}>
                  <b>Price: ₹{product.price}</b>
                </i>
              </p>
              <p style={{ fontSize: "20px" }}>
                <i>
                  <b>
                    Rating:
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow", fontSize: "20px" }}
                    />
                    {product.rating}
                  </b>
                </i>
              </p>
              <p className="card-text">{product.description}</p>
              <h2>Total:{price * quantity}</h2>
              <Link to={`/items/product/last`} className="btn btn-success but5">
                Buy
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default FifthProduct;
