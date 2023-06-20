import './App.css';
import { useState } from 'react';

function Child({ textChange }) {
  const childText = 'child text'
  return (
    <>
      <div>Child</div>
      <button onClick={() => textChange(childText)}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = useState(
    "I need to be updated from my child"
  );

  function textChange(text) {
    setValue(text)
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child textChange={textChange}/>
      </div>
    </>
  );
}

export default Parent;
