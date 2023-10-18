import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navi from './components/Navi';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            {/*<Navi />*/}
            <Outlet />
        </>
    );
}

export default App;
