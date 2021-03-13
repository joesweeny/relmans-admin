import React from 'react';
import styled from 'styled-components';
import { func, instanceOf, string } from 'prop-types';

import OrderDateSearch from '../OrderDateSearch/OrderDateSearch';
import OrderStatusSearch from '../OrderStatusSearch/OrderStatusSearch';

const OrderFiltersWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  align-items: left;
  background-color: #ffffff;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  padding: 10px 10px 15px 10px;

  @media (min-width: 1025px) {
    flex-direction: row;
    width: 100%;
    height: fit-content;
    margin: 0 5px 0 0;
  }
`;

const OrderFilters = (props) => {
  const { from, to, status, setFrom, setTo, setStatus } = props;

  return (
    <OrderFiltersWrapper>
      <OrderDateSearch setTo={setTo} setFrom={setFrom} from={from} to={to} />
      <OrderStatusSearch setStatus={setStatus} status={status} />
    </OrderFiltersWrapper>
  );
};

OrderFilters.propTypes = {
  from: instanceOf(Date),
  setFrom: func.isRequired,
  to: instanceOf(Date),
  setTo: func.isRequired,
  status: string,
  setStatus: func.isRequired,
};

OrderFilters.defaultProps = {
  from: null,
  to: null,
  status: null,
};

export default OrderFilters;
