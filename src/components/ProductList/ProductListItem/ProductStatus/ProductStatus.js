import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

import capitalize from '../../../../utility/strings';

const ProductStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  align-items: center;
  width: ${(props) => props.width};
  text-align: center;
  font-size: 18px;
`;

const productStatus = (props) => {
  const { title, width } = props;

  return (
    <ProductStatusWrapper width={width}>
      {capitalize(title).replace(/[_-]/g, ' ')}
    </ProductStatusWrapper>
  );
};

productStatus.propTypes = {
  title: string.isRequired,
  width: string.isRequired,
};

export default productStatus;
