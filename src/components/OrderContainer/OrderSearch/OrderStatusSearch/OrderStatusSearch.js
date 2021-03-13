import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';

const OrderStatusSearchWrapper = styled.select`
  width: 98%;
  margin: 5px 0 10px 0;
  color: #757586;
  font-size: 14px;
  padding: 5px 0 10px 5px;
  border: none;
  border-bottom: 2px solid #3d604c;
  background-color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 1025px) {
    width: 50%;
    margin: 5px 5px 10px 5px;
  }
`;

const OrderStatusSearch = (props) => {
  const { status, setStatus } = props;

  const statuses = ['PENDING', 'PAYMENT_RECEIVED', 'ACCEPTED'];

  return (
    <OrderStatusSearchWrapper
      onBlur={(e) => setStatus(e.target.value)}
      onChange={(e) => setStatus(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      defaultValue={status}
    >
      <option value="">All statuses</option>
      {statuses.map((s) => (
        <option value={s} key={s}>
          {s.replace(/[_-]/g, ' ')}
        </option>
      ))}
    </OrderStatusSearchWrapper>
  );
};

OrderStatusSearch.propTypes = {
  status: string,
  setStatus: func.isRequired,
};

OrderStatusSearch.defaultProps = {
  status: null,
};

export default OrderStatusSearch;
