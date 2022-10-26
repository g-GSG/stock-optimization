import React, { useContext } from "react";

const { useState, createContext } = require("react");

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [stepData, setStepData] = useState([
    {
      productName: "",
      productVolume: 0,
      productProfit: 0,
      productQuantities: 0,
    },
  ]);

  const [stockData, setStockData] = useState(0);

  return (
    <ProductsContext.Provider
      value={{ stepData, setStepData, stockData, setStockData }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsStepContext = () => useContext(ProductsContext);

export { ProductsProvider, useProductsStepContext };
