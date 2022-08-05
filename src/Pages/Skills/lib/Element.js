import { Badge, Box, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { DeleteButton, EditButton } from "../../../Components/Admin/Buttons";
import { deleteSkill } from "../../../Hooks/Helper/Skills";
import DeleteAlert from "../../Projects/Helper/DeleteAlert";

export const TextContent = ({ title, about }) => {
  return (
    <Box>
      <Heading className="text-xl font-bold text-indigo-600 dark:text-violet-500 truncate">
        {title}
      </Heading>
      <Box className="pt-2 mt-4 border-t-2 border-indigo-100 dark:border-violet-100 ">
        <Text className="text-xs font-medium tracking-widest text-gray-500 ">
          {about}
        </Text>
      </Box>
    </Box>
  );
};
export const Tag = ({ tag }) => {
  return (
    <Badge
      variant="solid"
      colorScheme="green"
      className="absolute right-10 top-0"
    >
      {tag}
    </Badge>
  );
};
export const AdminControl = ({setEdit,id,refetch}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box className="inline-flex items-center mt-6 gap-2 text-indigo-600 hover:underline cursor-help ">
      <DeleteButton onClick={onOpen} />
      <EditButton
        onClick={() => {
          setEdit(true);
        }}
      />
      <DeleteAlert
        isOpen={isOpen}
        onClose={onClose}
        id={id}
        exec={deleteSkill}
        refresh={refetch}
      />
    </Box>
  );
};
