import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import { updateProject } from "../../../Hooks/Helper/Projects";
import useProject from "../../../Hooks/useProject";
import imgbb from "../../../utils/imgbb";
import ProjectModal from "../Helper/ProjectModal";
import { PContainer } from "./../lib/Containers";
import ImageContent from "./Helper/ImageContent";
import TextContent from "./Helper/textContent";
export default function UpdateProject({ isOpen, onClose, id }) {
  const { project: { name, screenshot } = {}, refetch } = useProject(id);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const submit = () => {
    handleSubmit(async (data) => {
      try {
        await setTimeout(() => 1 + 2, 5000);
        const image = data.screenshot[0];
        if (image) {
          const imageURL = await imgbb(image);

          if (imageURL) {
            const { acknowledged } = await updateProject(id, {
              ...data,
              screenshot: imageURL,
            });
            if (acknowledged) {
              refetch();
              onClose(true);
              toast.success(`${name} Updated Successfully`);
            }
          }
        } else {
          const { acknowledged } = await updateProject(id, {
            ...data,
            screenshot,
          });
          if (acknowledged) {
            refetch();
            onClose(true);
            toast.success(`${name} Updated Successfully`);
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();
  };
  return (
    <ProjectModal
      onClose={onClose}
      isOpen={isOpen}
      reset={reset}
      header={`Update ${name}`}
      footer={"Update"}
      execute={submit}
    >
      <PContainer h={"md:h-[420px]"}>
        <ImageContent id={id} register={register} watch={watch} />
        <TextContent id={id} register={register} />
        {isSubmitting && <Loading />}
      </PContainer>
    </ProjectModal>
  );
}
