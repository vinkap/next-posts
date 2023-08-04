import { Key } from 'swr';
import { Post, Posts } from '../models/posts';

export const getPostsFetcher = (key: Key) => {
  return fetch(`http://localhost:3001${key}`).then((r) => {
    if (r.ok) {
      return r.json();
    }
    throw new Error("An error occured!");
  });
};

export const createNewPost = async (body: Omit<Post, "id">) => {
  console.log(body);
  const r = await fetch('http://localhost:3001/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await r.json();
};
