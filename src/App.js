import logo from "./logo.svg";
import "./App.css";
import useStore from "./useStore";
function App() {
  const { count, increment, decrement } = useStore((state) => state);

  return (
      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              <p>Counter {count}</p>
                    sampler
                  <button onClick={increment}>Increment</button>
                <br />
                    <button onClick={decrement}>Decrement</button>
         </header>
    </div>
  );
}

export default App;
