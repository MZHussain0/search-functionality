import reactLogo from "./assets/react.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { getPosts } from "./api/axios";
import SearchBar from "./api/SearchBar/SearchBar";
import ListPage from "./api/ListPage/ListPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResult(json);
      });
  }, []);
  return (
    <div>
      <SearchBar posts={posts} setSearchResult={setSearchResult} />
      <ListPage searchResult={searchResult} />
    </div>
  );
}

export default App;
