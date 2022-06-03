
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
          title={"Figma"}
          text={
            "Figma is a powerful design tool that helps you to create anything: websites, applications, logos, and much more."
          }
          icon={<AiFillHtml5 />}
        />
        <SkillsCard
          title={"InDesign"}
          text={
            "Adobe InDesign is the industry-leading layout and page design software for print and digital media."
          }
          icon={<SiCsswizardry />}
        />

        <SkillsCard
          title={"Illustrator"}
          text={
            "Adobe Illustrator is the industry standard design app that lets you capture your creative vision with shapes, color, effects, and typography"
          }
          icon={<DiNodejsSmall />}
        />
        <SkillsCard
          title={"Photoshop"}
          text={
            "Adobe Photoshop is an imaging and graphic design software used by thousands of people in many different roles across the world."
          }
          icon={<DiNodejsSmall />}
        />
        <SkillsCard
          title={"Premier Pro"}
          text={
            "Premiere Pro is used for editing videos, commercials and other film, television, and online video."
          }
          icon={<DiNodejsSmall />}
        />
      </SkillsBox>
    );
};

export default Basics;