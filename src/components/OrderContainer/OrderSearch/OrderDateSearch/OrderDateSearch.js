import React from 'react';
import styled from 'styled-components';
import { func, instanceOf } from 'prop-types';

import DeliveryDate from './DeliveryDate/DeliveryDate';

const OrderDateSearchWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  background-color: #ffffff;
  margin: 5px;

  @media (min-width: 1025px) {
    flex-direction: row;
    width: 100%;
  }
`;

const OrderDateSearch = (props) => {
  const { from, to, setFrom, setTo } = props;

  return (
    <OrderDateSearchWrapper>
      <DeliveryDate setDate={setFrom} date={from} placeholder="Delivery From" />
      <DeliveryDate setDate={setTo} date={to} placeholder="Delivery To" />
    </OrderDateSearchWrapper>
  );
};

OrderDateSearch.propTypes = {
  from: instanceOf(Date),
  setFrom: func.isRequired,
  to: instanceOf(Date),
  setTo: func.isRequired,
};

OrderDateSearch.defaultProps = {
  from: null,
  to: null,
};

export default OrderDateSearch;
