import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navi from './components/Navi';

function App() {
    return (
        <>
            <Navi />
            <Outlet />
        </>
    );
}

export default App;
