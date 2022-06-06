import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import {  Image, VStack, Heading, Text, IconButton, HStack, Button, Box, Divider} from "@chakra-ui/react";
const ProjectsCard = ({ name, title, about, screen, git, live, server }) => {
    
    return (
      <Box  className=" rounded relative block ">
        <Box className=" rounded h-96 sm:h-72 md:h-60 overflow-auto">
          <Image
            alt="screenshot"
            className=" object-cover object-top w-full "
            src={screen}
          />
        </Box>

        <Box className=" rounded shadow">
          <VStack className="items-start my-5 pl-4">
            <Heading size={"md"}> {name}</Heading>
            <Heading  size={"sm"}> {title}</Heading>
            <Text className="h-32 overflow-auto">{about}</Text>
          </VStack>
          <Divider />
          <HStack className="justify-between">
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