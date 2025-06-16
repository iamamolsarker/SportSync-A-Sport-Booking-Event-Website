import React from 'react';
import loadingAnimation from "../assets/animation/loading.json"
import Lottie from 'lottie-react';

const LoaderAnimation = () => {
    return (
        <div className='max-w-1/4 mx-auto min-h-screen'>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    );
};

export default LoaderAnimation;