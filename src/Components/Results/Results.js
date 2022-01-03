import React from "react";
import ResultCard from "../ResultCard/ResultCard";

export default function Results(props) {
  return (
    <div>
      {props.results[1] && <h2 className="text-center mt-4 mb-3">Results</h2>}
      {props.results[1] &&
        props.results[1].map((result, i) => {
          return (
            <>
              <ResultCard
                score={Math.round(result.score * 100)}
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
