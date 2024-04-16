import React, { useState } from "react";

function Search() {
  const [isSearching, toggleIsSearching] = useState(false);
  function SearchIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    );
  }

  const toggleSearch = () => {
    toggleIsSearching(!isSearching);
  };
  return (
    <div className="relative">
      <SearchIcon
        className="h-6 w-6 hover:cursor-pointer"
        onClick={toggleSearch}
      />
      {isSearching ? (
        <div className="absolute bg-white p-4 rounded-lg border mt-6">
          <div className="grid w-full max-w-md items-center gap-4">
            <form className="flex w-full items-center space-x-2">
              <input className="flex-1" placeholder="Search..." type="search" />
              <button className="h-auto" type="submit" variant="outline">
                Search
              </button>
            </form>
            <div className="grid w-full gap-2">
              <p className="text-sm leading-tight">
                Enter a keyword to search the documentation or press
                <kbd>↓</kbd>
                to browse all topics.
              </p>
            </div>
          </div>
          <div className="grid w-full max-w-md items-center gap-4">
            {/* <h3 className="text-lg font-semibold">No results found.</h3>
            <p className="text-sm">
              Your search did not match any documents. Make sure that all words
              are spelled correctly or try different keywords.
            </p> */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Search;
