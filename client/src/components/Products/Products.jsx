import React, { useState } from "react";
import { TrendProduct } from "../../apiloader/TrendProduct";
import Product1 from "../../img/iphoneback.jpg";

import "./Products.css";

const Products = () => {
  const [prduct] = useState(TrendProduct);
  return (
    <div className="Products">
      <div className="container">
        <h1>More Trending Products</h1>
        <div className="list">
          {TrendProduct.map((product, index) => {
            return (
              <div>
                <img src={product.img} alt="" />
                <span>{product.price}</span>
                <span>{product.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
