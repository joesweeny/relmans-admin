import React, { useContext } from 'react';
import styled from 'styled-components';

import ProductListItem from './ProductListItem/ProductListItem';
import { ProductContext } from '../../../context/ProductContext';

const ProductListWrapper = styled.div`
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

const ProductList = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <ProductListWrapper>
      {filteredProducts.map((p) => (
        <ProductListItem product={p} key={p.id} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
