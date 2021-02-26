import React, { createContext, useMemo } from 'react';
import { node } from 'prop-types';

export const OrderContext = createContext(null);

const OrderContextProvider = (props) => {
  const { children } = props;

  const store = useMemo(() => ({}), []);

  return (
    <OrderContext.Provider value={store}>{children}</OrderContext.Provider>
  );
};

OrderContextProvider.propTypes = {
  children: node.isRequired,
};

export default OrderContextProvider;
