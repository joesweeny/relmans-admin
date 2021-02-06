import React from 'react';
import { number, shape, string } from 'prop-types';
import styled from 'styled-components';
import capitalize from '../../../../../utility/strings';

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;

  p {
    padding-right: 5px;
  }
`;

const productPrice = (props) => {
  const { price } = props;

  return (
    <ProductPriceWrapper>
      <p>{price.size}</p>
      <p>{capitalize(price.measurement)}</p>
      <p>£ {(price.value / 100).toFixed(2)}</p>
    </ProductPriceWrapper>
  );
};

productPrice.propTypes = {
  price: shape({
    value: number.isRequired,
    size: number.isRequired,
    measurement: string.isRequired,
  }),
};

export default productPrice;
