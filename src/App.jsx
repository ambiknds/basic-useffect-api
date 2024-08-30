import "./App.css";
import Products from "./Products";
import { useState } from "react";

export default function App() {
  let [showProduct, setShowProduct] = useState(true);
  return (
    <main className="main">
      <h1>All Products</h1>
      <button
        onClick={() => {
          setShowProduct(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setShowProduct(false);
        }}
      >
        Hide
      </button>
      {showProduct === true ? <Products /> : <h1>No Product</h1>}
    </main>
  );
}
