import { useCallback, useEffect, useState } from 'react';

import { getProducts } from '../gateway/client';
import useAsyncError from './useAsyncError';

const useFetchesProducts = (search) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const throwError = useAsyncError();

  const load = useCallback(() => {
    setLoading(true);

    getProducts(search)
      .then((p) => {
        setProducts(p);
        setLoading(false);
      })
      .catch((e) => throwError(e));
  }, [search, setLoading, setProducts, throwError]);

  useEffect(() => {
    load();
  }, [load]);

  return {
    products,
    loading,
    reload: load,
  };
};

export default useFetchesProducts;
