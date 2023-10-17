import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AirlineSearch from './pages/AirlineSearch';
import Exchange from './pages/Exchange';
import NotFound from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Home /> },
            { path: '/airline', element: <AirlineSearch /> },
            { path: '/exchange', element: <Exchange /> },
        ],
    },
]);

root.render(<RouterProvider router={router} />);

reportWebVitals();
