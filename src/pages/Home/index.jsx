import React from "react";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";

const Home = () => {
  return (
    <div>
      {/* page header */}
      <Header />
      {/* search bar */}
      <SearchBar />
      {/* blog list */}
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
