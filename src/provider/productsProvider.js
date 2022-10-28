import React, { useContext } from "react";

const { useState, createContext } = require("react");

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [stepData, setStepData] = useState([
    {
      product: "",
      volume: 0,
      profit: 0,
      amount: 0,
    },
  ]);

  const [stockData, setStockData] = useState(0);

  function sendData() {
    console.log("stepData", stepData);
    console.log("stockData", stockData);
    // send to back
  }

  return (
    <ProductsContext.Provider
      value={{ stepData, setStepData, stockData, setStockData, sendData }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsStepContext = () => useContext(ProductsContext);

export { ProductsProvider, useProductsStepContext };
