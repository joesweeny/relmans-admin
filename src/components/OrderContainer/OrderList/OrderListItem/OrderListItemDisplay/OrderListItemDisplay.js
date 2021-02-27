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
  color: ${(props) => props.color};

  @media (min-width: 959px) {
    line-height: 24px;
    font-size: 18px;
    padding: 5px 0 5px 0;
  }
`;

const Title = styled.p`
  color: #f1943c;
  font-size: 10px;

  @media (min-width: 959px) {
    font-size: 14px;
  }
`;

const OrderListItemDisplay = (props) => {
  const { color, title, value } = props;

  return (
    <OrderListItemDisplayWrapper color={color}>
      <Title>{title}</Title>
      <p>{value}</p>
    </OrderListItemDisplayWrapper>
  );
};

OrderListItemDisplay.propTypes = {
  color: string,
  title: string.isRequired,
  value: string.isRequired,
};

OrderListItemDisplay.defaultProps = {
  color: null,
};

export default OrderListItemDisplay;
