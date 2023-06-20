import './App.css';

function Child() {
  return <div>This is children content</div>;
}

// Add code only here
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}

function App() {
  return (
    <Parent>
      <Child />
    </Parent>
  );
}

export default App;
