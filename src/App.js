import React, { useState, useEffect } from "react";
import { fetchTopHeadlines } from "./utils";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getTopHeadlines = async () => {
      const articles = await fetchTopHeadlines("us");
      setArticles(articles);
    };

    getTopHeadlines();
  }, []);

  return (
    <div>
      <h1>Top Headlines</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
