import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-white text-lg font-bold">My Blog</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="/blog"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  to="/newBlog"
                  className="ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  New Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
