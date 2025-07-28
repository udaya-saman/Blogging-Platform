import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditPostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:5000/posts/'+id)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: title,
      content: content,
      author: author
    }

    axios.post('http://localhost:5000/posts/update/' + id, post)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-center my-8">Edit Post</h3>
      <form onSubmit={onSubmit} className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="content">
              Content
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="content" required value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="author">
              Author
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="author" type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Update Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditPostPage;
