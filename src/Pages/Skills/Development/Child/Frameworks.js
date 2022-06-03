import React from "react";
import SkillsCard from "../../SkillsCard";
import { DiSass } from "react-icons/di";
import { SiTailwindcss, SiReact, SiExpress } from "react-icons/si";
import SkillsBox from "../../SkillsBox";
const Frameworks = () => {
  return (
   <SkillsBox>
        <SkillsCard
          title={"Sass"}
          text={
            "Sass is the most powerful professional grade css extension language in the world."
          }
          icon={<DiSass />}
        />
        <SkillsCard
          title={"Tailwind Css"}
          text={
            "Tailwind CSS is  a utility-first CSS framework for rapidly building custom user interfaces."
          }
          icon={<SiTailwindcss />}
        />
        <SkillsCard
          title={"Express Js"}
          text={
            "Express is a minimal and flexible Node.js web application framework  "
          }
          icon={<SiExpress />}
        />
        <SkillsCard
          title={"React Js"}
          text={
            "React JS is a JavaScript library used in web development to build interactive elements on websites.  "
          }
          icon={<SiReact />}
        />
</SkillsBox>
  );
};

export default Frameworks;
