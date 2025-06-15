import React from 'react';
import ErrorImg from "../../assets/404.jpg"
import { Link } from 'react-router';

const ErrorElement = () => {
    return (
        <div className='flex flex-col gap-6 items-center'>
            <img src={ErrorImg} alt="" className='w-xl'/>
            <Link to="/" className='btn btn-primary'>Go Back to Home</Link>
        </div>
    );
};

export default ErrorElement;