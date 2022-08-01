import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillDelete, AiFillGithub } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { CgMediaLive } from "react-icons/cg";
import useAdmin from "./../../Hooks/useAdmin";
import Alert from "./Alert";
import EditModal from "./Modal";
const ProjectsCard = ({
  name,
  title,
  about,
  screen,
  git,
  live,
  server,
  id,
}) => {
  const { status } = useAdmin();
  const {
    onOpen: onAlertOpen,
    isOpen: isAlertOpen,
    onClose: alertOnClose,
  } = useDisclosure();
  const {
    onOpen: onModalOpen,
    isOpen: isModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  return (
    <Box className=" rounded relative  dark:bg-gray-800 flex md:h-96 shadow-md border flex-col md:flex-row ">
      <Box className=" rounded-l md:h-full hover:overflow-auto overflow-hidden md:flex-1 md:basis-1/2 h-60 sm:h-80">
        <Image alt="screenshot" className="object-top w-full " src={screen} />
      </Box>

      <Box className=" rounded shadow md:flex-1 md:basis-1/2 md:p-10 p-4 justify-between gap-5 flex flex-col">
        <VStack className="items-start gap-1">
          <Heading size={"md"}> {name}</Heading>
          <Heading size={"sm"}> {title}</Heading>
          <Text className="md:h-36 hover:overflow-auto text-clip overflow-hidden">
            {about}
          </Text>
        </VStack>
        <Divider />
        <HStack className="">
          <IconButton
            as={"a"}
            href={git}
            target={"_blank"}
            icon={<AiFillGithub />}
            className="bg-white shadow hover:bg-stone-900 hover:text-white dark:bg-gray-700 dark:hover:bg-black "
          />
          {server && (
            <Button
              leftIcon={<AiFillGithub />}
              className="bg-white shadow  hover:bg-stone-900 dark:hover:bg-black  hover:text-white dark:bg-gray-700"
              as={"a"}
              href={server}
            >
              Server
            </Button>
          )}
          <Button
            className="bg-white shadow dark:hover:bg-red-500 hover:bg-red-500 hover:text-white dark:bg-gray-700"
            as={"a"}
            href={live}
            leftIcon={<CgMediaLive />}
          >
            Live Site
          </Button>
        </HStack>
        <HStack className="absolute right-5 top-5">
          {status && (
            <>
              <IconButton
                onClick={onAlertOpen}
                icon={<AiFillDelete />}
                className="bg-white shadow hover:bg-red-700 hover:text-white dark:bg-red-700 dark:hover:bg-black "
              />
              <IconButton
                onClick={onModalOpen}
                icon={<BiEditAlt />}
                className="bg-white shadow hover:bg-blue-700 hover:text-white dark:bg-blue-700 dark:hover:bg-black "
              />
              <Alert isOpen={isAlertOpen} onClose={alertOnClose} id={id} />
              <EditModal isOpen={isModalOpen} onClose={onModalClose} id={id} />
            </>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectsCard;
