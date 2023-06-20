import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1)
  }
  function decrementHandler() {
    setCount(count - 1)
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default App;
