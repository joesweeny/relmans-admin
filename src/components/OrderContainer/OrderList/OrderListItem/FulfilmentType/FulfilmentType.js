import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const FulfilmentTypeWrapper = styled.div`
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FulfilmentTypeTitle = styled.p`
  color: #f1943c;
  font-size: 14px;
`;

const FulfilmentType = (props) => {
  const { type } = props;

  return (
    <FulfilmentTypeWrapper>
      <FulfilmentTypeTitle>Fulfilment Type</FulfilmentTypeTitle>
      <p>{type}</p>
    </FulfilmentTypeWrapper>
  );
};
