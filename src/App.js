import "./App.css";
import MainForm from "./Components/MainForm/MainForm";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <MainForm />
    </div>
  );
}

export default App;
