import { IconButton, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import DeleteAlert from "../Helper/DeleteAlert";
import UpdateProject from "../Update/Update";

const AdminButtons = ({ id }) => {
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
      <DeleteAlert isOpen={isAlertOpen} onClose={alertOnClose} id={id} />
      <UpdateProject isOpen={isModalOpen} onClose={onModalClose} id={id} />
    </>
  );
};

export default AdminButtons;
