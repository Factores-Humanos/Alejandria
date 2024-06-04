import React from 'react';
import { Outlet } from 'react-router-dom';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

import NavBar from '../../users/NavBar/NavBar';
import Footer from '../../users/Footer/Footer';

const Layout = () => {
    const auth = useAuthUser();
    return (
        <>
            <NavBar isLoggedIn={auth != null ? true : false} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
