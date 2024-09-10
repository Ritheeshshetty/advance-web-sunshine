import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date,name } = props;
  return (
    <div>
      <div className="card">
        <img src={imageUrl ? imageUrl : "./breakingnews.png"} alt="" />
        <div className="card-details">
          <p className="text-title">{title}...</p>
          <p className="text-body">{description}...</p>
          <p className="text-body">
            By <b>{author}</b> on {date}
          </p>
        </div>
        <a href={newsUrl} rel="noreferrer" target="_blank">
          <button className="card-button">{name}</button>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
