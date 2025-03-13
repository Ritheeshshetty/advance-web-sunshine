// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// // import { Link } from "react-router-dom";
// // https://newsapi.org/v2/top-headlines?q=india&apiKey=a4be809850f44780b524ff15c630a110
// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   const [color, setColor] = useState("#f0c947");

//   const changeColor = () => {
//     const newColor = color === "#f0c947" ? "#fff" : "#f0c947"; // Toggle color
//     setColor(newColor);
//     document.documentElement.style.setProperty("--orange", newColor);
//     console.log("clicked");
//   };
//   // const [menu, setMenu] = useState(20);
//   // const handleClick = () => {
//   //   if (menu === 250) {
//   //     setMenu(20);
//   //   } else {
//   //     setMenu(250);
//   //   }
//   // };

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     props.setProgress(10);
//     const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//     setLoading(true);
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//     props.setProgress(100);
//   };

//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(
//       props.category
//     )} - SunShine Express`;
//     updateNews();
//     // eslint-disable-next-line
//   }, []);
//   const fetchMoreData = async () => {
//     setPage(page + 1);
//     const url = `https://newsapi.org/v2/top-headlines?&category=${
//       props.category
//     }&category=${props.category}&apiKey=${props.apiKey}&page=${
//       page < 1 ? page : page + 1
//     }&pageSize=${props.pageSize}`;
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(articles.concat(parsedData.articles));
//     setTotalResults(parsedData.totalResults);
//   };

//   return (
//     <div className="container" id="headerr">
//       <div className="backhead">
//         <header>
//           {/* <marquee behavior="scroll" direction="right" scrollamount="3" scrolldelay="6" truespeed="truespeed" loop='1'>{capitalizeFirstLetter(props.category)} </marquee> */}
//           {capitalizeFirstLetter(props.category)} Headlines{" "}
//           {color === "#f0c947" ? (
//             <i className="fa-solid fa-circle bulb" onClick={changeColor}></i>
//           ) : (
//             <i className="fa-solid fa-moon bulb" onClick={changeColor}></i>
//           )}
//           {/* <i className="fa-solid fa-circle bulb" onClick={changeColor}></i> */}
//           {/* <i className="fa-solid fa-moon bulb" onClick={changeColor}></i> */}
//         </header>

//         <marquee
//           behavior="scroll"
//           direction="left"
//           scrollamount="1"
//           scrolldelay="10"
//           truespeed="truespeed"
//           loop="1"
//         >
//           Breaking News- Welcome to SunShine Express! We are your go-to source
//           for the latest news and updates from around the world. Our website is
//           designed to provide you with easy access to news articles on a variety
//           of topics, including sports, entertainment, health, technology,
//           science, and more. we bring you the most accurate and up-to-date
//           information on the topics that matter most to you. We use the latest
//           technologies, including ReactJS,Nodejs & MongoDB to deliver a fast and
//           seamless browsing experience that is both user-friendly and
//           aesthetically pleasing. Whether you're a sports enthusiast, a science
//           buff, or simply looking to stay informed on the latest happenings in
//           the world, SunShine Express has you covered. So why wait? Browse our
//           website today and stay informed on the topics that matter most to you!
//           - Breaking News
//         </marquee>
//       </div>
//       {/* <nav className="navbar" style={{ minWidth: `${menu}px` }}>
//         <ul>
//           <button className="menu" onClick={handleClick}>
//             {menu === 250 ? (
//               <i className="fa-solid fa-xmark fa-xl"></i>
//             ) : (
//               <i className="fa-solid fa-bars fa-xl"></i>
//             )}
//           </button>
//           {menu === 250 ? (
//             <li>
//               <Link to="/home">
//                 <i className="fa-solid fa-house">
//                   &nbsp; home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 </i>
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/home">
//                 <i className="fa-solid fa-house fa-xl"></i>
//               </Link>
//             </li>
//           )}
//           {menu === 250 ? (
//             <li>
//               <Link to="/about">
//                 <i className="fa-regular fa-solid fa-paper-plane"> about us</i>
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/about">
//                 <i className="fa-regular fa-paper-plane fa-xl"></i>
//               </Link>
//             </li>
//           )}
//           {menu === 250 ? (
//             <li>
//               <Link to="/contact">
//                 <i className="fa-regular fa-solid fa-envelope"> contact</i>
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/contact">
//                 <i className="fa-regular fa-envelope fa-xl"> </i>
//               </Link>
//             </li>
//           )}
//           {menu === 250 ? (
//             <li>
//               <Link to="/setings">
//                 <i className="fa-solid fa-gear"> account</i>
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/setings">
//                 <i className="fa-solid fa-gear fa-xl"></i>
//               </Link>
//             </li>
//           )}
//         </ul>
//       </nav> */}
//       {loading && <Spinner />}
//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//         style={{ overflow: "hidden" }}
//       >
//         <section className="section">
//           {articles.map((element) => {
//             return (
//               <article className="article" key={element.url}>
//                 <br />
//                 <br />
//                 <br />
//                 <br />
//                 <NewsItem
//                   title={element.title ? element.title.slice(0, 37) : ""}
//                   description={
//                     element.description ? element.description.slice(0, 100) : ""
//                   }
//                   imageUrl={element.urlToImage}
//                   newsUrl={element.url}
//                   author={element.author ? element.author : "Unknown"}
//                   date={new Date(element.publishedAt).toGMTString()}
//                   name={element.source.name}
//                 />
//               </article>
//             );
//           })}
//         </section>
//       </InfiniteScroll>
//     </div>
//   );
// };
// News.defaultProps = {
//   country: "in",
//   pageSize: 4,
//   category: "general",
// };
// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// };

