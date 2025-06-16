import React, { Suspense } from 'react';
import ManageEventList from './ManageEventList';
import useAuth from '../../Hooks/useAuth';
import { manageMyEventsPromise } from '../../Api/manageEventApi';
import LoaderAnimation from '../../Components/LoaderAnimation';

const ManageEvent = () => {
    const {user} = useAuth()
    return (
        <>
            <Suspense fallback={<LoaderAnimation></LoaderAnimation>}>
                <ManageEventList manageMyEventsPromise={manageMyEventsPromise(user.email)}></ManageEventList>
            </Suspense>
        </>
    );
};

export default ManageEvent;