import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import Footer from './../components/shared/footer/Footer';

const Root = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login')||
    location.pathname.includes('signUp');
    
    return (
        <div>
            {isLogin ||  <Navbar/>}
            <Outlet/>
           {isLogin || <Footer/>}
        </div>
    );
};

export default Root;