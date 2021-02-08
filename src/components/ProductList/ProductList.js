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
  const { products, loading, updateProducts } = useFetchesProducts();
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const updateProduct = (product) => {
    const pr = products.filter((p) => p.id !== product.id);
    const newProducts = [...pr, product].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    updateProducts(newProducts);
  };

  return (
    <Loader loading={loading}>
      <ProductSearch input={search} update={setSearch} />
      <ProductListWrapper>
        {filteredProducts.map((p) => (
          <ProductListItem product={p} key={p.id} reload={updateProduct} />
        ))}
      </ProductListWrapper>
    </Loader>
  );
};

export default ProductList;
