import React from 'react';

const WebCard = ({ title, url, text }) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <img className="browser-img" src={url} />
      <p>{text}</p>
    </article>
  );
};

export default WebCard;
