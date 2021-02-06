import React from 'react';
import styled from 'styled-components';

import Loader from '../Loader/Loader';
import ProductListItem from './ProductListItem/ProductListItem';
import useFetchesProducts from '../../hooks/useFetchesProducts';

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
`;

const ProductList = () => {
  const { products, loading } = useFetchesProducts(null);

  return (
    <Loader loading={loading}>
      <ProductListWrapper>
        {products.map((p) => (
          <ProductListItem product={p} key={p.id} />
        ))}
      </ProductListWrapper>
    </Loader>
  );
};

export default ProductList;
