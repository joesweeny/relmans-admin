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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -ms-flex-line-pack: center;
  align-content: center;
  padding-bottom: 30px;
  width: 100%;

  @media (min-width: 959px) {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
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
