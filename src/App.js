import './App.css';
import Navbar from './Navbar';

function App() {
  const title = "Welcome to the new blog";
  const likes = 50; //React will convert to string then display
  //const person = {name:'yoshi',age:30}; //Objects are not valid as a React child same applies to booleans
 
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default App;
