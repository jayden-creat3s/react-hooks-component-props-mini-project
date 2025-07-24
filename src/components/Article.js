import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadIndicator = () => {
    if (minutes < 30) {
      const cups = "☕️".repeat(Math.ceil(minutes / 5));
      return `${cups} ${minutes} min read`;
    } else {
      const bentos = "🍱".repeat(Math.ceil(minutes / 10));
      return `${bentos} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {getReadIndicator()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
