import React, { Fragment, useEffect, useState } from "react";
import ProductCart from "../components/ProductCart";
import { useSearchParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const carouselProducts = [
    {
      img: "/images/products/1.jpg",
      price: "$245.67",
      name: "OPPO F21s Pro 5G",
    },
    {
      img: "/images/products/2.jpg",
      price: "$150.32",
      name: "WRISTIO HD, Bluetooth Calling Smart Watch",
    },
    {
      img: "/images/products/3.jpg",
      price: "$440.57",
      name: "Dell Inspiron 3511 Laptop",
    },
    {
      img: "/images/products/4.jpg",
      price: "$15.46",
      name: "PTron Newly Launched Tangent Sports, 60Hrs Playtime",
    },
    {
      img: "/images/products/5.jpg",
      price: "$10.12",
      name: "Campus Men's Maxico Running Shoes",
    },
    {
      img: "/images/products/6.jpg",
      price: "$767.32",
      name: "ASUS VivoBook 15 Laptop",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products?` + searchParams)
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, [searchParams]);
  return (
    <Fragment>
      {!searchParams.toString() && (
        <div className="container mt-4 p-4 ">
          <h2>Best selling products</h2>
          <hr />
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={true}
            keyBoardControl={true}
          >
            {carouselProducts.map((p, index) => (
              <div
                key={index}
                className="text-center p-3"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="img-fluid"
                  style={{ height: "150px", objectFit: "contain" }}
                />
                <h5 className="mt-3">{p.price}</h5>
                <p>{p.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      <h1 id="products_heading">Products</h1>
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCart product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
