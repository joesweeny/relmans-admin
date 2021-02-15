import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import Routes from './components/Routes/Routes';
import ToolBar from './components/Toolbar/Toolbar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import useAuthenticatesUser from './hooks/useAuthenticatesUser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
`;

const App = () => {
  const { isAuthenticated, loading, login, error } = useAuthenticatesUser();

  if (!isAuthenticated) {
    return <Login login={login} loading={loading} error={error} />;
  }

  return (
    <Container>
      <BrowserRouter>
        <ToolBar />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </BrowserRouter>
    </Container>
  );
};

export default App;
