import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [enabled, setEnabled] = useState(false);

  function textChange(newText) {
    setText(newText)
  }

  function clickHandler() {
    if (enabled) {
      console.log(`Submitting ${text}`)
    } else {
      console.log('disabled')
    }
  }

  useEffect(() => {
    if (text) {
      setEnabled(true)
    } else {
      setEnabled(false)
    }
  }, [text])

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input type="text" value={text} onChange={(e) => textChange(e.target.value)}/>
      <button onClick={clickHandler}>Submit</button>
    </>
  );
}

export default App;
