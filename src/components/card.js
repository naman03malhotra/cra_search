import React from "react";

import "./card.scss";

function Card(props) {
  const { data } = props;

  const {
    link,
    title,
    snippet,
    pagemap: { cse_image },
  } = data;

  const imageLink = cse_image[0].src;

  return (
    <div className="card">
      <div className="card__image-container">
        <img src={imageLink} alt="" />
      </div>
      <div className="card__content-container">
        <div className="card__link">{link}</div>
        <div className="card__title">{title}</div>
        <div className="card_description">{snippet}</div>
      </div>
    </div>
  );
}

export default Card;
