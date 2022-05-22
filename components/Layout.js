import React from 'react';
import Footer from './Footer';
import TopNav from './TopNav';



const Layout = ({ children }) => {
    return (
        <>
            <TopNav labels={['Home', 'Encrypt Your Data', 'About PGP', 'Who needs PGP?', 'Donate']}/>
            <main>{ children }</main>
            <Footer name='Ryan Speciale'/>
        </>
    );
};

export default Layout;