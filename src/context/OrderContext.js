import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { node } from 'prop-types';

import { getOrders } from '../gateway/client';
import reducer from '../store/reducers/order';
import { setOrders } from '../store/actions/order';

export const OrderContext = createContext(null);

const OrderContextProvider = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orders, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    setLoading(true);

    getOrders()
      .then((o) => {
        dispatch(setOrders(o));
        setLoading(false);
      })
      .catch((e) => {
        setError(e.response.data.errors[0].message);
        setLoading(false);
      });
  }, []);

  const store = useMemo(
    () => ({
      orders,
      loading,
      error,
    }),
    []
  );

  return (
    <OrderContext.Provider value={store}>{children}</OrderContext.Provider>
  );
};

OrderContextProvider.propTypes = {
  children: node.isRequired,
};

export default OrderContextProvider;
