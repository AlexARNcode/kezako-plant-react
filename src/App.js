import "./App.css";
import MainBody from "./Components/MainBody/MainBody";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap-sketchy.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <MainBody />
    </div>
  );
}

export default App;
