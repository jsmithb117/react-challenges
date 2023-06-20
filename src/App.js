import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])

  async function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((data) => data.json())
      .then((newData) => setData(newData))
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <div className="App">
      <ul>
        {data && data.map((item, listIndex) => (
          <li key={listIndex}>
            <h3>Name: {item.name}</h3>
            <h3>Email: {item.email}</h3>
            <p>Message: {item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// [
//   {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },
// ]