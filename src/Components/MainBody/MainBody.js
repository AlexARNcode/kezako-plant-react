import React from "react";
import { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";
import PLANTNET_API_KEY from "../../config/config";

export default function MainBody() {
  const [uploadFile, setUploadFile] = useState();
  const [organ, setOrgan] = useState();
  const [results, setResults] = useState([{}]);

  const handleFileSelect = (e) => {
    setUploadFile(e.target.files[0]);
  };

  const chooseOrgan = (e) => {
    setOrgan(e.target.value);
  };

  const showChooseError = () => {
    alert("You must choose an organ AND a file");
  };

  const callPlantNetApi = () => {
    const dataArray = new FormData();
    dataArray.append("images", uploadFile);
    dataArray.append("organs", organ);
    axios
      .post(
        `https://my-api.plantnet.org/v2/identify/all?api-key=${PLANTNET_API_KEY}`,
        dataArray,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setResults([...results, response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitForm = (event) => {
    if (!organ || !uploadFile) {
      event.preventDefault();
      showChooseError();
    } else {
      event.preventDefault();
      callPlantNetApi();
    }
  };
  /* 
  const showResults = (e) => {
    console.log(results[1]);
  }; */

  return (
    <>
      <form onSubmit={submitForm}>
        <select onChange={chooseOrgan} id="organ" className="form-select mb-3">
          <option value="">--Choose an organ--</option>
          <option value="leaf">Leaf</option>
          <option value="flower">Flower</option>
          <option value="fruit">Fruit</option>
          <option value="bark">Bark</option>
        </select>
        <input
          onChange={handleFileSelect}
          type="file"
          className="form-control mb-3"
        />
        <button className="btn btn-info mb-3 w-100">Send</button>
        <Results results={results} />
      </form>

      {/*    <button className="btn btn-info mb-3 w-100" onClick={showResults}>
        Results
      </button> */}
    </>
  );
}
