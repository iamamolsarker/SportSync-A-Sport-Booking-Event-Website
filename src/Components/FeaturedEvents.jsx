import React from 'react';
import { Suspense } from 'react';
import FeaturedEventCard from './FeaturedEventCard';
import { featuredEventsPromise } from '../Api/FeaturedApi';
import LoaderAnimation from './LoaderAnimation';

const FeaturedEvents = () => {
    return (
        <Suspense fallback={<LoaderAnimation></LoaderAnimation>}>
            <FeaturedEventCard featuredEventsPromise={featuredEventsPromise()}></FeaturedEventCard>
        </Suspense>
    );
};

export default FeaturedEvents;