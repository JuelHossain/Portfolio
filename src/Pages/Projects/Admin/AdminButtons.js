import { useDisclosure } from "@chakra-ui/react";
import { EditButton } from "../../../Components/Admin/Buttons";
import { deleteProject } from "../../../Hooks/Helper/Projects";
import DeleteAlert from "../Helper/DeleteAlert";
import UpdateProject from "../Update/update";
import { DeleteButton } from "./../../../Components/Admin/Buttons";
import useProjects from "./../../../Hooks/useProjects";

const AdminButtons = ({ id }) => {
  const { refetch } = useProjects();
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
        refresh={refetch}
        exec={deleteProject}
      />
      <UpdateProject isOpen={isModalOpen} onClose={onModalClose} id={id} />
    </>
  );
};

export default AdminButtons;
