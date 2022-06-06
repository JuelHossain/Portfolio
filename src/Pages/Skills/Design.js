import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import SkillsBox from "./SkillsBox";
import SkillsCard from "./SkillsCard";



const Design = () => {
  return (
    <div id="design">
      <Heading size={"md"} className="my-6">
        Design Skills.
      </Heading>
      <VStack>
        <SkillsBox>
          <SkillsCard
            title={"Figma"}
            text={
              "Figma is a powerful design tool that helps you to create anything: websites, applications, logos, and much more."
            }
            cat={"Web"}
          />
          <SkillsCard
            title={"InDesign"}
            text={
              "Adobe InDesign is the industry-leading layout and page design software for print and digital media."
            }
            cat={"UI Design"}
          />

          <SkillsCard
            title={"Illustrator"}
            text={
              "Adobe Illustrator is the industry standard design app that lets you capture your creative vision with shapes, color, effects, and typography"
            }
            cat={"Vector "}
          />
          <SkillsCard
            title={"Photoshop"}
            text={
              "Adobe Photoshop is an imaging and graphic design software used by thousands of people in many different roles across the world."
            }
            cat={"Image"}
          />
          <SkillsCard
            title={"Premier Pro"}
            text={
              "Premiere Pro is used for editing videos, commercials and other film, television, and online video."
            }
            cat={"Video"}
          />
        </SkillsBox>
      </VStack>
    </div>
  );
};

export default Design;
