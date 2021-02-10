import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Loader from '../../Loader/Loader';
import ProductListItem from './ProductListItem/ProductListItem';
import ProductSearch from '../ProductSearch/ProductSearch';
import { ProductContext } from '../../../context/ProductContext';

const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  padding-bottom: 30px;
  width: 100%;

  @media (min-width: 959px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFilteredProducts(
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [products, search]);

  return (
    <ProductListWrapper>
      <Loader loading={loading}>
        <ProductSearch search={search} updateSearch={setSearch} />
        {filteredProducts.map((p) => (
          <ProductListItem product={p} key={p.id} />
        ))}
      </Loader>
    </ProductListWrapper>
  );
};

export default ProductList;
