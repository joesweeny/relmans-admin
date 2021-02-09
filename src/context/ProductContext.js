import React, { createContext, useEffect, useMemo, useState } from 'react';
import { node } from 'prop-types';
import useAsyncError from '../hooks/useAsyncError';
import { getProducts } from '../gateway/client';

export const ProductContext = createContext(null);
export const ProductActionContext = createContext(null);

const ProductContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const throwError = useAsyncError();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((p) => {
        setProducts(p);
        setFilteredProducts(p);
        setLoading(false);
      })
      .catch((e) => throwError(e));
  }, [throwError]);

  const refreshProducts = (product) => {
    const pr = products.filter((p) => p.id !== product.id);
    const filtered = filteredProducts.filter((p) => p.id !== product.id);
    const newProducts = [...pr, product].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    const newFilteredProducts = [...filtered, product].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setProducts(newProducts);
    setFilteredProducts(newFilteredProducts);
  };

  const filterProducts = (search) => {
    setFilteredProducts(
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const store = useMemo(
    () => ({
      products,
      filteredProducts,
      loading,
    }),
    [filteredProducts, products, loading]
  );

  const actions = {
    filterProducts,
    refreshProducts,
  };

  return (
    <ProductContext.Provider value={store}>
      <ProductActionContext.Provider value={actions}>
        {children}
      </ProductActionContext.Provider>
    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: node.isRequired,
};

export default ProductContextProvider;
