import React, { useState } from 'react';
import styled from 'styled-components';

import Login from './components/Login/Login';
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
  const [token, setToken] = useState();

  if (!token) {
    return <Login login={setToken} />;
  }

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
