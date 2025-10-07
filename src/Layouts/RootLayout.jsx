import React from 'react';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            {/* main / root layout */}
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootLayout;