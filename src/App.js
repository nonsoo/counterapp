import Counter from "./Components/Counter";
import "./CSS/counter.css";

import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div className="App">
      <p>App Level comp Counter: {count}</p>
      <Counter />
    </div>
  );
}

export default App;
