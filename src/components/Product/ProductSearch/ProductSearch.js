import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductSearchWrapper = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-shrink: 0
  flex-direction: row;
  justify-content: center;
  align-items: center;

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

const ProductSearch = (props) => {
  const { search, updateSearch } = props;

  return (
    <ProductSearchWrapper>
      <input
        type="text"
        placeholder="Filter products..."
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
      />
      <FontAwesomeIcon
        icon={faTimes}
        size="1x"
        onClick={() => updateSearch('')}
      />
    </ProductSearchWrapper>
  );
};

ProductSearch.propTypes = {
  search: string.isRequired,
  updateSearch: func.isRequired,
};

export default ProductSearch;
