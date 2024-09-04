import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// import { Link } from "react-router-dom";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  // const [menu, setMenu] = useState(20);
  // const handleClick = () => {
  //   if (menu === 250) {
  //     setMenu(20);
  //   } else {
  //     setMenu(250);
  //   }
  // };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${
    //   props.country
    // }&category=${props.category}&category=${props.category}&apiKey=${
    //   props.apiKey
    // }&page=${page < 1 ? page : page + 1}&pageSize=${props.pageSize}`;
    const url = `https://newsapi.org/v2/top-headlines?&category=${
      props.category
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page < 1 ? page : page + 1
    }&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - SunShine Express`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    // https://newsapi.org/v2/top-headlines?&category=general&apiKey=088cd910e6d543288bfb7e4deb16587c&page=3&pageSize=4
    const url = `https://newsapi.org/v2/top-headlines?&category=${
      props.category
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page < 1 ? page : page + 1
    }&pageSize=${props.pageSize}`;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country
    // }&category=${props.category}&category=${props.category}&apiKey=${
    //   props.apiKey
    // }&page=${page < 1 ? page : page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <div className="container" id="headerr">
      <header>
        Sunshine Express - Top {capitalizeFirstLetter(props.category)} Headlines
      </header>
      {/* <nav className="navbar" style={{ minWidth: `${menu}px` }}>
        <ul>
          <button className="menu" onClick={handleClick}>
            {menu === 250 ? (
              <i className="fa-solid fa-xmark fa-xl"></i>
            ) : (
              <i className="fa-solid fa-bars fa-xl"></i>
            )}
          </button>
          {menu === 250 ? (
            <li>
              <Link to="/home">
                <i className="fa-solid fa-house">
                  &nbsp; home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/home">
                <i className="fa-solid fa-house fa-xl"></i>
              </Link>
            </li>
          )}
          {menu === 250 ? (
            <li>
              <Link to="/about">
                <i className="fa-regular fa-solid fa-paper-plane"> about us</i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/about">
                <i className="fa-regular fa-paper-plane fa-xl"></i>
              </Link>
            </li>
          )}
          {menu === 250 ? (
            <li>
              <Link to="/contact">
                <i className="fa-regular fa-solid fa-envelope"> contact</i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/contact">
                <i className="fa-regular fa-envelope fa-xl"> </i>
              </Link>
            </li>
          )}
          {menu === 250 ? (
            <li>
              <Link to="/setings">
                <i className="fa-solid fa-gear"> account</i>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/setings">
                <i className="fa-solid fa-gear fa-xl"></i>
              </Link>
            </li>
          )}
        </ul>
      </nav> */}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <section className="section">
          {articles.map((element) => {
            return (
              <article className="article" key={element.url}>
                <br />
                <br />
                <br />
                <br />
                <NewsItem
                  title={element.title ? element.title.slice(0, 37) : ""}
                  description={
                    element.description ? element.description.slice(0, 100) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author ? element.author : "Unknown"}
                  date={new Date(element.publishedAt).toGMTString()}
                />
              </article>
            );
          })}
        </section>
      </InfiniteScroll>
      {/* <a href="#headerr" className="arrows">
        <i
          className="fa-solid fa-circle-arrow-up fa-bounce fa-2xl"
          style={{ color: "#008bf8" }}
        />
      </a> */}
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 4,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
