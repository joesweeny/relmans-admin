import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

const OrderListItemWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  color: black;
  font-weight: 500;
  width: 100%;
  padding: 0;
  margin: 5px 10px 5px 0;

  @media (min-width: 758px) {
    flex-direction: row;
  }

  @media (min-width: 959px) {
    width: 60%;
    margin: 10px;
  }
`;

const OrderListItem = (props) => {
  const { order } = props;

  return (
    <OrderListItemWrapper>
      <p>{order.status}</p>
    </OrderListItemWrapper>
  );
};

OrderListItem.propTypes = {
  order: shape({
    status: string.isRequired,
  }).isRequired,
};

export default OrderListItem;
