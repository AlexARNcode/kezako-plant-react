import React from "react";

export default function ResultCard(props) {
  return (
    <div>
      <p>{props.number}</p>
      <p>Score : {props.score}</p>
      <p>Scientific Name : {props.scientificName}</p>
      <p>Common Names : {props.commonNames.join(", ")}</p>
    </div>
  );
}
