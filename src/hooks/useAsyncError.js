import { useCallback, useState } from 'react';

const useAsyncError = () => {
  const [, setError] = useState(null);

  return useCallback(
    (error) => {
      setError(() => {
        throw error;
      });
    },
    [setError]
  );
};

export default useAsyncError;
