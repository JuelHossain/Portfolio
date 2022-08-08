import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Nav from "./Nav";

const Header = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <Box
      as="header"
      className="sticky top-0 z-40 bg-zinc-50 dark:bg-zinc-900 py-3"
    >
      <Container maxW={"container.lg"}>
        <Flex gap={4} justify="space-between">
          <Center>
            <Heading
              as="a"
              href="/"
              id="logo"
              size="lg"
              className="text-zinc-900 dark:text-zinc-100 truncate"
            >
              Juel Hossain
            </Heading>
          </Center>
          <Nav />
          <HStack>
            <IconButton
              as={Link}
              isExternal
              href="https://github.com/juelhossain"
              size={"sm"}
              icon={<AiFillGithub />}
              className="hover:bg-yellow-400 shadow hover:shadow-md font-bold rounded-full dark:bg-gray-700 dark:text-white"
            ></IconButton>
            <IconButton
              as={Link}
              isExternal
              href="https://linkedin.com/in/juelhossainnn"
              size={"sm"}
              icon={<AiFillLinkedin />}
              className="hover:bg-yellow-400 shadow hover:shadow-md font-bold rounded-full dark:bg-gray-700 dark:text-white"
            ></IconButton>
            <IconButton
              onClick={() => {
                setDark(!dark);
              }}
              size={"sm"}
              icon={<MoonIcon />}
              className="hover:bg-yellow-400 shadow hover:shadow-md font-bold rounded-full dark:bg-gray-700 dark:text-white"
            ></IconButton>
          </HStack>
        </Flex>
      </Container>
      {/* {small && (
        <Container maxW={"container.lg"}>
          <Center gap={4} justify="space-between">
            {small && <Nav small={small} />}
          </Center>
        </Container>
      )} */}
    </Box>
  );
};

export default Header;
