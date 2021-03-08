import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  
    return (
        <div className="d-flex justify-content-center align-items-center post" >
           
            <h1 id="posts" ><strong>Welcome To Social Buddy</strong></h1> 
           <Link to='/post'><button className='btn btn-warning m-3 '> Posts</button></Link>
      
          
        </div>
    );
};

export default Home;