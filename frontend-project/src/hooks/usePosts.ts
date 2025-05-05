import { useEffect, useReducer } from 'react';
import { fetchPosts } from '../api/postsApi';
import { Post } from '../types/post';

type State = {
  loading: boolean;
  error: string | null;
  data: Post[];
};

type Action =
  | { type: 'LOADING' }
  | { type: 'SUCCESS'; payload: Post[] }
  | { type: 'FAILURE'; payload: string };

const initialState: State = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true, error: null };
    case 'SUCCESS':
      return { loading: false, error: null, data: action.payload };
    case 'FAILURE':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export const usePosts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getPosts = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const posts = await fetchPosts();
        dispatch({ type: 'SUCCESS', payload: posts });
      } catch (error: any) {
        console.error("Failed to fetch posts", error);
        dispatch({ type: 'FAILURE', payload: "Failed to fetch posts" });
      }
    };

    getPosts();
  }, []);

  return state;
};
