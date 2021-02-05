import React from 'react';
import styled from 'styled-components';

import Routes from './components/Routes/Routes';
import ToolBar from './components/Toolbar/Toolbar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
`;

const App = () => {
  return (
    <Container>
      <ToolBar />
      <Routes />
    </Container>
  );
};

export default App;
