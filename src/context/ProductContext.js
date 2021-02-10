import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  useReducer,
} from 'react';
import { node } from 'prop-types';
import { getProducts, updatePrice, updateProduct } from '../gateway/client';
import reducer from '../store/reducers/product';
import {
  setProducts,
  updateProductPrice,
  updateProductStatus,
  updateProductFeatured,
} from '../store/actions/product';

export const ProductContext = createContext(null);
export const ProductActionContext = createContext(null);

const ProductContextProvider = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    products: [],
  });

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((p) => {
        dispatch(setProducts(p));
        setLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.errors[0].message);
      });

    return setProducts([]);
  }, []);

  const dispatchStatus = (productId, status) => {
    const payload = { status };

    updateProduct(productId, payload)
      .then(() => {
        dispatch(updateProductStatus(productId, status));
      })
      .catch((e) => {
        setError(`Product error: ${e.response.data.errors[0].message}`);
      });
  };

  const dispatchPrice = (productId, priceId, value) => {
    updatePrice(priceId, value)
      .then(() => {
        dispatch(updateProductPrice(productId, priceId, value));
      })
      .catch((e) => {
        setError(`Price error: ${e.response.data.errors[0].message}`);
      });
  };

  const dispatchFeatured = (productId, featured) => {
    const payload = { featured };

    updateProduct(productId, payload)
      .then(() => {
        dispatch(updateProductFeatured(productId, featured));
      })
      .catch((e) => {
        setError(`Product error: ${e.response.data.errors[0].message}`);
      });
  };

  const store = useMemo(
    () => ({
      products: state.products,
      error,
      loading,
    }),
    [error, loading, state.products]
  );

  const actions = {
    dispatchPrice,
    dispatchStatus,
    dispatchFeatured,
    clearError: () => setError(null),
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
