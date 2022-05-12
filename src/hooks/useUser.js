import { useState, useEffect } from 'react';
import { getUser } from '../api';

const useUser = (id) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(null);

  const loadUser = async () => {
    setIsLoading(true);

    const response = await getUser(id);
    setUser(response.user);

    setIsLoading(false);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return { user, isLoading };
};

export default useUser;
