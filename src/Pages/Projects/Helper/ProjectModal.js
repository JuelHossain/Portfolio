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
      <ModalContent className="dark:bg-gray-900 dark:text-gray-200">
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button className="dark:bg-gray-700" onClick={execute}>{footer}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