// export default News;

// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   const [color, setColor] = useState("#f0c947"); // Default color

//   const changeColor = () => {
//     const newColor = color === "#f0c947" ? "#fff" : "#f0c947"; // Toggle color
//     setColor(newColor);
//     document.documentElement.style.setProperty("--orange", newColor);
//   };

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     try {
//       props.setProgress(10);
//       const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//       setLoading(true);

//       const response = await fetch(url);
//       props.setProgress(30);
//       const parsedData = await response.json();
//       props.setProgress(70);

//       if (parsedData.articles) {
//         setArticles(parsedData.articles);
//         setTotalResults(parsedData.totalResults);
//       } else {
//         console.error("No articles found!");
//       }

//       setLoading(false);
//       props.setProgress(100);
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     }
//   };

//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(props.category)} - SunShine Express`;
//     updateNews();
//     // eslint-disable-next-line
//   }, []);

//   const fetchMoreData = async () => {
//     try {
//       const newPage = page + 1;
//       setPage(newPage);

//       const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${props.apiKey}&page=${newPage}&pageSize=${props.pageSize}`;
//       const response = await fetch(url);
//       const parsedData = await response.json();

//       if (parsedData.articles) {
//         setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
//         setTotalResults(parsedData.totalResults);
//       }
//     } catch (error) {
//       console.error("Error fetching more news:", error);
//     }
//   };

//   return (
//     <div className="container" id="headerr">
//       <div className="backhead">
//         <header>
//           {capitalizeFirstLetter(props.category)} Headlines{" "}
//           {color === "#f0c947" ? (
//             <i className="fa-solid fa-circle bulb" onClick={changeColor}></i>
//           ) : (
//             <i className="fa-solid fa-moon bulb" onClick={changeColor}></i>
//           )}
//         </header>

//         <marquee behavior="scroll" direction="left" scrollamount="1" scrolldelay="10">
//           Breaking News - Welcome to SunShine Express! We bring you the latest news on various topics
//           including sports, technology, health, and more.
//         </marquee>
//       </div>

//       {loading && <Spinner />}

//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//         style={{ overflow: "hidden" }}
//       >
//         <section className="section">
//           {articles.map((element, index) => (
//             <article className="article" key={element.url || index}>
//               <br />
//               <NewsItem
//                 title={element.title ? element.title.slice(0, 37) : ""}
//                 description={element.description ? element.description.slice(0, 100) : ""}
//                 imageUrl={element.urlToImage}
//                 newsUrl={element.url}
//                 author={element.author || "Unknown"}
//                 date={new Date(element.publishedAt).toGMTString()}
//                 name={element.source.name}
//               />
//             </article>
//           ))}
//         </section>
//       </InfiniteScroll>
//     </div>
//   );
// };

// News.defaultProps = {
//   country: "in",
//   pageSize: 4,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
//   apiKey: PropTypes.string.isRequired,
//   setProgress: PropTypes.func.isRequired,
// };

// export default News;

// import React, { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// const News = (props) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   const [color, setColor] = useState("#f0c947"); // Default color

//   const changeColor = () => {
//     const newColor = color === "#f0c947" ? "#fff" : "#f0c947"; // Toggle color
//     setColor(newColor);
//     document.documentElement.style.setProperty("--orange", newColor);
//   };

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const updateNews = async () => {
//     try {
//       props.setProgress(10);
//       setLoading(true);

//       const response = await fetch(
//         `http://localhost:5000/api/news/fetch-news?category=${props.category}`
//       );
//       props.setProgress(30);
//       const parsedData = await response.json();
//       props.setProgress(70);

//       if (parsedData.articles) {
//         setArticles(parsedData.articles);
//         setTotalResults(parsedData.totalResults);
//       } else {
//         console.error("No articles found!");
//       }

//       setLoading(false);
//       props.setProgress(100);
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     }
//   };

