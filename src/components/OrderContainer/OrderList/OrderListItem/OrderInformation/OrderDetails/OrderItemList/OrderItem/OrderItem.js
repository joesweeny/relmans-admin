import React from 'react';
import styled from 'styled-components';
import { number, shape, string } from 'prop-types';

import displayMeasurement from '../../../../../../../../utility/display';

const OrderItemWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  width: 100%;
  padding: 5px 0 5px 0;

  p {
    text-align: left;
    width: 100%;
    padding-left: 10px;

    :last-child {
      text-align: right;
      padding: 0;
      width: 50%;
    }
  }
`;

const Image = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 10px;

  @media (min-width: 1024px) {
    height: 50px;
    width: 50px;
  }
`;

const OrderItem = (props) => {
  const { item } = props;

  return (
    <OrderItemWrapper>
      <Image
        src={`https://relmans.s3.eu-west-2.amazonaws.com/products/${item.productId}.jpg`}
        alt={item.name}
      />
      <p>
        {item.name} ({displayMeasurement(item.measurement, item.size)})
      </p>
      <p>
        {item.quantity} @ £{(item.price / 100).toFixed(2)}
      </p>
    </OrderItemWrapper>
  );
};

OrderItem.propTypes = {
  item: shape({
    productId: string,
    name: string,
    price: number,
    size: number,
    measurement: string,
    quantity: number,
  }).isRequired,
};

export default OrderItem;
