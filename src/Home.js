import { useState } from 'react';

const Home = () => {
    //let name = 'willis';//the variable is not reactive
    const [name,setName] = useState('willis');
    const handleClick = () => {
        setName('oluigi');
        
    };
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;