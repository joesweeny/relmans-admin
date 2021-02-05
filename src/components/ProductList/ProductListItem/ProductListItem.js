import React from 'react';
import { number, shape, string } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import ProductImage from './ProductImage/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductPrice from './ProductPrice/ProductPrice';
import ProductStatus from './ProductStatus/ProductStatus';
import capitalize from '../../../utility/strings';

const ProductListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  text-align: left;
  border-bottom: 1px solid #bbb7b7;
  font-weight: 600;

  :first-child {
    border-top: 1px solid #bbb7b7;
  }

  svg {
    color: #b4bfaa;
    margin: 0 20px 0 10px;
    cursor: pointer;
  }
`;

const productListItem = (props) => {
  const { product, price } = props;

  return (
    <ProductListItemWrapper>
      <ProductImage id={product.id} name={product.name} />
      <ProductInfo width="35%" align="flex-start" title={product.name} />
      <ProductInfo width="10%" title={price.size} />
      <ProductInfo width="20%" title={capitalize(price.measurement)} />
      <ProductPrice width="15%" price={price.value} />
      <ProductStatus width="25%" title={product.status} />
      <FontAwesomeIcon icon={faStar} size="1x" />
    </ProductListItemWrapper>
  );
};

productListItem.propTypes = {
  product: shape({
    id: string.isRequired,
    name: string.isRequired,
    status: string.isRequired,
  }).isRequired,
  price: shape({
    id: string.isRequired,
    value: number.isRequired,
    measurement: string.isRequired,
    size: number.isRequired,
  }).isRequired,
};

export default productListItem;
