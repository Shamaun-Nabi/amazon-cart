import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css"

const Shop = () => {
  const [product, setproduct] = useState([]);
  const [cart, setcart] = useState([])
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  const handleProduct=(product)=>{
      console.log("product added",product)
      const newCart=[...cart,product]
      setcart(newCart)
  }

  return (
    <div>
        <ProductContainer products={product} handleProduct={handleProduct} cart={cart} ></ProductContainer>
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
                <h3>Item added: {props.cart.length} </h3>
            </div>

        </div>
    )
}

export default Shop;
