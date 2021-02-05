import React from 'react';
import styled from 'styled-components';

import Loader from '../Loader/Loader';
import ProductListItem from './ProductListItem/ProductListItem';
import useFetchesProducts from '../../hooks/useFetchesProducts';

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`;

const ProductList = () => {
  const { products, loading } = useFetchesProducts();

  return (
    <Loader loading={loading}>
      <ProductListWrapper>
        {products.map((p) => {
          return p.prices.map((pr) => {
            return <ProductListItem product={p} price={pr} key={pr.id} />;
          });
        })}
      </ProductListWrapper>
    </Loader>
  );
};

export default ProductList;
