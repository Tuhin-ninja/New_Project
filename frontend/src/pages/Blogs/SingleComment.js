import React from 'react';
import { useEffect, useState } from 'react';

const SingleComment = ({ comment }) => {
    const [author, setAuthor] = useState('');
    const [childAuthor, setChildAuthor] = useState('');
    const[childComments, setChildComments] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5002/blog_comments_child/${comment.comment_id}`)
            .then(res => res.json())
            .then(data => setChildComments(data))
    }, []);
    const handleReply = () => {
        console.log('replying to comment');
        alert('replying to comment');

    }

    const getUserName = () =>{
        fetch(`http://localhost:5002/users/${comment.user_id}`)
        .then(res => res.json())
        .then(data => setAuthor(data))
    
    }

    useEffect(() => {
        fetch(`http://localhost:5002/users/${comment.user_id}`)
            .then(res => res.json())
            .then(data => setAuthor(data))
    }, []);
    return (
        <div>
            <section className="gradient-custom">
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 col-lg-10 col-xl-8">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex flex-start">
                                                <img className="rounded-circle shadow-1-strong me-3"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="65"
                                                    height="65" />
                                                <div className="flex-grow-1 flex-shrink-1">
                                                    <div>
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <p className="mb-1">
                                                                {author.username} <span className="small">- {comment.created_at}</span>
                                                            </p>
                                                            <button onClick={handleReply}>reply</button>
                                                        </div>
                                                        <p className="small mb-0">
                                                            {comment.comment_text}
                                                        </p>
                                                        {
                                                            childComments.map(childComment => {
                                                                return (
                                                                    <div className="d-flex flex-start" style={{ paddingLeft: '100px' }}>
                                                                        <img className="rounded-circle shadow-1-strong me-3"
                                                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="65"
                                                                            height="65" />
                                                                        <div className="flex-grow-1 flex-shrink-1">
                                                                            <div>
                                                                                <div className="d-flex justify-content-between align-items-center">
                                                                                    {/* {
                                                                                        fetch(`http://localhost:5002/users/${childComment.user_id}`)
                                                                                            .then(res => res.json())
                                                                                            .then(data => setChildAuthor(data))
                                                                                    } */}
                                                                                    <p className="mb-1">
                                                                                        {childAuthor.username} <span className="small">- {childComment.created_at}</span>
                                                                                    </p>
                                                                                    <button onClick={handleReply}>reply</button>
                                                                                </div>
                                                                                <p className="small mb-0">
                                                                                    {childComment.comment_text}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleComment