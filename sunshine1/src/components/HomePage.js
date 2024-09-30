// import { React, useEffect, useState } from "react";
import { React } from "react";
import { Link } from "react-router-dom";
// import Headline from "./Headline";
// import {Homeimg} from '../assets/landing.png'
// import {Homeimg} from '../../public/'

function HomePage(props) {
  // // eslint-disable-next-line
  // const [articles, setArticles] = useState([]);
  // const homepage = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?q=india&apiKey=a4be809850f44780b524ff15c630a110`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(
  //     parsedData.articles[1]
  //   );
  // };
  // useEffect(() => {
  //   homepage();
  // }, []);

  return (
    <>
      <div className="sunshine">
        <img src="../../logo_sunshine-removebg-preview.png" alt="" />
        <div className="sunav">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
        </div>
      </div>
      <div className="homepage">
        {/* <div className="homeimg">
          <img
            src="../../landing.png"
            alt=""
            style={{ height: "700px", width: "800px" }}
          />
        </div>
        <h1>HomePage</h1> */}
        {/* <div> */}
        {/* <div className="headline">
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
          </div> */}
        {/* </div> */}
       {/* <Headline props={props}/> */}
       <div>
          {/* <img src="../../sunbulb.png" alt="" /> */}
          {/* <img src="../../contrast.png" alt="" /> */}
          <img src="../../suncloud2.png" alt="" />
        </div>

        <div className="hometext">
          <h1>Stay Informed, Stay Secure</h1>
          <h4>
            {/* Stay informed, stay ahead. Sunshine Express brings the world to your
            fingertips with the latest news, delivered fast and accurate. Your
            gateway to knowledge, one article at a time. */}
            Discover the latest news across categories with enhanced security and personalized access. No tracking, just news.
          </h4>
          <br />
          {" "}
          <Link to="/login" className="link">
            See Headlines
          </Link>
        </div>
        {/* <div>
          <img src="../../sunbulb.png" alt="" />
          <img src="../../contrast.png" alt="" />
          <img src="../../suncloud2.png" alt="" />
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
