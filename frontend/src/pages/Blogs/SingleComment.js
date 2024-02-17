import React from 'react';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ChildComment from './ChildComment';

const SingleComment = ({ comment }) => {
    const { user } = useContext(AuthContext);
    const [author, setAuthor] = useState('');
    const [childAuthor, setChildAuthor] = useState('');
    const [commentBody, setCommentBody] = useState('');
    const [childComments, setChildComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5002/blog_comments_child/${comment.comment_id}`)
            .then(res => res.json())
            .then(data => setChildComments(data))
    }, []);
    const handleReply = () => {
        console.log('replying to comment');
        //alert('replying to comment');
        setIsReplying(!isReplying);

    }

    const handleSubmit = async () => {
        setIsReplying(false);
        if (user) {
            fetch('http://localhost:5002/blog_comments_child', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    blog_id: comment.blog_id,
                    user_id: user.id,
                    comment_text: commentBody,
                    parent_comment_id: comment.comment_id
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    // Reload the page to see the new comment
                    //window.location.reload();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

            const newComment = {
                blog_id: comment.blog_id,
                user_id: user.id,
                comment_text: commentBody,
                created_at: new Date().toISOString(),
                parent_comment_id: comment.comment_id
            };
            setCommentBody('');
            setChildComments([...childComments, newComment]);
        }
        else if (user === null) {
            alert('You must be logged in to comment');
            setCommentBody('');
        }
    }


    const getUserName = () => {
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
                                                    <p className="small mb-0">
                                                        {comment.comment_text}
                                                    </p>
                                                    <div>
                                                        <div className="d-flex justify-content-between align-items-left">
                                                            <p className="mb-1">
                                                                {author.username} <span className="small">- {comment.created_at}</span>
                                                            </p>
                                                            <div className="d-flex align-items-left">
                                                                {
                                                                    isReplying ? (
                                                                        <button className="btn btn-primary btn-sm" onClick={handleReply}>Cancel</button>
                                                                    ) : (
                                                                        <button className="btn btn-primary btn-sm" onClick={handleReply}>Reply</button>
                                                                    )
                                                                }
                                                                {
                                                                    isReplying ? (<div flex flex-col>
                                                                        <input type="text"
                                                                            placeholder="reply to comment"
                                                                            className="border-[1px] border-zinc-400 p-4 w-3/4"
                                                                            value={commentBody}
                                                                            onChange={(e) => setCommentBody(e.target.value)}
                                                                        />
                                                                        <button className="btn btn-primary btn-sm" onClick={handleSubmit}>Submit</button>
                                                                    </div>) : null
                                                                }
                                                            </div>
                                                        </div>

                                                        {
                                                            childComments.map(childComment => {
                                                                return (   
                                                                    <ChildComment childComment = {childComment}/>
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