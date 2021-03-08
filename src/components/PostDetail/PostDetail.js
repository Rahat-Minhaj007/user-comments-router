import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PostDetail.css';

const PostDetail = (props) => {
    const { title, body ,id} = props.user;
    return (
        <div className="postCard mt-5 ml-5">
       
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Post No:{id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><strong>Title: {title}</strong> </Card.Subtitle>
                    <Card.Text>
                        {body}
                    </Card.Text>
                   <Link to={`/comments/${id}`}><button className="btn btn-warning">Comments</button></Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default PostDetail;