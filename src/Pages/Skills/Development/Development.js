import {  Heading, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";

import ReactTools from "./Child/ReactTools";
import Basics from "./Child/Basics";
import Frameworks from "./Child/Frameworks";
import Other from "./Child/Other";
const Development = () => {
  
  return (
    <div id="development">
      <Heading size={"md"} className={"mt-6 mb-2"}>
        Development Skills
      </Heading>

      <Tabs className="relative">
        <TabList className="border-none absolute bottom-0 right-0">
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-200"
            }
          >
            Basics
          </Tab>
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-200"
            }
          >
            Frameworks
          </Tab>
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-200"
            }
          >
            React Tools
          </Tab>
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-200"
            }
          >
            Others
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0} mt={3}>
            <Basics />
          </TabPanel>
          <TabPanel p={0} mt={3}>
            <Frameworks />
          </TabPanel>
          <TabPanel p={0} mt={3}>
            <ReactTools />
          </TabPanel>
          <TabPanel p={0} mt={3}>
            <Other />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Development;
