import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import styled from 'styled-components';

import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductStatus from './ProductStatus/ProductStatus';
import ProductPrices from './ProductPrices/ProductPrices';

const ProductListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.23);
  color: black;
  font-weight: 600;
  width: 100%;
  padding: 0;
  margin: 5px 0 5px 0;

  @media (min-width: 959px) {
    width: 25%;
    margin: 10px;
  }
`;

const ProductInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

const ProductListItem = (props) => {
  const { product } = props;

  return (
    <ProductListItemWrapper>
      <ProductImage id={product.id} name={product.name} />
      <ProductInformationWrapper>
        <ProductInfo title={product.name} />
        <ProductStatus status={product.status} />
      </ProductInformationWrapper>
      <ProductPrices prices={product.prices} />
    </ProductListItemWrapper>
  );
};

ProductListItem.propTypes = {
  product: shape({
    id: string.isRequired,
    name: string.isRequired,
    status: string.isRequired,
    prices: arrayOf(
      shape({
        id: string.isRequired,
        value: number.isRequired,
        size: number.isRequired,
        measurement: string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ProductListItem;
