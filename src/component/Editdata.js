import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function EditData() {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {}; 

  const [title, setTitle] = useState(blog ? blog.title : '');
  const [content, setContent] = useState(blog ? blog.content : '');
  const [imageUrl, setImageUrl] = useState(blog ? blog.imageUrl : '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBlog = { ...blog, title, content, imageUrl };

    try {
      await fetch(`http://localhost:4000/blogdata/${blog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });

      navigate('/blog'); 
    } catch (error) {
      console.error('Error updating the blog:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      <div className="mt-10 mx-auto max-w-7xl px-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Edit Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded shadow-md">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Image URL"
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
          />
          {imageUrl && (
            <div className="mt-2 flex justify-center items-center flex-col">
              <p className="text-sm text-gray-400 pb-4">Image Preview:</p>
              <img
                src={imageUrl}
                alt="Preview"
                className="mt-1 rounded max-h-[200px] max-w-[500px]"
                style={{ objectFit: '' }}
              />
            </div>
          )}
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
