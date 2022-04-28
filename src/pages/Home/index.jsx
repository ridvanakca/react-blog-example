import React from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
  return (
    <div>
      {/* page header */}
      <Header />
      {/* search bar */}
      <SearchBar />
      {/* blog list */}
    </div>
  );
};

export default Home;
