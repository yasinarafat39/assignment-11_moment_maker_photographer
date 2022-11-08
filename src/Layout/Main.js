import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Pages/shared/Navbar/Navbar';
import Footer from '../components/Pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;