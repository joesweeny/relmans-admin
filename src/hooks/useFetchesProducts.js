import { useEffect, useState } from 'react';

import { getProducts } from '../gateway/client';
import useAsyncError from './useAsyncError';

const useFetchesProducts = () => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(false);
  const throwError = useAsyncError();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((p) => {
        setProducts(p);
        setLoading(false);
      })
      .catch((e) => throwError(e));

    return () => setLoad(false);
  }, [load, setLoad, setLoading, setProducts, throwError]);

  return {
    products,
    loading,
    reload: setLoad,
  };
};

export default useFetchesProducts;
