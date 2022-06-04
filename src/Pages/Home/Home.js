import React from 'react';
import Contact from '../Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Banner from './Banner';
import SkillsOverView from './SkillsOverView';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <SkillsOverView />
            <Projects home={true} size={2} />
            <Contact/>
        </div>
    );
};

export default Home;