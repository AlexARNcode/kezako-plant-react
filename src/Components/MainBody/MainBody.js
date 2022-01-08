import React from "react";
import { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";
import PLANTNET_API_KEY from "../../config/config";

export default function MainBody() {
  const [uploadFile, setUploadFile] = useState();
  const [organ, setOrgan] = useState();
  const [results, setResults] = useState([{}]);
  const [error, setError] = useState();
  const [loader, setLoader] = useState();

  const handleFileSelect = (e) => {
    if (fileIsAnImage(e.target.files[0].type)) {
      setUploadFile(e.target.files[0]);
    } else {
      setUploadFile("");
      document.getElementById("fileUploader").value = "";
      alert("Please choose an image file!");
    }
  };

  const imageFileTypes = ["image/jpeg", "image/gif", "image/png"];

  const fileIsAnImage = (fileType) => {
    if (!imageFileTypes.includes(fileType)) {
      return false;
    }
    return true;
  };

  const chooseOrgan = (e) => {
    setOrgan(e.target.value);
  };

  const showChooseError = () => {
    alert("You must choose an organ AND a file");
  };

  const callPlantNetApi = () => {
    setLoader(true);
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
        setLoader();
        setResults([...results, response.data.results]);
      })
      .catch((error) => {
        setLoader();
        setError(
          "There is an error. Please check you uploaded a real image file and that you internet connection is up."
        );
        setResults([{}]);
      });
  };

  const submitForm = (event) => {
    if (!organ || !uploadFile) {
      event.preventDefault();
      showChooseError();
    } else {
      event.preventDefault();
      setError(null);
      callPlantNetApi();
    }
  };

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
          id="fileUploader"
          onChange={handleFileSelect}
          type="file"
          className="form-control mb-3"
          accept="image/jpeg, image/gif, image/png"
        />
        <button className="btn btn-info mb-3 w-100">Send</button>

        {loader && (
          <>
            <div className="spinner-border text-secondary" role="status"></div>
            <p>Loading...</p>
          </>
        )}

        {error && (
          <div className="alert alert-dismissible alert-danger">{error}</div>
        )}

        {results[1] && <h2 className="text-center mt-4 mb-3">Results</h2>}
        <Results results={results} />
      </form>
    </>
  );
}
