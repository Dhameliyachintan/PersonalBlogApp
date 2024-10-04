import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:4000/blogdata'); 
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching the blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/blogdata/${id}`); 
      setBlogs(blogs.filter(blog => blog.id !== id)); 
    } catch (error) {
      console.error('Error deleting the blog:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Blog Posts</h1>
      {blogs.length === 0 ? (
        <p className="text-gray-400 text-center">No blogs available. Please create one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold text-white mt-2">{blog.title}</h2>
              <p className="mt-2 text-gray-300 flex-grow">{blog.content}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate('/editdata', { state: { blog } })}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)} 
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
