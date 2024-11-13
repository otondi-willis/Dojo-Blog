import { useState } from 'react';

const Home = () => {
    //let name = 'willis';//the variable is not reactive
    const [name,setName] = useState('willis');
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('oluigi');
        setAge(9);
    };
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;