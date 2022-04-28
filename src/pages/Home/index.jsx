import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) => blog.category.toLowerCase() === searchKey.toLowerCase().trim());
    setBlogs(filteredBlogs);
  };

  // clear search
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };
  return (
    <div>
      {/* page header */}
      <Header />
      {/* search bar */}
      <SearchBar value={searchKey} handleFormSubmit={handleSearchSubmit} handleSearchKey={(e) => setSearchKey(e.target.value)} handleClearSearch={handleClearSearch} />
      {/* blog list */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