//   useEffect(() => {
//     document.title = `${capitalizeFirstLetter(
//       props.category
//     )} - SunShine Express`;
//     updateNews();
//     // eslint-disable-next-line
//   }, []);

//   const fetchMoreData = async () => {
//     try {
//       const newPage = page + 1;
//       setPage(newPage);

//       const response = await fetch(
//         `http://localhost:5000/api/news/fetch-news?category=${props.category}`
//       );
//       const parsedData = await response.json();

//       if (parsedData.articles) {
//         setArticles((prevArticles) => [
//           ...prevArticles,
//           ...parsedData.articles,
//         ]);
//         setTotalResults(parsedData.totalResults);
//       }
//     } catch (error) {
//       console.error("Error fetching more news:", error);
//     }
//   };

//   return (
//     <div className="container" id="headerr">
//       <div className="backhead">
//         <header>
//           {capitalizeFirstLetter(props.category)} Headlines{" "}
//           {color === "#f0c947" ? (
//             <i className="fa-solid fa-circle bulb" onClick={changeColor}></i>
//           ) : (
//             <i className="fa-solid fa-moon bulb" onClick={changeColor}></i>
//           )}
//         </header>

//         <marquee
//           behavior="scroll"
//           direction="left"
//           scrollamount="1"
//           scrolldelay="10"
//         >
//           Breaking News - Welcome to SunShine Express! We bring you the latest
//           news on various topics including sports, technology, health, and more.
//         </marquee>
//       </div>

//       {loading && <Spinner />}

//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//         style={{ overflow: "hidden" }}
//       >
//         <section className="section">
//           {articles.map((element, index) => (
//             <article className="article" key={element.url || index}>
//               <br />
//               <NewsItem
//                 title={element.title ? element.title.slice(0, 37) : ""}
//                 description={
//                   element.description ? element.description.slice(0, 100) : ""
//                 }
//                 imageUrl={element.urlToImage}
//                 newsUrl={element.url}
//                 author={element.author || "Unknown"}
//                 date={new Date(element.publishedAt).toGMTString()}
//                 name={element.source.name}
//               />
//             </article>
//           ))}
//         </section>
//       </InfiniteScroll>
//     </div>
//   );
// };

// News.defaultProps = {
//   country: "in",
//   pageSize: 4,
//   category: "general",
// };

// News.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
//   setProgress: PropTypes.func.isRequired,
// };

// export default News;

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [color, setColor] = useState("#f0c947"); // Default color

  // ✅ Use backend URL dynamically
  const API_BASE_URL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const changeColor = () => {
    const newColor = color === "#f0c947" ? "#fff" : "#f0c947"; // Toggle color
    setColor(newColor);
    document.documentElement.style.setProperty("--orange", newColor);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    try {
      props.setProgress(10);
      setLoading(true);

      const response = await fetch(
        `${API_BASE_URL}/api/news/fetch-news?category=${props.category}`
      );
      props.setProgress(30);
      const parsedData = await response.json();
      props.setProgress(70);

      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
      } else {
        console.error("No articles found!");
      }

      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(
      props.category
    )} - SunShine Express`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    try {
      const newPage = page + 1;
      setPage(newPage);

      const response = await fetch(
        `${API_BASE_URL}/api/news/fetch-news?category=${props.category}`
      );
      const parsedData = await response.json();

      if (parsedData.articles) {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...parsedData.articles,
        ]);
        setTotalResults(parsedData.totalResults);
      }
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  return (
    <div className="container" id="headerr">
      <div className="backhead">
        <header>
          {capitalizeFirstLetter(props.category)} Headlines{" "}
          {color === "#f0c947" ? (
            <i className="fa-solid fa-circle bulb" onClick={changeColor}></i>
          ) : (
            <i className="fa-solid fa-moon bulb" onClick={changeColor}></i>
          )}
        </header>

        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="1"
          scrolldelay="10"
        >
          Breaking News - Welcome to SunShine Express! We bring you the latest
          news on various topics including sports, technology, health, and more.
        </marquee>
      </div>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <section className="section">
          {articles.map((element, index) => (
            <article className="article" key={element.url || index}>
              <br />
              <NewsItem
                title={element.title ? element.title.slice(0, 37) : ""}
                description={
                  element.description ? element.description.slice(0, 100) : ""
                }
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author || "Unknown"}
                date={new Date(element.publishedAt).toGMTString()}
                name={element.source.name}
              />
            </article>
          ))}
        </section>
      </InfiniteScroll>
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
  setProgress: PropTypes.func.isRequired,
};

export default News;
