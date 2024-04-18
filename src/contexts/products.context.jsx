import { createContext, useEffect, useState } from 'react';

import PRODUCTS from '../shop-data';

export const ProductsContext = createContext({
  products: [],
  
});

export const ProductsProvider = ({ children }) => {
  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    setAvailableProducts(PRODUCTS);
  },[]);

  const value = { products: availableProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

