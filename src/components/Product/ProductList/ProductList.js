import React, { useContext } from 'react';
import styled from 'styled-components';

import Loader from '../../Loader/Loader';
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
  const { filteredProducts, loading } = useContext(ProductContext);

  return (
    <ProductListWrapper>
      <Loader loading={loading}>
        {filteredProducts.map((p) => (
          <ProductListItem product={p} key={p.id} />
        ))}
      </Loader>
    </ProductListWrapper>
  );
};

export default ProductList;
