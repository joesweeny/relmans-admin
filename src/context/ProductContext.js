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
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    error: null,
  });

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((p) => {
        dispatch(setProducts(p));
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  const dispatchStatus = (productId, status) => {
    const payload = { status };

    updateProduct(productId, payload)
      .then(() => {
        dispatch(updateProductStatus(productId, status));
      })
      .catch((e) => console.log(e));
  };

  const dispatchPrice = (productId, priceId, value) => {
    updatePrice(priceId, value)
      .then(() => {
        dispatch(updateProductPrice(productId, priceId, value));
      })
      .catch((e) => alert(e));
  };

  const dispatchFeatured = (productId, featured) => {
    const payload = { featured };

    updateProduct(productId, payload)
      .then(() => {
        dispatch(updateProductFeatured(productId, featured));
      })
      .catch((e) => console.log(e));
  };

  const store = useMemo(
    () => ({
      products: state.products,
      loading,
    }),
    [state.products, loading]
  );

  const actions = {
    dispatchPrice,
    dispatchStatus,
    dispatchFeatured,
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
