import React from 'react';
import Header from './../compoents/Header';
import Footer from '../compoents/Footer';

const MainLayout = props =>{
    return(
        <div>
            <Header />
            <div className='main'>
                { props.children }
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;