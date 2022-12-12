import React from "react";
import Posts from "./Posts";

const ListPage = ({ searchResult }) => {
  const results = searchResult.map((post) => (
    <Posts key={post.id} post={post} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <div>
      <p>No results</p>
    </div>
  );
  return <div>{content}</div>;
};

export default ListPage;
