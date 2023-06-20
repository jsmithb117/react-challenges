import './App.css';
import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input placeholder="First Number" type="number" />
      <input placeholder="Second Number" type="number" />

      <button>Add Two Numbers</button>
      <p>Total:</p>
    </div>
  );
}

export default App;
