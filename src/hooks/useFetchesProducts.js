import { useEffect, useState } from 'react';

import getProducts from '../gateway/client';
import useAsyncError from './useAsyncError';

const useFetchesProducts = (search) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const throwError = useAsyncError();

  useEffect(() => {
    setLoading(true);

    getProducts(search)
      .then((p) => {
        setProducts(p);
        setLoading(false);
      })
      .catch((e) => throwError(e));
  }, [search, setLoading, setProducts, throwError]);

  return {
    products,
    loading,
  };
};

export default useFetchesProducts;
