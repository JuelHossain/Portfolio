import {
  Box,
  Button,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import testImage from "../../assets/screencapture-efruitsmanager-web-app-2022-06-04-14_10_08.png";
import useProjects from "../../Hooks/useProjects";
export default function EditModal({ isOpen, onClose, id }) {
  const [hover, setHover] = useState(false);
  const { project, projectLoading, refetch } = useProjects(id);
  const { screenshot, name, title, about, git, serverGit, liveSite } = project;
  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
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
              <Box
                className=" rounded-l md:h-full overflow-hidden md:w-1/2 h-60 sm:h-80 relative"
                onMouseOver={() => {
                  setHover(true);
                }}
                onMouseOut={() => {
                  setHover(false);
                }}
              >
                <Image
                  alt="screenshot"
                  className="object-top w-full "
                  src={testImage}
                />
                <div
                  class={`absolute top-0 justify-center items-center w-full h-full ${
                    hover ? "flex" : "hidden"
                  }`}
                >
                  <label
                    for="dropzone-file"
                    class="flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="mb-3 w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </Box>
              <Box className=" rounded shadow md:w-1/2 md:p-8 p-4 justify-between gap-5 flex flex-col">
                <VStack className="items-stretch gap-1">
                  <Heading size={"md"}>
                    <Editable defaultValue={name} className="">
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Heading>
                  <Heading size={"sm"}>
                    <Editable defaultValue={title} className="">
                      <EditablePreview />
                      <EditableInput className="" />
                    </Editable>
                  </Heading>
                  <Editable defaultValue={about} className="w-full">
                    <EditablePreview className="md:h-36 overflow-hidden" />
                    <EditableTextarea className="md:h-36 " />
                  </Editable>
                </VStack>
                <Divider />
                <Box>
                  <Heading
                    size="sm"
                    className="flex gap-2 items-center overflow-hidden py-2"
                  >
                    Git:
                    <Editable defaultValue={git} className="w-full">
                      <EditablePreview className="whitespace-nowrap" />
                      <EditableInput />
                    </Editable>
                  </Heading>
                  <Heading
                    size="sm"
                    className="flex gap-2 items-center overflow-hidden py-2"
                  >
                    Server:
                    <Editable defaultValue={serverGit} className="w-full">
                      <EditablePreview className="whitespace-nowrap" />
                      <EditableInput />
                    </Editable>
                  </Heading>
                  <Heading
                    size="sm"
                    className="flex gap-2 items-center overflow-hidden py-2"
                  >
                    LiveSite:
                    <Editable defaultValue={liveSite} className="w-full">
                      <EditablePreview className="whitespace-nowrap" />
                      <EditableInput />
                    </Editable>
                  </Heading>
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
