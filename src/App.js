import './App.css';
import { useState } from 'react';
import IncrementButton from './components/IncrementButton/IncrementButton'
function App() {
  const [counter, setCounter] = useState(0)

  function incrementHandler() {
    setCounter((count) => count + 1)
  }

  return (
    <div className="App">
      <p>{counter}</p>
      <IncrementButton incrementHandler={incrementHandler}/>
    </div>
  );
}

export default App;
