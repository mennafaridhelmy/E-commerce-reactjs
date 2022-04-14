import React from 'react';
import Header from './../compoents/Header';
import Footer from '../compoents/Footer';

const HomepageLayout = props =>{
    return(
        <div className='fullHeight'>
            <Header />
            { props.children }
            <Footer />
        </div>
    );
};

export default HomepageLayout;