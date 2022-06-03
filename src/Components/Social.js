import { Center, HStack, IconButton, VStack } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import React from "react";

const Social = () => {
  return (
    <Center>
      <HStack>
        <a
          className="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="https://github.com/juelhossain"
        >
          <span className="sr-only"> Github </span>
          <AiFillGithub />
        </a>
        <a
          className="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="https://github.com/juelhossain"
        >
          <span className="sr-only"> LinkedIn </span>
          <AiFillLinkedin />
        </a>
        <a
          className="inline-block p-3 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
          href="https://github.com/juelhossain"
        >
          <span className="sr-only"> Facbook </span>
          <AiFillFacebook />
        </a>
      </HStack>
    </Center>
  );
};

export default Social;
