import React from "react";

const SearchBar = ({ posts, setSearchResult }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchChange = (e) => {
    if (!e.target.value) setSearchResult(posts);

    const resultsArray = posts.filter((post) =>
      post.title.includes(e.target.value)
    );

    setSearchResult(resultsArray);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="search" onChange={handleSearchChange} />

        <button>🔍</button>
      </form>
    </div>
  );
};

export default SearchBar;
