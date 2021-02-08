import React from 'react';
import { bool, func, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import ProductPriceEdit from './ProductPriceEdit/ProductPriceEdit';
import displayMeasurement from '../../../../../../utility/display';

const ProductPriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;
  width: 100%;

  p {
    padding-right: 3px;

    :last-child {
      font-size: 18px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @media (min-width: 959px) {
    font-size: 22px;

    p {
      padding: 5px;

      :last-child {
        font-size: 26px;
        padding-left: 20px;
        padding-right: 30px;
      }
    }
  }
`;

const productPrice = (props) => {
  const { isEditing, price, productId, toggle } = props;
  const value = (price.value / 100).toFixed(2);

  return (
    <ProductPriceWrapper>
      <p>{price.size}</p>
      <p>{displayMeasurement(price.measurement)}</p>
      {isEditing ? (
        <ProductPriceEdit
          value={value}
          productId={productId}
          priceId={price.id}
          toggle={toggle}
        />
      ) : (
        <p>£ {value}</p>
      )}
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
  productId: string.isRequired,
  toggle: func.isRequired,
};

export default productPrice;
