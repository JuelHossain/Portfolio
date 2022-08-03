import { IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import CreateProject from "../CreateProject";

const CreateButton = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <>
      <IconButton
        onClick={onOpen}
        icon={<AiFillPlusCircle className="w-5 h-5" />}
        className="z-50 sticky p-2 left-full top-1/2 bg-slate-900 text-white ml-auto"
      />
      <CreateProject onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default CreateButton;
