import React, { useState } from 'react';
import styled from 'styled-components';

import OrderFilters from './OrderFilters/OrderFilters';
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
  const [status, setStatus] = useState(null);

  return (
    <OrderSearchWrapper>
      <OrderFilters
        setFrom={setDeliveryFrom}
        setTo={setDeliveryTo}
        from={deliveryFrom}
        to={deliveryTo}
        status={status}
        setStatus={setStatus}
      />
      <OrderSearchButtons from={deliveryFrom} to={deliveryTo} status={status} />
    </OrderSearchWrapper>
  );
};

export default OrderSearch;
