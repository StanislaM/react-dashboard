import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/Home/Home';

import './App.scss';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import Product from './pages/Product/Product';

const App = () => {
    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div className="container">
                    <div className="menuContainer">
                        <Menu />
                    </div>
                    <div className="contentContainer">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: 'users',
                    element: <Users />,
                },
                {
                    path: 'products',
                    element: <Products />,
                },
                {
                    path: 'users/:id',
                    element: <User />,
                },
                {
                    path: 'products/:id',
                    element: <Product />,
                },
            ],
        },
        {
            path: 'login',
            element: <Login />,
        },
    ]);

    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
