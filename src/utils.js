const API_KEY = "dd0cec7dd77e4937a191b49be295c2e4";

const fetchTopHeadlines = async (country) => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
};

export { fetchTopHeadlines };
