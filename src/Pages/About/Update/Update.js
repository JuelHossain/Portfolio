import { Box } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { updateInfo } from "../../../Hooks/Helper/About";
import useInfo from "../../../Hooks/useInfo";
import ProjectModal from "../../Projects/Helper/ProjectModal";
import {
  DetailInput,
  DurationInput,
  InsNameInput,
  TextInput,
  TitleInput,
  WebInput,
} from "./lib/InfoInputs";
const Update = ({ id, isOpen, onClose }) => {
  const {
    info: { title, grade, duration, insName, text, web } = {},
    loading,
    refetch,
  } = useInfo(id);

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // update function
  const update = () => {
    handleSubmit(async (d) => {
      const { _id } = await updateInfo(id, d);
      if (_id) {
        reset();
        refetch();
        onClose(true);
        toast.success("Updated Successfully");
      }
    })();
  };
  return (
    <ProjectModal
      isOpen={isOpen}
      onClose={onClose}
      reset={reset}
      header={`Update ${title}`}
      footer={"Update Info"}
      execute={update}
      size={"2xl"}
    >
      <Box className="flex gap-3 flex-col md:flex-row">
        <Box className="flex-1 gap-3 flex flex-col">
          <TitleInput err={errors} reg={register} value={title} />
          <DetailInput err={errors} reg={register} value={grade} />
          <DurationInput err={errors} reg={register} value={duration} />
        </Box>
        <Box className="flex-1 gap-3 flex flex-col">
          <InsNameInput err={errors} reg={register} value={insName} />
          <TextInput err={errors} reg={register} value={text} />
          <WebInput err={errors} reg={register} value={web} />
        </Box>
      </Box>
    </ProjectModal>
  );
};

export default Update;
