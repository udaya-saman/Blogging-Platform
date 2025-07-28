import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostListPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const postList = () => {
    return posts.map(currentpost => {
      return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4" key={currentpost._id}>
          <h2 className="text-2xl font-bold mb-2">
            <Link to={"/post/"+currentpost._id}>{currentpost.title}</Link>
          </h2>
          <p className="text-gray-700">{currentpost.content.substring(0, 100)}...</p>
          <p className="text-gray-500 text-sm mt-4">By {currentpost.author}</p>
        </div>
      )
    })
  }

  return (
    <div className="container mx-auto">
      {postList()}
    </div>
  );
};

export default PostListPage;
