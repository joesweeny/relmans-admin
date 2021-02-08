import React from 'react';
import styled from 'styled-components';

import ProductContextProvider from '../../context/ProductContext';
import ProductList from './ProductList/ProductList';
import ProductSearch from './ProductSearch/ProductSearch';

const ProductContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin: 10px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
`;

const Product = () => {
  return (
    <ProductContextProvider>
      <ProductContainerWrapper>
        <ProductSearch />
        <ProductList />
      </ProductContainerWrapper>
    </ProductContextProvider>
  );
};

export default Product;
