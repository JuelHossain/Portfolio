import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {  Image, VStack, Heading, Text, IconButton, HStack, Button, Box, Divider} from "@chakra-ui/react";
const ProjectsCard = ({ name, title, about, screen, git, live, server }) => {
    
    return (
      <Box  className=" rounded relative  dark:bg-gray-800 flex md:h-96 shadow-md border flex-col md:flex-row">
        <Box className=" rounded-l md:h-full hover:overflow-auto overflow-hidden md:flex-1 md:basis-1/2 h-60 sm:h-80">
          <Image
            alt="screenshot"
            className="object-top w-full "
            src={screen}
          />
        </Box>

        <Box className=" rounded shadow md:flex-1 md:basis-1/2 md:p-10 p-4 justify-between gap-5 flex flex-col">
          <VStack className="items-start gap-1">
            <Heading size={"md"}> {name}</Heading>
            <Heading  size={"sm"}> {title}</Heading>
            <Text className="md:h-36 hover:overflow-auto text-clip overflow-hidden">{about}</Text>
          </VStack>
          <Divider />
          <HStack className="">
            <HStack>
              {" "}
              <IconButton
                as={"a"}
                href={git}
                target={"_blank"}
                icon={<AiFillGithub />}
                className="bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700 "
              />
             {server&& <Button
                leftIcon={<AiFillGithub />}
                className="bg-white shadow  hover:bg-stone-900 hover:text-white dark:bg-gray-700"
                as={"a"}
                href={server}
              >
                Server
              </Button>}
            </HStack>
            <Button
              className="bg-white shadow hover:bg-red-500 hover:text-white dark:bg-gray-700"
              as={"a"}
              href={live}
            >
              Live Site
            </Button>
          </HStack>
        </Box>
      </Box>
    );
};

export default ProjectsCard;