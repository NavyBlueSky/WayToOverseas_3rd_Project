import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navi from './components/Navi';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            {/*<Navi />*/}
            <Outlet />
        </>
    );
}

export default App;
