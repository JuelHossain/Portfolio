import { CloseIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { deleteSkill, updateSkill } from "../../Hooks/Helper/Skills";
import { DeleteButton, EditButton } from "./../../Components/Admin/Buttons";
import useAdmin from "./../../Hooks/useAdmin";
import DeleteAlert from "./../Projects/Helper/DeleteAlert";

const SkillsCard = ({ id, title, about, icon, tag, refetch }) => {
  const { status } = useAdmin();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [edit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  if (edit && status) {
    return (
      <Box className="flex flex-col justify-between p-8 transition-shadow bg-zinc-50 dark:bg-gray-800 rounded-sm shadow group hover:bg-indigo-200 relative dark:shadow-gray-700 dark:hover:bg-gray-900">
        <FormControl>
          <Tooltip
            isOpen={errors?.title}
            label={errors?.title?.message}
            hasArrow
            placement="top-start"
            bg="red.600"
            className="capitalize"
          >
            <Input
              {...register("title", {
                required: "Title is required",
              })}
              placeholder={"Title"}
              defaultValue={title}
              className="text-xl font-bold text-indigo-600 dark:text-violet-500 truncate border-none"
            />
          </Tooltip>
        </FormControl>
        <FormControl className="pt-2 border-t-2 border-indigo-100 dark:border-violet-100 ">
          <Tooltip
            isOpen={errors?.about}
            label={errors?.about?.message}
            hasArrow
            placement="top-end"
            bg="red.600"
            className="capitalize"
          >
            <Textarea
              {...register("about", { required: "About Cannot be empty" })}
              placeholder={"About The Skill"}
              defaultValue={about}
              className="text-xs font-medium tracking-widest text-gray-500 resize-none"
            />
          </Tooltip>
        </FormControl>
        <Tooltip
          isOpen={errors?.tag}
          label={errors?.tag?.message}
          hasArrow
          placement="top-end"
          bg="red.600"
          className="capitalize"
        >
          <Badge
            {...register("tag", { required: "Tag Cannot be empty" })}
            as={"input"}
            variant="solid"
            colorScheme="green"
            defaultValue={tag}
            className="absolute right-10 top-0 focus:outline-none focus:ring-1 w-28"
          />
        </Tooltip>
        <Flex gap={2}>
          <Button
            size={"sm"}
            onClick={handleSubmit(async (d) => {
              const data = await updateSkill(id, d);
              if (data._id) {
                reset();
                refetch();
                setEdit(false);
                toast.success(`${title} updated Successfully`);
              }
            })}
          >
            Update
          </Button>
          <IconButton
            size={"sm"}
            icon={<CloseIcon w={3} />}
            onClick={() => {
              setEdit(false);
              reset();
            }}
          />
        </Flex>
      </Box>
    );
  }
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
        </div>
      )}
    </div>
  );
};

export default SkillsCard;
