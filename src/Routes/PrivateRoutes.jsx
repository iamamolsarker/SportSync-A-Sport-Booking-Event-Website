import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';
import LoaderAnimation from '../Components/LoaderAnimation';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <LoaderAnimation></LoaderAnimation>
    }

    if(!user){
        return <Navigate to="/login" state={location.pathname}/>
    }
    return children;
};

export default PrivateRoutes;