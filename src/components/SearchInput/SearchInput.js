import React, { useState } from "react";
import "./SearchInput.scss";

const SearchInput = ({ searchValue, handleInputChange, clearSearch }) => {
  return (
    <div className="search-input-container">
      <span className="search-icon">&#128269;</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      {searchValue && (
        <span className="clear-icon" onClick={clearSearch}>
          &#10006;
        </span>
      )}
    </div>
  );
};

export default SearchInput;
