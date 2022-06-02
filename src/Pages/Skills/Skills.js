import React from 'react';
import { Container,  Heading,  HStack } from '@chakra-ui/react';
import { Outlet,NavLink } from 'react-router-dom';

const Skills = () => {
    return (
      <Container maxW={"container.lg"} my="6">
        <Heading py={6} size={"md"}>
          What I Know ?
        </Heading>
        <HStack className="border-b mb-2 pb-2 border-indigo-400">
          <NavLink
            to="basics"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-600 text-stone-200 shadow-md font-bold px-3 py-1 "
                : "hover:bg-indigo-600 hover:text-stone-200 shadow hover:shadow-md font-bold px-3 py-1 "
            }
          >
            Basics
          </NavLink>
          <NavLink
            to="Development"
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-600 text-stone-200 shadow-md font-bold px-3 py-1 "
                : "hover:bg-indigo-600 hover:text-stone-200 shadow hover:shadow-md font-bold px-3 py-1 "
            }
          >
            Development
          </NavLink>
        </HStack>
        <Outlet />
      </Container>
    );
};

export default Skills;