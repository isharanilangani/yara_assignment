import axios from 'axios';
import { Post } from '../types/post';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error: any) {
    console.error("Error fetching posts from API:", error);
    return [];
  }
};

