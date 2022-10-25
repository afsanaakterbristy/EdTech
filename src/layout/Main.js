import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-3 gap-4 container mx-auto px-4">
                <div class="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2"> 
                    <Outlet></Outlet>
                </div>
        </div>  
        </div>
     
    );
};

export default Main;