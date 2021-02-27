import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const OrderDetailsItemWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 48%;
  line-height: 16px;

  p {
    font-size: 10px;
    color: #f1943c;
  }

  span {
    font-size: 10px;
    word-wrap: break-word;
  }

  @media (min-width: 959px) {
    line-height: 24px;

    p {
      font-size: 14px;
    }

    span {
      font-size: 14px;
      padding: 5px 0 5px 0;
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
