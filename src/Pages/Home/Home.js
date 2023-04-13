import React from "react";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Banner from "./Banner";
import Certification from "./Certification";
import SkillsOverView from "./SkillsOverView";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10 my-5 md:my-10">
      <Banner />
      {/* <Certification /> */}
      <SkillsOverView />
      {/* <Services /> */}
      <Projects home={true} size={2} />
      <Contact />
    </div>
  );
};

export default Home;
