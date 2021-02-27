import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const OrderDetailsItemWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;

  p {
    font-size: 10px;
    color: #f1943c;
  }

  span {
    font-size: 12px;
  }

  @media (min-width: 959px) {
    p {
      font-size: 12px;
    }

    span {
      font-size: 14px;
    }
  }
`;

const OrderDetailsItem = (props) => {
  const { title, value } = props;

  return (
    <OrderDetailsItemWrapper>
      <p>{title}</p>
      <span>{value}</span>
    </OrderDetailsItemWrapper>
  );
};

OrderDetailsItem.propTypes = {
  title: string.isRequired,
  value: string.isRequired,
};

export default OrderDetailsItem;
