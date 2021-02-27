import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const OrderListItemDisplayWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 10px;
  width: 30%;
  padding: 0;
  line-height: 18px;

  @media (min-width: 758px) {
    line-height: 24px;
    font-size: 18px;
    padding: 5px 0 5px 0;
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
  const { title, value } = props;

  return (
    <OrderListItemDisplayWrapper>
      <Title>{title}</Title>
      <p>{value}</p>
    </OrderListItemDisplayWrapper>
  );
};

OrderListItemDisplay.propTypes = {
  title: string.isRequired,
  value: string.isRequired,
};

export default OrderListItemDisplay;
