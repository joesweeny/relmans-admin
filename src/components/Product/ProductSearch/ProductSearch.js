import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { ProductActionContext } from '../../../context/ProductContext';

const ProductSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;import { func, string } from 'prop-types';

  width: 100%;
  margin: 20px 0 5px 0;

  input {
    font-family: inherit;
    width: 80%;
    border: 0;
    border-bottom: 2px solid #3d604c;
    outline: 0;
    padding: 7px 5px;
    background: transparent;
  }

  svg {
    color: #3d604c;
    cursor: pointer;
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    margin: 30px 0 10px 0;

    input {
      width: 500px;
      height: 50px;
    }
  }
`;

const ProductSearch = () => {
  const [search, setSearch] = useState('');
  const { filterProducts } = useContext(ProductActionContext);

  const updateValue = (s) => {
    setSearch(s);
    filterProducts(s);
  };

  return (
    <ProductSearchWrapper>
      <input
        type="text"
        placeholder="Filter products..."
        value={search}
        onChange={(e) => updateValue(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faTimes}
        size="1x"
        onClick={() => updateValue('')}
      />
    </ProductSearchWrapper>
  );
};

export default ProductSearch;
