import { ChevronDownIcon, ChevronRightIcon, HamburgerIcon, MoonIcon, SearchIcon, SmallAddIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Container, DarkMode, Flex, Heading, HStack, IconButton, } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const pages = ["Home", "Blog", "About",]
  const[small, setSmall] = useState(false);
  return (
    <Box as="header" my={2} bg="white" p={1}>
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
            <Heading size="lg">Juel Hossain</Heading>
          </Center>
          <HStack display={["none", "none", "flex"]}>
            {pages.map((page) => (
              <Button
                as={NavLink}
                to={`/${page}`}
                variant={"ghost"}
                _focus={{ border: "none" }}
              >
                {page}
              </Button>
            ))}
          </HStack>
          <HStack>
            <IconButton
              _focus={{ border: "none" }}
              variant={"ghost"}
              icon={<MoonIcon />}
            />
          </HStack>
        </Flex>
      </Container>
      {small&&<Container maxW={"container.lg"}>
        <Center gap={4} justify="space-between">
          <HStack display={["flex", "flex", "none"]}>
            {pages.map((page) => (
              <Button
                as={NavLink}
                to={`/${page}`}
                variant={"ghost"}
                _focus={{ border: "none" }}
              >
                {page}
              </Button>
            ))}
          </HStack>

        </Center>
      </Container>}
    </Box>
  );
};

export default Header;