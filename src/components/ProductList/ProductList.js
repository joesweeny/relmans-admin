import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Loader from '../Loader/Loader';
import ProductListItem from './ProductListItem/ProductListItem';
import ProductSearch from './ProductSearch/ProductSearch';
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
  const { products, loading } = useFetchesProducts();
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  return (
    <Loader loading={loading}>
      <ProductSearch input={search} update={setSearch} />
      <ProductListWrapper>
        {filteredProducts.map((p) => (
          <ProductListItem product={p} key={p.id} />
        ))}
      </ProductListWrapper>
    </Loader>
  );
};

export default ProductList;
