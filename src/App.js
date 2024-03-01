import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Page from "./Components/Products/Cart/Page";
import Cart from "./Components/Products/Cart/Cart";
import { CartProvider } from "react-use-cart";

const App = () => {
  return (
    <>
      <CartProvider>
        <Page />
        <Cart />
      </CartProvider>
    </>
  );
};

export default App;
