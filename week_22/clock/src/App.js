import "./App.css";
import Reactclock from "./components/Reactclock";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "#ffe5b4" }}>DIGITAL CLOCK</h1>
      <div className="clock">
        <Reactclock />
      </div>
    </div>
  );
}

export default App;
