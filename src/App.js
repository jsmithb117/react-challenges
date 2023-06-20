import './App.css';
import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  function num1ChangeHandler(number) {
    setNumber1(number)
  }

  function num2ChangeHandler(number) {
    setNumber2(number)
  }

  function clickHandler() {
    setTotal(number1 + number2)
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(e) => num1ChangeHandler(parseInt(e.target.value))}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(e) => num2ChangeHandler(parseInt(e.target.value))}
      />

      <button onClick={clickHandler}>Add Two Numbers</button>
      <p>Total: {total}</p>
    </div>
  );
}

export default App;
