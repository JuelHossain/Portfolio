import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import { createProject } from "../../../Hooks/Helper/Projects";
import useProjects from "../../../Hooks/useProjects";
import imgbb from "../../../utils/imgbb";
import ProjectModal from "../Helper/ProjectModal";
import ImageContent from "../Update/Helper/ImageContent";
import { PContainer } from "./../lib/Containers";
import TextInput from "./helper/TextInput";

const CreateProject = ({ onClose, isOpen }) => {
  const { refetch } = useProjects();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const submit = () => {
    handleSubmit(async (data) => {
      try {
        const image = data.screenshot?.[0];
        if (image) {
          const url = await imgbb(image);
          console.log(url);
          if (url) {
            const { _id } = await createProject({
              ...data,
              screenshot: url,
            });
            if (_id) {
              await refetch();
              reset();
              toast.success("New Project Created Successfully");
              onClose(true);
            }
          }
        } else {
          const { _id } = await createProject({
            ...data,
            screenshot: "",
          });
          if (_id) {
            await refetch();
            reset();
            toast.success("New Project Created Successfully");
            onClose(true);
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
      header={"Create A Project"}
      footer={"Create"}
      execute={submit}
      size={'4xl'}
    >
      <PContainer>
        <ImageContent create register={register} watch={watch} />
        <TextInput register={register} error={errors} />
        {isSubmitting && <Loading />}
      </PContainer>
    </ProjectModal>
  );
};

export default CreateProject;
