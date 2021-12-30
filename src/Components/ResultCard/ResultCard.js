import React from "react";

export default function ResultCard(props) {
  return (
    <div className="card border-info mb-3">
      <div className="card-header">
        <h5 className="card-title">{props.number}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">Score : {props.score}</p>
        <p className="card-text">Scientific Name : {props.scientificName}</p>
        <p className="card-text">
          Common Names : {props.commonNames.join(", ")}
        </p>
      </div>
    </div>
  );
}
