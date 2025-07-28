import React from 'react';
import PostListPage from './PostListPage';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Welcome to My Blog</h1>
      <PostListPage />
    </div>
  );
};

export default Home;
