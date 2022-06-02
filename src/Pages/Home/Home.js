import React from 'react';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Skills/>
        </div>
    );
};

export default Home;