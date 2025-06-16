import React from 'react';
import ErrorImg from "../../assets/404.jpg"
import { Link } from 'react-router';

const ErrorElement = () => {
    return (
        <div className='flex flex-col gap-6 items-center'>
            <img src={ErrorImg} alt="" className='w-xl'/>
            <Link to="/" className="py-2 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-semibold cursor-pointer">Go Back to Home</Link>
        </div>
    );
};

export default ErrorElement;