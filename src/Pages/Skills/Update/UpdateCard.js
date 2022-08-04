import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import { updateSkill } from "../../../Hooks/Helper/Skills";
import useSkill from "../../../Hooks/useSkill";
import { CardContainer } from "../lib/Containers";
import { AboutInput, Tag, TitleInput } from "./lib/UpdateInputs";

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
      <TitleInput err={err} reg={register} value={title} />
      <AboutInput err={err} reg={register} value={about} />
      <Tag err={err} reg={register} value={tag} />
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
