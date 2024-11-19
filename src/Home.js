import { useState, useEffect } from 'react';
import BlogList from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
       fetch( 'http://localhost:8000/blogs' )
       .then(res => {
        return res.json();
       })
       .then(data=>{
        
        setBlogs(data);
       });
        
    },[]);
    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
            <button onClick={()=>{setName('luigi')}}>change name</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;