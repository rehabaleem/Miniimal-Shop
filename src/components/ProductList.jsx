import { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";
import { Route, Routes, Link } from "react-router-dom";

function ProductList() {
  const api_url = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data);
      });
  }, []);
  return (
    <>
      <h1 className="productList_title">Products</h1>
      <div className="productList_container">
        {products.slice(1, 9).map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
      <div className="see-more">
        <Link className="see-more__btn" to="/Allproduct">
          see more
        </Link>
      </div>
    </>
  );
}
export default ProductList;
