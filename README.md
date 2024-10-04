# Personal Blog App

# Overview
The Personal Blog App is a streamlined, intuitive web application designed for effortless blog creation and management. Users can easily craft and publish their own articles, complete with customizable titles, rich content, and engaging images. Built with Tailwind CSS and ReactJS, this app ensures a modern and responsive design, enhancing the overall blogging experience. Whether sharing personal stories or insights, users can connect with their audience in a visually appealing and user-friendly environment.

# Technologies Used
- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used to make API requests to the backend.
- **JSON Server**: A simple way to set up a fake REST API with zero coding, allowing for easy data management during development.
- **React Router**: A standard library for routing in React applications, enabling dynamic navigation between different components.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs without having to leave your HTML.

## Getting Started

# Prerequisites
- Node.js and npm installed on your machine.
- A basic understanding of React and JavaScript.

# Start JSON Server
json-server --watch db.json --port 4000

# Set up JSON Server
npm install -g json-server

# Features
ADD BLOG: Users can create new blog posts by completing a form that includes a title and content. The new post will be seamlessly integrated into the list of blogs.

EDIT BLOG: Users have the ability to modify existing blog posts. The application offers an option to update both the title and content of any post.

DELETE BLOG: Users can remove any blog post. Once deleted, the post will be permanently removed from the list.

VIEW ALL BLOGS: Users can browse a comprehensive list of all blog posts in the application. Each post will display its title along with a brief excerpt of its content.

VIEW SINGLE BLOG: Users can click on a blog post to access its full content on a separate page, providing a more detailed reading experience.

