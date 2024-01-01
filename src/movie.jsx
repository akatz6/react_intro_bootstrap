import React from "react";

export default function movie({ image, rated, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={image} height={150} />
      <p>{rated}</p>
    </div>
  );
}
