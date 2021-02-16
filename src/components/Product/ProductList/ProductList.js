import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import Loader from '../../Loader/Loader';
import Modal from '../../Modal/Modal';
import ProductListItem from './ProductListItem/ProductListItem';
import ProductSearch from '../ProductSearch/ProductSearch';
import {
  ProductActionContext,
  ProductContext,
} from '../../../context/ProductContext';

const ProductListWrapper = styled.div`
  display: flex;
  flex-shrink: 0
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
  const { products, error, loading } = useContext(ProductContext);
  const { clearError } = useContext(ProductActionContext);
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
      <Modal clicked={clearError} show={!!error}>
        {error}
      </Modal>
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
