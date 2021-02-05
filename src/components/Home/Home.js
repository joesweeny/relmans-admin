import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin: 100px;
`;

const home = () => {
  return (
    <HomeWrapper>
      Relmans Admin
    </HomeWrapper>
  );
}

export default home;
