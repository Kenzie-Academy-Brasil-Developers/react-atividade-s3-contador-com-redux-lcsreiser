import "./App.css";
import Counter from "./components/counter";
import Display from "./components/display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Counter />
      </header>
    </div>
  );
}

export default App;
