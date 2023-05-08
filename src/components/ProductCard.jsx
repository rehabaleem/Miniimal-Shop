import "../styles/productCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
function ProductCard(props) {
  const { product } = props;
  const [toggelFav, settoggleFav] = useState(false);
  const toggleHandler = () => {
    settoggleFav((preState) => !preState);
  };
  return (
    <div className="productCard">
      <Icon toggelFav={toggelFav} toggleHandler={toggleHandler} />

      <div className="Card-image">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="Card-info">
        <h3>{product.title}</h3>
        <span>${product.price}</span>
      </div>
      <div className="Card-category">
        <p>{product.category}</p>
        <div className="buy-now">
          <Link to={`/product/${product.id}`} className="buy-now__btn">
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
