import { Badge, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { deleteSkill } from "../../Hooks/Helper/Skills";
import { DeleteButton } from "./../../Components/Admin/Buttons";
import useAdmin from "./../../Hooks/useAdmin";
import DeleteAlert from "./../Projects/Helper/DeleteAlert";

const SkillsCard = ({ id, title, about, icon, tag, refetch }) => {
  const { status } = useAdmin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex flex-col justify-between p-8 transition-shadow bg-zinc-50 dark:bg-gray-800 rounded-sm shadow group hover:bg-indigo-200 relative dark:shadow-gray-700 dark:hover:bg-gray-900">
      <div>
        <h5 className="text-xl font-bold text-indigo-600 dark:text-violet-500 truncate">
          {title}
        </h5>
        <div className="pt-2 mt-4 border-t-2 border-indigo-100 dark:border-violet-100 ">
          <p className="text-xs font-medium tracking-widest text-gray-500 ">
            {about}
          </p>
        </div>
      </div>
      <Badge
        variant="solid"
        colorScheme="green"
        className="absolute right-10 top-0"
      >
        {tag}
      </Badge>
      {status && (
        <div className="inline-flex items-center mt-6 gap-2 text-indigo-600 hover:underline cursor-help ">
          <DeleteButton onClick={onOpen} />
          <DeleteAlert
            isOpen={isOpen}
            onClose={onClose}
            id={id}
            exec={deleteSkill}
            refetch={refetch}
          />
        </div>
      )}
    </div>
  );
};

export default SkillsCard;
