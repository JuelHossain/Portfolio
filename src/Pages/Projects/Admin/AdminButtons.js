import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { EditButton } from "../../../Components/Admin/Buttons";
import DeleteAlert from "../Helper/DeleteAlert";
import UpdateProject from "../Update/Update";
import { DeleteButton } from "./../../../Components/Admin/Buttons";
import useProjects from "./../../../Hooks/useProjects";

const AdminButtons = ({ id }) => {
  const { deleteProject, refetch } = useProjects();
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
      <DeleteButton onClick={onAlertOpen} />
      <EditButton onClick={onModalOpen} />
      <DeleteAlert
        isOpen={isAlertOpen}
        onClose={alertOnClose}
        id={id}
        exec={deleteProject}
        refetch={refetch}
      />
      <UpdateProject isOpen={isModalOpen} onClose={onModalClose} id={id} />
    </>
  );
};

export default AdminButtons;
