import React from 'react';
import styled from 'styled-components';

import Routes from './components/Routes/Routes';
import ToolBar from './components/Toolbar/Toolbar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

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
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </Container>
  );
};

export default App;
