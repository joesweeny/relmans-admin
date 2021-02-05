import React from 'react';
import styled from 'styled-components';

import ToolBar from './components/Toolbar/Toolbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  return (
    <Container>
      <ToolBar />
      This is the Relmans dashboard
    </Container>
  );
}

export default App;
