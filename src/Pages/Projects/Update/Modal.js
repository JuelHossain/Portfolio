import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import useProjects from "../../../Hooks/useProjects";
import imgbb from "./../../../utils/imgbb";
import ImageContent from "./ImageContent";
import TextContent from "./textContent";
export default function EditModal({ isOpen, onClose, id }) {
  const {
    project: { name, screenshot } = {},
    updateProject,
    refetch,
  } = useProjects(id);
  const { register, handleSubmit, reset, watch } = useForm();
  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={() => {
          reset();
          onClose(true);
        }}
        autoFocus
        closeOnEsc
        size={"4xl"}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Update {name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box className=" rounded relative  dark:bg-gray-800 flex md:h-[500px] shadow-md border flex-col md:flex-row dark:text-white">
              <ImageContent id={id} register={register} watch={watch} />
              <TextContent id={id} register={register} />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleSubmit(async (data) => {
                const image = data.screenshot[0];
                if (image) {
                  const imageURL = await imgbb(image);
                  if (imageURL) {
                    const { acknowledged } = await updateProject(id, {
                      ...data,
                      screenshot: imageURL,
                    });
                    if (acknowledged) {
                      onClose(true);
                      refetch();
                    }
                  }
                } else {
                  const { acknowledged } = await updateProject(id, {
                    ...data,
                    screenshot,
                  });
                  if (acknowledged) {
                    onClose(true);
                    refetch();
                  }
                }
              })}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
