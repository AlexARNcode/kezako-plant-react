import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [uploadFile, setUploadFile] = useState();
  const [organ, setOrgan] = useState();

  const handleFileSelect = (e) => {
    setUploadFile(e.target.files[0]);
  };

  const chooseOrgan = (e) => {
    setOrgan(e.target.value);
  };

  const showNoOrganError = () => {
    alert("You must choose an organ !");
  };

  const submitForm = (event) => {
    if (organ) {
      event.preventDefault();

      const dataArray = new FormData();
      dataArray.append("images", uploadFile);
      dataArray.append("organs", organ);
      axios
        .post(
          "https://my-api.plantnet.org/v2/identify/all?api-key=2b101KupCBLezl8pN3AH8oUg",
          dataArray,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          console.log(response.data.results[0].species.commonNames[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      showNoOrganError();
    }
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <select onChange={chooseOrgan} id="organ">
          <option value="">--Choose an organ--</option>
          <option value="leaf">Leaf</option>
          <option value="flower">Flower</option>
          <option value="fruit">Fruit</option>
          <option value="bark">Bark</option>
        </select>

        <input onChange={handleFileSelect} type="file" />

        <button>Send</button>
      </form>
    </>
  );
}
