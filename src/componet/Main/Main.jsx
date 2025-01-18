import React from 'react';
import Nav from '../NavBar/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;