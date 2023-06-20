import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([])
  const [listItem, setListItem] = useState("")

  function changeHandler(newListItem) {
    setListItem(newListItem)
  }

  function clickHandler() {
    setList((list) => {
      return [...list, listItem]
    })
    setListItem("")
  }

  function deleteHandler(index) {
    setList((list) => list.splice(index, 1))
  }

  return (
    <div className="App">
      <div className="list-item-form">
        <label>List Item: </label>
        <input
          type='text'
          onChange={(e) => changeHandler(e.target.value)}
          value={listItem}>
        </input>
        <button onClick={clickHandler}>Add item</button>
      </div>
      <div className="list">
        {list.map((listItem, index) => (
          <button key={index}className="list-item" onClick={() => deleteHandler(index)}>
            {listItem}
          </button>)
        )}
      </div>
    </div>
  )
}

export default App
