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
            <button className="hover:bg-yellow-300 shadow hover:shadow-md font-bold px-3 py-1 rounded-full">
              <MoonIcon />
            </button>
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
