import './App.css';
import { useState } from 'react';

const App = () => {
  const [] = useState(0);

  return (
    <div>
      <h2>Counter: 0</h2>
      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default App;
