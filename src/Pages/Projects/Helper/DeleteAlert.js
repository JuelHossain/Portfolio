import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

export default function DeleteAlert({ isOpen, onClose, id, exec, refresh }) {
  const cancelRef = useRef();
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Are You Sure?
            </AlertDialogHeader>

            <AlertDialogBody>
              You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button className="dark:bg-gray-700" ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  await exec(id);
                  refresh();
                  onClose(true);
                }}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
