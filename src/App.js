import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [uploadFile, setUploadFile] = useState();

  const handleFileSelect = (e) => {
    setUploadFile(e.target.files[0]);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("images", uploadFile);
    dataArray.append("organs", "flower");
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
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <input onChange={handleFileSelect} type="file" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
