import "./App.css";
import Main from "./component/Main";

function App() {
  return (
    <div>
      <div id="container">
        <h1 style={{ textAlign: "center", margin: "50px" }}>Today's weather</h1>
        <Main />
      </div>
    </div>
  );
}

export default App;
