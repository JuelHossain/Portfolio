import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import { createInfo } from "../../../Hooks/Helper/About";
import ProjectModal from "../../Projects/Helper/ProjectModal";
import {
  DetailInput,
  DurationInput,
  InsNameInput,
  TextInput,
  TitleInput,
  WebInput,
} from "../Update/lib/InfoInputs";
const Create = ({ isOpen, onClose, cat, refetch }) => {
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // update function
  const create = () => {
    handleSubmit(async (d) => {
      const { _id } = await createInfo({ ...d, cat });
      console.log(_id);
      if (_id) {
        reset();
        refetch();
        onClose(true);
        toast.success("Created Successfully");
      }
    })();
  };

  return (
    <ProjectModal
      isOpen={isOpen}
      onClose={onClose}
      reset={reset}
      header={`Create a ${cat}`}
      footer={"Create Info"}
      execute={create}
      size={"2xl"}
    >
      {isSubmitting && <Loading />}
      <Box className="flex gap-3 flex-col md:flex-row">
        <Box className="flex-1 gap-3 flex flex-col">
          <TitleInput err={errors} reg={register} />
          <DetailInput err={errors} reg={register} />
          <DurationInput err={errors} reg={register} />
        </Box>
        <Box className="flex-1 gap-3 flex flex-col">
          <InsNameInput err={errors} reg={register} />
          <TextInput err={errors} reg={register} />
          <WebInput err={errors} reg={register} />
        </Box>
      </Box>
    </ProjectModal>
  );
};

export default Create;
