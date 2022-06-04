import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import SkillsBox from "./SkillsBox";
import SkillsCard from "./SkillsCard";


const Automation = () => {
  return (
    <div id="automation">
      <Heading size={"md"} className="my-6">
        Automation Skills .
      </Heading>
      <VStack>
        <SkillsBox>
          <SkillsCard
            title={"WEb Driver Io"}
            text={
              " Web Driver I o is Next-gen browser and mobile automation test framework for Node.js. I use Webdriver Io to Automate website and mobile applications"
            }
            cat={"Framework"}
          />
          <SkillsCard
            title={"Appium 2.0"}
            text={
              "Appium is an open-source tool for automating native, mobile web, and hybrid applications on iOS mobile, Android mobile, and Windows desktop platforms."
            }
            cat={"Tool"}
          />

          <SkillsCard
            title={"PostMan"}
            text={
              "Postman is an application used for API testing. It is an HTTP client that tests HTTP requests, utilizing a graphical user interface"
            }
            cat={"Api Tester"}
          />
          <SkillsCard
            title={"Jenkins"}
            text={
              "The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project."
            }
            cat={"Hosting"}
          />
        </SkillsBox>
      </VStack>
    </div>
  );
};

export default Automation;
