import "./App.css";
import Counter from "./components/counter";
import Display from "./components/display";

function App() {
  return (
    <div className="App">
      <div className="img"></div>
      <div className="counter">
        <Display />
        <Counter />
      </div>
    </div>
  );
}

export default App;
