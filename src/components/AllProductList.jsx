import { useEffect, useState } from "react";
import "../styles/ProductList.css";
import ProductCard from "./ProductCard";
function AllProductList() {
  const api_url = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <>
      <h1 className="productList_title">All Products</h1>
      <div className="productList_container">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AllProductList;
