import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './style.css';

function CartFirstPage() {
  const [items, setItems] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  function handleItem(index) {
    setItems((previousState) => previousState + 1);

    setAddedItems((previousItems) => {
      const updatedItems = [...previousItems];
      updatedItems[index] = true;
      return updatedItems;
    });
  }

  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images:"https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images:"https://m.media-amazon.com/images/I/81ZSn2rk9WL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images:"https://m.media-amazon.com/images/I/61Gf1OIORhS._AC_UY327_FMwebp_QL65_.jpg"
    },
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
      images:"https://m.media-amazon.com/images/I/61Nw-tvWk1L._AC_UY327_FMwebp_QL65_.jpg"
    },
    // Add more products as needed
  ];

  return (
    <div className="container" style={{backgroundImage:"url('https://e1.pxfuel.com/desktop-wallpaper/1023/198/desktop-wallpaper-triangle-solid-black-gold-triangle-solid-black-gold-dark-gold.jpg')", padding: "45px" }}>
      <div className="row">
        <div className="col-lg-12 icon">
          <h2 style={{ margin: "1px", textAlign: "center", fontStyle:"italic",color:"whitesmoke" }}>MOBILES SHOPPING</h2>
          <Link>
            <p className="cart">Cart Items {items}</p>
            <h1>
              <FontAwesomeIcon icon={faShoppingCart} className="cart1" />
            </h1>
          </Link>
        </div>
      </div>
      <div className="row">
        {products.map((pro, index) => (
          <div key={pro.id} className="col-lg-4 col-md-4 col-sm-6 mb-4 mt-4">
            <div className="card new" style={{ width: "22rem" }}>
              <img
                src={pro.images}
                className="card-img-top phone_image"
                alt={pro.title}
                style={{ width: "200px", height: "250px", padding: "7px",marginLeft:"40px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{pro.title}</h5>
                <p className="card-text">{pro.description}<br /></p>
                <h4><i>Price:₹{pro.price}</i></h4>
                <br />
                {!addedItems[index] ? (
                  <button
                    className="btn btn-primary but1"
                    onClick={() => handleItem(index)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="btn btn-secondary" disabled>
                    Added
                  </button>
                )}
                {/* Update the link to include the product ID */}
                <Link to={`/items/product/${pro.id}`} className="btn btn-success but">
                  Buy
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartFirstPage;
