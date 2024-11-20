import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const [name, setName] = useState('mario');

    useEffect(()=>{
       setTimeout(()=>{
                fetch( 'http://localhost:8000/blogss' )
            .then(res => {
                console.log(res);
                if( !res.ok){
                   throw Error ("could not fetch the data for that resource");     
                }
                return res.json();
            })
            .then(data=>{
                
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
            });
       },1000)
        
    },[]);
    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            <button onClick={()=>{setName('luigi')}}>change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;