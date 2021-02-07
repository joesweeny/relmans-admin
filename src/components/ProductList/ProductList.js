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
  padding-bottom: 30px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
`;

const ProductList = () => {
  const { products, loading, reload } = useFetchesProducts();
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
          <ProductListItem product={p} key={p.id} reload={reload} />
        ))}
      </ProductListWrapper>
    </Loader>
  );
};

export default ProductList;
