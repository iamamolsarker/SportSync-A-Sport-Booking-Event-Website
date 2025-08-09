import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    const {pathname} = useLocation();
    useEffect(()=> {
        window.scrollTo(0,0);
    },[pathname])
    return (
        <>
            <Header></Header>
            <div className='min-h-[calc(100vh-70px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;