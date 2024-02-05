import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./src/__tests__/ArticleList.test.js";
import Header from "./Header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;