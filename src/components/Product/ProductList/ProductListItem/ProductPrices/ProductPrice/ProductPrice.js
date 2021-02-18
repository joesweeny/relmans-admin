import React from 'react';
import { bool, func, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import ProductPriceEdit from './ProductPriceEdit/ProductPriceEdit';
import displayMeasurement from '../../../../../../utility/display';

const ProductPriceWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;
  width: 100%;

  p {
    padding: 2px;

    :last-child {
      font-size: 18px;
      padding-left: 10px;
      padding-right: 5px;
    }
  }

  @media (min-width: 959px) {
    font-size: 22px;

    p {
      padding: 2px;

      :last-child {
        font-size: 26px;
        padding-left: 10px;
        padding-right: 30px;
      }
    }
  }
`;

const productPrice = (props) => {
  const { isEditing, price, updatePrice } = props;
  const value = (price.value / 100).toFixed(2);

  return (
    <ProductPriceWrapper>
      <p>{price.size}</p>
      <p>{displayMeasurement(price.measurement)}</p>
      {isEditing ? (
        <ProductPriceEdit price={price} updatePrice={updatePrice} />
      ) : (
        <p>£ {value}</p>
      )}
    </ProductPriceWrapper>
  );
};

productPrice.propTypes = {
  isEditing: bool.isRequired,
  price: shape({
    id: string.isRequired,
    value: number.isRequired,
    size: number.isRequired,
    measurement: string.isRequired,
  }).isRequired,
  updatePrice: func.isRequired,
};

export default productPrice;
