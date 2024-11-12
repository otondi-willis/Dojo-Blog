import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50; //React will convert to string then display
  const person = {name:'yoshi',age:30}; //Objects are not valid as a React child

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person}</p>
      </div>
    </div>
  );
}

export default App;
