import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import useProjects from "../../../Hooks/useProjects";
import imgbb from "../../../utils/imgbb";
import ProjectModal from "../Helper/ProjectModal";
import { PContainer } from "./../lib/Containers";
import ImageContent from "./Helper/ImageContent";
import TextContent from "./Helper/textContent";
export default function UpdateProject({ isOpen, onClose, id }) {
  const { project: { name, screenshot } = {}, updateProject } = useProjects(id);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();
  const submit = async (data) => {
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
        onClose(true);
        toast.success(`${name} Updated Successfully`);
      }
    }
  };
  return (
    <ProjectModal
      onClose={onClose}
      isOpen={isOpen}
      reset={reset}
      header={`Update ${name}`}
      footer={"Update"}
      execute={submit}
      handleSubmit={handleSubmit}
    >
      <PContainer h={"md:h-[420px]"}>
        <ImageContent id={id} register={register} watch={watch} />
        <TextContent id={id} register={register} />
        {isSubmitting && <Loading />}
      </PContainer>
    </ProjectModal>
  );
}
