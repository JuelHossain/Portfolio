import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import imgbb from "../../../utils/imgbb";
import ProjectModal from "../Helper/ProjectModal";
import ImageContent from "../Update/Helper/ImageContent";
import useProjects from "./../../../Hooks/useProjects";
import { PContainer } from "./../lib/Containers";
import TextInput from "./helper/TextInput";

const CreateProject = ({ onClose, isOpen }) => {
  const { createProject } = useProjects();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();
  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);
  const submit = async (data) => {
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
        toast.success("New Project Created Successfully");
        onClose(true);
      }
    }
  };
  return (
    <ProjectModal
      onClose={onClose}
      isOpen={isOpen}
      reset={reset}
      header={"Create A Project"}
      footer={"Create"}
      execute={submit}
      handleSubmit={handleSubmit}
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
