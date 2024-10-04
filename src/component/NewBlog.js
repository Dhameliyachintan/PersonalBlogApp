import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function NewBlog({ addBlog }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBlog = { title, content, imageUrl };

    try {
      const response = await axios.post('http://localhost:4000/blogdata', newBlog);

      if (response.status === 201) {
        addBlog(newBlog);  
        setSuccess(true);
        setTitle('');
        setContent('');
        setImageUrl('');
        navigate('/blog'); 
      }
    } catch (err) {
      setError('Failed to create blog. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-white">Create a New Blog</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Blog created successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            required
            className="mt-1 block w-full border border-gray-600 bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:border-blue-500"
          />
          {imageUrl && (
            <div className="mt-2 flex justify-center items-center flex-col">
              <p className="text-sm text-gray-400 pb-4">Image Preview:</p>
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-1 w-full h-auto rounded max-h-[200px] max-w-[200px]"
                style={{ objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}
