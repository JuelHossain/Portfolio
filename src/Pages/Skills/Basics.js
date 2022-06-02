import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import SkillsCard from './SkillsCard';;
const Basics = () => {
    return (
      <div>
        <SimpleGrid columns={[2, 3, 4, 6]} spacing="2">
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
            icon={<TbBrandCss3 />}
          />
          <SkillsCard
            title={"Javacript"}
            text={
              "I Know Vanilla Javascript. i have learned javascript from scratch . and i know all es6 syntax of javascript. "
            }
            icon={<IoLogoJavascript />}
          />
        </SimpleGrid>
      </div>
    );
};

export default Basics;