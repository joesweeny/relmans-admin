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
  height: 50px;
  width: 50px;
  border-radius: 10px;
`;

const OrderItem = (props) => {
  const { item } = props;

  return (
    <OrderItemWrapper>
      <Image
        src={`${process.env.PUBLIC_URL}/products/fruitandveg.jpg`}
        alt={item.name}
      />
      <p>
        {item.name} ({item.size} {displayMeasurement(item.measurement)})
      </p>
      <p>
        {item.quantity} @ £{(item.price / 100).toFixed(2)}
      </p>
    </OrderItemWrapper>
  );
};

OrderItem.propTypes = {
  item: shape({
    name: string,
    price: number,
    size: number,
    measurement: string,
    quantity: number,
  }).isRequired,
};

export default OrderItem;
