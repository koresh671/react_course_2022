// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Orange" }} />
      <ProductCounter product={{ productName: "Apple", count: 10 }} />
      <ProductCounter product={{ productName: "Pineapple", count: 35 }} />
      <ProductCounter product={{ productName: "Watermelon", count: 0 }} />
    </div>
  );
};

export default App;
