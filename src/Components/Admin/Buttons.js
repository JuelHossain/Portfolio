import { IconButton } from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
export const DeleteButton = ({ ...props }) => {
  return (
    <IconButton
      {...props}
      icon={<AiFillDelete />}
      className="bg-white shadow hover:bg-red-700 hover:text-white dark:bg-red-700 dark:hover:bg-black "
    />
  );
};
export const EditButton = ({ ...props }) => {
  return (
    <IconButton
      {...props}
      icon={<BiEditAlt />}
      className="bg-white shadow hover:bg-blue-700 hover:text-white dark:bg-blue-700 dark:hover:bg-black "
    />
  );
};
