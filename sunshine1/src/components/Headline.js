
import { React, useEffect, useState } from "react";

function Headline(props) {
      // eslint-disable-next-line
  const [articles, setArticles] = useState([]);
  const homepage = async () => {
    const url = `https://newsapi.org/v2/top-headlines?q=india&apiKey=a4be809850f44780b524ff15c630a110`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(
      parsedData.articles[1]
    );
  };
  useEffect(() => {
    homepage();
  }, []);
  return (
    <>
    <div className="headline">
            <img
              src={
                articles.urlToImage ? articles.urlToImage : "./breakingnews.png"
              }
              alt=""
            />
            <div className="home">
              <p className="text-title">{articles.title}</p>
              <p className="text-body">{props.description}</p>
              <p className="text-body">
                By <b>{articles.author}</b> on {articles.date}
              </p>
            </div>
            <a href={articles.newsUrl} rel="noreferrer" target="_blank">
              <button className="card-button">{articles.name}</button>
            </a>
          </div>
          </>
  )
}

export default Headline