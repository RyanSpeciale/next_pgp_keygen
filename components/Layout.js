import React from 'react';
import Footer from './Footer';
import TopNav from './TopNav';



const Layout = ({ children }) => {
    return (
        <>
            <TopNav labels={['Home', 'About Us', 'About PGP', 'Who needs PGP?', 'Contact']}/>
            <main>{ children }</main>
            <Footer name='Ryan Speciale'/>
        </>
    );
};

export default Layout;