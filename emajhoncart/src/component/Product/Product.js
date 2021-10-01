import React from "react";
import "./Product.css";

// ADDING FONT AWESOME ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// *****************************************************************

const Product = (props) => {
  const product = props.pd;
  return (
    <div className="productShowMain">
      <div className="pdImage">
        <img src={product.img} alt="" srcSet="" />
      </div>

      <div className="desc">
        <h4>{product.name}</h4>
        <p>Seller :{product.seller}</p>
        <p>Stock Available : {product.stock}</p>
        <p>Price: ${product.price}</p>
        <button className="cartBtn" onClick={()=>props.handleProduct(product)}>
            {/* Icon fontawsome */}
          <FontAwesomeIcon className="cartIcon" icon={faShoppingCart}/>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
