
import React from 'react';
import SkillsCard from '../../SkillsCard'

import { AiFillHtml5 } from "react-icons/ai";
import { SiCsswizardry } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import SkillsBox from '../../SkillsBox';
const Basics = () => {
    return (
      <SkillsBox>
        <SkillsCard
          title={"Typing Speed"}
          text={
            "I Can Type 80+ word per minute speed. and I am trying to improve more"
          }
          icon={<AiFillHtml5 />}
        />
        <SkillsCard
          title={"Web Browsing"}
          text={
            "I can browse web faster. i know many useful shortcuts that help me to browse faster."
          }
          icon={<SiCsswizardry />}
        />
        
        <SkillsCard
          title={"Researching"}
          text={
            "when i don't know anything i don't hesitate to google it and do some research about it."
          }
          icon={<DiNodejsSmall />}
        />
        <SkillsCard
          title={"TroubleShooting"}
          text={
            "I know about all computer hardware also .so it doesn't matter its a hardware or software issue."
          }
          icon={<DiNodejsSmall />}
        />
      </SkillsBox>
    );
};

export default Basics;