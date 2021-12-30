import React from "react";
import ResultCard from "../ResultCard/ResultCard";

export default function Results(props) {
  return (
    <div>
      {props.results[1] && <h2>Résultats</h2>}
      {props.results[1] &&
        props.results[1].map((result, i) => {
          return (
            <>
              <ResultCard
                score={result.score}
                scientificName={result.species.scientificName}
                commonNames={result.species.commonNames}
                number={i + 1}
              />
            </>
          );
        })}
    </div>
  );
}
