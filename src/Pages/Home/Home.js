import React from 'react';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Banner from './Banner';
import SkillsOverView from './SkillsOverView';

const Home = () => {
    return (
        <div className="flex flex-col gap-10 md:gap-20 sm:my-10 md:my-20">
            <Banner />
            <SkillsOverView />
            <Services />
            <Projects home={true} size={2} />
            <Contact />
        </div>
    );
};

export default Home;