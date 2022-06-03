import React from 'react';

import SkillsCard from "../../SkillsCard";
import { SiReactrouter } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { CgFormatSeparator } from "react-icons/cg";
import { TbBrandFirebase } from "react-icons/tb";
import SkillsBox from '../../SkillsBox';
const ReactTools = () => {
    return (
      <SkillsBox  id="tools">
        <SkillsCard
          title={"React Router"}
          text={
            "I Know React Router. v6 .React Router keeps ui in sync with the url"
          }
          icon={<SiReactrouter />}
        />
        <SkillsCard
          title={"React Query"}
          text={
            "I Know React Query.  React Query makes fetching,caching,synchronizing and updating server state in in react applications a breeze. "
          }
          icon={<RiReactjsLine />}
        />
        <SkillsCard
          title={"React Hook Form"}
          text={
            "React Hook Form is a library that helps you validate forms in React. It is a minimal library without any other dependencies, "
          }
          icon={<CgFormatSeparator />}
        />
        <SkillsCard
          title={"React Firebase Hooks"}
          text={
            "This library explores how React Hooks can work to make integration with Firebase even more straightforward than it already is"
          }
          icon={<TbBrandFirebase />}
        />
      </SkillsBox>
    );
};

export default ReactTools;