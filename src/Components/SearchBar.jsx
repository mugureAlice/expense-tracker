import React from 'react';

const SearchBar = ({ search, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search expenses..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
