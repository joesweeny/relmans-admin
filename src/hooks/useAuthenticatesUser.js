import { useCallback, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

const useAuthenticatesUser = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateState = (auth, load, err) => {
    setIsAuthenticated(auth);
    setLoading(load);
    setError(err);
  };

  useEffect(() => {
    setLoading(true);

    Auth.currentSession()
      .then(() => {
        updateState(true, false, null);
      })
      .catch(() => {
        updateState(false, false, null);
      });
  }, []);

  const login = useCallback((email, password) => {
    Auth.signIn(email, password)
      .then(() => {
        updateState(true, false, null);
      })
      .catch((e) => {
        const err = password ? e.message : 'Incorrect username or password.';
        updateState(false, false, err);
      });
  }, []);

  return {
    isAuthenticated,
    login,
    loading,
    error,
  };
};

export default useAuthenticatesUser;
