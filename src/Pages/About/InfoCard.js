import { Center, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaEdit, FaGraduationCap, FaPlus, FaTrash } from "react-icons/fa";
import Loading from "../../Components/Loading";
import { deleteInfo } from "../../Hooks/Helper/About";
import useAdmin from "../../Hooks/useAdmin";
import useInfo from "../../Hooks/useInfo";
import DeleteAlert from "../Projects/Helper/DeleteAlert";
import Create from "./Helper/Create";
import InfoPopup from "./Helper/InfoPopup";
import Update from "./Update/Update";
const InfoCard = ({ id, refresh }) => {
  const { info: { title, grade, duration, cat } = {}, loading } = useInfo(id);
  const { status } = useAdmin();
  const {
    isOpen: isOpenUpdate,
    onOpen: onOpenUpdate,
    onClose: onCloseUpdate,
  } = useDisclosure();
  const {
    isOpen: isOpenCreate,
    onOpen: onOpenCreate,
    onClose: onCloseCreate,
  } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  if (loading) {
    return (
      <Center className="relative">
        <Loading />
      </Center>
    );
  }
  return (
    <div className="flex items-start relative ">
      <div className="flex flex-col items-center gap-2">
        {status ? (
          <>
            <IconButton icon={<FaPlus />} onClick={onOpenCreate} />
            <IconButton icon={<FaEdit />} onClick={onOpenUpdate} />
            <IconButton icon={<FaTrash />} onClick={onOpenDelete} />
          </>
        ) : (
          <IconButton icon={<FaGraduationCap className="text-xl" />} />
        )}
      </div>

      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <hr className="border-red-300" />
        <InfoPopup id={id} />
        <p className="mt-1 text-sm ">{grade}</p>
        <p className="mt-1 text-sm ">{duration}</p>
      </div>
      <DeleteAlert
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        id={id}
        exec={deleteInfo}
        refresh={refresh}
      />
      <Update id={id} isOpen={isOpenUpdate} onClose={onCloseUpdate} />
      <Create
        cat={cat}
        isOpen={isOpenCreate}
        onClose={onCloseCreate}
        refetch={refresh}
      />
    </div>
  );
};

export default InfoCard;
