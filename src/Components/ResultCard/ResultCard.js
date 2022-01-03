import React from "react";

export default function ResultCard(props) {
  return (
    <div className="card border-info mb-3">
      <div className="card-header">
        <h5 className="card-title">{props.number}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">Score : {props.score} %</p>
        <p className="card-text">Scientific Name : {props.scientificName}</p>
        {props.commonNames.length !== 0 ? (
          <p className="card-text">
            Common Names : {props.commonNames.join(", ")}
          </p>
        ) : (
          <p className="card-text">
            Common Names : <span className="text-muted">Not found</span>
          </p>
        )}
      </div>
    </div>
  );
}
