import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Comment from './Comment';
import SingleComment from './SingleComment';

const SingleBlog = () => {
    const blog = useLoaderData(); 
    const {user} = useContext(AuthContext);
    const user_id = user?.id;
    const [comments,setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(`http://localhost:5002/blog_comments/${blog.blog_id}`)
        .then(res => res.json())
        .then(data =>setComments(data))
        .then(setLoading(false))
    },[]);


    return (
    <div>
        <p>{blog.blog_content}</p>
        <p>{blog.blog_id}</p>
        <p>{comments.length}</p>
        <Comment blog={blog}/>
     
    </div>
  )
}

export default SingleBlog;