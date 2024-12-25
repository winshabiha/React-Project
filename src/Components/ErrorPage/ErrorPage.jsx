import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-4xl font-bold text-center'> 
            <h1>Invallied Page</h1>
            <Link to ={'/'}><button className='btn btn-primary '>Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;