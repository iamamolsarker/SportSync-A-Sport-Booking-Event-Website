import React from 'react';
import Slider from '../../Components/Slider';
import Testimonials from '../../Components/Testimonials';
import PopularSports from '../../Components/PopularSports';
import FeaturedEvents from '../../Components/FeaturedEvents';
import { Helmet } from 'react-helmet';
import TopPlayer from '../../Components/TopPlayer';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <FeaturedEvents></FeaturedEvents>
            <TopPlayer/>
            <Testimonials></Testimonials>
            <PopularSports></PopularSports>
        </>
    );
};

export default Home;