
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
          title={"WEb Driver Io"}
          text={
            " Web Driver I o is Next-gen browser and mobile automation test framework for Node.js. I use Webdriver Io to Automate website and mobile applications"
          }
          icon={<AiFillHtml5 />}
        />
        <SkillsCard
          title={"Appium 2.0"}
          text={
            "Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms."
          }
          icon={<SiCsswizardry />}
        />

        <SkillsCard
          title={"PostMan"}
          text={
            "Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface"
          }
          icon={<DiNodejsSmall />}
        />
        <SkillsCard
          title={"Jenkins"}
          text={
            "The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project."
          }
          icon={<DiNodejsSmall />}
        />
      </SkillsBox>
    );
};

export default Basics;