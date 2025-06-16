import React, { Suspense } from 'react';
import MyBookingList from './MyBookingList';
import useAuth from '../../Hooks/useAuth';
import LoaderAnimation from '../../Components/LoaderAnimation';
import { myBookingsPromise } from '../../Api/myBookingsApi';

const MyBookings = () => {
    const {user} = useAuth();
    return (
        <>
            <Suspense fallback={<LoaderAnimation></LoaderAnimation>}>
                <MyBookingList myBookingsPromise={myBookingsPromise(user.email)}></MyBookingList>
            </Suspense>
        </>
    );
};

export default MyBookings;