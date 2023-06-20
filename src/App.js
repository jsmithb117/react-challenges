import './App.css';
import { useState } from 'react';

function App() {
  const [toRender, setToRender] = useState("");

  function changeHandler(text) {
    setToRender(text)
  }

  return (
    <>
      <input type="text" placeholder="Enter Text" onChange={(e) => changeHandler(e.target.value)}/>
      <p>{toRender}</p>
    </>
  );
}
export default App;
