
import React from "react";
import SkillsCard from "../../SkillsCard";

import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import SkillsBox from "../../SkillsBox";
const Basics = ({ ...props }) => {
  return (
    <SkillsBox id='basics'>
      <SkillsCard
        title={"Html"}
        text={
          "I Know html5 all semantic tag and i know how to use it to improve the site seo"
        }
        icon={<AiFillHtml5 />}
      />
      <SkillsCard
        title={"Css"}
        text={
          "I Know Css3. I can design the whole website with only css. without any other css framework"
        }
        icon={<SiCsswizardry />}
      />
      <SkillsCard
        title={"JavaScript"}
        text={
          "I Know Vanilla Javascript. i have learned javascript from scratch . and i know all es6 syntax of javascript. "
        }
        icon={<SiJavascript />}
      />
      <SkillsCard
        title={"Node Js"}
        text={
          "I Know Node Js. Node js is nothing but a javascript run time environment in server side."
        }
        icon={<DiNodejsSmall />}
      />
    </SkillsBox>
  );
};

export default Basics;
