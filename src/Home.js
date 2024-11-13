const Home = () => {
    let name = 'willis';//the variable is not reactive
    const handleClick = () => {
        name = 'luigi';
        console.log(name);
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