import { HamburgerIcon, MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Nav from "./Nav";
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Header = () => {
  const [small, setSmall] = useState(false);
  return (
    <Box as="header" my={2} bg="white" p={1} className="sticky top-0 z-40">
      <Container maxW={"container.lg"}>
        <Flex gap={4} justify="space-between">
          <IconButton
            onClick={() => {
              setSmall(!small);
            }}
            _focus={{ border: "none" }}
            display={["block", "block", "none"]}
            variant={"ghost"}
            icon={<HamburgerIcon />}
          />
          <Center>
            <Heading id="logo" ml={2} size="md">
              Juel Hossain
            </Heading>
          </Center>
          {!small && <Nav small={small} />}
          <HStack>
            <IconButton
              as={"a"}
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/juelhossain"
              size={"sm"}
              icon={<AiFillGithub />}
              className="hover:bg-yellow-300 shadow hover:shadow-md font-bold rounded-full"
            ></IconButton>
            <IconButton
              as={"a"}
              rel="noreferrer"
              href="https://linkedin.com/in/juelhossainnn"
              size={"sm"}
              icon={<AiFillLinkedin />}
              className="hover:bg-yellow-300 shadow hover:shadow-md font-bold rounded-full"
            ></IconButton>
            <IconButton
              size={"sm"}
              icon={<MoonIcon />}
              className="hover:bg-yellow-300 shadow hover:shadow-md font-bold rounded-full"
            ></IconButton>
          </HStack>
        </Flex>
      </Container>
      {small && (
        <Container maxW={"container.lg"}>
          <Center gap={4} justify="space-between">
            {small && <Nav small={small} />}
          </Center>
        </Container>
      )}
    </Box>
  );
};

export default Header;
