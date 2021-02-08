import React from 'react';
import { bool, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import ProductPriceEdit from './ProductPriceEdit/ProductPriceEdit';
import capitalize from '../../../../../utility/strings';

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;
  width: 100%;

  p {
    padding-right: 5px;
  }

  @media (min-width: 959px) {
    font-size: 22px;

    p {
      padding: 5px;

      :last-child {
        padding-left: 10px;
      }
    }
  }
`;

const productPrice = (props) => {
  const { isEditing, price } = props;
  const value = (price.value / 100).toFixed(2);

  return (
    <ProductPriceWrapper>
      <p>{price.size}</p>
      <p>{capitalize(price.measurement)}</p>
      <p>£</p>
      {isEditing ? <ProductPriceEdit price={value} /> : <p>{value}</p>}
    </ProductPriceWrapper>
  );
};

productPrice.propTypes = {
  isEditing: bool.isRequired,
  price: shape({
    value: number.isRequired,
    size: number.isRequired,
    measurement: string.isRequired,
  }),
};

export default productPrice;
