import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import SkillsCard from "./SkillsCard";
import SkillsBox from "./SkillsBox";

const Computer = () => {
  return (
    <div id="computer">
      <Heading size={"md"} className="my-6">
        Computer Skills.
      </Heading>
      <VStack>
        <SkillsBox>
          <SkillsCard
            title={"Gnu Linux"}
            text={
              "GNU/Linux is a Unix-like operating system made up of different OS components and services that create the Linux OS."
            }
            cat={"Operating System"}
          />
          <SkillsCard
            title={"Microsoft Excell"}
            text={
              "Microsoft Excel enables users to format, organize and calculate data in a spreadsheet."
            }
            cat={"Office"}
          />
          <SkillsCard
            title={"Microsoft Word"}
            text={
              "Microsoft Word is arguably the most popular word processor on the planet."
            }
            cat={"Office"}
          />
          <SkillsCard
            title={"Typing Speed"}
            text={
              "I Can Type 80+ word per minute speed. and I am trying to improve more"
            }
            cat={"Basic"}
          />
          <SkillsCard
            title={"Web Browsing"}
            text={
              "I can browse web faster. i know many useful shortcuts that help me to browse faster."
            }
            cat={"Basic"}
          />

          <SkillsCard
            title={"Researching"}
            text={
              "when i don't know anything i don't hesitate to google it and do some research about it."
            }
            cat={"Basic"}
          />
          <SkillsCard
            title={"TroubleShooting"}
            text={
              "I know about all computer hardware also .so it doesn't matter its a hardware or software issue."
            }
            cat={"Basic"}
          />
        </SkillsBox>
      </VStack>
    </div>
  );
};

export default Computer;
