import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin-right: 30px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 600;
  
  p {
    padding: 0 20px 0 20px;
    cursor: pointer;
    
    &:hover {
      color: #f1943c;
    }
  }
`;

const navigation = () => {
  return (
    <NavigationWrapper>
      <p>Products</p>
      <p>Orders</p>
    </NavigationWrapper>
  )
}

export default navigation;
