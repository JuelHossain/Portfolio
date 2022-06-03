import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import SkillsOverView from './SkillsOverView';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <SkillsOverView/>
        </div>
    );
};

export default Home;