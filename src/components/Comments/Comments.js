import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Comments.css'
const Comments = () => {
    const {id} = useParams()
    const [comment,setComment] = useState({})
    const {name,email,body} = comment
     useEffect(()=>{
            const url = `http://jsonplaceholder.typicode.com/comments/${id}`
            fetch(url)
            .then(res => res.json())
            .then (data => setComment(data))
    },[])
    return (
        <div className="commentCard mt-5 ml-5">
             <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <Card.Title className="mb-2 text-muted"><strong>Email : {email}</strong> </Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>
                    <Link to='/home'><button className="btn btn-warning">Home</button></Link>
                    <Link to='/post'><button className="btn btn-warning ml-5">Posts</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Comments;