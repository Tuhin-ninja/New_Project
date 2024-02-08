import React, { useContext, useEffect, useState } from 'react'
import Blog from './Blog';

const Blogs = () =>{ 
    const [blogs, setblogs] = useState([]);
    // const {blogs, setblogs} = useContext(blogsContext);

    useEffect(()=>{
        fetch("http://localhost:5002/blogs")
        .then(res => res.json())
        .then(data =>setblogs(data))
    },[]);
    
    console.log(blogs);

    
  return (
    <>
    <div className='text-5xl ml-40  md-10 text-black'>
        All blogs ( {blogs.length} )
    </div>
    <div className='grid grid-cols-2 bg-white w-[86%] m-auto'>
    {
        blogs.map(blog => <Blog blog = {blog} ></Blog>)
    }
    </div>
    </>
    
  )
}
export default Blogs;

//
