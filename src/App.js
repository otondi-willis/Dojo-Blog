import './App.css';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50; //React will convert to string then display
  //const person = {name:'yoshi',age:30}; //Objects are not valid as a React child same applies to booleans
  const link = "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"hello, dunia"}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random()*10}</p>
        <a href={link}>Google Site</a>
        <p></p>
      </div>
    </div>
  );
}

export default App;
