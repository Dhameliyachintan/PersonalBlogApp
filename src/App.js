// src/App.js

import React, { useState } from 'react';
import Header from './component/navbar/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import EditData from './component/Editdata';
import NewBlog from './component/NewBlog';
import Blog from './pages/Blog';

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    
  };

  const updateBlog = (updatedBlog) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
    );
  };

  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/blog" element={<Blog blogs={blogs}/>} />
        <Route path="/newBlog" element={<NewBlog addBlog={addBlog}/>} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/editdata" element={<EditData updateBlog={updateBlog}/>} />
      </Routes>
    </div>
  );
};

export default App;
