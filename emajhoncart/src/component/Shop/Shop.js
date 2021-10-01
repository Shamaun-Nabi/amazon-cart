import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css"

const Shop = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  const handleProduct=(product)=>{
      console.log("product added",product)
  }

  return (
    <div>
        <ProductContainer products={product} handleProduct={handleProduct} ></ProductContainer>
    </div>
  );
};

const ProductContainer=(props)=>{
    const holdproduct=props.products
    const handleProduct=props.handleProduct
    return(
        <div className="main">
            <div className="productarea">
               {
                holdproduct.map(product=><Product pd={product} handleProduct={handleProduct} ></Product>)
               }
            </div>
            <div className="cartarea">
                This is CART area
            </div>

        </div>
    )
}

export default Shop;
