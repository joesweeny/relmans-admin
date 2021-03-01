import React, { useState } from 'react';
import styled from 'styled-components';

import OrderDateSearch from './OrderDateSearch/OrderDateSearch';
import OrderSearchButtons from './OrderSearchButtons/OrderSearchButtons';

const OrderSearchWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  width: 100%;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  margin: 10px 0 10px 0;

  @media (min-width: 1025px) {
    width: 50%;
    flex-direction: row;
    padding: 10px 0 10px 0;
  }

  svg {
    cursor: pointer;
  }
`;

const OrderSearch = () => {
  const [deliveryFrom, setDeliveryFrom] = useState(null);
  const [deliveryTo, setDeliveryTo] = useState(null);

  return (
    <OrderSearchWrapper>
      <OrderDateSearch
        setFrom={setDeliveryFrom}
        setTo={setDeliveryTo}
        from={deliveryFrom}
        to={deliveryTo}
      />
      <OrderSearchButtons from={deliveryFrom} to={deliveryTo} />
    </OrderSearchWrapper>
  );
};

export default OrderSearch;
