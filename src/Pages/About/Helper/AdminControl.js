import { IconButton, useDisclosure } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteInfo } from "../../../Hooks/Helper/About";
import DeleteAlert from "../../Projects/Helper/DeleteAlert";
import Update from "../Update/Update";

export default function AdminControl({ id, refresh, cat }) {
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate,
  } = useDisclosure();

  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  return (
    <>
      
      <IconButton
        className="dark:bg-gray-900/10 dark:text-bg-gray-200 ring-0 dark:hover:bg-gray-900/50"
        icon={<FaEdit />}
        onClick={onOpenUpdate}
      />
      <IconButton
        className="dark:bg-gray-900/10 dark:text-bg-gray-200 ring-0 dark:hover:bg-gray-900/50"
        icon={<FaTrash />}
        onClick={onOpenDelete}
      />
      <DeleteAlert
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        id={id}
        exec={deleteInfo}
        refresh={refresh}
      />
      <Update id={id} isOpen={isOpenUpdate} onClose={onCloseUpdate} />
     
    </>
  );
}
