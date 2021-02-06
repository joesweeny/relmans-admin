import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ProductSearchWrapper = styled.div`
  display: flex;
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
  const { input, update } = props;
  return (
    <ProductSearchWrapper>
      <input
        type="text"
        placeholder="Filter products..."
        value={input}
        onChange={(e) => update(e.target.value)}
      />
      <FontAwesomeIcon icon={faTimes} size="1x" onClick={() => update('')} />
    </ProductSearchWrapper>
  );
};

ProductSearch.propTypes = {
  input: string.isRequired,
  update: func.isRequired,
};

export default ProductSearch;
