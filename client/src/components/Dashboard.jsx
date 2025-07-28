import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
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

  const deletePost = (id) => {
    axios.delete('http://localhost:5000/posts/'+id)
      .then(res => console.log(res.data));

    setPosts(posts.filter(el => el._id !== id))
  }

  const postList = () => {
    return posts.map(currentpost => {
      return (
        <tr className="bg-white border-b" key={currentpost._id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{currentpost.title}</td>
          <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{currentpost.author}</td>
          <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
            <Link to={"/edit/"+currentpost._id} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
          </td>
          <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
            <a href="#" onClick={() => { deletePost(currentpost._id) }} className="text-red-600 hover:text-red-900">Delete</a>
          </td>
        </tr>
      )
    })
  }

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold text-center my-8">Dashboard</h3>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {postList()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
