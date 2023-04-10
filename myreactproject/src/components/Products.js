import React, { useState, useEffect } from "react";
// import axios from 'axios';
export const Products = ({handleAddProduct}) => {
  const [productItems, setProductItems] = useState(null);

  useEffect(() => {
    //  axios.get("https://api.storerestapi.com/products")
    //  .then(function(response) {
    //   setProductItems(response.data);
    //  })
    //  .catch(function(error){
    //   console.log(error);
    //  })

    fetch( "https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then(data => { setProductItems(data) });
      
  }, []);
 
  // "https://api.storerestapi.com/products/running-sneaker"
  return (
    <div className="products">
      {productItems ? (
        productItems.map((productItem) => {
          return (
            <div className="card">
              <div>
                <img
                  className="product-image"
                  src={productItem.image}
                  alt={productItem.title}
                  // height={300} 
                  // width={100}
                />
              </div>

              <div>
                <h1 className="itemname"> {productItem.title}</h1>
              </div>

              <div>
                <h3 className="itemprice"> {productItem.price}</h3>
              </div>

              <div>
                <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}>Add to Cart</button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>Loading....</h2>
      )}

      {/* {productItems.map((productItem)=>(

      
   ))} */}
    </div>
  );
};
