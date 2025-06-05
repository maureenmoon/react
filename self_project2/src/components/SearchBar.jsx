import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const handleSerch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search by keyword..."
      />
      <button onClick={handleSerch}>Search</button>
    </div>
  );
}

export default SearchBar;
