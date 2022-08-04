import { Badge, Box, Heading, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { deleteSkill } from "../../Hooks/Helper/Skills";
import { DeleteButton, EditButton } from "./../../Components/Admin/Buttons";
import useAdmin from "./../../Hooks/useAdmin";
import DeleteAlert from "./../Projects/Helper/DeleteAlert";
import { CardContainer } from "./lib/Containers";
import UpdateCard from "./Update/UpdateCard";

const SkillsCard = ({ id, title, about, icon, tag, refetch }) => {
  const { status } = useAdmin();
  const [edit, setEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  if (edit && status) {
    return <UpdateCard setEdit={setEdit} id={id} />;
  }
  return (
    <CardContainer>
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
      <Badge
        variant="solid"
        colorScheme="green"
        className="absolute right-10 top-0"
      >
        {tag}
      </Badge>
      {status && (
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
            refetch={refetch}
          />
        </Box>
      )}
    </CardContainer>
  );
};

export default SkillsCard;
