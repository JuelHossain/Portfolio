import {
  Button,
  Center,
  FormControl,
  FormLabel,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "postcss";
import { FaEdit, FaGraduationCap, FaTrash } from "react-icons/fa";
import Loading from "../../Components/Loading";
import useAdmin from "../../Hooks/useAdmin";
import useInfo from "../../Hooks/useInfo";
import InfoPopup from "./Helper/InfoPopup";
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
      <span className="flex-shrink-0 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg">
        <FaGraduationCap className="text-xl" />
      </span>

      <div className="ml-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <hr className="border-red-300" />
        <InfoPopup id={id} />
        <p className="mt-1 text-sm ">{grade}</p>
        <p className="mt-1 text-sm ">{duration}</p>
      </div>
      {status && (
        <div className="flex gap-4 absolute right-5 bottom-1">
          <button>
            <FaTrash />
          </button>
          <IconButton icon={<FaEdit />} onClick={onOpen} />
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
               {/* // modal content will be here  */}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
