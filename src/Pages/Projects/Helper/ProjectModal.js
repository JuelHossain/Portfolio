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
  children,
  ...props
}) => {
  return (
    <Modal
      {...props}
      isCentered
      isOpen={isOpen}
      onClose={() => {
        reset();
        onClose(true);
      }}
      autoFocus
      closeOnEsc
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
          <Button onClick={execute}>{footer}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
