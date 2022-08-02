import {
  Box,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useProjects from "./../../../Hooks/useProjects";

const TextContent = ({ id, register }) => {
  const {
    project: { name, title, about, git, serverGit, liveSite } = {},
    projectLoading,
  } = useProjects(id);

  if (projectLoading) {
    return "Loading";
  }
  return (
    <Box className=" rounded shadow md:w-1/2 md:p-8 p-4 justify-between gap-5 flex flex-col">
      <VStack className="items-stretch gap-1">
        <Heading size={"md"}>
          <Editable defaultValue={name} className="">
            <EditablePreview />
            <EditableInput {...register("name")} />
          </Editable>
        </Heading>
        <Heading size={"sm"}>
          <Editable defaultValue={title} className="">
            <EditablePreview />
            <EditableInput {...register("title")} />
          </Editable>
        </Heading>
        <Editable defaultValue={about} className="w-full">
          <EditablePreview className="md:h-36 overflow-hidden" />
          <EditableTextarea className="md:h-36 " {...register("about")} />
        </Editable>
      </VStack>
      <Divider />
      <Box>
        <Heading
          size="sm"
          className="flex gap-2 items-center overflow-hidden py-2"
        >
          <p>Git:</p>
          <Editable
            defaultValue={git}
            className="w-full"
            placeholder="Github link"
          >
            <EditablePreview className="whitespace-nowrap" />
            <EditableInput {...register("git")} />
          </Editable>
        </Heading>
        <Heading
          size="sm"
          className="flex gap-2 items-center overflow-hidden py-2"
        >
          <p className="whitespace-nowrap">Server Git:</p>
          <Editable
            defaultValue={serverGit}
            className="w-full"
            placeholder="Server Github Link"
          >
            <EditablePreview className="whitespace-nowrap" />
            <EditableInput {...register("serverGit")} />
          </Editable>
        </Heading>
        <Heading
          size="sm"
          className="flex gap-2 items-center overflow-hidden py-2"
        >
          <p className="whitespace-nowrap">Live Site:</p>

          <Editable
            defaultValue={liveSite}
            className="w-full"
            placeholder="Live Site Link"
          >
            <EditablePreview className="whitespace-nowrap" />
            <EditableInput {...register("liveSite")} />
          </Editable>
        </Heading>
      </Box>
    </Box>
  );
};

export default TextContent;
