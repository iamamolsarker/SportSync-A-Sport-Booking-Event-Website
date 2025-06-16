import React from 'react';
import Slider from '../../Components/Slider';
import Testimonials from '../../Components/Testimonials';
import PopularSports from '../../Components/PopularSports';
import FeaturedEvents from '../../Components/FeaturedEvents';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            <FeaturedEvents></FeaturedEvents>
            <Testimonials></Testimonials>
            <PopularSports></PopularSports>
        </>
    );
};

export default Home;