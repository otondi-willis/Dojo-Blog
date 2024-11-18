import { useState } from 'react';
import BlogList from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My new website', body: 'lorem ipsum...', author:'mario', id:1},
        {title:'Welcome party!', body: 'lorem ipsum...', author:'yoshi', id:2},
        {title:'Web dev top tips', body: 'lorem ipsum...', author:'mario', id:3},
        {title:'Web dev favorites', body: 'lorem ipsum...', author:'mario', id:4}

    ]);
    const handleDelete = (id)=>{

    }
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's blogs!"/>
        </div>
     );
}
 
export default Home;