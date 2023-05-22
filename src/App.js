import "./App.css";
import Main from "./component/Main";

function App() {
  return (
    <div>
      <div id="container">
        <h1 style={{ textAlign: "center", margin: "50px" }}>
          Find the weather forecast for a city
        </h1>
        <Main />
      </div>
    </div>
  );
}

export default App;
