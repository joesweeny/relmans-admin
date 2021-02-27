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
  const [state, dispatch] = useReducer(reducer, { orders: [] });

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
      orders: state.orders,
      loading,
      error,
      clearError: () => setError(null),
    }),
    [error, loading, state.orders]
  );

  return (
    <OrderContext.Provider value={store}>{children}</OrderContext.Provider>
  );
};

OrderContextProvider.propTypes = {
  children: node.isRequired,
};

export default OrderContextProvider;
