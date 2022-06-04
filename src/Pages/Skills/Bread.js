import React from 'react';
import { Tabs } from '@chakra-ui/react';
import { TabList } from '@chakra-ui/react';
import { Tab } from '@chakra-ui/react';
import { TabPanels } from '@chakra-ui/react';
import { TabPanel } from '@chakra-ui/react';


const Bread = ({tab1,tab2,tab3,tab4,el1,el2,el3,el4}) => {
    return (
      <Tabs className="">
        <TabList className="border-none  ">
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-100"
            }
          >
           {tab1}
          </Tab>
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-100"
            }
          >
            {tab2}
          </Tab>
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-100"
            }
          >
            {tab3}
          </Tab>
          <Tab
            className={
              "shadow hover:bg-indigo-600 hover:text-white focus:border-none outline-none border-none text-indigo-600 focus:text-white focus:bg-indigo-600 bg-gray-100"
            }
          >
            {tab4}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0} mt={3}>
            {el1}
          </TabPanel>
          <TabPanel p={0} mt={3}>
            {el2}
          </TabPanel>
          <TabPanel p={0} mt={3}>
            {el3}
          </TabPanel>
          <TabPanel p={0} mt={3}>
            {el4}
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
};

export default Bread;