import React, { useEffect, useState } from 'react';
import PostDetail from '../PostDetail/PostDetail';
import './Post.css';

const Post = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1 id="buddy">SOCIAL BUDDIES POSTS</h1>
            <div  className="cardPost">
                {
                    users.map(user => <PostDetail user={user}></PostDetail>)
                }
            </div>

        </div>
    );
};

export default Post;