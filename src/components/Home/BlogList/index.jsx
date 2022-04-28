import React from "react";
import BlogItem from "./BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) => {
  return (
    <div className='bloglist-wrap'>
      {blogs.map((blog, index) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
