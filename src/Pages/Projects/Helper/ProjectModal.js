import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ProjectModal = ({
  isOpen,
  onClose,
  reset,
  header,
  footer,
  execute,
  handleSubmit,
  children,
}) => {
  return (
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
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit(execute)}>{footer}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
