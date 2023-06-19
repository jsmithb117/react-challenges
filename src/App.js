import './App.css';
import { useState } from 'react';

function App() {
  const [hide, setHide] = useState(false);

  function clickHandler() {
    setHide(!hide)
  }

  return (
    <>
      <button onClick={clickHandler}>Hide Element Below</button>

      <div hidden={hide}>Toggle Challenge</div>
    </>
  );
}

export default App;
