import { useState, useEffect } from 'react';
import { getComments } from '../api';

const useComments = (postId) => {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(null);

  const loadComments = async () => {
    setIsLoading(true);
    const response = await getComments(postId);
    setComments(response.comments);
    setIsLoading(false);
  };

  useEffect(() => {
    loadComments();
  }, []);

  return { comments, isLoading };
};

export default useComments;
