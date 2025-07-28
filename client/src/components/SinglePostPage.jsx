import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:5000/posts/'+id)
      .then(response => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-4">By {post.author}</p>
        <div className="text-gray-700">{post.content}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
