import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import { updateSkill } from "../../../Hooks/Helper/Skills";
import useSkill from "../../../Hooks/useSkill";
import { CardContainer } from "../lib/Containers";
import UpdateControl from "./lib/UpdateControl";
import { AboutInput, Tag, TitleInput } from "./lib/UpdateInputs";

const UpdateCard = ({ id, setEdit, update }) => {
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

  // submit functions
  const submit = async () => {
    await handleSubmit(async (d) => {
      try {
        const data = await updateSkill(id, d);
        if (data._id) {
          reset();
          update();
          refetch();
          setEdit(false);
          toast.success(`${title} updated Successfully`);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };

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
      <UpdateControl reset={reset} close={setEdit} exec={submit} name={"Update"} />
    </CardContainer>
  );
};

export default UpdateCard;
