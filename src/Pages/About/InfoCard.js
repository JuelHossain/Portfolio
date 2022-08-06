import { Center, IconButton, useDisclosure } from "@chakra-ui/react";
import { FaEdit, FaGraduationCap, FaTrash } from "react-icons/fa";
import Loading from "../../Components/Loading";
import useAdmin from "../../Hooks/useAdmin";
import useInfo from "../../Hooks/useInfo";
import InfoPopup from "./Helper/InfoPopup";
import Update from "./Update/Update";
const InfoCard = ({ id }) => {
  const { info: { title, grade, duration } = {}, loading } = useInfo(id);
  const { status } = useAdmin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (loading) {
    return (
      <Center className="relative">
        <Loading />
      </Center>
    );
  }
  return (
    <div className="flex items-start relative ">
      <div className="flex flex-col items-center">
        <IconButton icon={<FaGraduationCap className="text-xl" />} />
        {status && (
          <>
            <IconButton icon={<FaEdit />} onClick={onOpen} />
            <IconButton icon={<FaTrash />} />
          </>
        )}
      </div>

      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <hr className="border-red-300" />
        <InfoPopup id={id} />
        <p className="mt-1 text-sm ">{grade}</p>
        <p className="mt-1 text-sm ">{duration}</p>
      </div>
      <Update id={id} isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default InfoCard;
