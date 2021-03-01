import React from 'react';
import styled from 'styled-components';

import OrderContextProvider from '../../context/OrderContext';
import OrderList from './OrderList/OrderList';
import OrderSearch from './OrderSearch/OrderSearch';

const OrderContainerWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding-bottom: 30px;
`;

const OrderContainer = () => {
  return (
    <OrderContextProvider>
      <OrderContainerWrapper>
        <OrderSearch />
        <OrderList />
      </OrderContainerWrapper>
    </OrderContextProvider>
  );
};

export default OrderContainer;
