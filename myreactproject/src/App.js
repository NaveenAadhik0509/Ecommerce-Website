import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Home from "./components/Home";
import { Products } from "./components/Products";
import "./App.css";
import Content from "./components/Content";

const App = () => {
  
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);

    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
    <div>
      <BrowserRouter>
        <Home/>
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route
            exact
            path="/products"
            element={<Products handleAddProduct={handleAddProduct} />}
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleCartClear={handleCartClear}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
