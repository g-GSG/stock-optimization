import React, { useContext } from "react";

const { useState, createContext } = require("react");

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [stepData, setStepData] = useState([
    {
      nome: "",
      volume: 0,
      lucro: 0,
      quantidade: 0,
    },
  ]);

  const [response, setResponse] = useState(
    { status: "", lucro: 0.0, max_volume: 0, items: [{ nome: "", quantidade: 0.0, volume: 0, lucro: 0 }] }
  )

  const [stockData, setStockData] = useState(0);

  return (
    <ProductsContext.Provider
      value={{ stepData, setStepData, stockData, setStockData, response, setResponse }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsStepContext = () => useContext(ProductsContext);

export { ProductsProvider, useProductsStepContext };
