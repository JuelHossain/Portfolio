import { CloseIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Flex,
  FormControl,
  IconButton,
  Input,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import {updateSkill } from "../../../Hooks/Helper/Skills";
import useSkill from "../../../Hooks/useSkill";
import { CardContainer } from "./lib/Containers";

const UpdateCard = ({ id, setEdit }) => {
  // skill
  const {
    skill: { title, about, tag } = {},
    skillLoading,
    refetch,
  } = useSkill(id);
    
  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors: err },
    reset,
  } = useForm();

  // loading state
  if (skillLoading) {
    return (
      <CardContainer>
        <Loading />
      </CardContainer>
    );
  }
  return (
    <CardContainer>
      <FormControl>
        <Tooltip
          isOpen={err?.title}
          label={err?.title?.message}
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
          isOpen={err?.about}
          label={err?.about?.message}
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
        isOpen={err?.tag}
        label={err?.tag?.message}
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
    </CardContainer>
  );
};

export default UpdateCard;
