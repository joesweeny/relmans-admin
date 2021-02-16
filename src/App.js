import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Login from './components/Login/Login';
import Menu from './components/Toolbar/Menu/Menu';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, loading, login, error } = useAuthenticatesUser();

  if (!isAuthenticated) {
    return <Login login={login} loading={loading} error={error} />;
  }

  return (
    <Container>
      <BrowserRouter>
        <ToolBar menuOpen={menuOpen} clickMenu={setMenuOpen} />
        <Menu open={menuOpen} closeMenu={() => setMenuOpen(false)} />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </BrowserRouter>
    </Container>
  );
};

export default App;
