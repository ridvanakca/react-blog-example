import React from "react";
import "./styles.css";

const SearchBar = ({ value, handleSearchKey, handleClearSearch, handleFormSubmit }) => {
  return (
    <div className='searchBar-wrap'>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleSearchKey} type='text' placeholder='Search by Category' value={value} />
        {value && <span onClick={handleClearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
