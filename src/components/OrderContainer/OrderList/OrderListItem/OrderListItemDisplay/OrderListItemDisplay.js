import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const OrderListItemDisplayWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  width: 25%;

  @media (min-width: 758px) {
    font-size: 18px;
  }
`;

const Title = styled.p`
  color: #f1943c;
  font-size: 10px;

  @media (min-width: 758px) {
    font-size: 14px;
  }
`;

const OrderListItemDisplay = (props) => {
  const { align, title, value } = props;

  return (
    <OrderListItemDisplayWrapper align={align}>
      <Title>{title}</Title>
      <p>{value}</p>
    </OrderListItemDisplayWrapper>
  );
};

OrderListItemDisplay.propTypes = {
  align: string,
  title: string.isRequired,
  value: string.isRequired,
};

OrderListItemDisplay.defaultProps = {
  align: null,
};

export default OrderListItemDisplay;
